'use strict';

module.exports = ($) => {
	const showError = item => {
		$('.error').text(`Please enter a valid ${item}.`).fadeIn(500, () => {
			setTimeout(() => {
				$('.error').fadeOut(500);
			}, 3000);
		});
	}
	const reset = data => {
		if (data.error) {
			showError(data.error);
			$('#send').text('send');
		} else {
			$('#send').text('sent').css('background-color', 'rgba(0, 255, 155, .2)');
			setTimeout(() => {
				$('#name').val('');
				$('#email').val(''); 
				$('#msg').val('');
				$('#send').text('send').css('background-color', '');
			}, 4000);
		}
	}
	const error = () => {
			showError('There was an error connecting to the server.');
			$('#send').text('send');
	}
	const send = () => {
		const details = {
			name: $('#name').val(),
			email: $('#email').val(), 
			message: $('#msg').val()
		}
		for (const detail in details) {
			if (details[detail] === '') {
				showError(detail);
				return;
			}
		}
		$('#send').text('sending...');
		$.ajax({
		    url: '/send', 
		    type: 'POST', 
		    contentType: 'application/json',
		    success: reset, 
		    error: error, 
		    data: JSON.stringify(details)
		});
	}
	$('#send').click(send);
}