// 来自store
import {
    useCountStore
}from'../../store/count'

const Counter = ()=>{
    const {
        count,
        increment,
        decrement
    } = useCountStore()
    return (
        <>
            Couterc{count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
export default Counter