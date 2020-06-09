import React from 'react'
import Header from '../components/Header'

// 同构: 一套React代码,在服务器端执行一次,在客户端再执行一次
// 因为renderToString只能负责到页面的基础内容,事件相关的无能为力

const Home = () => {
  return (
    <div>
      <Header/>
      <div>This is React SSR</div>
      <button onClick={()=>{alert('click')}}>click</button>
    </div>
  )
}

// module.exports = {
//   default: Home
// }
export default Home