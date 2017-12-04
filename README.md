# NeteaseCloudMusic

NeteaseCloudMusic App Write by React-Native(0.50.4)

###  项目配置相关

1. 配置 alias 使用了`babel-plugin-module-resolver`, 再也不用写大把的相对路径了 ! 我是用 vscode 进行开发的 , 装了 eslint
的插件 , 使用路径 alias 需要配合`eslint-plugin-import`和`eslint-import-resolver-babel-module`, 这样就不会看到令人烦躁的
红色错误提示了 ~


> watchman watch-del-all
> rm -rf node_modules && npm install
> npm start -- --reset-cache