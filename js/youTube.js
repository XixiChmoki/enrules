var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player,firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var mainFlexGrow,mainMarginTop,wraYoutubePaddingLeft,wraYoutubePaddingRight,wraYoutubePaddingWidth,headerDisplay,ypt_wrapperMarginBottom,footerDisplay,ypt_player=document.getElementById("player"),playlistID=ypt_player.getAttribute("data-pl"),ypt_thumbs=document.getElementById("ypt_thumbs"),nowPlaying="ypt-now-playing",nowPlayingClass="."+nowPlaying,ypt_index=0;function getPlaylistData(t,a,e){var n="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+t+"&key=AIzaSyArQNfmJDkjxP_ZyZIocbyuDeyTanf4Rl8";e&&(n+="&pageToken="+e);var i=null;(i=new XMLHttpRequest).open("GET",n,!0),i.send(null),i.onload=function(e){buildJSON(i.responseText,a,t)}}function buildJSON(e,t,a){var n=JSON.parse(e);t||(t=[]),t.push.apply(t,n.items),n.nextPageToken?getPlaylistData(a,t,n.nextPageToken):buildHTML(t)}function buildHTML(e){var t="";for(i=0;i<e.length;i++){var a=e[i].snippet;a.thumbnails&&(t+='<li data-ypt-index="'+i+'"><p>'+a.title+'</p><span><img alt="'+a.title+'" src="'+a.thumbnails.medium.url+'"/></span></li>')}ypt_thumbs.innerHTML=t}function yptThumbHeight(){ypt_thumbs.style.height=document.getElementById("player").clientHeight+"px"}function onPlayerReady(e){yptThumbHeight()}getPlaylistData(playlistID),window.onYouTubeIframeAPIReady=function(){player=new YT.Player("player",{height:"360",width:"640",playerVars:{listType:"playlist",list:playlistID},events:{onReady:onPlayerReady,onStateChange:function(e){var t=player.getPlaylistIndex(),a=ypt_thumbs.getElementsByTagName("li"),n=a[t];if(e.data==YT.PlayerState.PLAYING){for(var i=0;i<a.length;i++)a[i].className="";n.className=nowPlaying}e.data==YT.PlayerState.ENDED&&t==a.length-1&&a[t].className==nowPlaying&&jQuery.event.trigger("playlistEnd")}}}),window.addEventListener("resize",function(e){yptThumbHeight()}),jQuery(document).on("click",'[data-ypt-index]:not(".ypt-now-playing")',function(e){ypt_index=Number(jQuery(this).attr("data-ypt-index")),navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?player.cuePlaylist({listType:"playlist",list:playlistID,index:ypt_index,suggestedQuality:"hd720"}):player.playVideoAt(ypt_index),jQuery(nowPlayingClass).removeClass(nowPlaying)})},window.addEventListener("orientationchange",function(){var e,t;window.matchMedia("(orientation: portrait)").matches?(document.querySelector(".body").style.justifyContent="center",headerDisplay=document.querySelector(".header").style.display,document.querySelector(".header").style.display="none",mainFlexGrow=document.querySelector(".main").style.flexGrow,mainMarginTop=document.querySelector(".main").style.marginTop,(e=document.querySelector(".main")).style.flexGrow="0",e.style.marginTop="0px",wraYoutubePaddingLeft=document.querySelector(".wraYoutube").style.paddingLeft,wraYoutubePaddingRight=document.querySelector(".wraYoutube").style.paddingRight,wraYoutubePaddingWidth=document.querySelector(".wraYoutube").style.width,(t=document.querySelector(".wraYoutube")).style.paddingLeft="0px",t.style.paddingRight="0px",ypt_wrapperMarginBottom=document.getElementById("ypt_wrapper").style.marginBottom,document.getElementById("ypt_wrapper").style.marginBottom="0",footerDisplay=document.querySelector(".footer").style.display,document.querySelector(".footer").style.display="none"):(document.querySelector(".body").style.justifyContent=null,document.querySelector(".header").style.display=headerDisplay,(e=document.querySelector(".main")).style.flexGrow=mainFlexGrow,e.style.marginTop=mainMarginTop,(t=document.querySelector(".wraYoutube")).style.paddingLeft=wraYoutubePaddingLeft,t.style.paddingRight=wraYoutubePaddingRight,document.getElementById("ypt_wrapper").style.marginBottom=ypt_wrapperMarginBottom,document.querySelector(".footer").style.display=footerDisplay)},!1);