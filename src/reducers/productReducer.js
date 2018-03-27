import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const listProduct = (state=initialState.products, action) => {
    if(action.type === types.LIST_PRODUCT) {
      const payload = action.payload
      let products = { data: payload.data, has_more: payload.has_more}
      const data = products.data
      if(data.length) {
        products['starting_id'] = data[0].id
        products['ending_id'] = data[data.length-1].id
      }
      else {
        products['starting_id'] = ''
        products['ending_id'] = ''
      }
      return Object.assign({}, state, products)
    }
    else {
      return state
    }
}