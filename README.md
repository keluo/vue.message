# vue.message
> Message for Vue.js

## 初始化插件
```javascript
import Vue from 'vue'
import Message from 'VueMessage'

Vue.use(Message)
```

## 使用
```javascript
//成功提示
this.$message.success('操作成功提示！');

//失败提示
this.$message.error('操作失败提示！');

//警告提示
this.$message.warning('操作警告提示！');

//提示
this.$message.info('操作提示！');

//提示(延迟10秒关闭，默认是1.5秒)
this.$message.info('操作提示！',10000);
```