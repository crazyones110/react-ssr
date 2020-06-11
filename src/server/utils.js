import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import {renderRoutes} from 'react-router-config'

export const render = (store, routes, req) => {
  // 服务器端React代码就不在浏览器上跑,怎么可能知道路由呢
  // 所以需要在location中传进去
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <>
          {renderRoutes(routes)}
        </>
      </StaticRouter>
    </Provider>,
  )
  return `
      <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>
    `
}
