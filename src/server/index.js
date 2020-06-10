import express from 'express'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import React from 'react'
import {render} from './utils'
import {getStore} from '../store'
import routes from '../Routes'
import { matchRoutes } from 'react-router-config'

// 虚拟DOM是真实DOM的一个js对象映射
// 在客户端可以变成 真实DOM
// 在服务端可以变成 字符串

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = getStore()

  const matchedRoutes = matchRoutes(routes, req.path)

  // 让matchRoutes里面所有的组件,对应的loadData执行一次
  const promises = []

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
})

app.listen(3001, () => {
  console.log('Listening on Port 3001')
})