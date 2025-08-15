# 居中

- 听清所需要的是什么居中
    - 水平垂直
- 方式不是关键， 区别和优劣
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height padding 
    - 固定宽高块级盒子水平垂直居中 
        1. absolute + margin 负值  
            缺点：需要知道盒子的宽高 
        2. absolute + margin auto (重要)  left top 都设置为 0

        3. absolute + calc (css calc 计算函数) left: calc(50% - 宽度的一半)
            缺点：性能差，很少用 


    - 不固定宽高块级盒子水平垂直居中  
        1. absolute + transform 相对自身大小的百分比
        2. line-height:initial; + vertical-align:middle;  这个盒子里面放的是文字，要求这个文字水平垂直居中时使用
        3. writing-mode: vertical-lr;  文字垂直显示
        4. table-cell  display: table-cell;
        5. flex 布局
        6. grid 布局






    - 