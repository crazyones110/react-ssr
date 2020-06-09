import Routes from '../Routes'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import React from 'react'

export const render = req => {
  // 服务器端React代码就不在浏览器上跑,怎么可能知道路由呢
  // 所以需要在location中传进去
  const content = renderToString(
    <StaticRouter context={{}} location={req.path}>
      {Routes}
    </StaticRouter>,
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
