/*
 * Accessifyhtml5.js
 * Adds ARIA to new elements in browsers which don’t do it by themselves.
 * Just drop into the bottom of your web page:
 * <script src="accessify.js"></script>
 *
 * Souce: http://www.html5accessibility.com/index-aria.html
 *
 * New in this version:
 * – Added non-jQuery version (Using querySelector, adds support in IE8+, FF3.5+, Opera 10+, Safari, Chrome as well as iOS, Android and Opera Mobile)
 * – Removed header.site getting role banner and footer.site getting role contentinfo -> If you need to add a class, you can also add the role directly to the HTML
 * – Thanks to @adickson you can just add selectors for banner and contentinfo when calling the function
 * – You’ll now have to call AccessifyHTML5-function like that
 *   AccessifyHTML5({header:"#header", footer:"#footer"});
 *
 * Acknowledgements:
 * - @adickson for a really good non-jquery solution
 * - @stevefaulkner for his work exploring html5 a11y
 * - @paddya91 for object notation & document ready
 * - @ginader for reporting typo
 * - @webaxe for reporting an error
 * – @divya for keeping me on track for a non-jQuery solution
*/

var AccessifyHTML5 = function (defaults) {
var accessified, selector, elements, ARIAobject, ARIAattr, attr, value, i

    if (document.querySelectorAll) {
        accessified = {
            'article'   :    {'role':  'article'       },
            'aside'     :    {'role':  'complementary' },
            'nav'       :    {'role':  'navigation'    },
            'output'    :    {'aria-live': 'polite'    },
            'section'   :    {'role':  'region'        },
            '[required]':    {'aria-required': 'true'  }
        };

        if (defaults && defaults.header) {
            accessified[defaults.header] = { 'role': 'banner' }
        }
        if (defaults && defaults.footer) {
            accessified[defaults.footer] = { 'role': 'contentinfo' }
        }

        for (selector in accessified) {

            elements   = document.querySelectorAll(selector),
            ARIAobject = accessified[selector],
            i = 0;

            for (ARIAattr in ARIAobject) {
                attr  = ARIAattr;
                value = ARIAobject[ARIAattr];
            }

            for (i; i < elements.length; i++) {
                elements[i].setAttribute(attr, value);
            }

        }
    }
};