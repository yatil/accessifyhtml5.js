/*
* Accessifyhtml5.js
* Adds ARIA to new elements in browsers which don’t do it by themselves.
* Just drop into the bottom of your web page:
* <script src="accessify.js"></script>
*
* Souce: http://www.html5accessibility.com/index-aria.html
*
* Todo: Extend Script for other elements, probably even play with fallback JS for inaccessible audio/video.
*
* Acknowledgements:
* - @stevefaulkner for his work exploring html5 a11y,
* - @paddya91 for object notation & document ready
* - @ginader for reporting typo
* - @webaxe for reporting an error
*/

/* 
* JS only version by adickson 
* 
*  You can specify an object containing default header and footer CSS selector properties when you call AccessifyHTML5
*  i.e. 
*    AccessifyHTML5({header:"#header", footer:"#footer"});
*
*/


var AccessifyHTML5 = function (defaults) {

        var fixes = {
            'header'    :    {'role':  'banner'        },
            'footer'    :    {'role':  'contentinfo'   },
            'article'   :    {'role':  'article'       },
            'aside'     :    {'role':  'complementary' },
            'nav'       :    {'role':  'navigation'    },
            'output'    :    {'aria-live': 'polite'    },
            'section'   :    {'role':  'region'        },
            '[required]':    {'aria-required': 'true'  }
        };
		
        if (defaults) {
            if (defaults.header) {
                delete fixes['header'];
                fixes[defaults.header] = {
                    'role': 'banner'
                };
            }
            if (defaults.footer) {
                delete fixes['footer'];
                fixes[defaults.footer] = {
                    'role': 'contentinfo'
                }
            }
        }

        for (fix in fixes) {

            var elems = document.querySelectorAll(fix),
                obj = fixes[fix],
                attr, value, i = 0;

            for (key in obj) {
                attr = key;
                value = obj[key];
            }

            for (i; i < elems.length; i++) {
                elems[i].setAttribute(attr, value);
            }

        }

    };