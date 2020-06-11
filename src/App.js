import React from 'react'
import Header from './container/components/Header'
import {renderRoutes} from 'react-router-config'

// 同构: 一套React代码,在服务器端执行一次,在客户端再执行一次
// 因为renderToString只能负责到页面的基础内容,事件相关的无能为力

const App = (props) => {
  return (
    <div>
      <Header/>
      {renderRoutes(props.route.routes)}
    </div>
  )
}
export default App