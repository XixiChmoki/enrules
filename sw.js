'use strict';

importScripts('sw-toolbox.js');

toolbox.precache([
	"/",
	"index.html",
	"/img/lala/London-wallpaper-9_2.jpg",
	"/img/lala/streamline_horizon.png",
	"/img/giphy.gif",
	"/img/english.jpg",
	"/irregular_verbs/",
	"/irregular_verbs_table.html",
	"/irregular_verbs_test.html",
	"js/irregular_verbs/irrMass.js",
	"js/irregular_verbs/irregular_verbs_table/irrTable.js",
	"js/irregular_verbs/irregular_verbs_test/irrMobileTest.js",
	"js/irregular_verbs/irregular_verbs_test/irrTest.js",
	"css/styles.css",
	"/js/jquery.js",
	"/js/sweet-alert.min.js",
	"/js/script.js",
	"/js/mainTest.js",
	"/js/mainBigTest.js",
	"/present_simple/",
	"/present_simple_stetement_easy.html",
	"/present_simple_stetement_medium.html",
	"/present_simple_negative_easy.html",
	"/present_simple_negative_medium.html",
	"/present_simple_question_easy.html",
	"/present_simple_question_medium.html",
	"/present_simple_special_question_easy.html",
	"/present_simple_special_question_medium.html",
	"/present_simple_to_be_statement_easy.html",
	"/present_simple_to_be_statement_medium.html",
	"/present_simple_to_be_negative_easy.html",
	"/present_simple_to_be_negative_medium.html",
	"/present_simple_to_be_question_easy.html",
	"/present_simple_to_be_question_medium.html",
	"/present_simple_to_be_special_question_easy.html",
	"/present_simple_to_be_special_question_medium.html",
	"/present_simple_big_test.html",
	"/js/beginner_pre-intermediate/present_simple/01_PresentSimpleStetementEasyMass.js",
	"/js/beginner_pre-intermediate/present_simple/02_PresentSimpleStetementMediumMass.js",
	"/js/beginner_pre-intermediate/present_simple/03_PresentSimpleNegativeEasy.js",
	"/js/beginner_pre-intermediate/present_simple/04_PresentSimpleNegativeMedium.js",
	"/js/beginner_pre-intermediate/present_simple/05_PresentSimpleQuestionEasy.js",
	"/js/beginner_pre-intermediate/present_simple/06_PresentSimpleQuestionMedium.js",
	"/js/beginner_pre-intermediate/present_simple/07_PresentSimpleSpecialQuestionEasy.js",
	"/js/beginner_pre-intermediate/present_simple/08_PresentSimpleSpecialQuestionMedium.js",
	"/js/beginner_pre-intermediate/present_simple/09_PresentSimpleToBeStatementEasy.js",
	"/js/beginner_pre-intermediate/present_simple/10_PresentSimpleToBeStatementMedium.js",
	"/js/beginner_pre-intermediate/present_simple/11_PresentSimpleToBeNegativeEasy.js",
	"/js/beginner_pre-intermediate/present_simple/12_PresentSimpleToBeNegativeMedium.js",
	"/js/beginner_pre-intermediate/present_simple/13_PresentSimpleToBeQuestionEasy.js",
	"/js/beginner_pre-intermediate/present_simple/14_PresentSimpleToBeQuestionMedium.js",
	"/js/beginner_pre-intermediate/present_simple/15_PresentSimpleToBeSpecialQuestionEasy.js",
	"/js/beginner_pre-intermediate/present_simple/16_PresentSimpleToBeSpecialQuestionMedium.js",
	"/js/beginner_pre-intermediate/present_simple/BigTest.js"
	]);

toolbox.router.get('/img/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
