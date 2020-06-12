import { CHANGE_LIST } from './constants'

const changeList = list => ({
  type: CHANGE_LIST,
  list,
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json?secret=PP87ANTIPIRATE').then(res => {
      const {success, data: translations = []} = res.data
      console.log('translations', translations)
      dispatch(changeList(translations))
    })
  }
}
