import {
    useEffect
} from 'react'
import{
    useParams
}from 'react-router-dom'
const UserProfile = () =>{
    const params = useParams()    
    useEffect(()=>{

    const {id} =  useParams();
        console.log(window.location);
    },[])
    return(
        <>
            
            <h1>UserProfile</h1>
        </>
    )
}
export default UserProfile