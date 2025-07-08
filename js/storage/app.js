// es6 模块化
// mjs 后缀使用es6 模块化
//模块化时语言的能力
// node 默认不支持es6 模块化
// node 最新版本支持了
// node 准备根require commmonjs say goodbye
// es6 module 更先进 mjs
import http from 'http';

http.createServer((req,res)=>{
    res.end('hello http server');
})
server.listen(1234);