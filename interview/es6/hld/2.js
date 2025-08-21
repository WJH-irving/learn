// 红绿灯 第一种执行方案
const sleep = ms => new Promise(r => setTimeout(r,ms));

async function trafficLight(){
    const seq =[
        {
            color:'red',
            time:1000
        },
        {
            color:'yellow',
            time:3000
        },
        {
            color:'green',
            time:2000
        }
    ]
    
    while(true){
        for(const {color,time}of seq){
            console.log(color);
            await sleep(time);
        }
    }
}
trafficLight();
