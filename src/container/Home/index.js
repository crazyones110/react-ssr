import React, { useEffect } from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

// 同构: 一套React代码,在服务器端执行一次,在客户端再执行一次
// 因为renderToString只能负责到页面的基础内容,事件相关的无能为力

const Home = props => {
  useEffect(() => {
    if (!props.list.length) {
      props.getHomeList(false)
    }
  }, [])
  return (
    <div>
      <Header />
      {props.list.map(item => {
        return <div key={item.id}>{item.title}</div>
      })}
      <button
        onClick={() => {
          alert('click')
        }}
      >
        click
      </button>
    </div>
  )
}

Home.loadData = (store) => {
  // 这个函数,负责在服务端渲染之前,把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList(true))
}

const mapStateToProps = state => ({
  list: state.home.newsList,
})
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
