

import upload from "./modules/upload.js";

import login from "./modules/login.js";

import personal from "./modules/personal.js";

import shop from "./modules/shop.js";

import video from "./modules/video.js";

const modules = {
    ...{
        upload
    },
    ...{
        login
    },
    ...{
        personal
    },
    ...{
        shop
    },
    ...{
        video
    }
}

console.log(modules);

export default modules