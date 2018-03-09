<template>
  <div class="vue-message-item" :class="choseClass(message)">
    <div class="vue-message-content">
      <!-- <i class="fa fa-check-circle success" v-if="message.type === 'success'"></i>
      <i class="fa fa fa-times-circle error" v-if="message.type === 'error'"></i>
      <i class="fa fa-exclamation-circle warning" v-if="message.type === 'warning'"></i>
      <i class="fa fa-info-circle info" v-if="message.type === 'info'"></i> -->
      <img class="icon-img" :src="typeImg" alt="">
      <span v-text="message.value"></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: {},
    }
  },
  mounted () {
  },
  computed: {
    typeImg() {
      return require(`./assets/${ this.message.type }.svg`);
    }
  },
  methods: {
    success:function(value,time){
      this.popMessage(value,'success',time);
    },
    error:function(value,time){
      this.popMessage(value,'error',time);
    },
    warning:function(value,time){
      this.popMessage(value,'warning',time);
    },
    info:function(value,time){
      this.popMessage(value,'info',time);
    },
    choseClass: function(message){
      var className = '';
      if(message.isEnter){
        className =  'move-up-enter';
      }
      if(message.isLeave){
        className =  'move-up-leave';
      }
      return className;
    },
    popMessage:function(value,type,time){
      var that = this;
      var params = {
        value: value|| '',
        type: type,
        isEnter: true,
        isLeave: false
      }
      that.message = params;
      setTimeout(function(){
        that.message.isEnter = false;
      },300);
      setTimeout(function(){
        setTimeout(function(){
          that.$destroy(true);
          that.$el.parentNode.removeChild(that.$el);
        },280);
        that.message.isLeave = true;
      },time ||1500)
    }
  }
}
</script>
<style>
.vue-message-wrap {
  font-size: 14px;
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 16px;
  left: 0;
  pointer-events: none;
}
.vue-message-item {
  text-align: center;
  padding: 8px;
}
.vue-message-item.move-up-enter {
  -webkit-animation-name: MessageMoveIn;
  animation-name: MessageMoveIn;
  overflow: hidden;
  -webkit-animation-duration: .3s;
  animation-duration: .3s
}
.vue-message-item.move-up-leave {
  -webkit-animation-name: MessageMoveOut;
  animation-name: MessageMoveOut;
  overflow: hidden;
  -webkit-animation-duration: .3s;
  animation-duration: .3s
}
.vue-message-content {
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  background: #fff;
  display: inline-block;
  pointer-events: all;
  color: #777;
  height: 18px;
}
.vue-message-content .icon-img{
  border-radius: 50%;
  height: 16px;
  float: left;
  margin-top: 1px;
  margin-right: 8px;
}
.vue-message-content .fa{
  font-size: 16px;
  margin-right: 5px;
  position: relative;
  top: 1px;
}
.vue-message-content .fa.info{
  color: #108ee9;
}
.vue-message-content .fa.warning{
  color: #ffbf00;
}
.vue-message-content .fa.error{
  color: #f04134;
}
.vue-message-content .fa.success{
  color: #00a854;
}
@-webkit-keyframes MessageMoveOut {
    0% {
        opacity: 1;
        max-height: 150px;
        padding: 8px;
    }

    to {
        opacity: 0;
        max-height: 0;
        padding: 0;
    }
}

@keyframes MessageMoveOut {
    0% {
        opacity: 1;
        max-height: 150px;
        padding: 8px;
    }

    to {
        opacity: 0;
        max-height: 0;
        padding: 0;
    }
}
@-webkit-keyframes MessageMoveIn{
    0% {
        opacity: 0;
        max-height: 0;
        padding: 0;
    }

    to {
        opacity: 1;
        max-height: 150px;
        padding: 8px;
    }
}

@keyframes MessageMoveIn {
    0% {
        opacity: 0;
        max-height: 0;
        padding: 0;
    }

    to {
        opacity: 1;
        max-height: 150px;
        padding: 8px;
    }
}

</style>

