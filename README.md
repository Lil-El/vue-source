# 双向绑定

Observe：**ob**=this;dep = new Dep
Dep: subs:[Watchers...]
Watcher:update,run,get 方法等
初始化 data 时调用 observe(data)，其中会创建 Observe 对象并调用其 walk 方法，将 data 的对象进行 set，get 绑定：set 中进行更新 dep；get 中进行依赖收集

在 mountComponent 的时候，创建 Watcher 对象，保存每个 Component 对象

当 data 的对象修改时，更改视图 updateComponent，触发 set 方法，调用 dep.notify()，触发 watcher 的 update 方法；更新页面获取新的对象的值，触发 get 方法，
调用 dep.depend 方法，即把 watcher 放到 dep 的 subs 数组中
