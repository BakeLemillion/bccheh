import { combineReducers, configureStore } from "@reduxjs/toolkit";
import routeSlice from "./reducers/routes"

const rootReducer = combineReducers({
    routesItems: routeSlice
})

export const store = configureStore({
    reducer: rootReducer
})