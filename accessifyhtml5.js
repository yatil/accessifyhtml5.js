/*
 * Accessifyhtml5.js
 *
 * Source: https://github.com/yatil/accessifyhtml5.js
 */

var AccessifyHTML5 = function (defaults) {

  "use strict";

  if (document.querySelectorAll) {
    var fixes = {
      'article'   :    {'role':          'article'       },
      'aside'     :    {'role':          'complementary' },
      'nav'       :    {'role':          'navigation'    },
      'main'      :    {'role':          'main'          },
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

    for (var fix in fixes) {
      if (fixes.hasOwnProperty(fix)) {

        var elems = document.querySelectorAll(fix),
                              obj = fixes[fix],
                              attr, value, key, i = 0;

        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            attr = key;
            value = obj[key];
          }
        }

        for (i; i < elems.length; i++) {
          if (!elems[i].hasAttribute(attr)) {
            elems[i].setAttribute(attr, value);
          }
        }

      }
    }
  }
};
