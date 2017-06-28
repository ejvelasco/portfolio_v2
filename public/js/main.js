'use strict';

const $ = global.jQuery = require('jquery');
const home = require('./home')($);
const projects = require('./projects')($);
require('./about')($);
require('./contact')($);

let last  = 'home';
let next = '';
let i = 1;
let j = 0;
let top = 0;
let transition = setInterval(home.squeeze(i, home.content.length), 5000);
let append;
let scroll;

const switchView = (event) => {
	next = event.currentTarget.innerHTML.toLowerCase();
	if (next === last) {
		return;
	}
	if (next === 'home') {
		i++;
		transition = setInterval(home.squeeze(i, home.content.length), 5000);
	} else {
		clearInterval(transition);
	}
	if (next === 'projects') {
		scroll = setInterval(projects.scroll(top), 30);
	 	append = setInterval(projects.append(j, projects.projects.length), 2000);
	} else {
		clearInterval(scroll);
		clearInterval(append);
	}
	$(`#${last}`).fadeOut(500, () => {
		if (next === 'projects') {
			$(`#${next}`).fadeIn(800);	
		} else {
			$(`#${next}`).fadeIn(500);	
		}
	});
	last = next;
}

$('.masthead-nav li a').on('click', switchView);

		

