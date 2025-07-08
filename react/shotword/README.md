# AI 单词拍照移动应用 

- mobile App
-  css reset
- 组件划分思维
  - 功能逻辑划分 图片上传
  - App 根组件
  - PictureCard 子组件
  - 组件通信
    - 父组件负责持有状态
    - 父组件api 请求
    - 子组件消费数据
    - state（私有状态）、 props（父组件传递的数据状态） 都是数据
    - 子组件修改状态，通过回调函数通知父组件，父组件修改状态
- 项目目录结构
  - src/ 开发目录
  - components/ 组件目录
    - 组件就是一个文件夹
      - jsx
      - css

  - public/ 静态资源目录
  - libs/ 工具包
  - env