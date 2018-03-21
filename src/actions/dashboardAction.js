import * as types from './actionTypes';

export function openSidebar() {
  const dashboard = {isSidebarOpen:  true};
  return {type: types.OPEN_SIDEBAR, payload: dashboard};
}

export function closeSidebar() {
  const dashboard = {isSidebarOpen:  false};
  return {type: types.CLOSE_SIDEBAR, payload: dashboard};
}