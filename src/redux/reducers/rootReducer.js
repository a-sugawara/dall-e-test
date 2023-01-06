import { combineReducers } from 'redux'
import typeReducer from './selectionReducer'
import inputReducer from './inputReducers'
import menuReducer from './menuReducer'
import stackReducer from './stackReducer'

export const rootReducer = combineReducers({
  input: inputReducer,
  menu: menuReducer,
  selection: typeReducer,
  stack: stackReducer
})
