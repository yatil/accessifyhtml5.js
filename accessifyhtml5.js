/*
 * Accessifyhtml5.js
 *
 * Source: https://github.com/yatil/accessifyhtml5.js
 */

var AccessifyHTML5 = function (defaults) {

  "use strict";

  var fixes = {
      'article'   :    {'role':          'article'       },
      'aside'     :    {'role':          'complementary' },
      'nav'       :    {'role':          'navigation'    },
      'main'      :    {'role':          'main'          },
      'output'    :    {'aria-live':     'polite'        },
      'section'   :    {'role':          'region'        },
      '[required]':    {'aria-required': 'true'          }
  },
  fix, elems, attr, value, key, obj, i,
  Doc = document;

  if (Doc.querySelectorAll) {

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

    for (fix in fixes) {
      if (fixes.hasOwnProperty(fix)) {

        elems = Doc.querySelectorAll(fix);
        obj = fixes[fix];

        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            attr = key;
            value = obj[key];
          }
        }

        for (i = 0; i < elems.length; i++) {
          if (!elems[i].hasAttribute(attr)) {
            elems[i].setAttribute(attr, value);
          }
        }

      }
    }
  }
};
