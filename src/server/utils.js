import Routes from '../Routes'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

export const render = req => {
  // 服务器端React代码就不在浏览器上跑,怎么可能知道路由呢
  // 所以需要在location中传进去
  const reducer = (state = {name: 'fan'}, action) => {
    return state
  }
  
  const store = createStore(reducer, applyMiddleware(thunk))
  const content = renderToString(
    <Provider store={store}>
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
