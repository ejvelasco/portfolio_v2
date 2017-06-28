'use strict';

module.exports = ($) => {
	const projects = [
		{
			title: 'Hummingbird',
			subtitle: 'Enriching the classroom environment.',
			img: '/img/hummingbird.jpg',
			url:'https://github.com/velascoDev/hummingbird_dashboard', 
			tech: 'Meteor, MongoDB, Blaze.'
		},
		{
			title: 'TCP Fun',
			subtitle: 'A concise TCP project.',
			img: '/img/client.jpeg',
			url: 'https://github.com/velascoDev/tcp_client', 
			tech: 'NodeJS, ES6.'
		},
		{
			title: 'ESplay',
			subtitle: 'A sleek ES6 playground.',
			img: '/img/esplay.jpeg',
			url: 'https://github.com/velascoDev/ESplay', 
			tech: 'Angular, Babel, Node, Express, Pug, Bootstrap.'
		},
		{
			title: 'SharedFi - Sofía',
			subtitle: 'A friendly Shopping Assistant (Private).',
			img: '/img/sofia.jpeg',
			url: 'http://sharedfi.w11.wh-2.com/Master/index.html', 
			tech: 'Python, Tensorflow, WebSockets, Node, Angular, Bootstrap'
		},
		{
			title: 'SharedFi - Portal',
			subtitle: 'Next-gen targeted advertising. (Private)',
			img: '/img/pi.jpg',
			url: 'http://sharedfi.w11.wh-2.com/Master/index.html',
			tech: 'MongoDB, Express, Angular, Node, Pug, Bootstrap.'
		},
		{
			title: 'Portfolio',
			subtitle: 'Like it? Check out the code.',
			img: '/img/portfolio.jpeg',
			url: 'https://github.com/velascoDev/portfolio_v2', 
			tech: 'Node, Express, jQuery, Pug, SASS, Bootstrap.'
		},
		{
			title: 'cBioPortal',
			subtitle: 'Cancer genomics initiative at Memorial Sloan Kettering (Internship).',
			img: '/img/zuckerman.jpg',
			url: 'https://github.com/velascoDev/cbioportal', 
			tech: 'D3.js, jQuery.'
		},
		{
			title: 'EasyTopo',
			subtitle: 'Brain imaging simplified.',
			img: '/img/EasyTopo.jpeg',
			url: 'https://github.com/velascoDev/EasyTopo', 
			tech: 'MATLAB, FNIRS.'
		},	
	];
	const scroll = (top) => {
		return () => {
			const child = $('#projects').children()[0];
			top -= 1;
			$(child).css('margin-top',top);
		};
	}			
	const openLink = (event) => {
		const title = $(event.currentTarget).children()[0].innerHTML;
		for (const project of projects) {
			if (project.title === title.trim()) {
				window.open(project.url, '_blank');
			}
		}
	}
	const append = (idx, n) => {
		return () => {
			idx  = idx % n;
			const child = $('#projects').children()[idx];
			const title = $(child).children()[0].innerHTML;
			const subtitle = $(child).children()[1].innerHTML;
			const tech = $(child).children()[2].innerHTML;
			let img = $(child).css('background-image');
			img = img.substring(5, img.length - 2);
			const element = `<div class='project' style='background-image: url(${img})'>
			<p class='project-title'> ${title} </p>
			<p class='project-subtitle'> ${subtitle} </p>
			<p class='project-tech'> ${tech} </p>
			</div>`;
			$('#projects').append(element);
			$('#projects :last-child').on('click', openLink);
			idx++;	
		};
	}	
	let element;
	for (const project of projects) {
		element = `<div class='project' style='background-image: url(${project.img})'>
		<p class='project-title'> ${project.title} </p>
		<p class='project-subtitle'> ${project.subtitle} </p>
		<p class='project-tech'> ${project.tech} </p>
		</div>`;
		$('#projects').append(element);
	}
	$('.project').on('click', openLink);
	return {
		scroll, 
		append, 
		projects
	};
}