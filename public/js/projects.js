"use strict";

module.exports = ($) => {
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
		<p class='project-tech'> Technologies: </p>
		</div>`
		$('#projects').append(element);
	}
}