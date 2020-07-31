title:如何使用web端组件的动态加载和路由懒加载来降低web端产物的体积
---



### 1.异步组件

关于异步组件的一些基本概念，大家可以参考[vue官网-异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

那么如何在CML项目中使用异步组件呢？

> 第一种方式，未升级最新的chameleon-tool

可以在 多态组件中，即`xxx.web.cml`中声明对应的组件即可，基本使用方式如下,可以参考本仓库中 `web-dynamic-polymorphic.web.cml` 

```javascript
const USER = () => import(/* webpackChunkName: "user" */ '../user/user.cml')

class WebDynamicComponent implements WebDynamicComponentInterface {
   //....
  components = {
    'user':USER
  }
}

export default new WebDynamicComponent();
```

> 第二种，升级最新的 chameleon-tool 之后

我们支持了在引入的组件后面添加查询字符串，目前支持的字段包括

* dynamic: 可取值为 1，表示该组件将以异步组件的方式引入
* chunkName: 用于配置该组件生成的chunk的名字

我们执行 `cml web dev` 之后，可以在 `node_modules/.chameleon/www/static/js` 中看下生成的对应的 chunk 的名称


```json
{
  "base": {
    "usingComponents": {
      "home": "/components/home/home?dynamic=1&chunkName=home"
    }
  },
}
```

### 2.路由懒加载
我们只需要在`router.config.json`文件中配置 以下两个字段即可

* dynamic: 可取值为 1，表示该组件将以异步组件的方式引入
* chunkName: 用于配置该组件生成的chunk的名字

配置之后，表示该路由将以懒加载的形式引入

关于web端路由懒加载的文档[vue-router文档-路由懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

```json
{
  "url": "/cml/h5/dynamic-router",
  "path": "/pages/index/dynamic-router",
  "name": "路由懒加载",
  "mock": "index.php",
  "dynamic":"1",
  "chunkName":"dynamic-router"
}
```

