import * as types from './actionTypes';
import StripeApi from '../services/stripeApi';

const apiResource = '/products';
const stripeApi =  new StripeApi()

export const listProduct = (products) => {
  return {
    type: types.LIST_PRODUCT,
    payload: products
  }
}

export function listProductFromApi() {
  return function(dispatch) {
    return stripeApi.get(apiResource)
      .then(products => {
          dispatch(listProduct(products.data))
      })
      .catch(err => alert(err))
  }
}