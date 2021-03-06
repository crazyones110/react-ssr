import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store'
import { reducer as headerReducer } from '../container/components/Header/store'
import { reducer as translationReducer } from '../container/Translation/store'
import { instance as clientAxios } from '../client/request'
import { createInstance as serverAxios } from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
})

export const getStore = (req) => {
  // 改变服务器端store的内容, 那么就一定要使用serverAxios
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios(req))),
  )
}
export const getClientStore = () => {
  // 改变服务器端store的内容, 那么就一定要使用clientAxios
  const defaultState = window.context.state
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios)),
  )
}
