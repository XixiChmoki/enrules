'use strict';

importScripts('sw-toolbox.js');

toolbox.precache([
	"/",
	"index.html",
	"/irregular_verbs/",
	"/irregular_verbs_table.html",
	"/irregular_verbs_test.html",
	"js/irregular_verbs/irrMass.js",
	"js/irregular_verbs/irregular_verbs_table/irrTable.js",
	"js/irregular_verbs/irregular_verbs_test/irrMobileTest.js",
	"js/irregular_verbs/irregular_verbs_test/irrTest.js",
	"css/styles.css"
	]);

toolbox.router.get('/img/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
