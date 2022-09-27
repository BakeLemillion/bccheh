import { createSlice } from "@reduxjs/toolkit";
import {stepperCompany} from "../../configs/routes"


const routeSlice = createSlice({
    name: "routesReducer",
    initialState:{
        routes: stepperCompany,
        active: 0,
        height: 0,
        page: "/" 
    },
    reducers: {
        makeActive(state) {
            if(state.active < (state.routes.length) && state.active >= 0 ) {
                state.height = 100/(state.routes.length - 1) * state.active
            } 

            state.routes = state.routes.map((obj) => {
                if(obj.id > state.active) {
                    return {...obj, pregress: 'todo'};
                }

                if(obj.id < state.active) {
                    return {...obj, pregress: 'done'};
                }

                if (obj.id === state.active) {
                  return {...obj, pregress: 'active'};
                }
                return obj;
            })
        }, 
        nextStep(state) {
            state.active = state.active + 1
        },
        actionActivePage(state, action) {
            if(action.payload === "/") {
                state.active = 0
            }
            if(action.payload === "/information") {
                state.active = 1
            }
            if(action.payload === "/accandtransfers") {
                state.active = 2
            }
            if(action.payload === "/signing") {
                state.active = 3
            }
            if(action.payload === "/success") {
                state.active = 4
            }
        }
    }
})

export default routeSlice.reducer
export const {makeActive, nextStep, actionActivePage} = routeSlice.actions