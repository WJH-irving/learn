import { 
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'
import './App.css'
  
// function App() {
//   // 响应式对象
//   const boxRef = useRef(null);
//   console.log(boxRef.current,boxRef);

//   useEffect(()=>{
//     console.log('useEffect height',boxRef.current.offsetHeight);
//   },[])

//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect height',boxRef.current.offsetHeight);
//   },[])

//   return (
//     <>
//      <div ref={boxRef} style = {{height:100}}></div>
//     </>
//   )
// }

// function App(){
//   const [content,setContent]=useState('午后的旧街像被时间遗忘的折页，阳光从斑驳的梧桐叶间漏下，碎成一地晃动的铜钱。修表匠推开吱呀作响的木门，柜台玻璃下躺着停摆的表，秒针永远指向一九八三年的某个十点零七分。隔壁豆腐坊的蒸汽白茫茫地涌出来，混着栀子花的香气，像一封被揉皱又展开的旧信。穿蓝布衫的老太太坐在门槛上剥毛豆，翠绿的壳扔进竹篮，发出轻而脆的声响。远处传来收废品的吆喝，拖着长长的尾音，惊起电线上的麻雀，扑棱棱飞向灰扑扑的屋顶。整个世界仿佛被泡在一杯放凉的茉莉花茶里，微微发苦，却仍有回甘。');
//   const ref = useRef();
//   // useEffect(()=>{
//   //   setContent('凌晨三点，便利店的灯像深海里唯一睁着的眼睛。冰柜嗡嗡作响，瓶壁凝着水珠，像谁来不及说完的话。穿拖鞋的女孩来买牛奶，睡衣外胡乱套着牛仔外套，扫码时手腕露出半截新割的纹身——一只缺了尾巴的燕子。店员打着哈欠，把热腾腾的关东煮递过去，雾气爬上玻璃，模糊了门外正在下雨的街道。远处高楼还剩几扇亮窗，像被遗落的星。女孩蹲在货架边喝第一口汤，突然想起十年前那个说好一起看日出的男孩，如今连姓名都蒸发成了汽。')
//   //   ref.current.style.height='200px';
//   // },[])
//   useLayoutEffect(()=>{
//     // 阻塞渲染 同步的感觉
//     setContent('凌晨三点，便利店的灯像深海里唯一睁着的眼睛。冰柜嗡嗡作响，瓶壁凝着水珠，像谁来不及说完的话。穿拖鞋的女孩来买牛奶，睡衣外胡乱套着牛仔外套，扫码时手腕露出半截新割的纹身——一只缺了尾巴的燕子。店员打着哈欠，把热腾腾的关东煮递过去，雾气爬上玻璃，模糊了门外正在下雨的街道。远处高楼还剩几扇亮窗，像被遗落的星。女孩蹲在货架边喝第一口汤，突然想起十年前那个说好一起看日出的男孩，如今连姓名都蒸发成了汽。')
//     ref.current.style.height='200px';
//   },[])
//   return (
//     <>
//      <div ref={ref} style = {{height:'50px',background:'lightblue'}}>{content}</div>
//     </>
//   )
// }

// 弹窗
function Modal(){
  const ref =useRef();// 响应式对象
  useLayoutEffect(()=>{
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight - height)/2}px`
  },[])
  
  return <div ref={ref} style={{ position:'absolute',background:'red', width:'200px'}}>我是弹窗 </div>
}
function App(){

  return (


    <>
      <Modal />

    </>
  )
}

export default App
