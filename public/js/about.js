'use-strict';

module.exports = ($) => {
	const about = [
		{
			title:'ABOUT ME',
			first:'I\'m a twenty-three year old programmer living in Austin, Texas. I developed a passion for programming in high school, and I have come a long way since. I embrace new opportunities to learn independently, and I am all about a hands-on approach to development.',
			second: 'Don\'t let my portfolio fool you into thinking I\'m only about coding! It is my interest in Mathematics that gives rise to my interest in the theoretical aspect of CS. I like to take an analytical approach when solving programming problems. When I\'m away from the keyboard, I like to stay fit, read anything from non-fiction to high fantasy, and play chess.'
		}, 
		{
			title:'GETTING TECHNICAL',
			first:'I aim to develop applications that are scalable, reliable, and mantainable. I like to work with Node and the rich ecosystem of libraries that the NPM offers. I have built apps based on Meteor, Angular, and React. I am comfortable implementing robust unit tests with frameworks like Mocha or Jest. To use, or not to use a relational data model? No problem! I feel confident working with either MongoDB or MySQL.',
			second:'I strive to implement applications that look and feel great across devices. Anytime design is involved, I let my creativity run free to create elegant interfaces that feature a smooth user experience. When it comes to data visualization, I like to use D3.js or Chart.js.\nLately, I\'ve been focused on learning Python! It\'s simple, powerful, and boasts awesome Machine Learning libraries like Tensorflow.'
		}
	];
	let idx = 1;
	$('.arrow').on('click', () => {
		idx = idx % 2;
		$('#about').fadeOut(600, () => {
			$($('#about').children()[1]).text(about[idx].first);
			$($('#about').children()[2]).text(about[idx].second);
			$('#about').fadeIn(600);
			idx++;	
		});
		$('.arrow').removeClass('bounce');
	});	
}
