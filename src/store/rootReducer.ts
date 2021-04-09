import {combineReducers} from 'redux'
import exampleReducer from './example/reducer/exampleReducer'

const rootReducer = combineReducers({
    example: exampleReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
