import {
    useParams
} from 'react-router-dom'
import {
    Skeleton
} from 'react-vant'
import {
    useEffect
} from 'react'
import useDetailStore from '@/store/useDetailStore'
import { useTitle } from '@/hooks/useTitle'
import styles from './detail.module.css';
import {
    ArrowLeft,
    Cart 
} from '@react-vant/icons'
import {
    Swiper,
    Image
} from 'react-vant';


const Detail = () => {
    const { id } = useParams();
    const { loading, detail, setDetail } = useDetailStore();
    
    useEffect(() => {
        setDetail();
    }, [])
    useEffect(()=>{
        useTitle(detail.title)
    },[detail])
    if (loading) return <Skeleton />
    return (
        <>
            <nav className={StyleSheet.nav}>
                <ArrowLeft fontSize={36}/>
                <Cart fontSize={36} />
            </nav>
            {/* 幻灯片 */}
            <div className={styles.container}>
                <Swiper>
                    {
                        detail.images.map((item,index)=>(
                            <Swiper.Item key={index}> 
                                <Image lazyload src={item.url}/>
                            </Swiper.Item>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
export default Detail;