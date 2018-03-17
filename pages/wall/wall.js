// var api = require('../../utils/api.js');

Page({
	data:{
    likeNum: 5,
    commentNum: 20,
    comment: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容",
    isMoreText: false,
    addOrCut: '更多内容',

    // pn: 0,//页数初始为0
    // list: [],//信息 list 列表
	},

  moreText: function (e) {
    console.log(e);
    if (!this.data.isMoreText){
      this.setData({
        isMoreText: true,
        addOrCut: '收起'
      })
    }
    else{
      this.setData({
        isMoreText: false,
        addOrCut: '更多内容'
      })
    }
  },
  // loadData: function (pn) {//加载更多数据
  //   api.getList('coming_soon', pn)
  //     .then(res => {
  //       if (res.subjects.length > 0) {
  //         this.setData({
  //           list: this.data.list.concat(res.subjects),//连接到已获取的 list 上
  //           showLoading: false,
  //           pn: pn + 1
  //         })
  //       } else {
  //         this.setData({
  //           showMore: false
  //         })
  //       }
  //     })
  // },
	/*发送函数*/
	send:function(e){
		console.log(e);
	},
	onLoad:function(options){
    // this.loadData(this.data.pn)//最一开始就获取一页的信息
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