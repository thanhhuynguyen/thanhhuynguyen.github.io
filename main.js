function main() {  
  $('.camera').on('click', function() {
		$(this).next().slideToggle(400);
    	$(this).text('Projects Viewed');
	});
}

$(document).ready(main);