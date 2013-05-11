# accessifyhtml5.js

The polyfill for a more accessible HTML5.

## Which problem is solved with this polyfill?

While most browsers work all right with the new semantic elements of HTML5, they don’t add the ARIA accessibility attributes that the specification demands. This small JavaScript adds those attributes to enhance accessibility of web sites.

## How to use accessifyhtml5.js?

Just link to the `accessifyhtml5.js` file and call the AccessifyHTML5-Function _at the bottom of your page_ right before the closing `</body>` tag:

```html
<script src="accessifyhtml5.js"></script>
<script>AccessifyHTML5();</script>
```

There are some options you’re able to specify as they can be on each web page only once.

* `header`: A CSS selector that selects exactly one element on the page which will get the [role `banner`](http://www.w3.org/TR/wai-aria/roles#banner).
* `footer`: A CSS selector that selects exactly one element on the page which will get the [role `contentinfo`](http://www.w3.org/TR/wai-aria/roles#contentinfo).
* `main`: A CSS selector that selects exactly one element on the page which will get the [role `main`](http://www.w3.org/TR/wai-aria/roles#main).

### Example:

```html
<script src="accessifyhtml5.js"></script>
<script>
	AccessifyHTML5({
		header:"body>header",
		footer:"body>footer",
		main: "#main"
	});
</script>
```

## jQuery

**Important:** From today on, 2013-03-27, the jQuery version of accessifyhtml5.js is deprecated. Use the vanilla JS version instead. (You can just replace the jQuery version with the non-jQuery JS file.)

```html
<script src="accessifyhtml5.jquery.js"></script>
<script>AccessifyHTML5();</script>
```

## CDN

I’ve created a small CDN that should serve the JS file quite fast. I recommend to use the code here and copy it to the bottom of your project’s HTML file. Code:

```html
<script src="//yatil-cdn.s3.amazonaws.com/accessifyhtml5.min.js"></script>
<script>AccessifyHTML5();</script>
```

## Changelog

### Version 2 (2013-03-27)

* Thanks to [@nfreear](https://github.com/nfreear) for adding tests and HTML4 element support. Really a great extension.
* The jQuery version is now deprecated.
* The CDN version got updated, the jQuery version was replaced by the non-jQuery version. (They share the same API, so there shouldn’t be a problem here.)

### Version 1.5

* Added support for the standard `<main>` element as specified by the W3C. If you specify your own element for the `main` role, I reset the `main` role for the `<main>` element. (There can’t be more than one element with the role `main`.)

### Version 1.0

* Added support for specifying the main part of the web site using the `main` parameter (as requested by @yellowled).
* The script won’t overwrite your specified roles.

### Version 1.0 beta

* Added non-jQuery version (Using querySelector, adds support in IE8+, FF3.5+, Opera 10+, Safari, Chrome as well as iOS, Android and Opera Mobile)
* Removed header.site getting role banner and footer.site getting role contentinfo -> If you need to add a class, you can also add the role directly to the HTML
* Thanks to @adickson you can just add selectors for banner and contentinfo when calling the function
* You’ll now have to call AccessifyHTML5-function like that: `AccessifyHTML5({header:"#header", footer:"#footer"});`

## Acknowledgements:

* [@nfreear](https://github.com/nfreear) for making this a really awesome project
* [@adickson](https://github.com/adickson) for a really good non-jQuery solution
* [@stevefaulkner](https://github.com/stevefaulkner) for [his work exploring html5 a11y](http://html5accessibility.com/)
* [@paddya91](https://twitter.com/paddya91) for object notation
* [@ginader](https://github.com/ginader) for reporting a typo
* [@webaxe](https://twitter.com/webaxe) for reporting an error
* [@divya](https://github.com/nimbupani) for keeping me on track for a non-jQuery solution
* [@mathias](https://github.com/mathiasbynens) for improving my javascript

## Known Issues:

* According to [@jkiss](https://twitter.com/jkiss), Window-Eyes 7.11 struggles with aria-roles and HTML5, this is nothing I can solve with this script but is a screen reader issue. See: https://twitter.com/jkiss/status/5488643711967232
* Firefox adds roles by itself, so this script is not needed for those browsers. I haven’t found a way to detect if those implicit roles are set, so I can’t test that at the moment.

## License:

This project is [MIT licensed](http://outline.mit-license.org/).

## Author:

* Eric Eggert
* Twitter: @yatil
* Blog: http://yatil.net
* Workshops: http://modernwebaccessibility.com
