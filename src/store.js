import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './redux/reducers/rootReducer'

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {}
      })
  })

export default store
