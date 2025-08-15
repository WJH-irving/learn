import {
    create
} from 'zustand';
import { getDetail } from '@/api/detail';

const useDetailStore = create((set) => ({
    detail: {
        title:'',
        desc:'',
        images:[
            {
                alt:'',
                url:'https://img0.baidu.com/it/u=543771587,2344057767&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1084',
            }
        ],
        price:''
    },
    loading: false,
    setDetail: async (id) =>{
        set({loading:true})
        const res = await getDetail(id);
        set({
            loading:false,
            detail: res.data 
        });
    }
}));

export default useDetailStore;
