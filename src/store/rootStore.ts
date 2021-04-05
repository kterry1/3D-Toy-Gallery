import {createStore, combineReducers} from 'redux';
import {themeReducer} from './theme/ThemeReducer';


export const rootReducer = combineReducers({themeReducer})
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer)