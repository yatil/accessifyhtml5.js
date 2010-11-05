/*
 * Accessifyhtml5.js
 * Adds ARIA to new elements in browsers which don’t do it by themselves.
 * Just drop into the bottom of your web page:
 * <script src="accessifyhtml5.js"></script>
 * 
 * Yes, it depends on jQuery.
 *
 * Souce: http://www.html5accessibility.com/index-aria.html
 *
 * Todo: Extend Script for other elements, probably even play with fallback JS for inaccessible audio/video.
 *
 * Acknowledgements: 
 * - @stevefaulkner for his work exploring html5 a11y,
 * - @paddya91 for object notation & document ready
 * - @ginader for reporting typo
 */

$(document).ready(function() {
    
    var fixes = {
        'header.site'   : { 'role': 'banner'        },
        'footer.site'   : { 'role': 'contentinfo'   },
        'article'       : { 'role': 'article'       },
        'aside'         : { 'aside': 'complementary'},
        'nav'           : { 'role': 'navigation'    },
        'output'        : { 'aria-live': 'polite'   },
        'section'       : { 'role': 'region'        },
        '[required]'    : { 'aria-required': 'true' }
    };

    $.each(fixes,
        function(index, item) {
            $(index).attr(item);
        }
    );
    
});