'use strict';

const $ = global.jQuery = require('jquery');
require('bootstrap');

let last  = 'home';
let next = '';
let append;
let scroll;
let child, title, desc, first;
let top = 0;
let idx = 0;
let marginFirst;
$(".masthead-nav li a").on("click", event => {
	next = event.currentTarget.innerHTML.toLowerCase();
	if (next === last) {
		return;
	}
	
	console.log(next);
	if (next === 'projects') {
			scroll = setInterval(() => {
				top -= 1;
				child = $('#projects').children()[0]
				$(child).css('margin-top',top)
			}, 30)
	 		append = setInterval(() => {
				idx  = idx % projects.length;
				first = $('#projects').children()[0];
				marginFirst = $(first).css('margin-top');
				marginFirst = Number(marginFirst.substring(0, marginFirst.length - 2));
				child = $('#projects').children()[idx];
				title = $(child).children()[0].innerHTML;
				desc = $(child).children()[1].innerHTML;
				element = `<div class='project'>
				<p class='project-title'> ${title} </p>
				<p class='project-desc'> ${desc} </p>
				</div>`
				// $(child).remove();
				$('#projects').append(element);
				idx++;
			}, 2000);
	} else {
		clearInterval(scroll);
		clearInterval(append);
	}
	$(`#${last}`).fadeOut(500, () => {
		$(`#${next}`).fadeIn(500);	
	});
	last = next;
});

const projects = [
	{
		title: "Project 1", 
		desc: "Desc 1"
	}, 
	{
		title: "Project 2", 
		desc: "Desc 2"
	},
	{
		title: "Project 3", 
		desc: "Desc 3"
	}, 
	{
		title: "Project 4", 
		desc: "Desc 4"
	},
	{
		title: "Project 5", 
		desc: "Desc 5"
	}, 
	{
		title: "Project 6", 
		desc: "Desc 6"
	},
	{
		title: "Project 7", 
		desc: "Desc 7"
	}, 
	{
		title: "Project 8", 
		desc: "Desc 8"
	}

];

let element;
for (const project of projects) {
	element = `<div class='project'>
	<p class='project-title'> ${project.title} </p>
	<p class='project-desc'> ${project.desc} </p>
	</div>`
	$('#projects').append(element);
}




		

