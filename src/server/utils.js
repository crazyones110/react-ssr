import Routes from '../Routes'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import React from 'react'
import {Provider} from 'react-redux'
import getStore from '../store'

export const render = req => {
  // 服务器端React代码就不在浏览器上跑,怎么可能知道路由呢
  // 所以需要在location中传进去
  const store = getStore()

  // 如果在这里,能拿到异步数据,并填充到store中
  // store里面到底填充什么,我们需要结合当前用户请求地址和路由进行判断
  // 如果用户访问 / 路径,我们就拿home组件的异步数据
  // 如果访问 /login 路径,我们就拿login组件的异步数据
  

  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter context={{}} location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  )
  return `
    <html>
    <head>
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src='/index.js'></script>
    </body>
  </html>
  `
}
