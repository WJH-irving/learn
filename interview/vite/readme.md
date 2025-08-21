# 工程化

- 哪些问题？ 工程一揽子方案  
    - web server 5173或者其他端口 http 模块？express 框架 
        index.html 首页 
    - tsx -> jsx -> babel 转为 js
    - styl -> css 文件 
    ...
    基础，后方工作 

- 怎么介绍vite  是一个工程化工具 
    - 兼容性问题
        IE 11 以下
        <script type="module" src="/src/main.jsx"></script>
    VITE是 一个基于原生ES Module 的开发服务器(用Webpack,主要是因为浏览器很多还不支持esm模块化) 
    对 import 解析  通过按需编译实现极速冷启动 (快) 与 热更新的新一代前端构建工具。
    - 快？
        - 基于原生ES模块，不需要打包所有文件，按需加载


    main.jsx 入口文件  ，模块的依赖 
    main.jsx -> App.jsx -> App.css + react + components + router + api +store
    工程化需要整理这些模块之间的依赖关系链

- webpack 
    由于要支持老旧浏览器，不使用esm，要打包
    a->b->c->d
    不用模块化 
    d 编译js 最上面
    c 编译 放到d下面
    b 编译 放到c下面
    a 编译 放到b下面
    最后一起打包成一个文件 

## webpack 和 vite 的区别
webpack
- index.html 没有type="module" 怕浏览器不支持esm
    整理依赖关系，打包文件，慢 
- 适合大型项目,丰富的配置 
    - entry , output 这是核心
    - plugins
        html-webpack-plugin html template 在哪？
    - devServer
        http server 细节 
    web bundler 一切静态资源皆可打包 
    vite 快，不需要打包，但是有兼容性问题，生态、定制性不如webpack
    webpack 打包，慢一点，但是兼容性好，生态丰富，
    可为大型项目定制，有很长时间的业务验证
    
