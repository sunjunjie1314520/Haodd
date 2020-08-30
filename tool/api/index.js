

import upload from "./modules/upload.js";

import login from "./modules/login.js";

const modules = {
    ...{upload},
    ...{login},
}

console.log(modules);

export default modules