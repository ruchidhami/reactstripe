import * as types from './actionTypes';
import StripeApi from '../services/stripeApi';
import Constant from '../utilities/constant'
import { objectsToString } from '../utilities/method'

const apiResource = '/products';

let apiParams = {
  limit: Constant.API_LIST_LIMIT,
  ending_before: '',
  starting_after: ''
};

const stripeApi =  new StripeApi()

export const listProduct = (products) => {
  return {
    type: types.LIST_PRODUCT,
    payload: products
  }
}

export function listProductFromApi(params) {
  const strParam = objectsToString(apiParams, [params]);
  const path = `${apiResource}?${strParam}`
  return function(dispatch, getState) {
    return stripeApi.get(path)
      .then(products => {
          dispatch(listProduct(products))
      })
      .catch(err => alert(err))
  }
}

export function gotoNextPage() {
  return function(dispatch, getState) {
    const products = getState().products
    const params = {
      limit: Constant.API_LIST_LIMIT
    }
    if(products.has_more) {
      params['starting_after'] = products.ending_before
      dispatch(listProductFromApi(params))
    }
    else if(!products.ending_before){
      dispatch(listProductFromApi(params))
    }
  }
}

export function gotoPreviousPage() {
  return function(dispatch, getState) {
    const ending_before = getState().products.starting_after
    let params = {
      limit: Constant.API_LIST_LIMIT
    }
    if(ending_before) {
      params['ending_before'] = ending_before
      dispatch(listProductFromApi(params))
    }
  }
}