import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import routes from '../Routes'
import {renderRoutes} from 'react-router-config'
import {getClientStore} from '../store'
import {Provider} from 'react-redux'

// 这里服务器端已经注水了, 客户端的脱水
const store = getClientStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          {renderRoutes(routes)}
        </>
      </BrowserRouter>
    </Provider>
  )
}

// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<App />, document.getElementById('root'))
