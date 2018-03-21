import * as types from './actionTypes';
import { push } from 'react-router-redux'

export function openSidebar() {
  const dashboard = {isSidebarOpen:  true};
  return {type: types.OPEN_SIDEBAR, payload: dashboard};
}

export function closeSidebar() {
  const dashboard = {isSidebarOpen:  false};
  return {type: types.CLOSE_SIDEBAR, payload: dashboard};
}

export function naviagateTo(path) {
  return (dispatch) => {
    dispatch(push(path))
    dispatch(closeSidebar())
  };
}