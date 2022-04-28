import { applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger, logger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth"

const reducer = combineReducers({
    authReducer,
})

const store = configureStore({
    reducer,
    middleware: [thunkMiddleware, logger] as const
})

export default store
