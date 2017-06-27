'use strict';

module.exports = ($) => {
	const projects = [
		{
			title: 'Hummingbird',
			subtitle: 'Enriching the classroom environment.',
			img: '/img/hummingbird.jpg',
			url:'https://github.com/velascoDev/hummingbird-dashboard'
		},
		{
			title: 'EasyTopo',
			subtitle: 'Brain imaging simplified.',
			img: '/img/EasyTopo.jpeg',
			url: 'https://github.com/velascoDev/EasyTopo'
		},
		{
			title: 'ESplay',
			subtitle: 'A sleek ES6 playground.',
			img: '/img/esplay.jpeg',
			url: 'https://github.com/velascoDev/ESplay'
		},
		{
			title: 'SharedFi Portal',
			subtitle: 'Next-gen targeted advertising.',
			img: '/img/pi.jpg',
			url: 'http://sharedfi.w11.wh-2.com/Master/index.html'

		},
		{
			title: 'Portfolio',
			subtitle: 'Like it? Check out the code.',
			img: '/img/portfolio.jpeg',
			url: 'https://github.com/velascoDev/portfolio_v2'
		},
		{
			title: 'cBioPortal',
			subtitle: 'Cancer genomics initiative at Memorial Sloan Kettering (Internship).',
			img: '/img/zuckerman.jpg',
			url: 'https://github.com/velascoDev/cbioportal'
		}	
	];
	const scroll = (top) => {
		return () => {
			const child = $('#projects').children()[0];
			top -= 1;
			$(child).css('margin-top',top);
		};
	}			
	const append = (idx, n) => {
		return () => {
			idx  = idx % n;
			const child = $('#projects').children()[idx];
			const title = $(child).children()[0].innerHTML;
			const subtitle = $(child).children()[1].innerHTML;
			let img = $(child).css('background-image');
			img = img.substring(5, img.length - 2);
			const element = `<div class='project' style='background-image: url(${img})'>
			<p class='project-title'> ${title} </p>
			<p class='project-subtitle'> ${subtitle} </p>
			<p class='project-tech'> Technologies: </p>
			</div>`;
			$('#projects').append(element);
			idx++;	
		};
	}	
	let element;
	for (const project of projects) {
		element = `<div class='project' style='background-image: url(${project.img})'>
		<p class='project-title'> ${project.title} </p>
		<p class='project-subtitle'> ${project.subtitle} </p>
		<p class='project-tech'> Technologies: </p>
		</div>`;
		$('#projects').append(element);
	}
	return {
		scroll, 
		append, 
		projects
	};
}