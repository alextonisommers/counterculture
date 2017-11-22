$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['INTRODUCTION', 'EARLY HISTORY', 'EARLY HISTORY - CONTINUED', 'ALBERT HOFFMANN', 'TIMOTHY LEARY' , 'TURN ON, TUNE IN'],
		showActiveTooltip: true
	});

	$('.icon-section-icon').on('click', function() {
		console.log('clicked');
		$(this).next('.icon-section-content').addClass('is-visible');
	});

	
});