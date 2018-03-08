import Vue from 'vue';//build时候这个可以
let MessageBox = Vue.extend(require('./VueMessage.vue'));

let Message = function(){
}
Message.prototype.success = function (value,time){
	showMessageBox('success',value,time);
}
Message.prototype.error = function (value,time){
	showMessageBox('error',value,time);
}
Message.prototype.warning = function (value,time){
	showMessageBox('warning',value,time);
}
Message.prototype.info = function (value,time){
	showMessageBox('info',value,time);
}

function showMessageBox(func,value,time){
	if(!document.getElementById('vue-message-wrap')){
		let wrapDiv = document.createElement("div");
		wrapDiv.setAttribute("class", "vue-message-wrap");
		wrapDiv.setAttribute("id", "vue-message-wrap");
		document.body.appendChild(wrapDiv);
	}
	let messageBox = new MessageBox();
	messageBox[func](value,time);
	// //组件需要挂载在dom元素上
	messageBox.vm = messageBox.$mount();
	document.getElementById('vue-message-wrap').appendChild(messageBox.vm.$el);

}

let message = new Message();
Vue.prototype.$message = message;

export default message;