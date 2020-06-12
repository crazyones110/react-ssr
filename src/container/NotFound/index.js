import React from 'react'

const NotFound = props => {
  props.staticContext && (props.staticContext.notFound = true)
  
  return <h1>404, sorry, page not found</h1>
}
export default NotFound
