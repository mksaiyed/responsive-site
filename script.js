window.onscroll = function () {
	myFunction();
};

var navBar = document.getElementById("nav-bar");
var logo = document.getElementById("logo");
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menu-icon");
var sticky = navBar.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		navBar.classList.add("sticky");
		logo.src = "/Assets/logo-active.png";
		menuIcon.src = "/Assets/icons/gray_menu_icon.png";
	} else {
		navBar.classList.remove("sticky");
		logo.src = "/Assets/logo.png";
		menuIcon.src = "/Assets/icons/white_menu_icon.png";
	}
}

function on_menu_icon_click() {
	menu.style.display = "flex";
	navBar.style.padding = "0";
}

function on_up_icon_click() {
	menu.style.display = "none";
	navBar.style.padding = "20px 0px";
}

window.onresize = reportWindowSize;

function reportWindowSize() {
	// const heightOutput = document.querySelector("#height");
	// const widthOutput = document.querySelector("#width");

	if (window.innerWidth > 900) {
		menu.style.display = "flex";
	} else {
		menu.style.display = "none";
	}
}
