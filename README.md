### Webpack4 的一些基础配置

* 控制Stats 打印出时间
*  区别不同环境
    不同环境对SourceMap，
* 用来测试TreeShaking
    Webpack删除一些实际项目中，没有调用的代码。注意PollyFill
* 用来测试CodeSplit
    利用HTTP的缓存，讲经常改变的Mainfest（runtime），不改变的Vendor，Common代码提出来，浏览器可以持久缓存提交性能。
* 测试HappyPack
    打包速度较慢，利用多线程，将一些Loader的处理并行化。

* 测试Dll
    将Vendor的bundle报缓存，第二次不用编译。
