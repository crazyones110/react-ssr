import { CHANGE_LIST } from './constants'
import { instance as clientAxios } from '../../../client/request'
import { instance as serverAxios } from '../../../server/request'

const changeList = list => ({
  type: CHANGE_LIST,
  list,
})

export const getHomeList = server => {
  const request = server ? serverAxios : clientAxios
  return dispatch => {
    return request.get('/api/news.json?secret=PP87ANTIPIRATE').then(res => {
      const list = res.data.data
      dispatch(changeList(list))
    })
  }
}
