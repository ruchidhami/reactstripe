import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import dashboardReducer from './dashboardReducer'
import { listProduct } from './productReducer'

const reducer = combineReducers({
  router: routerReducer,
  dashboard: dashboardReducer,
  products: listProduct
})

export default reducer