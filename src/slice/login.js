import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginMessage: (state, action) => {
            state.message = action.payload
        }
    },
})

export const { setLoginMessage } = loginSlice.actions

export default loginSlice.reducer
