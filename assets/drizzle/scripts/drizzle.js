/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	import 'prismjs';

	const dom = {};

	dom.nav = document.getElementById('nav');
	dom.navMenu = document.getElementById('nav-menu');
	dom.navToggle = dom.nav.querySelector('a[href="#nav"]');
	dom.navLinks = dom.navMenu.querySelectorAll('a');

	function setActiveNavItem(pathname) {
	  const noIndex = str => str.replace(/index\.html$/, '');
	  const isMatch = a => noIndex(a.pathname) === noIndex(pathname);
	  const item = Array.from(dom.navLinks).find(isMatch);
	  if (item) {
	    item.classList.add('is-active');
	  }
	}

	dom.navToggle.addEventListener('click', event => {
	  event.preventDefault();
	  dom.nav.classList.toggle('is-active');
	});

	setActiveNavItem(window.location.pathname);

	dom.frameContainers = document.querySelectorAll('[data-drizzle-append-iframe]');

	if (dom.frameContainers.length) {
	  window.addEventListener('load', () => {
	    Array.from(dom.frameContainers).forEach(container => {
	      const src = container.getAttribute('data-drizzle-append-iframe');
	      const iframe = document.createElement('iframe');
	      iframe.addEventListener('load', () => {
	        container.classList.add('is-loaded');
	      });
	      iframe.setAttribute('src', src);
	      container.appendChild(iframe);
	    });
	  });
	}

/***/ })
/******/ ]);