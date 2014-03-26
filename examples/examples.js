/*global jQuery*/
(function($) {
	'use strict';

	$('#clear').click(function() {
		$('#main-holder').clearAlerts();
	});

	$('#go').click(function() {
		var $target = $('#main-holder');
		var text = $('#text').val();
		if (!text) {
			$('#main-form').addWarningAlert('No text input!', {timeout: 1500});
			return;
		}
		var timeout = $('#timeout').val();
		var type = $('#type').val();
		$target.addAlert(text, {timeout: timeout, type: type});
	});

	$('#random').click(function(e, fromTimeout) {
		var alertWords = [];
		var $words = $('#main-holder');
		var words = $words.text().trim().split(/\W+/);

		for (var i = 0; i < Math.ceil(Math.random() * 10); i++) {
			var word = words[Math.floor(Math.random() * words.length)];
			alertWords.push(word);
		}

		var alert = alertWords.join(' ');
		alert = uppercaseFirst(alert);
		alert += ( Math.floor(Math.random() * 2) ? '.' : '!');

		$('#text').val(alert);

		var $options = $('#type').find('option');
		var type = Math.floor($options.length * (Math.random() % 1));
		$options.attr('selected', false).eq(type).attr('selected', true);

		$('#go').click();
	});

	$('#random-timeout').click(function() {
		var timeout = Math.ceil(Math.random() * 2) * 1000;
		$('#timeout').val(timeout);
		$('#random').click();
	});

	var $width = $('#width');
	$width.change(function() {
		var width = $(this).val();
		var $panel = $('#main-holder');
		$panel.clearAlerts();
		$panel.bootstrapAlertsQueue({width: width});
		$('#main-form').addInfoAlert('Changed width to ' + width, {timeout: 1500});
	});

	$width.change();

	function uppercaseFirst(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	$('#flasher').click(function() {
		$('#main-holder').addClass('flash');
		setTimeout(function() {
			$('#main-holder').removeClass('flash');
		}, 1100);
	});

})(jQuery);
