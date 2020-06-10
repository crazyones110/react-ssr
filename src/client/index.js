import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../Routes'
import {getClientStore} from '../store'
import {Provider} from 'react-redux'

// 这里服务器端已经注水了, 客户端的脱水
const store = getClientStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
        {routes.map(route => (
          <Route {...route}/>
        ))}
        </>
      </BrowserRouter>
    </Provider>
  )
}

// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<App />, document.getElementById('root'))
