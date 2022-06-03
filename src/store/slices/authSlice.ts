import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    user:null,
    token_id:''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn:(state,action)=>{
                state.user = action.payload.result.user
                state.token_id = action.payload.result.token_id
                localStorage.setItem('token',action.payload.result.token_id)
        },
        signOut:(state)=>{
            state.user = null
            state.token_id =''
            localStorage.removeItem('token')
        }
    }
})

export const {signIn,signOut} = authSlice.actions

export default authSlice.reducer