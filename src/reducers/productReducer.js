import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const listProduct = (state=initialState.products, action) => {
    if(action.type === types.LIST_PRODUCT) {
        return action.payload
    }
    else {
        return state
    }
}