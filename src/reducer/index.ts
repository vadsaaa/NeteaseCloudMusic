import { reducer as common } from './common'
import { reducer as discovery } from './discovery'
import { reducer as friends } from './friends'
import { reducer as music } from './music'
import { reducer as account } from './account'
import { combineReducers } from 'redux'

export default combineReducers({
  common,
  account,
  discovery,
  friends,
  music
})
