<template>
<div>
<a class="btn" @click="showMessage('success')">弹出Message(成功)</a>
<br/><br/>
<div class="code-box">
  <div class="code-box-title">代码示例：</div>
  <div>this.$message.success('操作提示！');</div>
</div>
<br/>
<br/>
<a class="btn" @click="showMessage('error')">弹出Message(失败)</a>
<br/><br/>
<div class="code-box">
  <div class="code-box-title">代码示例：</div>
  <div>this.$message.error('操作提示！');</div>
</div>
<br/>
<br/>
<a class="btn" @click="showMessage('warning')">弹出Message(警告)</a>
<br/><br/>
<div class="code-box">
  <div class="code-box-title">代码示例：</div>
  <div>this.$message.warning('操作提示！');</div>
</div>
<br/>
<br/>
<a class="btn" @click="showMessage('info')">弹出Message(提示)</a>
<br/><br/>
<div class="code-box">
  <div class="code-box-title">代码示例：</div>
  <div>this.$message.info('操作提示！',5000);</div>
</div>
<br/>
<br/>
<a class="btn" @click="showMessage('info',5000)">弹出Message(提示)(设置5秒后消失)</a>
<br/><br/>
<div class="code-box">
  <div class="code-box-title">代码示例：</div>
  <div>this.$message.info('操作提示！',5000);</div>
</div>
</div>
</template>
<style>
.code-box{
  border: 1px solid #dfe2e5;
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
}
.btn,a.btn{
  border-radius: 2px;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  padding: 0 14px;
  font-size: 14px;
  background-color: #2b91e8;
  color: #fff;
  border: 0px;
  cursor: pointer;
}
</style>
<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
    showMessage(type,time){
      if(type === 'success'){
        this.$message.success('操作成功！',time);
      }
      if(type === 'error'){
        this.$message.error('操作失败！',time);
      }
      if(type === 'warning'){
        this.$message.warning('操作警告！',time);
      }
      if(type === 'info'){
        this.$message.info('操作提示！',time);
      }
    }
  }
}
</script>
