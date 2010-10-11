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
 */


$('header.site').attr('role', 'banner');
$('footer.site').attr('role', 'contentinfo');


$('article').attr('role', 'article');
$('aside').attr('role', 'complementary');
$('nav').attr('role', 'navigation');
$('output').attr('aria-live', 'pollite');
$('section').attr('role', 'region');