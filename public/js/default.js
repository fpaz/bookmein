$(document).ready(function() {
	$('.menu').find('a[href="' + window.location.pathname + '"]').parent().addClass('selected');

	$('button[name="submit"]').bind('click', function(e) {
		var el = $('#f');
		$.post(window.location.pathname, el.serialize(), function (data) {

			var error = $('#error');
			var success = $('#success');

			if (typeof(data.length) === 'undefined') {
				el.trigger('reset');
				error.hide();
				success.show();
				return;
			}

			success.hide();
			error.empty();

			data.forEach(function(err) {
				error.append('<div><span class="icon-remove"></span> ' + err.error + '</div>');
			});

			error.slideDown(300);
		});
	});
});