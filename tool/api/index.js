

import upload from "./modules/upload.js";

import login from "./modules/login.js";

import personal from "./modules/personal.js";

const modules = {
    ...{upload},
    ...{login},
    ...{personal},
}

console.log(modules);

export default modules