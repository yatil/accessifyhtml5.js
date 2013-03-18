/*
 * Accessifyhtml5.js
 *
 * Source: https://github.com/yatil/accessifyhtml5.js
 */

var AccessifyHTML5 = function (defaults, more_fixes) {

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
  fix, elems, attr, value, key, obj, i, mo, el_label,
  n_label = 0,
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

    for (mo in more_fixes) {
      fixes[mo] = more_fixes[mo];
    }

    for (fix in fixes) {
      if (fixes.hasOwnProperty(fix)) {

        elems = Doc.querySelectorAll(fix);
        obj = fixes[fix];

        for (i = 0; i < elems.length; i++) {

          for (key in obj) {
            if (obj.hasOwnProperty(key)) {

              attr = key;
              value = obj[key];

              // Connect up 'aria-labelledby'
              if (attr.match(/labell?edby/)) {
                el_label = Doc.querySelector(value); //Not: elems[i].querySel()

                if (! el_label) { continue; /* Warn? */ }

                if (! el_label.id) {
                  el_label.id = "acfy-label-" + n_label;
                }

                value = el_label.id;
                attr = 'aria-labelledby';

                n_label++;
              }

              if (!elems[i].hasAttribute(attr)) {
                elems[i].setAttribute(attr, value);
              }

            }
          }

        } //End: for (i..elems..i++)

      }
    } //End: for (fix in fixes)
  }
};
