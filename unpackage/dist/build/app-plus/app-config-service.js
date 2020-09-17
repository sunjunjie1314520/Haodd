
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/invitation/invitation","pages/invitation/Opening","pages/set/set","pages/register/register","pages/login/Forget","pages/register/setinfo","pages/index/Home","pages/index/Shop","pages/index/Game","pages/index/Center","pages/user/modify","pages/user/setpass","pages/user/binddata","pages/user/settrans","pages/user/real","pages/user/code","pages/user/personal","pages/user/video","pages/user/video1","pages/user/service","pages/user/news","pages/user/businessman","pages/user/order","pages/task/Task","pages/shop/cart","pages/shop/confirmation","pages/commonly/transaction","pages/commonly/agent","pages/commonly/reel","pages/commonly/team","pages/webBrowser/index","pages/order/address_manage","pages/order/newconsignee","pages/order/logistics","pages/inputInfo/inputInfo","pages/daiding/index","pages/index/fabu","pages/product/detail","pages/index1/Index","pages/pay/pay","pages/video/search"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#111118","backgroundColor":"#111118"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"好逗短视频","compilerVersion":"2.8.8","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom","navigationBarTextStyle":"white","titleNView":false}},{"path":"/pages/invitation/invitation","meta":{},"window":{"navigationBarTitleText":"邀请"}},{"path":"/pages/invitation/Opening","meta":{},"window":{"navigationBarTitleText":"成为经纪商"}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"手机号注册"}},{"path":"/pages/login/Forget","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/register/setinfo","meta":{},"window":{"navigationBarTitleText":"设置头像"}},{"path":"/pages/index/Home","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"首页"}},{"path":"/pages/index/Shop","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"商城"}},{"path":"/pages/index/Game","meta":{},"window":{"navigationBarTitleText":"游戏中心","navigationStyle":"custom"}},{"path":"/pages/index/Center","meta":{},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom"}},{"path":"/pages/user/modify","meta":{},"window":{"navigationBarTitleText":"修改用户名"}},{"path":"/pages/user/setpass","meta":{},"window":{"navigationBarTitleText":"设置登录密码"}},{"path":"/pages/user/binddata","meta":{},"window":{"navigationBarTitleText":"绑定提现资料"}},{"path":"/pages/user/settrans","meta":{},"window":{"navigationBarTitleText":"设置交易密码"}},{"path":"/pages/user/real","meta":{},"window":{"navigationBarTitleText":"实名认证"}},{"path":"/pages/user/code","meta":{},"window":{"navigationBarTitleText":"邀请码"}},{"path":"/pages/user/personal","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/pages/user/video","meta":{},"window":{"navigationBarTitleText":"个人视频"}},{"path":"/pages/user/video1","meta":{},"window":{"navigationBarTitleText":"用户"}},{"path":"/pages/user/service","meta":{},"window":{"navigationBarTitleText":"我的客服"}},{"path":"/pages/user/news","meta":{},"window":{"navigationBarTitleText":"新闻中心"}},{"path":"/pages/user/businessman","meta":{},"window":{"navigationBarTitleText":"商家入驻"}},{"path":"/pages/user/order","meta":{},"window":{"navigationBarTitleText":"我的订单"}},{"path":"/pages/task/Task","meta":{},"window":{"navigationBarTitleText":"任务中心"}},{"path":"/pages/shop/cart","meta":{},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/shop/confirmation","meta":{},"window":{"navigationBarTitleText":"确认单"}},{"path":"/pages/commonly/transaction","meta":{},"window":{"navigationBarTitleText":"收支明细"}},{"path":"/pages/commonly/agent","meta":{},"window":{"navigationBarTitleText":"代理申请"}},{"path":"/pages/commonly/reel","meta":{},"window":{"navigationBarTitleText":"我的卷轴"}},{"path":"/pages/commonly/team","meta":{},"window":{"navigationBarTitleText":"我的团队"}},{"path":"/pages/webBrowser/index","meta":{},"window":{"navigationBarTitleText":"加载中"}},{"path":"/pages/order/address_manage","meta":{},"window":{"navigationBarTitleText":"地址管理"}},{"path":"/pages/order/newconsignee","meta":{},"window":{"navigationBarTitleText":"新增收货地址"}},{"path":"/pages/order/logistics","meta":{},"window":{"navigationBarTitleText":"物流信息"}},{"path":"/pages/inputInfo/inputInfo","meta":{},"window":{"navigationBarTitleText":"修改"}},{"path":"/pages/daiding/index","meta":{},"window":{"navigationBarTitleText":"确认"}},{"path":"/pages/index/fabu","meta":{},"window":{"navigationBarTitleText":"发布"}},{"path":"/pages/product/detail","meta":{},"window":{"navigationBarTitleText":"商城详情","titleNView":{"type":"transparent"}}},{"path":"/pages/index1/Index","meta":{"isNVue":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"确认支付"}},{"path":"/pages/video/search","meta":{},"window":{"navigationBarTitleText":"用户搜索"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
