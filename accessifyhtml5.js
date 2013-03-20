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
  fix, elems, attr, value, key, obj, i, mo, by_match, el_label,
  ATTR_SECURE = /aria-[a-z]+|role|tabindex|title|alt|data|lang|style/,
  ID_PREFIX = "acfy-id-",
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

        //Question: should we catch and report (or ignore) bad selector syntax?
        elems = Doc.querySelectorAll(fix);
        obj = fixes[fix];

        for (i = 0; i < elems.length; i++) {

          for (key in obj) {
            if (obj.hasOwnProperty(key)) {

              attr = key;
              value = obj[key];

              if (!attr.match(ATTR_SECURE)) {
                //? console.log("Warning: attribute not allowed, ignoring: "+ attr); //Warn?
                continue;
              }
              if (!(typeof value).match(/string|number/)) {
                //? console.log("Warning: value-type not allowed, ignoring: "+ typeof value); //Warn?
                continue;
              }

              // Connect up 'aria-labelledby'. //Question: do we accept poor spelling/ variations?
              var by_match = attr.match(/(describ|label)l?edby/);
              if (by_match) {
                el_label = Doc.querySelector(value); //Not: elems[i].querySel()

                if (! el_label) { continue; /* Warn? */ }

                if (! el_label.id) {
                  el_label.id = ID_PREFIX + n_label;
                }

                value = el_label.id;
                attr = "aria-" + ("label" == by_match[1] ? "labelledby" : "describedby");

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
