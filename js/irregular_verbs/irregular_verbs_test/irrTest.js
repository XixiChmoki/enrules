var a,b,c,d,e,question,ansver,numberItter;window.onload=function(){document.querySelector(".test__Start").onclick=function(){document.querySelector(".test__Start").style.display="none",document.querySelector(".testInterval__Start").style.display="block",document.getElementById("testResult").className="testResult__Start",document.querySelector(".testResult__Start").disabled=!1,numbVerb(),numbForm(),correctWords(),tableTest(),cursor(),doIt()},document.querySelector(".testRestart__Start").onclick=function(){document.querySelector(".testRestart__Start").style.display="none",document.querySelector(".testInterval__Start").style.display="block",document.getElementById("testResult").className="testResult__Start",document.querySelector(".testResult__Start").disabled=!1,numbVerb(),numbForm(),correctWords(),tableTest(),cursor(),doIt()},document.querySelector(".testResult__Stop").disabled=!0};var something=Object.keys(irregularRussian).length;c=rand(a=0,b=something-1),d=rand(0,2),e="Your ansver?",numberItter=10;var words=[],numberVerb=[],numberForm=[],arrAnsvers=[];function rand(r,e){var s=e-r+1;return Math.floor(Math.random()*s)+r}for(var table=document.querySelector(".tableTest"),i=0;i<numberItter;i++)table.innerHTML+="<div class='tableTest__row'><div><span class='tableTest__row__irr'> - </span></div><div><span class='tableTest__row__irr'> - </span></div><div><span class='tableTest__row__irr'> - </span></div></div>";function numbVerb(){var r;numberVerb=[];for(var e=0;e<numberItter;e++)r=rand(a,b),-1==numberVerb.indexOf(r)?numberVerb.push(r):(e--,console.log(r));return console.log(numberVerb),numberVerb}function numbForm(){var r;numberForm=[];for(var e=0;e<numberItter;e++)r=rand(0,2),numberForm.push(r);return console.log(numberForm),numberForm}function correctWords(){words=[];for(var r=numberVerb,e=numberForm,s=0;s<numberItter;s++){var t=e[s],a=r[s];0==t?words.push(irregularOne[a].toString()):1==t?words.push(irregularTwo[a].toString()):words.push(irregularThree[a].toString())}return console.log(words),words}function tableTest(){var r=document.querySelector(".tableTest");r.innerHTML="";for(var e=0;e<numberItter;e++){var s=numberForm[e],t=numberVerb[e];switch(s){case 0:r.innerHTML+="<div class='tableTest__row'><div><input class='ansver' type='text' maxlength = 13></div><div><span class='tableTest__row__irr'>"+irregularTwo[t]+"</span></div><div><span class='tableTest__row__irr'>"+irregularThree[t]+"</span></div></div>";break;case 1:r.innerHTML+="<div class='tableTest__row'><div><span class='tableTest__row__irr'>"+irregularOne[t]+"</span></div><div><input class='ansver' type='text' maxlength = 13></div><div><span class='tableTest__row__irr'>"+irregularThree[t]+"</span></div></div>";break;case 2:r.innerHTML+="<div class='tableTest__row'><div><span class='tableTest__row__irr'>"+irregularOne[t]+"</span></div><div><span class='tableTest__row__irr'>"+irregularTwo[t]+"</span></div><div><span><input class='ansver' type='text' maxlength = 13></span></div></div>";break;default:console.log("something wrong")}}}function cursor(){document.querySelector(".ansver").focus()}function ansvers(){var r=document.querySelectorAll(".ansver");arrAnsvers=[];for(var e=0;e<r.length;e++){var s=r[e].value.toString().toLowerCase().trim();arrAnsvers.push(s)}return console.log(arrAnsvers),arrAnsvers}function resultt(){for(var r=0;r<numberItter;r++)arrAnsvers[r].toString().toLowerCase()==words[r]?console.log(r+" Good!"):console.log(r+" Bad! Need - "+words[r]+". Your ansver - "+arrAnsvers[r])}function ansv(){return ansver=0==d?prompt(e+" - "+irregularTwo[c]+" - "+irregularThree[c]):1==d?prompt(irregularOne[c]+" - "+e+" - "+irregularThree[c]):prompt(irregularOne[c]+" - "+irregularTwo[c]+" - "+e)}function ques(){return question=0==d?irregularOne[c]:1==d?irregularTwo[c]:irregularThree[c]}function result(){ansv()==ques()?alert("Good!"):alert("You are luser!!!")}function doIt(){i=120;var r=setInterval(function(){i<=30&&(document.getElementById("siteTime").style.color="orange"),i<=10&&(document.getElementById("siteTime").style.color="red"),0==(document.getElementById("siteTime").innerHTML=i)&&(showResult(),document.getElementById("siteTime").style.color="black",document.querySelector(".testInterval__Start").style.display="none",document.querySelector(".testRestart__Start").style.display="block",clearInterval(r),document.getElementById("siteTime").innerHTML="Время вышло!!!"),i-=1},1e3);document.querySelector(".testResult__Start").onclick=function(){document.getElementById("testResult").className="testResult__Stop",document.querySelector(".testResult__Stop").disabled=!0,clearInterval(r),document.querySelector(".testInterval__Start").style.display="none",document.querySelector(".testRestart__Start").style.display="block",showResult()}}function showResult(){ansvers(),resultt(),testResult()}function testResult(){var r=document.querySelector(".tableTest");r.innerHTML="";for(var e=0;e<numberItter;e++){var s=numberForm[e],t=numberVerb[e];switch(s){case 0:arrAnsvers[e].toString().toLowerCase()==words[e]?r.innerHTML+="<div class='tableTest__row'><div class='tableTest__row__right'><span>"+irregularOne[t]+"</span></div><div><span>"+irregularTwo[t]+"</span></div><div><span>"+irregularThree[t]+"</span></div></div>":""==arrAnsvers[e]?r.innerHTML+="<div class='tableTest__row'><div class='tableTest__row__badAnsver'><span style='background-color: #FFA0B3;'>???</span><span class='tableTest__row__rArr'> &rarr; </span><span>"+irregularOne[t]+"</span></div><div><span>"+irregularTwo[t]+"</span></div><div><span>"+irregularThree[t]+"</span></div></div>":r.innerHTML+="<div class='tableTest__row'><div class='tableTest__row__badAnsver'><span style='background-color: #FFA0B3;'>"+arrAnsvers[e]+"</span><span class='tableTest__row__rArr'> &rarr; </span><span>"+irregularOne[t]+"</span></div><div><span>"+irregularTwo[t]+"</span></div><div><span>"+irregularThree[t]+"</span></div></div>";break;case 1:arrAnsvers[e].toString().toLowerCase()==words[e]?r.innerHTML+="<div class='tableTest__row'><div><span>"+irregularOne[t]+"</span></div><div class='tableTest__row__right'><span>"+irregularTwo[t]+"</span></div><div><span>"+irregularThree[t]+"</span></div></div>":""==arrAnsvers[e]?r.innerHTML+="<div class='tableTest__row'><div><span>"+irregularOne[t]+"</span></div><div class='tableTest__row__badAnsver'><span style='background-color: #FFA0B3;'>???</span><span class='tableTest__row__rArr'> &rarr; </span><span>"+irregularTwo[t]+"</span></div><div><span>"+irregularThree[t]+"</span></div></div>":r.innerHTML+="<div class='tableTest__row'><div><span>"+irregularOne[t]+"</span></div><div class='tableTest__row__badAnsver'><span style='background-color: #FFA0B3;'>"+arrAnsvers[e]+"</span><span class='tableTest__row__rArr'> &rarr; </span><span>"+irregularTwo[t]+"</span></div><div><span>"+irregularThree[t]+"</span></div></div>";break;case 2:arrAnsvers[e].toString().toLowerCase()==words[e]?r.innerHTML+="<div class='tableTest__row'><div><span>"+irregularOne[t]+"</span></div><div><span>"+irregularTwo[t]+"</span></div><div class='tableTest__row__right'><span>"+irregularThree[t]+"</span></div></div>":""==arrAnsvers[e]?r.innerHTML+="<div class='tableTest__row'><div><span>"+irregularOne[t]+"</span></div><div><span>"+irregularTwo[t]+"</span></div><div class='tableTest__row__badAnsver'><span style='background-color: #FFA0B3;'>???</span><span class='tableTest__row__rArr'> &rarr; </span><span>"+irregularThree[t]+"</span></div>":r.innerHTML+="<div class='tableTest__row'><div><span>"+irregularOne[t]+"</span></div><div><span>"+irregularTwo[t]+"</span></div><div class='tableTest__row__badAnsver'><span style='background-color: #FFA0B3;'>"+arrAnsvers[e]+"</span><span class='tableTest__row__rArr'> &rarr; </span><span>"+irregularThree[t]+"</span></div></div>";break;default:console.log("something wrong")}}}