// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require jquery_ujs

import "@hotwired/turbo-rails"
import "controllers"

const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", ()=> {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = 'Dark Mode'
    }else{
        modeText.innerText = 'Light Mode'
    }
});


