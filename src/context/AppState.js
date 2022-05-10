import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { CHANGE_FILE, CHANGE_THEME, SET_BREAKPOINT, DELETE_FILE } from './_actions';

/** 
 * @param  props will be all the child components in the app
*/ 
function AppState(props) {
    const initStates = {
        theme: 'dark',
        currentFile: 'README.md',
        minWidth768: null,
        deletePopup: false
    }

    const [ state, dispatch ] = useReducer(AppReducer, initStates);

    const changeTheme = theme => {
        dispatch({
            type: CHANGE_THEME,
            payload: theme
        })
    }
    const changeFile = currentFile => {
        dispatch({
            type: CHANGE_FILE,
            payload: currentFile
        })
    }

    const isMinWidth768 = bool => {
        dispatch({
            type: SET_BREAKPOINT,
            payload: bool
        })
    }

    const setDeletePopup = bool => {
        dispatch({
            type: DELETE_FILE,
            payload: bool
        })
    }
    
  return (
    <AppContext.Provider value={{
        theme: state.theme,
        currentFile: state.currentFile,
        minWidth768: state.minWidth768,
        deletePopup: state.deletePopup,
        changeTheme: changeTheme,
        isMinWidth768: isMinWidth768,
        changeFile: changeFile,
        setDeletePopup: setDeletePopup
    }}>
        { props.children }
    </AppContext.Provider>
  )
}

export default AppState;