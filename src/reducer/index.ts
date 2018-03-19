import { reducer as common } from './common'
import { reducer as discovery } from './discovery'
import { reducer as friends } from './friends'
import { reducer as music } from './music'
import { reducer as account } from './account'
import { reducer as video } from './video'
import { combineReducers } from 'redux'

export default combineReducers({
  common,
  account,
  discovery,
  friends,
  music,
  video
})

export const actionsTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_END: 'FETCH_END',
  USER_LOGIN: 'USER_LOGIN',
  USER_REGISTER: 'USER_REGISTER',
  RESPONSE_USER_INFO: 'RESPONSE_USER_INFO',
  SET_MESSAGE: 'SET_MESSAGE',
  USER_AUTH: 'USER_AUTH'
}
