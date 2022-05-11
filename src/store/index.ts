import { applyMiddleware, combineReducers, AnyAction } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger, logger } from "redux-logger"
import thunkMiddleware, { ThunkDispatch } from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth"
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { Dispatch } from "react";


const reducer = combineReducers({
    authReducer: authReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// type AppDispatch = typeof store.dispatch
export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<RootState, null, AnyAction> 

// will use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = configureStore({
    reducer,
    middleware: [thunkMiddleware, logger] as const
})


