'use strict'; 

module.exports = ($) => {
	const content = [
		{
	    	title: 'EDUARDO VELASCO',
	    	desc: 'Welcome to my portfolio.'
		}, 
		{
	    	title: 'PROGRAMMER',
	    	desc: 'programmer n. \prō-gram-mer\ \nAn organism capable of turning caffeine into code.'
	  	}, 
	  	{
	    	title: 'DESIGNER',
	    	desc: 'designer n. \deˈzīner\ \nA person who stares at color codes for way too long.'
	  	}, 
	  	{
	    	title: 'SEIZE THE DAY',
	    	desc: 'What are you waiting for?\nGet out there and make your dreams happen.'
	  	}
	];
	const squeeze = (idx, n) => {
		return () => {
			idx = idx % n;
			$('.cover-heading').css('letter-spacing', '-15px').css('opacity', 0);
			$('.lead').css('letter-spacing', '-5px').css('opacity', 0);
			setTimeout(release(idx), 700);
			idx++;
		};
	}	
	const release = (idx) => {
		return () => {
			$('.cover-heading').text(content[idx].title);
			$('.lead').text(content[idx].desc);
			$('.cover-heading').css('letter-spacing', '').css('opacity', '');
			$('.lead').css('letter-spacing', '').css('opacity', '');
		};
	}
	const $div = $(".bg");
	const bg = $div.css("background-image");
	const src = bg.replace(/(^url\()|(\)$|[\"\"])/g, "");
	const $img = $("<img>").attr("src", src).on("load", () => {
		let deg = 0;
	    $div.fadeIn(1200);
	    $(".cover-container").fadeIn(1200);
	 });
	return {
		squeeze, 
		release, 
		content  
	};
}

