import { CHANGE_FILE, CHANGE_THEME, SET_BREAKPOINT, DELETE_FILE } from './_actions';

/**
 * 
 * @param {*} state the current states of the app
 * @param {*} action actions from dispatch function in AppState.js
 * @returns live state changes to context
 */
function AppReducer(state, action) {
  switch(action.type) {
    case(CHANGE_FILE):
      return({
        ...state,
        currentFile: action.payload
      });
    case(CHANGE_THEME):
      return({
        ...state,
        theme: action.payload
      })
    case(DELETE_FILE):
    return({
      ...state,
      deletePopup: action.payload
    })
    case(SET_BREAKPOINT):
      return({
        ...state,
        minWidth768: action.payload
      })
    default: 
      return state;
  }
}

export default AppReducer;