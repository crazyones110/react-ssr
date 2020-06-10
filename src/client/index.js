import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../Routes'
import getStore from '../store'
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={getStore()}>
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
