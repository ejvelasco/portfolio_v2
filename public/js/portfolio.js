'use strict';

const $ = global.jQuery = require('jquery');
require('bootstrap');

let last  = 'home';
let next = '';
let top = 0;
let idx = 0;
let append;
let scroll;
let child; 
let title;
let subtitle;
let img;
let first;
let marginFirst;
$(".masthead-nav li a").on("click", event => {
	next = event.currentTarget.innerHTML.toLowerCase();
	if (next === last) {
		return;
	}
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
				subtitle = $(child).children()[1].innerHTML;
				img = $(child).css('background-image');
				img = img.substring(5, img.length - 2);
				element = `<div class='project' style='background-image: url(${img})'>
				<p class='project-title'> ${title} </p>
				<p class='project-subtitle'> ${subtitle} </p>
				</div>`
				$('#projects').append(element);
				idx++;
			}, 2000);
	} else {
		clearInterval(scroll);
		clearInterval(append);
	}
	$(`#${last}`).fadeOut(500, () => {
		$(`#${next}`).fadeIn(500);	
		if (next === 'projects') {
			$('.stars').css('opacity', .4);
		} else {
			$('.stars').css('opacity', '');
		}
	});
	last = next;
});

const projects = [
	
	{
		title: "Hummingbird",
		subtitle: "Enriching the classroom environment.",
		img: "/img/hummingbird.jpg",
		url:"https://github.com/velascoDev/hummingbird-dashboard"
	},
	{
		title: "EasyTopo",
		subtitle: "Brain imaging simplified.",
		img: "/img/EasyTopo.jpeg",
		url: "https://github.com/velascoDev/EasyTopo"
	},
	{
		title: "ESplay",
		subtitle: "A sleek ES6 playground.",
		img: "/img/esplay.jpeg",
		url: "https://github.com/velascoDev/ESplay"
	},
	{
		title: "SharedFi Portal",
		subtitle: "Next-gen targeted advertising.",
		img: "/img/pi.jpg",
		url: "http://sharedfi.w11.wh-2.com/Master/index.html"

	},
	{
		title: "Portfolio",
		subtitle: "Like it? Check out the code.",
		img: "/img/portfolio.jpeg",
		url: "https://github.com/velascoDev/portfolio_v2"
	},
	{
		title: "cBioPortal",
		subtitle: "Cancer genomics initiative at Memorial Sloan Kettering (Internship).",
		img: "/img/zuckerman.jpg",
		url: "https://github.com/velascoDev/cbioportal"
	}	
];

let element;
for (const project of projects) {
	element = `<div class='project' style='background-image: url(${project.img})'>
	<p class='project-title'> ${project.title} </p>
	<p class='project-subtitle'> ${project.subtitle} </p>
	</div>`
	$('#projects').append(element);
}

const content = [
	{
    	title: "EDUARDO VELASCO",
    	desc: "Welcome to my portfolio."
	}, 
	{
    	title: "I AM A PROGRAMMER",
    	desc: "programmer n. \prō-gram-mer\ \nAn organism capable of turning caffeine into code."
  	}, 
  	{
    	title: "I AM A DESIGNER",
    	desc: "designer n. \deˈzīner\ \nA person who stares at color codes for way too long."
  	}, 
  	{
    	title: "SEIZE THE DAY",
    	desc: "What are you waiting for?\nGet out there and make your dreams happen."
  	}
];

let i = 1;
setInterval(() => {
	$('.cover-heading').css('letter-spacing', '-40px').css('opacity', 0);
	$('.lead').css('letter-spacing', '-10px').css('opacity', 0);
	setTimeout(() => {
		i = i % content.length;
		$('.cover-heading').text(content[i].title);
		$('.cover-heading').css('letter-spacing', '').css('opacity', '');
		$('.lead').text(content[i].desc);
		$('.lead').css('letter-spacing', '').css('opacity', '');
		i++;
	}, 700);
}, 3000);

		

