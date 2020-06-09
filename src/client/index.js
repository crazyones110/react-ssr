import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../container/Home'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'

const App = () => {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  )
}

// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<App />, document.getElementById('root'))
