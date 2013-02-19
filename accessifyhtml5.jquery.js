/*
 * Accessifyhtml5.js
 *
 * Source: https://github.com/yatil/accessifyhtml5.js
 */

var AccessifyHTML5 = function (defaults) {

	"use strict";

	var fixes = {
		'article'       : { 'role':          'article'       },
		'aside'         : { 'role':          'complementary' },
		'nav'           : { 'role':          'navigation'    },
		'main'          : { 'role':          'main'          },
		'output'        : { 'aria-live':     'polite'        },
		'section'       : { 'role':          'region'        },
		'[required]'    : { 'aria-required': 'true'          }
	};

	if (defaults) {
		if (defaults.header) {
			fixes[defaults.header] = {
				'role': 'banner'
			};
		}
		if (defaults.footer) {
			fixes[defaults.footer] = {
				'role': 'contentinfo'
			};
		}
		if (defaults.main) {
			fixes[defaults.main] = {
				'role': 'main'
			};
			fixes.main = {
				'role': ''
			};
		}
	}

	$.each(fixes,
		function(index, item) {
			$(index).not('[' + item[0] +']').attr(item);
		}
	);

};
