let target = document.getElementsByTagName('html')[0];

let cover = document.createElement('div');
cover.style.width = "100%";
cover.style.height = "100%";
cover.style.background = "red";
cover.style.opacity = "0";
cover.style.position = "fixed";
cover.style.left = "0";
cover.style.top = "0";
cover.style.zIndex = "2147483647";

target.appendChild(cover);