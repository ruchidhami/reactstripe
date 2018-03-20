import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dashboardReducer(state = initialState.dashboard, action) {
    switch(action.type) {
      case types.OPEN_SIDEBAR:
        return Object.assign({}, state, action.payload);
      case types.CLOSE_SIDEBAR:
        return Object.assign({}, state, action.payload);
      default: 
        return state;
    }
}
  