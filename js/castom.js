"use strict";

let day_html = document.getElementById('day');
let hours_html = document.getElementById('hours');
let minuts_html = document.getElementById('minuts');
let secend_html = document.getElementById('section');


function countTime() {

	let setDate = new Date("1 Jan 2022 0:00:00");
	let liveTime = new Date();

	let compare = setDate - liveTime;
	
	let secund_count = Math.floor(compare / 1000);
	let minite_counte = Math.floor(secund_count / 60);
	let hour_count = Math.floor(minite_counte / 60);
	let day_count = Math.floor(hour_count / 24);

	let secend = secund_count % 60;
	let minite = minite_counte % 60;
	let hour = hour_count % 24;
	let day = day_count % 30;

	day_html.innerHTML = day;
	hours_html.innerHTML = hour;
	minuts_html.innerHTML = minite;
	secend_html.innerHTML = secend;

}
countTime();

setInterval(countTime, 1000);


let dat = new Date();
let hour_set = dat.getHours();
let bgcolor = document.getElementById("bdcolor");
let text_coler = document.querySelectorAll(".text-color");
let border_coler = document.querySelectorAll(".border-color");



if (hour_set > 6 && hour_set < 17) {
	bgcolor.style.backgroundColor = "#fff";
	for (let i = 0; i < text_coler.length; i++) {
		text_coler[i].classList.toggle("color-black");
	}
	for (let i = 0; i < border_coler.length; i++) {
		border_coler[i].classList.toggle("bdr-color-black");
	}
} else {
	bgcolor.style.backgroundColor = "#333";
	for (let i = 0; i < text_coler.length; i++) {
		text_coler[i].classList.toggle("color-white");
	}
	for (let i = 0; i < border_coler.length; i++) {
		border_coler[i].classList.toggle("bdr-color-white");
	}
}