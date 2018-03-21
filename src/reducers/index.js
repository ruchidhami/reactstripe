import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import dashboardReducer from './dashboardReducer'

const reducer = combineReducers({
  router: routerReducer,
  dashboard: dashboardReducer
})

export default reducer;
