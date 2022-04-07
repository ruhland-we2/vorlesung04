
document.addEventListener("DOMContentLoaded", function(event){
	let menubutton = document.querySelector("#page-dashboard .menu-button");
    let sidemenu = document.querySelector("#page-dashboard .side-menu");
	menubutton.addEventListener("click",function(e){
        sidemenu.classList.toggle("open");
	});
	let settingsbutton = document.querySelector("#page-dashboard .settings-button");
    let settingspopup = document.querySelector("#page-dashboard .settings-popup");
	settingsbutton.addEventListener("click",function(e){
        settingspopup.classList.toggle("open");
	});
});