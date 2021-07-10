import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slice/register'
import loaderReducer from './slice/loader'
import loginReducer from './slice/login'

export const store = configureStore({
    reducer: {
        register: registerReducer,
        loader: loaderReducer,
        login: loginReducer
    },
})
