/*
 Accessifyhtml5.js - Test utilities.

 (Choice of 'q' as the global is a bit random! @nfreear)
*/
/*jslint browser: true, indent: 2 */

"use strict";

var q = {
  ///ex_ID: 'acfy-id-0',

  // Utilities: these need to exist after - see ::tearDown().
  log: function (s) {
    if (typeof console === 'object') console.log(arguments.length > 1 ? arguments : s)
  },
  select: function (selector) {
    return document.querySelector(selector);
  },
  selectAll: function (selector) {
    return document.querySelectorAll(selector);
  },
  addScript: function (js, pos, id) {
    id = pos && !pos.match(/head|body/) ? pos : id;
    pos = 'head' === pos ? pos : 'body';
    var h = document.getElementsByTagName(pos)[0],
      s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = js;
    if (id) {
      s.id = id;
    }
    h.appendChild(s);
  },
  onload: function (fn) {
    var w = window;
    if (w.addEventListener) { //W3C standard
      w.addEventListener('load', fn, false); //NB **not** 'onload'
    }
    else if (w.attachEvent) { //Microsoft
      w.attachEvent('onload', fn);
    }
  }
};

// If requested load the minified Javascript:
// bjs2.html?min=1
if (document.location.search.match(/[&\?]min/)) {
  q.addScript("../accessifyhtml5.min.js", "acfy-js");
} else {
  q.addScript("../accessifyhtml5.js", "acfy-js");
}
