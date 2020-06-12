import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'

// 同构: 一套React代码,在服务器端执行一次,在客户端再执行一次
// 因为renderToString只能负责到页面的基础内容,事件相关的无能为力

const Translation = props => {
  useEffect(() => {
    if (!props.list.length) {
      props.getTranslationList()
    }
  }, [])
  const getList = () => {
    console.log(props.list, 'list')
    console.log(props.login, 'login')
    return props.login ? (
      props.list.map(item => {
        return <div key={item.id}>{item.title}</div>
      })
    ) : (
      <Redirect to="/" />
    )
  }
  return <div>
    {getList()}
  </div>
}

Translation.loadData = store => {
  return store.dispatch(getTranslationList())
}

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login,
})
const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Translation)
