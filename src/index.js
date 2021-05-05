

import "./sass/main.scss";

import * as ALL from "./js/theme";

import template from "./templates/main.hbs";

import templateMenu from "./menu.json";


const jsMenuTemplate = document.querySelector(".js-menu");
jsMenuTemplate.innerHTML = template(templateMenu);

