var a,b,c,d,e,question,ansver,numberItter;window.onload=function(){numberSentence(),correctWords(),tableTest(),enter(),cursor();var r=document.querySelector(".psevBtnBack"),n=document.querySelector("#btnNext"),s=document.querySelector("#btnBack"),e=document.querySelector("#hint"),t=document.querySelector("#testResult"),a=document.querySelector("#restartTest"),o=document.querySelector(".numbQuestion"),l=document.querySelector(".tableTestMobile").children,c=document.querySelector(".numbQuestion"),i=0;n.onclick=function(){var e=document.querySelectorAll(".ansver");i!=l.length-1&&(l[i].style.display="none",l[++i].style.display="block",e[i].focus(),c.innerHTML=i+1+"/10",0<i&&(r.style.display="none",s.style.display="block"),i==l.length-1&&(n.style.display="none",t.style.display="block"))},s.onclick=function(){var e=document.querySelectorAll(".ansver");0!=i&&(l[i].style.display="none",l[--i].style.display="block",e[i].focus(),c.innerHTML=i+1+"/10",n.style.display="block",t.style.display="none",0==i&&(r.style.display="block",s.style.display="none"))},document.getElementById("testResult").onclick=function(){s.style.display="none",t.style.display="none",o.style.display="none",a.style.display="block",e.style.display="none",showResult()},a.onclick=function(){numberSentence(),correctWords(),rewriteMassWords(),tableTest(),enter(),cursor(),i=0,c.innerHTML="1/10",a.style.display="none",r.style.display="block",e.style.display="block",n.style.display="block",o.style.display="block"},document.querySelector("#hint").onclick=function(){var e=numberSentences[i];swal({title:sweet,type:"info",confirmButtonColor:"#7CD1F9",text:arrBib[e].desc})}};var something=Object.keys(arrBib).length,somethingVariors=Object.keys(arrBib[0].variors).length;c=rand(a=0,b=something-1),d=rand(0,2),e="Your ansver?",numberItter=10;var words=[],numberSentences=[],numberAnsvers=[],arrAnsvers=[],assMassWords="";function rand(e,r){var n=r-e+1;return Math.floor(Math.random()*n)+e}function numberSentence(){var e;numberSentences=[];for(var r=0;r<numberItter;r++)e=rand(a,b),-1==numberSentences.indexOf(e)?numberSentences.push(e):r--;return numberSentences}function numberAnsver(e){numberAnsvers=[];for(var r,n=Object.keys(arrBib[e].variors).length-1,s=0;s<Object.keys(arrBib[e].variors).length;s++)r=rand(0,n),-1==numberAnsvers.indexOf(r)?numberAnsvers.push(r):s--;return numberAnsvers}function numbToWord(e){for(var r=[],n=numberAnsver(e),s=0;s<Object.keys(arrBib[e].variors).length;s++)r.push(arrBib[e].variors[n[s]]);return"`"+r.join("` or `")+"`"}function arrVariour(){for(var e={},r=0;r<Object.keys(arrBib).length;r++)e[r]=numbToWord(r);return e}function rewriteMassWords(){return assMassWords=arrVariour()}function correctWords(){words=[];for(var e=numberSentences,r=0;r<numberItter;r++){var n=e[r];words.push(arrBib[n].right.toLowerCase().toString())}return console.log(words),words}function tableTest(){var e=document.querySelector(".tableTestMobile");e.innerHTML="";for(var r=0;r<numberItter;r++){var n=numberSentences[r];e.innerHTML+="<div class='tableTest__slide'><div class='tableTest__row'><div><span class='tableTest__row__irr'>"+arrBib[n].sentencesFirst+"___"+arrBib[n].sentencesSecond+"</span></div></div><div class='tableTest__row'>"+assMassWords[n]+'</span></div><div class="row"><input class="ansver" type="text" placeholder=\'Your answer\' id=\'body\' autocomplete=\'off\' maxlength = 90><label for="body">Your answer</label></div></div>'}}function cursor(){document.querySelector(".ansver").focus()}function ansvers(){var e=document.querySelectorAll(".ansver");arrAnsvers=[];for(var r=0;r<e.length;r++){var n=e[r].value.toString().toLowerCase().trim();arrAnsvers.push(n)}return console.log(arrAnsvers),arrAnsvers}function resultt(){for(var e=0;e<numberItter;e++)arrAnsvers[e].toString().toLowerCase()==words[e]?console.log(e+" Good!"):console.log(e+" Bad! Need - "+words[e]+". Your ansver - "+arrAnsvers[e])}function showResult(){ansvers(),resultt(),testResult()}function testResult(){var e=document.querySelector(".tableTestMobile");e.innerHTML="";for(var r=0;r<numberItter;r++){var n=numberSentences[r];arrAnsvers[r].toString().toLowerCase()==words[r]?e.innerHTML+="<div class='tableTest__result'><span>"+arrBib[n].sentencesFirst+"</span><span>&nbsp;</span><span class='tableTest__result__right'>"+arrBib[n].right+"</span><span>&nbsp;</span><span>"+arrBib[n].sentencesSecond+"</span></div>":""==arrAnsvers[r]?e.innerHTML+="<div class='tableTest__result'><span>"+arrBib[n].sentencesFirst+"</span><span>&nbsp;</span><span class='tableTest__result__quest'>???</span><span>&nbsp;</span><span>"+arrBib[n].sentencesSecond+"</span></div>":e.innerHTML+="<div class='tableTest__result'><span>"+arrBib[n].sentencesFirst+"</span><span>&nbsp;</span><span class='tableTest__result__badAnsver'>"+arrAnsvers[r]+"</span><span>&nbsp;(</span><span>"+arrBib[n].right+"</span><span>)</span><span>&nbsp;</span><span>"+arrBib[n].sentencesSecond+"</span></div>"}}function enter(){$(".ansver").keyup(function(e){13==e.keyCode&&btnNext.click()})}assMassWords=arrVariour();