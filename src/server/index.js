import express from 'express'
import Routes from '../Routes'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import React from 'react'
import {render} from './utils'

// 虚拟DOM是真实DOM的一个js对象映射
// 在客户端可以变成 真实DOM
// 在服务端可以变成 字符串

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(3001, () => {
  console.log('Listening on Port 3001')
})