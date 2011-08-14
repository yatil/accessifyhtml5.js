/*
 * Accessifyhtml5.js
 * Adds ARIA to new elements in browsers which don’t do it by themselves.
 * Just drop into the bottom of your web page:
 * <script src="accessifyhtml5.jquery.js"></script>
 *
 * Souce: http://www.html5accessibility.com/index-aria.html
 *
 * New in this version:
 * – Added non-jQuery version (Using querySelector, adds support in IE8+, FF3.5+, Opera 10+, Safari, Chrome as well as iOS, Android and Opera Mobile)
 * – Removed header.site getting role banner and footer.site getting role contentinfo -> If you need to add a class, you can also add the role directly to the HTML
 *
 * Acknowledgements: 
 * - @stevefaulkner for his work exploring html5 a11y,
 * - @paddya91 for object notation & document ready
 * - @ginader for reporting typo
 * - @webaxe for reporting an error
 * – @divya for the non-jQuery version: https://github.com/paulirish/html5-boilerplate/issues/274#issuecomment-1399875
 */

$(document).ready(function() {
    
    var aria = {
        'article'       : { 'role':          'article'       },
        'aside'         : { 'role':          'complementary' },
        'nav'           : { 'role':          'navigation'    },
        'output'        : { 'aria-live':     'polite'        },
        'section'       : { 'role':          'region'        },
        '[required]'    : { 'aria-required': 'true'          }
    };

    $.each(aria,
        function(index, item) {
            $(index).attr(item);
        }
    );
    
});