# vite
>手写一个vite；通过npm link，链接到全局中

## vite
例如：
```
import {crateApp} from 'vue';
import App from './App.vue'
```
会被vite解析为：
```
import {crateApp} from '/@module/vue';
import App from '/src/App.vue'
```

## source
>koa是洋葱模型，所以插件执行顺序为x，x-1，，，2，1；
1. 创建koa服务，定义context={app，root(运行目录的路径)}，定义plugings
2. plugins
   1. 插件1：静态文件服务插件，让koa读取项目目录
   2. 插件2：解析import，获取文件的流，读取为字符串后重改import的内容（/@module/vue），然后返回响应
   3. 插件3：解析重写后的import的内容：获取vue等模块的模块路径（vue、runtime-core、runtime-dom、shared、reactivity等模块），再根据import的内容，读取模块的路径，然后返回响应
   4. 插件4：前端代码用到process.env，koa通过给html中注入script脚本，将process.env注入到window上
   5. 插件5：解析vue文件，通过compiler解析vue文件，将vue导出的内容，修改为变量，并导出。