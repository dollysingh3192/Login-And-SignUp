import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: ''
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setRegisterMessage: (state, action) => {
            state.message = action.payload
        }
    },
})

export const { setRegisterMessage } = registerSlice.actions

export default registerSlice.reducer
