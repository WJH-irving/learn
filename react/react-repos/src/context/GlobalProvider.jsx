import {
    createContext,
    useReducer,
} from 'react'
import{
    repoReducer
}from '@/reducers/repoReducer'

export const Globalcontext = createContext();
const initialState ={
        repos:[],
        loading:false,
        error:null,
    }
export const GlobalProvider = ({ children }) => {
    
    const [state,dispatch] = useReducer(repoReducer,initialState);

    return (
        // state 应用状态  dispatch 应用状态更新函数
        <Globalcontext.Provider value={{state,dispatch}}>
            {children}
        </Globalcontext.Provider>
    )
}
