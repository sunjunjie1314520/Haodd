

import upload from "./modules/upload.js"; // 公共模块 => 上传图片

import login from "./modules/login.js"; // 登录 + 注册

import fabu from "./modules/fabu.js"; // 发布

import personal from "./modules/personal.js"; // 个人信息

import banner from "./modules/banner.js"; // 焦点图

import message from "./modules/message.js"; // 消息

import home from "./modules/home.js"; // 首页

import friend from "./modules/friend.js"; // 好友页面

import shop from "./modules/shop.js"; // 商品

import forum from "./modules/forum.js"; // 社区-游戏-商城

import article from "./modules/article.js"; // 文章版块

import order from "./modules/order.js"; // 订单

import video from "./modules/video.js"; // 订单

import warn from "./modules/warn.js"; // 订单


const modules = {
    ...{upload},
    ...{login},
	...{fabu},
	...{personal},
    ...{banner},
    ...{message},
    ...{home},
    ...{friend},
    ...{shop},
    ...{forum},
    ...{article},
    ...{order},
    ...{video},
    ...{warn},
}

console.log(modules);

export default modules