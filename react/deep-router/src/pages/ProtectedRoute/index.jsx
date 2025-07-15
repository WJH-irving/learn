import {
    Navigate,
    useLocation
} from 'react-router-dom'
// 鉴权组件
const ProtectedRoute = (props)=>{
    // console.log(props);
    // 并非子组件 
    // props的children属性 提升定制性
    const { children } = props;
    const {pathname} = useLocation();// 获取当前路径

    // console.log(location);
    const isLogin= localStorage.getItem('isLogin') ==='true';
    // console.log(isLogin);
    if(!isLogin){
        return <Navigate to="/login" state={{from:pathname}}/>
    }
    return(
        // <div>
        //     <h1>ProtectedRoute</h1>
        //     {children}
        // </div>
        children
    )
}
    
export default ProtectedRoute