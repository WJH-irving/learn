
import {
    useState,
    useEffect,
    useContext
} from 'react'

import{
    Globalcontext
} from '@/context/GlobalProvider'
import{
    getRepos
}from '@/api/repos'
// 将响应式业务逻辑抽离到hooks中
export const useRepos = (id) =>{    
    const {state,dispatch} = useContext(Globalcontext)
    useEffect(()=>{
        console.log('-------');
        dispatch({
            type:'FETCH_START',
        });
        (async () =>{
            try {
                const res = await getRepos(id);
                // console.log(res);
                dispatch({
                    type:'FETCH_SUCCESS',
                    payload:res.data,
                })
            } catch (error) {
                dispatch({
                    type:'FETCH_ERROR',
                    payload:error.message
                })
            }
        })()
    },[])
    return state;
}