/*
	Astral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		$nav_links
			.on('click', function(event) {

				var href = $(this).attr('href');

				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Change panels.
					if (window.location.hash != href)
						window.location.hash = href;

			});

	// Panels.

		// Initialize.
			(function() {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

					}

				// No panel/link? Default to first.
					if (!$panel
					||	$panel.length == 0) {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels except this one.
					$panels.not($panel)
						.addClass('inactive')
						.hide();

				// Activate link.
					$link
						.addClass('active');

				// Reset scroll.
					$window.scrollTop(0);

			})();

		// Hashchange event.
			$window.on('hashchange', function(event) {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

						// No target panel? Bail.
							if ($panel.length == 0)
								return;

					}

				// No panel/link? Default to first.
					else {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels.
					$panels.addClass('inactive');

				// Deactivate all links.
					$nav_links.removeClass('active');

				// Activate target link.
					$link.addClass('active');

				// Set max/min height.
					$main
						.css('max-height', $main.height() + 'px')
						.css('min-height', $main.height() + 'px');

				// Delay.
					setTimeout(function() {

						// Hide all panels.
							$panels.hide();

						// Show target panel.
							$panel.show();

						// Set new max/min height.
							$main
								.css('max-height', $panel.outerHeight() + 'px')
								.css('min-height', $panel.outerHeight() + 'px');

						// Reset scroll.
							$window.scrollTop(0);

						// Delay.
							window.setTimeout(function() {

								// Activate target panel.
									$panel.removeClass('inactive');

								// Clear max/min height.
									$main
										.css('max-height', '')
										.css('min-height', '');

								// IE: Refresh.
									$window.triggerHandler('--refresh');

								// Unlock.
									locked = false;

							}, (breakpoints.active('small') ? 0 : 500));

					}, 250);

			});

	// IE: Fixes.
		if (browser.name == 'ie') {

			// Fix min-height/flexbox.
				$window.on('--refresh', function() {

					$wrapper.css('height', 'auto');

					window.setTimeout(function() {

						var h = $wrapper.height(),
							wh = $window.height();

						if (h < wh)
							$wrapper.css('height', '100vh');

					}, 0);

				});

				$window.on('resize load', function() {
					$window.triggerHandler('--refresh');
				});

			// Fix intro pic.
				$('.panel.intro').each(function() {

					var $pic = $(this).children('.pic'),
						$img = $pic.children('img');

					$pic
						.css('background-image', 'url(' + $img.attr('src') + ')')
						.css('background-size', 'cover')
						.css('background-position', 'center');

					$img
						.css('visibility', 'hidden');

				});

		}

})(jQuery);

// Particles background

document.addEventListener("DOMContentLoaded", function () {
	particlesJS.load('particles-js', '/assets/js/particlesjs-config.json', function () {
		console.log('Welcome to robertopreste.com!');
	});
});

// 3D Tag Cloud

var entries = [
	{label: 'Python', url: 'https://www.python.org', target: '_blank'},
	{label: 'R', url: 'https://www.r-project.org', target: '_blank'},
	{label: 'Flask', url: 'http://flask.pocoo.org', target: '_blank'},
	{label: 'SQLite', url: 'https://www.sqlite.org/index.html', target: '_blank'},
	{label: 'GitHub', url: 'https://github.com', target: '_blank'},
	{label: 'pandas', url: 'https://pandas.pydata.org', target: '_blank'},
	{label: 'NumPy', url: 'https://www.numpy.org', target: '_blank'},
	{label: 'scikit-learn', url: 'https://scikit-learn.org/stable/', target: '_blank'},
	{label: 'Wordpress', url: 'https://wordpress.com/', target: '_blank'},
	{label: 'Seaborn', url: 'https://seaborn.pydata.org', target: '_blank'},
	{label: 'Matplotlib', url: 'https://matplotlib.org', target: '_blank'},
	{label: 'Tidyverse', url: 'https://www.tidyverse.org', target: '_blank'},
	{label: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', target: '_blank'},
	{label: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', target: '_blank'},
	{label: 'Javascript', url: 'https://www.javascript.com', target: '_blank'},
	{label: 'Jekyll', url: 'https://jekyllrb.com', target: '_blank'},
	{label: 'Conda', url: 'https://docs.conda.io/en/latest/', target: '_blank'},
	{label: 'Plotly', url: 'https://plot.ly/', target: '_blank'},
	{label: 'asyncio', url: 'https://docs.python.org/3/library/asyncio.html', target: '_blank'},
	{label: 'TensorFlow', url: 'https://www.tensorflow.org', target: '_blank'},
	{label: 'Keras', url: 'https://keras.io', target: '_blank'}
];

var settings = {
	entries: entries,
	width: 480,
	height: 480,
	radius: '65%',
	radiusMin: 75,
	bgDraw: false,
	bgColor: 'rgba(20, 23, 25, 0.3)',
	opacityOver: 1.00,
	opacityOut: 0.05,
	opacitySpeed: 6,
	fov: 800,
	speed: 1,
	fontFamily: 'Source Sans Pro, sans-serif',
	fontSize: '16',
	fontColor: '#23B5D3',
	fontWeight: 'bold', //normal
	fontStyle: 'normal', //italic
	fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	fontToUpperCase: true,
	tooltipFontFamily: 'Source Sans Pro, sans-serif',
	tooltipFontSize: '11',
	tooltipFontColor: '#fff',
	tooltipFontWeight: 'normal', //bold
	tooltipFontStyle: 'normal', //italic
	tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	tooltipFontToUpperCase: false,
	tooltipTextAnchor: 'left',
	tooltipDiffX: 0,
	tooltipDiffY: 10
};

$('#tagcloud').svg3DTagCloud(settings);
