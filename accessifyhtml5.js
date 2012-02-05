/*
 * Accessifyhtml5.js
 *
 * Source: https://github.com/yatil/accessifyhtml5.js
 */

var AccessifyHTML5 = function (defaults) {
	if (document.querySelectorAll) {
		var fixes = {
			'article'   :    {'role':          'article'       },
			'aside'     :    {'role':          'complementary' },
			'nav'       :    {'role':          'navigation'    },
			'output'    :    {'aria-live':     'polite'        },
			'section'   :    {'role':          'region'        },
			'[required]':    {'aria-required': 'true'          }
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
				}
			}
			if (defaults.main) {
				fixes[defaults.main] = {
					'role': 'main'
				}
			}
		}

		for (var fix in fixes) {

			var elems = document.querySelectorAll(fix),
			    obj = fixes[fix],
			    attr, value, key, i = 0;

			for (key in obj) {
				attr = key;
				value = obj[key];
			}

			for (i; i < elems.length; i++) {
				if (!elems[i].hasAttribute(attr)) {
					elems[i].setAttribute(attr, value);
				};
			}

		}
	}
};