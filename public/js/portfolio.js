'use strict';

const $ = global.jQuery = require('jquery');
const home = require('./home')($);
require('./projects')($);


let last  = 'home';
let next = '';
let top = 0;
// let idx = 0;
let append;
let scroll;
let child; 
let title;
let subtitle;
let img;
let first;
let marginFirst;
let idx = 1;
let transition = setInterval(home.squeeze(idx, home.content.length), 5000);
$(".masthead-nav li a").on("click", event => {
	next = event.currentTarget.innerHTML.toLowerCase();
	if (next === last) {
		return;
	}
	if (next === 'home') {
		idx++;
		transition = setInterval(home.squeeze(idx, home.content.length), 5000);
	} else {
		clearInterval(transition);
	}
	// if (next === 'projects') {
	// 		scroll = setInterval(() => {
	// 			top -= 1;
	// 			child = $('#projects').children()[0]
	// 			$(child).css('margin-top',top)
	// 		}, 30)
	//  		append = setInterval(() => {
	// 			idx  = idx % projects.length;
	// 			first = $('#projects').children()[0];
	// 			marginFirst = $(first).css('margin-top');
	// 			marginFirst = Number(marginFirst.substring(0, marginFirst.length - 2));
	// 			child = $('#projects').children()[idx];
	// 			title = $(child).children()[0].innerHTML;
	// 			subtitle = $(child).children()[1].innerHTML;
	// 			img = $(child).css('background-image');
	// 			img = img.substring(5, img.length - 2);
	// 			element = `<div class='project' style='background-image: url(${img})'>
	// 			<p class='project-title'> ${title} </p>
	// 			<p class='project-subtitle'> ${subtitle} </p>
	// 			<p class='project-tech'> Technologies: </p>
	// 			</div>`
	// 			$('#projects').append(element);
	// 			idx++;
	// 		}, 2000);
	// } else {
	// 	clearInterval(scroll);
	// 	clearInterval(append);
	// }
	$(`#${last}`).fadeOut(500, () => {
		if (next === 'projects') {
			$(`#${next}`).fadeIn(800);	
		} else {
			$(`#${next}`).fadeIn(500);	
		}
	});
	last = next;
});



		

