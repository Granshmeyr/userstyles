// ==UserScript==
// @name          Gelbooru | BIG Thumbnails for "Posts"
// @namespace     https://github.com/Granshmeyr/userstyles
// @description	 ⠀Enlarge and crop post thumbnails.
// @author        Grindle
// @homepage      https://github.com/Granshmeyr/userstyles
// @include       https://gelbooru.com/index.php?page=post&s=list*
// @run-at        document-idle
// @version       0.0.1
// ==/UserScript==
(function() {var css = [
	"article.thumbnail-preview img {",
	"    width: calc(100vw / 5); /* Change denominator to desired column amount */",
	"    height: calc(100vw / 5); /* Change denominator to desired column amount */",
	"    ",
	"    max-width: unset !important;",
	"    max-height: unset !important;",
	"    object-fit: cover !important;",
	"}",
	"",
	".thumbnail-preview {",
	"    width: calc(100vw / 5); /* Change denominator to desired column amount */",
	"    height: calc(100vw / 5); /* Change denominator to desired column amount */",
	"    ",
	"    margin-top: 0px !important;",
	"}",
	"",
	"/* Settings for small viewport mode (<850px) */",
	"@media only screen and (max-width: 850px) and (min-width: 500px) {",
	"    .thumbnail-preview {",
	"        width: 33.33vw !important;",
	"        height: 33.33vw !important;",
	"    }",
	"}",
	"",
	"@media only screen and (max-width: 850px) and (min-width: 500px) {",
	"    article.thumbnail-preview img {",
	"        width: 33.33vw !important;",
	"        height: 33.33vw !important;",
	"    }",
	"}",
	"",
	"/* These are for removing the tags sidebar */",
	".aside {",
	"    display: none !important;",
	"}",
	"",
	"#container {",
	"    grid-template-columns: auto !important;",
	"}",
	"",
	"/* Hides scrollbars */",
	"body::-webkit-scrollbar {",
	"  display: none;",
	"}",
	"    ",
	"body {",
	"  -ms-overflow-style: none;",
	"  scrollbar-width: none;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
