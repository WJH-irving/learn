import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/user'
const NavBar = () => {
    const { isLogin, user, logout } = useUserStore();
    console.log(isLogin, user, '////////')
    return (
        <>
            <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
                <Link to="/">首页</Link>  
                <Link to="/pay">支付</Link>
                <br />
                {
                    isLogin? (
                        <>
                        <span>欢迎：{user.username}</span>
                        <button onClick={logout}>Logout</button>
                        </>
                    ):(
                        <Link to="/login">登录</Link>
                    )
                }
            </nav>

        </>
    )
}
export default NavBar;