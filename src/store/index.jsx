import { get_token, set_token, clearLocalStorage } from "../utils/user.jsx";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    token: get_token() ?? '',
    axiosPromiseCancel: [],
    isSubAppLoading: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        SET_TOKEN(state, action){
            state.token = action.payload;
            set_token(action.payload);
        },

        LOGOUT(state){
            state.token = '';
            clearLocalStorage();
        },

        SET_AXIOS_PROMISE_CANCEL(state, action){
            state.axiosPromiseCancel = action.payload;
        },

        SET_SUB_APP_LOADING(state, action){
            state.isSubAppLoading = action.payload;
        }
    }
})

export const { SET_TOKEN,
               LOGOUT, 
               ADD_AXIOS_PROMISE_CANCEL, 
               SET_AXIOS_PROMISE_CANCEL,
               SET_SUB_APP_LOADING, 
            } = appSlice.actions;

const store = configureStore({
    reducer: {
      app: appSlice.reducer,
    },
});

export default  store;