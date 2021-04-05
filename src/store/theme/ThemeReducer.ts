import {TOGGLE_THEME} from '../models/actions';

import {Theme} from '../models/theme';
import {Action, Reducer} from 'redux';

const initialState: Theme = {
    theme: 'light'
};

export const themeReducer: Reducer<Theme, Action> = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_THEME:
            if(state.theme === "light") {
                return {
                    theme: "dark"
                }
            } else {
                return {
                    theme: "light"
                }
            }
        default: 
            return state;
    }
}