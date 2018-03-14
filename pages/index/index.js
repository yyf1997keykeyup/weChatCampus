//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    interval:4000,
    duration:1000,
    image:[
      '/pages/image/1.gif',
      '/pages/image/2.png',
      '/pages/image/3.gif',
      '/pages/image/4.gif',
      '/pages/image/5.jpg'
    ]
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
