Page({
	data:{
		pagebackgroundColor:'#E0FFFF',
		content:"这是一个发帖框！"
	},
	change:function(e){
		console.log(e);
	},
	change_pink:function(e){
		console.log(e);
		this.setData({
			pagebackgroundColor:'#E0FFFF'
		})
	},
	change_blue:function(e){
		console.log(e);
		this.setData({
			pagebackgroundColor:'#CAE1FF'
		})
	},
	change_yellow:function(e){
		console.log(e);
		this.setData({
			pagebackgroundColor:'#FFFACD'
		})
	},
	change_green:function(e){
		console.log(e);
		this.setData({
			pagebackgroundColor:'#E0FFFF'
		})
	},

	onLoad:function(options){
		
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		