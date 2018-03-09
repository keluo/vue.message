import VueMessage from './VueMessage.vue';
let MessageBox = function(){
}
let Message = function(){
}
//为Message添加方法
const methods = ['success','error','warning','info'];
for(let i = 0; i < methods.length; i++){
	Message.prototype[methods[i]] = function(value,time){
		showMessageBox(methods[i],value,time);
	}

}

//调用 VueMessage 的方法
function showMessageBox(func,value,time){
	let messageBox = new MessageBox();
	messageBox[func](value,time);
	// //组件需要挂载在dom元素上
	messageBox.vm = messageBox.$mount();
	document.getElementById('vue-message-wrap').appendChild(messageBox.vm.$el);

}

let message = new Message();
message.install = install;
//初始化
const install = function(Vue) {
	MessageBox = Vue.extend(VueMessage);
	//判断页面有没有message-wrap，没有就添加
	if(!document.getElementById('vue-message-wrap')){
		let wrapDiv = document.createElement("div");
		wrapDiv.setAttribute("class", "vue-message-wrap");
		wrapDiv.setAttribute("id", "vue-message-wrap");
		document.body.appendChild(wrapDiv);
	}
	//将message添加到prototype上
	Vue.prototype.$message = message;
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default message;