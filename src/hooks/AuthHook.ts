import { useMutation } from "react-query";
import {GET,POST,DELAY} from '../api/index'
import { useAppDispatch } from "../store/store";
import { signIn } from "../store/slices/authSlice";

export const useSignIn:any=()=>{
    const dispatch = useAppDispatch()
    return useMutation('auth',async(data:object)=>await POST('https://personal-project-api.herokuapp.com/api/v1/psnp/auth/login',data),{
        onSuccess:(data)=>{
            dispatch(signIn(data))
        },
        onError:(error)=>{
            console.log('error',error)
        }
    })
}