var prevScrollpos=window.pageYOffset;window.onscroll=function(){var a=window.pageYOffset;prevScrollpos>a?document.getElementById("navbar").style.top="0":document.getElementById("navbar").style.top="-75px";prevScrollpos=a};var searchOpen=document.querySelector("#headerSearch"),searchPage=document.querySelector("#search"),searchInput=document.querySelector("#searchInput"),searchReset=document.querySelector("#searchReset"),searchNav=document.querySelector("#searchNav");
searchOpen.addEventListener("click",function(a){a.preventDefault();searchPage.style.height="100%";searchInput.focus();setTimeout(function(){document.body.style.overflowY="hidden"},500)});document.querySelector("#searchClose").addEventListener("click",function(a){a.preventDefault();searchPage.style.height="0";document.body.style.overflowY="visible"});searchPage.addEventListener("keyup",function(a){a.preventDefault();27===a.keyCode&&(searchPage.style.height="0",document.body.style.overflowY="visible")});
searchReset.addEventListener("click",function(){this.style.display="none";searchInput.focus();myAutocomplete.autocomplete.setVal("");searchNav.style.display=0<searchInput.value.length?"none":"block"});searchInput.addEventListener("keyup",function(){0<searchInput.value.length?(searchNav.style.display="none",searchReset.style.display="block"):(searchNav.style.display="block",searchReset.style.display="none")});
var client=algoliasearch("4X0L5EZUHF","2c3e03751f5b259ae833fe039896ad2e"),index=client.initIndex("jekyll"),myAutocomplete=autocomplete("#searchInput",{hint:!1,debug:!0},[{source:autocomplete.sources.hits(index,{hitsPerPage:100}),displayKey:"title",templates:{suggestion:function(a){return sugTemplate="<h2>"+a._highlightResult.title.value+"</h2><p>"+a._highlightResult.content.value+"</p>"},empty:function(a){return'No results for "'+a.query+'"'}}}]).on("autocomplete:selected",function(a,c,d){location.href=
  c.url}),urlHash=window.location.hash;if(0<urlHash.length){var inputCheck=document.getElementById(urlHash);inputCheck.checked=!0}var commentForm=document.querySelector(".comment-form"),commentFormInputs=document.querySelectorAll(".comment-form-input"),sendFailedDiv=document.querySelector(".comment-form-sendFailed"),sendSucceededDiv=document.querySelector(".comment-form-sendSucceeded"),overlayDiv=document.querySelector(".comment-form-overlay");
function post(a,c,d,e){var b=new XMLHttpRequest;b.open("POST",a);b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");b.onload=function(){200===b.status?d(b.responseText):200!==b.status&&e(b.responseText)};b.send(encodeURI(c))}
commentForm&&commentForm.addEventListener("submit",function(a){a.preventDefault();sendFailedDiv.style.display="none";sendSucceededDiv.style.display="none";for(var c=[],d=0;d<commentFormInputs.length;d++){var e=commentFormInputs[d];c.push(e.name+"="+e.value)}overlayDiv.style.display="flex";post(a.target.getAttribute("data-action"),c.join("&"),function(a){commentForm.reset();sendSucceededDiv.style.display="block";overlayDiv.style.display="none"},function(a){sendFailedDiv.style.display="block";overlayDiv.style.display=
  "none"})});