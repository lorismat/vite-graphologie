var rm=Object.defineProperty;var am=(n,e,t)=>e in n?rm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Vu=(n,e,t)=>(am(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */const tr=(n,e)=>{for(let t in e)n[t]=e[t];return n},Ge=(n,e)=>Array.from(n.querySelectorAll(e)),Go=(n,e,t)=>{t?n.classList.add(e):n.classList.remove(e)},js=n=>{if(typeof n=="string"){if(n==="null")return null;if(n==="true")return!0;if(n==="false")return!1;if(n.match(/^-?[\d\.]+$/))return parseFloat(n)}return n},Bi=(n,e)=>{n.style.transform=e},fo=(n,e)=>{let t=n.matches||n.matchesSelector||n.msMatchesSelector;return!(!t||!t.call(n,e))},Wt=(n,e)=>{if(typeof n.closest=="function")return n.closest(e);for(;n;){if(fo(n,e))return n;n=n.parentNode}return null},Oh=n=>{let e=(n=n||document.documentElement).requestFullscreen||n.webkitRequestFullscreen||n.webkitRequestFullScreen||n.mozRequestFullScreen||n.msRequestFullscreen;e&&e.apply(n)},zl=n=>{let e=document.createElement("style");return e.type="text/css",n&&n.length>0&&(e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))),document.head.appendChild(e),e},Hu=()=>{let n={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,e=>{n[e.split("=").shift()]=e.split("=").pop()});for(let e in n){let t=n[e];n[e]=js(unescape(t))}return n.dependencies!==void 0&&delete n.dependencies,n},om={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Bh=navigator.userAgent,ir=/(iphone|ipod|ipad|android)/gi.test(Bh)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,kh=/android/gi.test(Bh);var lm=function(n){if(n){var e=function(C){return[].slice.call(C)},t=3,i=[],s=null,r="requestAnimationFrame"in n?function(){n.cancelAnimationFrame(s),s=n.requestAnimationFrame(function(){return o(i.filter(function(C){return C.dirty&&C.active}))})}:function(){},a=function(C){return function(){i.forEach(function(P){return P.dirty=C}),r()}},o=function(C){C.filter(function(k){return!k.styleComputed}).forEach(function(k){k.styleComputed=h(k)}),C.filter(d).forEach(f);var P=C.filter(u);P.forEach(c),P.forEach(function(k){f(k),l(k)}),P.forEach(_)},l=function(C){return C.dirty=0},c=function(C){C.availableWidth=C.element.parentNode.clientWidth,C.currentWidth=C.element.scrollWidth,C.previousFontSize=C.currentFontSize,C.currentFontSize=Math.min(Math.max(C.minSize,C.availableWidth/C.currentWidth*C.previousFontSize),C.maxSize),C.whiteSpace=C.multiLine&&C.currentFontSize===C.minSize?"normal":"nowrap"},u=function(C){return C.dirty!==2||C.dirty===2&&C.element.parentNode.clientWidth!==C.availableWidth},h=function(C){var P=n.getComputedStyle(C.element,null);return C.currentFontSize=parseFloat(P.getPropertyValue("font-size")),C.display=P.getPropertyValue("display"),C.whiteSpace=P.getPropertyValue("white-space"),!0},d=function(C){var P=!1;return!C.preStyleTestCompleted&&(/inline-/.test(C.display)||(P=!0,C.display="inline-block"),C.whiteSpace!=="nowrap"&&(P=!0,C.whiteSpace="nowrap"),C.preStyleTestCompleted=!0,P)},f=function(C){C.element.style.whiteSpace=C.whiteSpace,C.element.style.display=C.display,C.element.style.fontSize=C.currentFontSize+"px"},_=function(C){C.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:C.previousFontSize,newValue:C.currentFontSize,scaleFactor:C.currentFontSize/C.previousFontSize}}))},m=function(C,P){return function(){C.dirty=P,C.active&&r()}},v=function(C){return function(){i=i.filter(function(P){return P.element!==C.element}),C.observeMutations&&C.observer.disconnect(),C.element.style.whiteSpace=C.originalStyle.whiteSpace,C.element.style.display=C.originalStyle.display,C.element.style.fontSize=C.originalStyle.fontSize}},p=function(C){return function(){C.active||(C.active=!0,r())}},y=function(C){return function(){return C.active=!1}},w=function(C){C.observeMutations&&(C.observer=new MutationObserver(m(C,1)),C.observer.observe(C.element,C.observeMutations))},b={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in n&&{subtree:!0,childList:!0,characterData:!0}},R=null,L=function(){n.clearTimeout(R),R=n.setTimeout(a(2),T.observeWindowDelay)},N=["resize","orientationchange"];return Object.defineProperty(T,"observeWindow",{set:function(C){var P="".concat(C?"add":"remove","EventListener");N.forEach(function(k){n[P](k,L)})}}),T.observeWindow=!0,T.observeWindowDelay=100,T.fitAll=a(t),T}function x(C,P){var k=Object.assign({},b,P),H=C.map(function(K){var G=Object.assign({},k,{element:K,active:!0});return function(B){B.originalStyle={whiteSpace:B.element.style.whiteSpace,display:B.element.style.display,fontSize:B.element.style.fontSize},w(B),B.newbie=!0,B.dirty=!0,i.push(B)}(G),{element:K,fit:m(G,t),unfreeze:p(G),freeze:y(G),unsubscribe:v(G)}});return r(),H}function T(C){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof C=="string"?x(e(document.querySelectorAll(C)),P):x([C],P)[0]}}(typeof window>"u"?null:window);let cm=class{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){if(this.Reveal.isScrollView())return!0;let t=this.Reveal.getConfig().preloadIframes;return typeof t!="boolean"&&(t=e.hasAttribute("data-preload")),t}load(e,t={}){e.style.display=this.Reveal.getConfig().display,Ge(e,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(s=>{(s.tagName!=="IFRAME"||this.shouldPreload(s))&&(s.setAttribute("src",s.getAttribute("data-src")),s.setAttribute("data-lazy-loaded",""),s.removeAttribute("data-src"))}),Ge(e,"video, audio").forEach(s=>{let r=0;Ge(s,"source[data-src]").forEach(a=>{a.setAttribute("src",a.getAttribute("data-src")),a.removeAttribute("data-src"),a.setAttribute("data-lazy-loaded",""),r+=1}),ir&&s.tagName==="VIDEO"&&s.setAttribute("playsinline",""),r>0&&s.load()});let i=e.slideBackgroundElement;if(i){i.style.display="block";let s=e.slideBackgroundContentElement,r=e.getAttribute("data-background-iframe");if(i.hasAttribute("data-loaded")===!1){i.setAttribute("data-loaded","true");let o=e.getAttribute("data-background-image"),l=e.getAttribute("data-background-video"),c=e.hasAttribute("data-background-video-loop"),u=e.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?s.style.backgroundImage=`url(${o.trim()})`:s.style.backgroundImage=o.split(",").map(h=>`url(${((d="")=>encodeURI(d).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,f=>`%${f.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(h.trim()))})`).join(",");else if(l){let h=document.createElement("video");c&&h.setAttribute("loop",""),(u||this.Reveal.isSpeakerNotes())&&(h.muted=!0),ir&&(h.muted=!0,h.setAttribute("playsinline","")),l.split(",").forEach(d=>{const f=document.createElement("source");f.setAttribute("src",d);let _=((m="")=>om[m.split(".").pop()])(d);_&&f.setAttribute("type",_),h.appendChild(f)}),s.appendChild(h)}else if(r&&t.excludeIframes!==!0){let h=document.createElement("iframe");h.setAttribute("allowfullscreen",""),h.setAttribute("mozallowfullscreen",""),h.setAttribute("webkitallowfullscreen",""),h.setAttribute("allow","autoplay"),h.setAttribute("data-src",r),h.style.width="100%",h.style.height="100%",h.style.maxHeight="100%",h.style.maxWidth="100%",s.appendChild(h)}}let a=s.querySelector("iframe[data-src]");a&&this.shouldPreload(i)&&!/autoplay=(1|true|yes)/gi.test(r)&&a.getAttribute("src")!==r&&a.setAttribute("src",r)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(".r-fit-text")).forEach(t=>{lm(t,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(e){e.style.display="none";let t=this.Reveal.getSlideBackground(e);t&&(t.style.display="none",Ge(t,"iframe[src]").forEach(i=>{i.removeAttribute("src")})),Ge(e,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(i=>{i.setAttribute("data-src",i.getAttribute("src")),i.removeAttribute("src")}),Ge(e,"video[data-lazy-loaded] source[src], audio source[src]").forEach(i=>{i.setAttribute("data-src",i.getAttribute("src")),i.removeAttribute("src")})}formatEmbeddedContent(){let e=(t,i,s)=>{Ge(this.Reveal.getSlidesElement(),"iframe["+t+'*="'+i+'"]').forEach(r=>{let a=r.getAttribute(t);a&&a.indexOf(s)===-1&&r.setAttribute(t,a+(/\?/.test(a)?"&":"?")+s)})};e("src","youtube.com/embed/","enablejsapi=1"),e("data-src","youtube.com/embed/","enablejsapi=1"),e("src","player.vimeo.com/","api=1"),e("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(e){if(e){const t=this.Reveal.isSpeakerNotes();Ge(e,'img[src$=".gif"]').forEach(i=>{i.setAttribute("src",i.getAttribute("src"))}),Ge(e,"video, audio").forEach(i=>{if(Wt(i,".fragment")&&!Wt(i,".fragment.visible"))return;let s=this.Reveal.getConfig().autoPlayMedia;if(typeof s!="boolean"&&(s=i.hasAttribute("data-autoplay")||!!Wt(i,".slide-background")),s&&typeof i.play=="function"){if(t&&!i.muted)return;if(i.readyState>1)this.startEmbeddedMedia({target:i});else if(ir){let r=i.play();r&&typeof r.catch=="function"&&i.controls===!1&&r.catch(()=>{i.controls=!0,i.addEventListener("play",()=>{i.controls=!1})})}else i.removeEventListener("loadeddata",this.startEmbeddedMedia),i.addEventListener("loadeddata",this.startEmbeddedMedia)}}),t||(Ge(e,"iframe[src]").forEach(i=>{Wt(i,".fragment")&&!Wt(i,".fragment.visible")||this.startEmbeddedIframe({target:i})}),Ge(e,"iframe[data-src]").forEach(i=>{Wt(i,".fragment")&&!Wt(i,".fragment.visible")||i.getAttribute("src")!==i.getAttribute("data-src")&&(i.removeEventListener("load",this.startEmbeddedIframe),i.addEventListener("load",this.startEmbeddedIframe),i.setAttribute("src",i.getAttribute("data-src")))}))}}startEmbeddedMedia(e){let t=!!Wt(e.target,"html"),i=!!Wt(e.target,".present");t&&i&&(e.target.paused||e.target.ended)&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let i=!!Wt(e.target,"html"),s=!!Wt(e.target,".present");if(i&&s){let r=this.Reveal.getConfig().autoPlayMedia;typeof r!="boolean"&&(r=t.hasAttribute("data-autoplay")||!!Wt(t,".slide-background")),/youtube\.com\/embed\//.test(t.getAttribute("src"))&&r?t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(t.getAttribute("src"))&&r?t.contentWindow.postMessage('{"method":"play"}',"*"):t.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(e,t={}){t=tr({unloadIframes:!0},t),e&&e.parentNode&&(Ge(e,"video, audio").forEach(i=>{i.hasAttribute("data-ignore")||typeof i.pause!="function"||(i.setAttribute("data-paused-by-reveal",""),i.pause())}),Ge(e,"iframe").forEach(i=>{i.contentWindow&&i.contentWindow.postMessage("slide:stop","*"),i.removeEventListener("load",this.startEmbeddedIframe)}),Ge(e,'iframe[src*="youtube.com/embed/"]').forEach(i=>{!i.hasAttribute("data-ignore")&&i.contentWindow&&typeof i.contentWindow.postMessage=="function"&&i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),Ge(e,'iframe[src*="player.vimeo.com/"]').forEach(i=>{!i.hasAttribute("data-ignore")&&i.contentWindow&&typeof i.contentWindow.postMessage=="function"&&i.contentWindow.postMessage('{"method":"pause"}',"*")}),t.unloadIframes===!0&&Ge(e,"iframe[data-src]").forEach(i=>{i.setAttribute("src","about:blank"),i.removeAttribute("src")}))}};const vs=".slides section",Oi=".slides>section",zu=".slides>section.present>section",um=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;class dm{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let i="none";e.slideNumber&&!this.Reveal.isPrintView()&&(e.showSlideNumber==="all"||e.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(i="block"),this.element.style.display=i}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,i=this.Reveal.getConfig(),s="h.v";if(typeof i.slideNumber=="function")t=i.slideNumber(e);else{typeof i.slideNumber=="string"&&(s=i.slideNumber),/c/.test(s)||this.Reveal.getHorizontalSlides().length!==1||(s="c");let a=e&&e.dataset.visibility==="uncounted"?0:1;switch(t=[],s){case"c":t.push(this.Reveal.getSlidePastCount(e)+a);break;case"c/t":t.push(this.Reveal.getSlidePastCount(e)+a,"/",this.Reveal.getTotalSlides());break;default:let o=this.Reveal.getIndices(e);t.push(o.h+a);let l=s==="h/v"?"/":".";this.Reveal.isVerticalSlide(e)&&t.push(l,o.v+1)}}let r="#"+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],r)}formatNumber(e,t,i,s="#"+this.Reveal.location.getHash()){return typeof i!="number"||isNaN(i)?`<a href="${s}">
					<span class="slide-number-a">${e}</span>
					</a>`:`<a href="${s}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${t}</span>
					<span class="slide-number-b">${i}</span>
					</a>`}destroy(){this.element.remove()}}class hm{constructor(e){this.Reveal=e,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let e,t=this.jumpInput.value.trim("");if(/^\d+$/.test(t)){const i=this.Reveal.getConfig().slideNumber;if(i==="c"||i==="c/t"){const s=this.Reveal.getSlides()[parseInt(t,10)-1];s&&(e=this.Reveal.getIndices(s))}}return e||(/^\d+\.\d+$/.test(t)&&(t=t.replace(".","/")),e=this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0})),!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(e){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),e)}search(e){const t=new RegExp("\\b"+e.trim()+"\\b","i"),i=this.Reveal.getSlides().find(s=>t.test(s.innerText));return i?this.Reveal.getIndices(i):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(e){e.keyCode===13?this.confirm():e.keyCode===27&&(this.cancel(),e.stopImmediatePropagation())}onInput(e){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}}const Wo=n=>{let e=n.match(/^#([0-9a-f]{3})$/i);if(e&&e[1])return e=e[1],{r:17*parseInt(e.charAt(0),16),g:17*parseInt(e.charAt(1),16),b:17*parseInt(e.charAt(2),16)};let t=n.match(/^#([0-9a-f]{6})$/i);if(t&&t[1])return t=t[1],{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)};let i=n.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(i)return{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10)};let s=n.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return s?{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10),a:parseFloat(s[4])}:null};class fm{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(e=>{let t=this.createBackground(e,this.element);Ge(e,"section").forEach(i=>{this.createBackground(i,t),t.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(e,t){let i=document.createElement("div");i.className="slide-background "+e.className.replace(/present|past|future/,"");let s=document.createElement("div");return s.className="slide-background-content",i.appendChild(s),t.appendChild(i),e.slideBackgroundElement=i,e.slideBackgroundContentElement=s,this.sync(e),i}sync(e){const t=e.slideBackgroundElement,i=e.slideBackgroundContentElement,s={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundVideo:e.getAttribute("data-background-video"),backgroundIframe:e.getAttribute("data-background-iframe"),backgroundColor:e.getAttribute("data-background-color"),backgroundGradient:e.getAttribute("data-background-gradient"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition"),backgroundOpacity:e.getAttribute("data-background-opacity")},r=e.hasAttribute("data-preload");e.classList.remove("has-dark-background"),e.classList.remove("has-light-background"),t.removeAttribute("data-loaded"),t.removeAttribute("data-background-hash"),t.removeAttribute("data-background-size"),t.removeAttribute("data-background-transition"),t.style.backgroundColor="",i.style.backgroundSize="",i.style.backgroundRepeat="",i.style.backgroundPosition="",i.style.backgroundImage="",i.style.opacity="",i.innerHTML="",s.background&&(/^(http|file|\/\/)/gi.test(s.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(s.background)?e.setAttribute("data-background-image",s.background):t.style.background=s.background),(s.background||s.backgroundColor||s.backgroundGradient||s.backgroundImage||s.backgroundVideo||s.backgroundIframe)&&t.setAttribute("data-background-hash",s.background+s.backgroundSize+s.backgroundImage+s.backgroundVideo+s.backgroundIframe+s.backgroundColor+s.backgroundGradient+s.backgroundRepeat+s.backgroundPosition+s.backgroundTransition+s.backgroundOpacity),s.backgroundSize&&t.setAttribute("data-background-size",s.backgroundSize),s.backgroundColor&&(t.style.backgroundColor=s.backgroundColor),s.backgroundGradient&&(t.style.backgroundImage=s.backgroundGradient),s.backgroundTransition&&t.setAttribute("data-background-transition",s.backgroundTransition),r&&t.setAttribute("data-preload",""),s.backgroundSize&&(i.style.backgroundSize=s.backgroundSize),s.backgroundRepeat&&(i.style.backgroundRepeat=s.backgroundRepeat),s.backgroundPosition&&(i.style.backgroundPosition=s.backgroundPosition),s.backgroundOpacity&&(i.style.opacity=s.backgroundOpacity);const a=this.getContrastClass(e);typeof a=="string"&&e.classList.add(a)}getContrastClass(e){const t=e.slideBackgroundElement;let i=e.getAttribute("data-background-color");if(!i||!Wo(i)){let r=window.getComputedStyle(t);r&&r.backgroundColor&&(i=r.backgroundColor)}if(i){const r=Wo(i);if(r&&r.a!==0)return typeof(s=i)=="string"&&(s=Wo(s)),(s?(299*s.r+587*s.g+114*s.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var s;return null}bubbleSlideContrastClassToElement(e,t){["has-light-background","has-dark-background"].forEach(i=>{e.classList.contains(i)?t.classList.add(i):t.classList.remove(i)},this)}update(e=!1){let t=this.Reveal.getConfig(),i=this.Reveal.getCurrentSlide(),s=this.Reveal.getIndices(),r=null,a=t.rtl?"future":"past",o=t.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((c,u)=>{c.classList.remove("past","present","future"),u<s.h?c.classList.add(a):u>s.h?c.classList.add(o):(c.classList.add("present"),r=c),(e||u===s.h)&&Ge(c,".slide-background").forEach((h,d)=>{h.classList.remove("past","present","future");const f=typeof s.v=="number"?s.v:0;d<f?h.classList.add("past"):d>f?h.classList.add("future"):(h.classList.add("present"),u===s.h&&(r=h))})}),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),r&&this.previousBackground){let c=this.previousBackground.getAttribute("data-background-hash"),u=r.getAttribute("data-background-hash");if(u&&u===c&&r!==this.previousBackground){this.element.classList.add("no-transition");const h=r.querySelector("video"),d=this.previousBackground.querySelector("video");if(h&&d){const f=h.parentNode;d.parentNode.appendChild(h),f.appendChild(d)}}}const l=r!==this.previousBackground;if(l&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),l&&r){this.Reveal.slideContent.startEmbeddedContent(r);let c=r.querySelector(".slide-background-content");if(c){let u=c.style.backgroundImage||"";/\.gif/i.test(u)&&(c.style.backgroundImage="",window.getComputedStyle(c).opacity,c.style.backgroundImage=u)}this.previousBackground=r}i&&this.bubbleSlideContrastClassToElement(i,this.Reveal.getRevealElement()),setTimeout(()=>{this.element.classList.remove("no-transition")},10)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,i,s=this.Reveal.getHorizontalSlides(),r=this.Reveal.getVerticalSlides(),a=this.element.style.backgroundSize.split(" ");a.length===1?t=i=parseInt(a[0],10):(t=parseInt(a[0],10),i=parseInt(a[1],10));let o,l,c=this.element.offsetWidth,u=s.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:u>1?(t-c)/(u-1):0,l=o*e.h*-1;let h,d,f=this.element.offsetHeight,_=r.length;h=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(i-f)/(_-1),d=_>0?h*e.v:0,this.element.style.backgroundPosition=l+"px "+-d+"px"}}destroy(){this.element.remove()}}let Gu=0;class pm{constructor(e){this.Reveal=e}run(e,t){this.reset();let i=this.Reveal.getSlides(),s=i.indexOf(t),r=i.indexOf(e);if(e&&t&&e.hasAttribute("data-auto-animate")&&t.hasAttribute("data-auto-animate")&&e.getAttribute("data-auto-animate-id")===t.getAttribute("data-auto-animate-id")&&!(s>r?t:e).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||zl();let a=this.getAutoAnimateOptions(t);e.dataset.autoAnimate="pending",t.dataset.autoAnimate="pending",a.slideDirection=s>r?"forward":"backward";let o=e.style.display==="none";o&&(e.style.display=this.Reveal.getConfig().display);let l=this.getAutoAnimatableElements(e,t).map(c=>this.autoAnimateElements(c.from,c.to,c.options||{},a,Gu++));if(o&&(e.style.display="none"),t.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let c=.8*a.duration,u=.2*a.duration;this.getUnmatchedAutoAnimateElements(t).forEach(h=>{let d=this.getAutoAnimateOptions(h,a),f="unmatched";d.duration===a.duration&&d.delay===a.delay||(f="unmatched-"+Gu++,l.push(`[data-auto-animate="running"] [data-auto-animate-target="${f}"] { transition: opacity ${d.duration}s ease ${d.delay}s; }`)),h.dataset.autoAnimateTarget=f},this),l.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${c}s ease ${u}s; }`)}this.autoAnimateStyleSheet.innerHTML=l.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){Ge(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(e=>{e.dataset.autoAnimate=""}),Ge(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(e=>{delete e.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,i,s,r){e.dataset.autoAnimateTarget="",t.dataset.autoAnimateTarget=r;let a=this.getAutoAnimateOptions(t,s);i.delay!==void 0&&(a.delay=i.delay),i.duration!==void 0&&(a.duration=i.duration),i.easing!==void 0&&(a.easing=i.easing);let o=this.getAutoAnimatableProperties("from",e,i),l=this.getAutoAnimatableProperties("to",t,i);if(t.classList.contains("fragment")&&delete l.styles.opacity,i.translate!==!1||i.scale!==!1){let h=this.Reveal.getScale(),d={x:(o.x-l.x)/h,y:(o.y-l.y)/h,scaleX:o.width/l.width,scaleY:o.height/l.height};d.x=Math.round(1e3*d.x)/1e3,d.y=Math.round(1e3*d.y)/1e3,d.scaleX=Math.round(1e3*d.scaleX)/1e3,d.scaleX=Math.round(1e3*d.scaleX)/1e3;let f=i.translate!==!1&&(d.x!==0||d.y!==0),_=i.scale!==!1&&(d.scaleX!==0||d.scaleY!==0);if(f||_){let m=[];f&&m.push(`translate(${d.x}px, ${d.y}px)`),_&&m.push(`scale(${d.scaleX}, ${d.scaleY})`),o.styles.transform=m.join(" "),o.styles["transform-origin"]="top left",l.styles.transform="none"}}for(let h in l.styles){const d=l.styles[h],f=o.styles[h];d===f?delete l.styles[h]:(d.explicitValue===!0&&(l.styles[h]=d.value),f.explicitValue===!0&&(o.styles[h]=f.value))}let c="",u=Object.keys(l.styles);return u.length>0&&(o.styles.transition="none",l.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,l.styles["transition-property"]=u.join(", "),l.styles["will-change"]=u.join(", "),c='[data-auto-animate-target="'+r+'"] {'+Object.keys(o.styles).map(h=>h+": "+o.styles[h]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+r+'"] {'+Object.keys(l.styles).map(h=>h+": "+l.styles[h]+" !important;").join("")+"}"),c}getAutoAnimateOptions(e,t){let i={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(i=tr(i,t),e.parentNode){let s=Wt(e.parentNode,"[data-auto-animate-target]");s&&(i=this.getAutoAnimateOptions(s,i))}return e.dataset.autoAnimateEasing&&(i.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(i.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(i.delay=parseFloat(e.dataset.autoAnimateDelay)),i}getAutoAnimatableProperties(e,t,i){let s=this.Reveal.getConfig(),r={styles:[]};if(i.translate!==!1||i.scale!==!1){let o;if(typeof i.measure=="function")o=i.measure(t);else if(s.center)o=t.getBoundingClientRect();else{let l=this.Reveal.getScale();o={x:t.offsetLeft*l,y:t.offsetTop*l,width:t.offsetWidth*l,height:t.offsetHeight*l}}r.x=o.x,r.y=o.y,r.width=o.width,r.height=o.height}const a=getComputedStyle(t);return(i.styles||s.autoAnimateStyles).forEach(o=>{let l;typeof o=="string"&&(o={property:o}),o.from!==void 0&&e==="from"?l={value:o.from,explicitValue:!0}:o.to!==void 0&&e==="to"?l={value:o.to,explicitValue:!0}:(o.property==="line-height"&&(l=parseFloat(a["line-height"])/parseFloat(a["font-size"])),isNaN(l)&&(l=a[o.property])),l!==""&&(r.styles[o.property]=l)}),r}getAutoAnimatableElements(e,t){let i=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),s=[];return i.filter((r,a)=>{if(s.indexOf(r.to)===-1)return s.push(r.to),!0})}getAutoAnimatePairs(e,t){let i=[];const s="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(i,e,t,"[data-id]",r=>r.nodeName+":::"+r.getAttribute("data-id")),this.findAutoAnimateMatches(i,e,t,s,r=>r.nodeName+":::"+r.textContent.trim()),this.findAutoAnimateMatches(i,e,t,"img, video, iframe",r=>r.nodeName+":::"+(r.getAttribute("src")||r.getAttribute("data-src"))),this.findAutoAnimateMatches(i,e,t,"pre",r=>r.nodeName+":::"+r.textContent.trim()),i.forEach(r=>{fo(r.from,s)?r.options={scale:!1}:fo(r.from,"pre")&&(r.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(i,r.from,r.to,".hljs .hljs-ln-code",a=>a.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(i,r.from,r.to,".hljs .hljs-ln-numbers[data-line-number]",a=>a.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),i}getLocalBoundingBox(e){const t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,i,s,r,a){let o={},l={};[].slice.call(t.querySelectorAll(s)).forEach((c,u)=>{const h=r(c);typeof h=="string"&&h.length&&(o[h]=o[h]||[],o[h].push(c))}),[].slice.call(i.querySelectorAll(s)).forEach((c,u)=>{const h=r(c);let d;if(l[h]=l[h]||[],l[h].push(c),o[h]){const f=l[h].length-1,_=o[h].length-1;o[h][f]?(d=o[h][f],o[h][f]=null):o[h][_]&&(d=o[h][_],o[h][_]=null)}d&&e.push({from:d,to:c,options:a})})}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce((t,i)=>{const s=i.querySelector("[data-auto-animate-target]");return i.hasAttribute("data-auto-animate-target")||s||t.push(i),i.querySelector("[data-auto-animate-target]")&&(t=t.concat(this.getUnmatchedAutoAnimateElements(i))),t},[])}}class mm{constructor(e){this.Reveal=e,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const e=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const t=Ge(this.Reveal.getRevealElement(),Oi),i=Ge(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let s;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const r=window.getComputedStyle(this.viewportElement);r&&r.background&&(s=r.background);const a=[],o=t[0].parentNode;let l;const c=(u,h,d,f)=>{let _;if(l&&this.Reveal.shouldAutoAnimateBetween(l,u))_=document.createElement("div"),_.className="scroll-page-content scroll-auto-animate-page",_.style.display="none",l.closest(".scroll-page-content").parentNode.appendChild(_);else{const m=document.createElement("div");if(m.className="scroll-page",a.push(m),f&&i.length>h){const p=i[h],y=window.getComputedStyle(p);y&&y.background?m.style.background=y.background:s&&(m.style.background=s)}else s&&(m.style.background=s);const v=document.createElement("div");v.className="scroll-page-sticky",m.appendChild(v),_=document.createElement("div"),_.className="scroll-page-content",v.appendChild(_)}_.appendChild(u),u.classList.remove("past","future"),u.setAttribute("data-index-h",h),u.setAttribute("data-index-v",d),u.slideBackgroundElement&&(u.slideBackgroundElement.remove("past","future"),_.insertBefore(u.slideBackgroundElement,u)),l=u};t.forEach((u,h)=>{this.Reveal.isVerticalStack(u)?u.querySelectorAll("section").forEach((d,f)=>{c(d,h,f,!0)}):c(u,h,0)},this),this.createProgressBar(),Ge(this.Reveal.getRevealElement(),".stack").forEach(u=>u.remove()),a.forEach(u=>o.appendChild(u)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(e),this.activatedCallbacks.forEach(u=>u()),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const e=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(e),this.slideHTMLBeforeActivation=null}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const e=i=>{let s=(i.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;s=Math.max(Math.min(s,1),0),this.viewportElement.scrollTop=s*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},t=i=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};this.progressBarInner.addEventListener("mousedown",i=>{i.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),e(i)})}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const e=this.Reveal.getConfig(),t=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),i=this.Reveal.getScale(),s=e.scrollLayout==="compact",r=this.viewportElement.offsetHeight,a=t.height*i,o=s?a:r;this.scrollTriggerHeight=s?a:r,this.viewportElement.style.setProperty("--page-height",o+"px"),this.viewportElement.style.scrollSnapType=typeof e.scrollSnap=="string"?`y ${e.scrollSnap}`:"",this.slideTriggers=[];const l=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=l.map(c=>{const u=this.createPage({pageElement:c,slideElement:c.querySelector("section"),stickyElement:c.querySelector(".scroll-page-sticky"),contentElement:c.querySelector(".scroll-page-content"),backgroundElement:c.querySelector(".slide-background"),autoAnimateElements:c.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});u.pageElement.style.setProperty("--slide-height",e.center===!0?"auto":t.height+"px"),this.slideTriggers.push({page:u,activate:()=>this.activatePage(u),deactivate:()=>this.deactivatePage(u)}),this.createFragmentTriggersForPage(u),u.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(u);let h=Math.max(u.scrollTriggers.length-1,0);h+=u.autoAnimatePages.reduce((d,f)=>d+Math.max(f.scrollTriggers.length-1,0),u.autoAnimatePages.length),u.pageElement.querySelectorAll(".scroll-snap-point").forEach(d=>d.remove());for(let d=0;d<h+1;d++){const f=document.createElement("div");f.className="scroll-snap-point",f.style.height=this.scrollTriggerHeight+"px",f.style.scrollSnapAlign=s?"center":"start",u.pageElement.appendChild(f),d===0&&(f.style.marginTop=-this.scrollTriggerHeight+"px")}return s&&u.scrollTriggers.length>0?(u.pageHeight=r,u.pageElement.style.setProperty("--page-height",r+"px")):(u.pageHeight=o,u.pageElement.style.removeProperty("--page-height")),u.scrollPadding=this.scrollTriggerHeight*h,u.totalHeight=u.pageHeight+u.scrollPadding,u.pageElement.style.setProperty("--page-scroll-padding",u.scrollPadding+"px"),h>0?(u.stickyElement.style.position="sticky",u.stickyElement.style.top=Math.max((r-u.pageHeight)/2,0)+"px"):(u.stickyElement.style.position="relative",u.pageElement.style.scrollSnapAlign=u.pageHeight<r?"center":"start"),u}),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",e.scrollProgress),e.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce((t,i)=>t+Math.max(i.page.scrollTriggers.length,1),0);let e=0;this.slideTriggers.forEach((t,i)=>{t.range=[e,e+Math.max(t.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const s=(t.range[1]-t.range[0])/t.page.scrollTriggers.length;t.page.scrollTriggers.forEach((r,a)=>{r.range=[e+a*s,e+(a+1)*s]}),e=t.range[1]}),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(e,t){t=t||e.slideElement;const i=this.Reveal.fragments.sort(t.querySelectorAll(".fragment"),!0);return i.length&&(e.fragments=this.Reveal.fragments.sort(t.querySelectorAll(".fragment:not(.disabled)")),e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,e.fragments,t)}}),i.forEach((s,r)=>{e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(r,e.fragments,t)}})})),e.scrollTriggers.length}createAutoAnimateTriggersForPage(e){e.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(e.autoAnimateElements).map((t,i)=>{let s=this.createPage({slideElement:t.querySelector("section"),contentElement:t,backgroundElement:t.querySelector(".slide-background")});return this.createFragmentTriggersForPage(s,s.slideElement),e.autoAnimatePages.push(s),{page:s,activate:()=>this.activatePage(s),deactivate:()=>this.deactivatePage(s)}}))}createPage(e){return e.scrollTriggers=[],e.indexh=parseInt(e.slideElement.getAttribute("data-index-h"),10),e.indexv=parseInt(e.slideElement.getAttribute("data-index-v"),10),e}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach(a=>a.remove());const e=this.viewportElement.scrollHeight,t=this.viewportElement.offsetHeight,i=t/e;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(i*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const s=t/e*this.progressBarHeight,r=Math.min(s/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-r+"px",s>6?this.slideTriggers.forEach(a=>{const{page:o}=a;o.progressBarSlide=document.createElement("div"),o.progressBarSlide.className="scrollbar-slide",o.progressBarSlide.style.top=a.range[0]*this.progressBarHeight+"px",o.progressBarSlide.style.height=(a.range[1]-a.range[0])*this.progressBarHeight-r+"px",o.progressBarSlide.classList.toggle("has-triggers",o.scrollTriggers.length>0),this.progressBarInner.appendChild(o.progressBarSlide),o.scrollTriggerElements=o.scrollTriggers.map((l,c)=>{const u=document.createElement("div");return u.className="scrollbar-trigger",u.style.top=(l.range[0]-a.range[0])*this.progressBarHeight+"px",u.style.height=(l.range[1]-l.range[0])*this.progressBarHeight-r+"px",o.progressBarSlide.appendChild(u),c===0&&(u.style.display="none"),u})}):this.pages.forEach(a=>a.progressBarSlide=null)}syncScrollPosition(){const e=this.viewportElement.offsetHeight,t=e/this.viewportElement.scrollHeight,i=this.viewportElement.scrollTop,s=this.viewportElement.scrollHeight-e,r=Math.max(Math.min(i/s,1),0),a=Math.max(Math.min((i+e/2)/this.viewportElement.scrollHeight,1),0);let o;this.slideTriggers.forEach(l=>{const{page:c}=l;r>=l.range[0]-2*t&&r<=l.range[1]+2*t&&!c.loaded?(c.loaded=!0,this.Reveal.slideContent.load(c.slideElement)):c.loaded&&(c.loaded=!1,this.Reveal.slideContent.unload(c.slideElement)),r>=l.range[0]&&r<=l.range[1]?(this.activateTrigger(l),o=l.page):l.active&&this.deactivateTrigger(l)}),o&&o.scrollTriggers.forEach(l=>{a>=l.range[0]&&a<=l.range[1]?this.activateTrigger(l):l.active&&this.deactivateTrigger(l)}),this.setProgressBarValue(i/(this.viewportElement.scrollHeight-e))}setProgressBarValue(e){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${e*this.progressBarScrollableHeight}px)`,this.getAllPages().filter(t=>t.progressBarSlide).forEach(t=>{t.progressBarSlide.classList.toggle("active",t.active===!0),t.scrollTriggers.forEach((i,s)=>{t.scrollTriggerElements[s].classList.toggle("active",t.active===!0&&i.active===!0)})}),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout(()=>{this.progressBar&&this.progressBar.classList.remove("visible")},500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(e){if(this.active){const t=this.getScrollTriggerBySlide(e);t&&(this.viewportElement.scrollTop=t.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push(()=>this.scrollToSlide(e))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout(()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null},50)}restoreScrollPosition(){const e=sessionStorage.getItem("reveal-scroll-top"),t=sessionStorage.getItem("reveal-scroll-origin");e&&t===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(e,10))}activatePage(e){if(!e.active){e.active=!0;const{slideElement:t,backgroundElement:i,contentElement:s,indexh:r,indexv:a}=e;s.style.display="block",t.classList.add("present"),i&&i.classList.add("present"),this.Reveal.setCurrentScrollPage(t,r,a),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t,this.viewportElement),Array.from(s.parentNode.querySelectorAll(".scroll-page-content")).forEach(o=>{o!==s&&(o.style.display="none")})}}deactivatePage(e){e.active&&(e.active=!1,e.slideElement&&e.slideElement.classList.remove("present"),e.backgroundElement&&e.backgroundElement.classList.remove("present"))}activateTrigger(e){e.active||(e.active=!0,e.activate())}deactivateTrigger(e){e.active&&(e.active=!1,e.deactivate&&e.deactivate())}getSlideByIndices(e,t){const i=this.getAllPages().find(s=>s.indexh===e&&s.indexv===t);return i?i.slideElement:null}getScrollTriggerBySlide(e){return this.slideTriggers.find(t=>t.page.slideElement===e)}getAllPages(){return this.pages.flatMap(e=>[e,...e.autoAnimatePages||[]])}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}}class gm{constructor(e){this.Reveal=e}async activate(){const e=this.Reveal.getConfig(),t=Ge(this.Reveal.getRevealElement(),vs),i=e.slideNumber&&/all|print/i.test(e.showSlideNumber),s=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),r=Math.floor(s.width*(1+e.margin)),a=Math.floor(s.height*(1+e.margin)),o=s.width,l=s.height;await new Promise(requestAnimationFrame),zl("@page{size:"+r+"px "+a+"px; margin: 0px;}"),zl(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+l+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=r+"px",document.body.style.height=a+"px";const c=this.Reveal.getViewportElement();let u;if(c){const m=window.getComputedStyle(c);m&&m.background&&(u=m.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,l),await new Promise(requestAnimationFrame);const h=t.map(m=>m.scrollHeight),d=[],f=t[0].parentNode;let _=1;t.forEach(function(m,v){if(m.classList.contains("stack")===!1){let p=(r-o)/2,y=(a-l)/2;const w=h[v];let b=Math.max(Math.ceil(w/a),1);b=Math.min(b,e.pdfMaxPagesPerSlide),(b===1&&e.center||m.classList.contains("center"))&&(y=Math.max((a-w)/2,0));const R=document.createElement("div");if(d.push(R),R.className="pdf-page",R.style.height=(a+e.pdfPageHeightOffset)*b+"px",u&&(R.style.background=u),R.appendChild(m),m.style.left=p+"px",m.style.top=y+"px",m.style.width=o+"px",this.Reveal.slideContent.layout(m),m.slideBackgroundElement&&R.insertBefore(m.slideBackgroundElement,m),e.showNotes){const L=this.Reveal.getSlideNotes(m);if(L){const x=typeof e.showNotes=="string"?e.showNotes:"inline",T=document.createElement("div");T.classList.add("speaker-notes"),T.classList.add("speaker-notes-pdf"),T.setAttribute("data-layout",x),T.innerHTML=L,x==="separate-page"?d.push(T):(T.style.left="8px",T.style.bottom="8px",T.style.width=r-2*8+"px",R.appendChild(T))}}if(i){const L=document.createElement("div");L.classList.add("slide-number"),L.classList.add("slide-number-pdf"),L.innerHTML=_++,R.appendChild(L)}if(e.pdfSeparateFragments){const L=this.Reveal.fragments.sort(R.querySelectorAll(".fragment"),!0);let N;L.forEach(function(x,T){N&&N.forEach(function(P){P.classList.remove("current-fragment")}),x.forEach(function(P){P.classList.add("visible","current-fragment")},this);const C=R.cloneNode(!0);if(i){const P=T+1;C.querySelector(".slide-number-pdf").innerHTML+="."+P}d.push(C),N=x},this),L.forEach(function(x){x.forEach(function(T){T.classList.remove("visible","current-fragment")})})}else Ge(R,".fragment:not(.fade-out)").forEach(function(L){L.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),d.forEach(m=>f.appendChild(m)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),c.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}}class vm{constructor(e){this.Reveal=e}configure(e,t){e.fragments===!1?this.disable():t.fragments===!1&&this.enable()}disable(){Ge(this.Reveal.getSlidesElement(),".fragment").forEach(e=>{e.classList.add("visible"),e.classList.remove("current-fragment")})}enable(){Ge(this.Reveal.getSlidesElement(),".fragment").forEach(e=>{e.classList.remove("visible"),e.classList.remove("current-fragment")})}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(".fragment:not(.disabled)"),i=e.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:t.length-i.length>0,next:!!i.length}}return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let i=[],s=[],r=[];e.forEach(o=>{if(o.hasAttribute("data-fragment-index")){let l=parseInt(o.getAttribute("data-fragment-index"),10);i[l]||(i[l]=[]),i[l].push(o)}else s.push([o])}),i=i.concat(s);let a=0;return i.forEach(o=>{o.forEach(l=>{r.push(l),l.setAttribute("data-fragment-index",a)}),a++}),t===!0?i:r}sortAll(){this.Reveal.getHorizontalSlides().forEach(e=>{let t=Ge(e,"section");t.forEach((i,s)=>{this.sort(i.querySelectorAll(".fragment"))},this),t.length===0&&this.sort(e.querySelectorAll(".fragment"))})}update(e,t,i=this.Reveal.getCurrentSlide()){let s={shown:[],hidden:[]};if(i&&this.Reveal.getConfig().fragments&&(t=t||this.sort(i.querySelectorAll(".fragment"))).length){let r=0;if(typeof e!="number"){let a=this.sort(i.querySelectorAll(".fragment.visible")).pop();a&&(e=parseInt(a.getAttribute("data-fragment-index")||0,10))}Array.from(t).forEach((a,o)=>{if(a.hasAttribute("data-fragment-index")&&(o=parseInt(a.getAttribute("data-fragment-index"),10)),r=Math.max(r,o),o<=e){let l=a.classList.contains("visible");a.classList.add("visible"),a.classList.remove("current-fragment"),o===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(a)),a.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(a)),l||(s.shown.push(a),this.Reveal.dispatchEvent({target:a,type:"visible",bubbles:!1}))}else{let l=a.classList.contains("visible");a.classList.remove("visible"),a.classList.remove("current-fragment"),l&&(this.Reveal.slideContent.stopEmbeddedContent(a),s.hidden.push(a),this.Reveal.dispatchEvent({target:a,type:"hidden",bubbles:!1}))}}),e=typeof e=="number"?e:-1,e=Math.max(Math.min(e,r),-1),i.setAttribute("data-fragment",e)}return s.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:s.hidden[0],fragments:s.hidden}}),s.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:s.shown[0],fragments:s.shown}}),s}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(".fragment"))}goto(e,t=0){let i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments){let s=this.sort(i.querySelectorAll(".fragment:not(.disabled)"));if(s.length){if(typeof e!="number"){let a=this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();e=a?parseInt(a.getAttribute("data-fragment-index")||0,10):-1}e+=t;let r=this.update(e,s);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!r.shown.length&&!r.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class _m{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),Ge(this.Reveal.getRevealElement(),vs).forEach(s=>{s.classList.contains("stack")||s.addEventListener("click",this.onSlideClicked,!0)});const e=70,t=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=t.width+e,this.overviewSlideHeight=t.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const i=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:i.h,indexv:i.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((e,t)=>{e.setAttribute("data-index-h",t),Bi(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),e.classList.contains("stack")&&Ge(e,"section").forEach((i,s)=>{i.setAttribute("data-index-h",t),i.setAttribute("data-index-v",s),Bi(i,"translate3d(0, "+s*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e,t)=>{Bi(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),Ge(e,".slide-background").forEach((i,s)=>{Bi(i,"translate3d(0, "+s*this.overviewSlideHeight+"px, 0)")})})}update(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,i=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+t+")","translateX("+-i.h*this.overviewSlideWidth+"px)","translateY("+-i.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),Ge(this.Reveal.getRevealElement(),vs).forEach(t=>{Bi(t,""),t.removeEventListener("click",this.onSlideClicked,!0)}),Ge(this.Reveal.getBackgroundsElement(),".slide-background").forEach(t=>{Bi(t,"")}),this.Reveal.transformSlides({overview:""});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(this.deactivate(),t.nodeName.match(/section/gi))){let i=parseInt(t.getAttribute("data-index-h"),10),s=parseInt(t.getAttribute("data-index-v"),10);this.Reveal.slide(i,s)}}}}class xm{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(e,t){e.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(e,t){typeof e=="object"&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if(typeof t.keyboardCondition=="function"&&t.keyboardCondition(e)===!1||t.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let i=e.keyCode,s=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let r=document.activeElement&&document.activeElement.isContentEditable===!0,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),l=!([32,37,38,39,40,63,78,80,191].indexOf(e.keyCode)!==-1&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(r||a||o||l)return;let c,u=[66,86,190,191,112];if(typeof t.keyboard=="object")for(c in t.keyboard)t.keyboard[c]==="togglePause"&&u.push(parseInt(c,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(e.key)||this.Reveal.isPaused()&&u.indexOf(i)===-1)return!1;let h=t.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),d=!1;if(typeof t.keyboard=="object"){for(c in t.keyboard)if(parseInt(c,10)===i){let f=t.keyboard[c];typeof f=="function"?f.apply(null,[e]):typeof f=="string"&&typeof this.Reveal[f]=="function"&&this.Reveal[f].call(),d=!0}}if(d===!1){for(c in this.bindings)if(parseInt(c,10)===i){let f=this.bindings[c].callback;typeof f=="function"?f.apply(null,[e]):typeof f=="string"&&typeof this.Reveal[f]=="function"&&this.Reveal[f].call(),d=!0}}d===!1&&(d=!0,i===80||i===33?this.Reveal.prev({skipFragments:e.altKey}):i===78||i===34?this.Reveal.next({skipFragments:e.altKey}):i===72||i===37?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&h?t.rtl?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):i===76||i===39?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&h?t.rtl?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):i===75||i===38?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&h?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):i===74||i===40?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&h?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):i===36?this.Reveal.slide(0):i===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):i===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):[58,59,66,86,190].includes(i)||i===191&&!e.shiftKey?this.Reveal.togglePause():i===70?Oh(t.embedded?this.Reveal.getViewportElement():document.documentElement):i===65?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(s):i===71?t.jumpToSlide&&this.Reveal.toggleJumpToSlide():i===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():i!==63&&i!==191||!e.shiftKey?i===112?this.Reveal.toggleHelp():d=!1:this.Reveal.toggleHelp()),d?e.preventDefault&&e.preventDefault():i!==27&&i!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}}class Sm{constructor(e){Vu(this,"MAX_REPLACE_STATE_FREQUENCY",1e3);this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash,t={}){let i=e.replace(/^#\/?/,""),s=i.split("/");if(/^[0-9]*$/.test(s[0])||!i.length){const r=this.Reveal.getConfig();let a,o=r.hashOneBasedIndex||t.oneBasedIndex?1:0,l=parseInt(s[0],10)-o||0,c=parseInt(s[1],10)-o||0;return r.fragmentInURL&&(a=parseInt(s[2],10),isNaN(a)&&(a=void 0)),{h:l,v:c,f:a}}{let r,a;/\/[-\d]+$/g.test(i)&&(a=parseInt(i.split("/").pop(),10),a=isNaN(a)?void 0:a,i=i.split("/").shift());try{r=document.getElementById(decodeURIComponent(i)).closest(".slides section")}catch{}if(r)return{...this.Reveal.getIndices(r),f:a}}return null}readURL(){const e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?t.h===e.h&&t.v===e.v&&t.f===void 0||this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let t=this.Reveal.getConfig(),i=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof e=="number")this.writeURLTimeout=setTimeout(this.writeURL,e);else if(i){let s=this.getHash();t.history?window.location.hash=s:t.hash&&(s==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+s))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout(()=>this.replaceState(e),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let t="/",i=e||this.Reveal.getCurrentSlide(),s=i?i.getAttribute("id"):null;s&&(s=encodeURIComponent(s));let r=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(r.f=void 0),typeof s=="string"&&s.length)t="/"+s,r.f>=0&&(t+="/"+r.f);else{let a=this.Reveal.getConfig().hashOneBasedIndex?1:0;(r.h>0||r.v>0||r.f>=0)&&(t+=r.h+a),(r.v>0||r.f>=0)&&(t+="/"+(r.v+a)),r.f>=0&&(t+="/"+r.f)}return t}onWindowHashChange(e){this.readURL()}}class ym{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const e=this.Reveal.getConfig().rtl,t=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=Ge(t,".navigate-left"),this.controlsRight=Ge(t,".navigate-right"),this.controlsUp=Ge(t,".navigate-up"),this.controlsDown=Ge(t,".navigate-down"),this.controlsPrev=Ge(t,".navigate-prev"),this.controlsNext=Ge(t,".navigate-next"),this.controlsFullscreen=Ge(t,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(e,t){this.element.style.display=e.controls&&(e.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",e.controlsLayout),this.element.setAttribute("data-controls-back-arrows",e.controlsBackArrows)}bind(){let e=["touchstart","click"];kh&&(e=["touchstart"]),e.forEach(t=>{this.controlsLeft.forEach(i=>i.addEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(i=>i.addEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(i=>i.addEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(i=>i.addEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(i=>i.addEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(i=>i.addEventListener(t,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(i=>i.addEventListener(t,this.onEnterFullscreen,!1))})}unbind(){["touchstart","click"].forEach(e=>{this.controlsLeft.forEach(t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(t=>t.removeEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(t=>t.removeEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(t=>t.removeEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(t=>t.removeEventListener(e,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(t=>t.removeEventListener(e,this.onEnterFullscreen,!1))})}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(i=>{i.classList.remove("enabled","fragmented"),i.setAttribute("disabled","disabled")}),e.left&&this.controlsLeft.forEach(i=>{i.classList.add("enabled"),i.removeAttribute("disabled")}),e.right&&this.controlsRight.forEach(i=>{i.classList.add("enabled"),i.removeAttribute("disabled")}),e.up&&this.controlsUp.forEach(i=>{i.classList.add("enabled"),i.removeAttribute("disabled")}),e.down&&this.controlsDown.forEach(i=>{i.classList.add("enabled"),i.removeAttribute("disabled")}),(e.left||e.up)&&this.controlsPrev.forEach(i=>{i.classList.add("enabled"),i.removeAttribute("disabled")}),(e.right||e.down)&&this.controlsNext.forEach(i=>{i.classList.add("enabled"),i.removeAttribute("disabled")});let t=this.Reveal.getCurrentSlide();if(t){let i=this.Reveal.fragments.availableRoutes();i.prev&&this.controlsPrev.forEach(a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}),i.next&&this.controlsNext.forEach(a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")});const s=this.Reveal.isVerticalSlide(t),r=s&&t.parentElement&&t.parentElement.querySelectorAll(":scope > section").length>1;s&&r?(i.prev&&this.controlsUp.forEach(a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}),i.next&&this.controlsDown.forEach(a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})):(i.prev&&this.controlsLeft.forEach(a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}),i.next&&this.controlsRight.forEach(a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let i=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&i.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&i.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(e){const t=this.Reveal.getConfig(),i=this.Reveal.getViewportElement();Oh(t.embedded?i:i.parentElement)}}class bm{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform="scaleX("+e+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),i=t.length,s=Math.floor(e.clientX/this.getMaxWidth()*i);this.Reveal.getConfig().rtl&&(s=i-s);let r=this.Reveal.getIndices(t[s]);this.Reveal.slide(r.h,r.v)}destroy(){this.element.remove()}}class Em{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),e.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}}const Wu=(n,e)=>{const t=document.createElement("script");t.type="text/javascript",t.async=!1,t.defer=!1,t.src=n,typeof e=="function"&&(t.onload=t.onreadystatechange=s=>{(s.type==="load"||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=t.onerror=null,e())},t.onerror=s=>{t.onload=t.onreadystatechange=t.onerror=null,e(new Error("Failed loading script: "+t.src+`
`+s))});const i=document.querySelector("head");i.insertBefore(t,i.lastChild)};class Mm{constructor(e){this.Reveal=e,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state="loading",e.forEach(this.registerPlugin.bind(this)),new Promise(i=>{let s=[],r=0;if(t.forEach(a=>{a.condition&&!a.condition()||(a.async?this.asyncDependencies.push(a):s.push(a))}),s.length){r=s.length;const a=o=>{o&&typeof o.callback=="function"&&o.callback(),--r==0&&this.initPlugins().then(i)};s.forEach(o=>{typeof o.id=="string"?(this.registerPlugin(o),a(o)):typeof o.src=="string"?Wu(o.src,()=>a(o)):(console.warn("Unrecognized plugin format",o),a())})}else this.initPlugins().then(i)})}initPlugins(){return new Promise(e=>{let t=Object.values(this.registeredPlugins),i=t.length;if(i===0)this.loadAsync().then(e);else{let s,r=()=>{--i==0?this.loadAsync().then(e):s()},a=0;s=()=>{let o=t[a++];if(typeof o.init=="function"){let l=o.init(this.Reveal);l&&typeof l.then=="function"?l.then(r):r()}else r()},s()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(e=>{Wu(e.src,e.callback)}),Promise.resolve()}registerPlugin(e){arguments.length===2&&typeof arguments[0]=="string"?(e=arguments[1]).id=arguments[0]:typeof e=="function"&&(e=e());let t=e.id;typeof t!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",e):this.registeredPlugins[t]===void 0?(this.registeredPlugins[t]=e,this.state==="loaded"&&typeof e.init=="function"&&e.init(this.Reveal)):console.warn('reveal.js: "'+t+'" plugin has already been registered')}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(e=>{typeof e.destroy=="function"&&e.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class Tm{constructor(e){this.Reveal=e,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const e=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,t=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;e||t?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(e){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(e),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(e){this.close(),this.state={previewIframe:e},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${e}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${e}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",t=>{this.dom.dataset.state="loaded"},!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",t=>{this.close(),t.preventDefault()},!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",t=>{this.close()},!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:e}})}previewMedia(e,t,i){if(t!=="image"&&t!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),i=i||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=i,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const s=this.dom.querySelector(".r-overlay-content");if(t==="image"){this.state={previewImage:e,previewFit:i};const r=document.createElement("img",{});r.src=e,s.appendChild(r),r.addEventListener("load",()=>{this.dom.dataset.state="loaded"},!1),r.addEventListener("error",()=>{this.dom.dataset.state="error",s.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'},!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",a=>{this.close()},!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:e}})}else{if(t!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:e,previewFit:i};const r=document.createElement("video");r.autoplay=this.dom.dataset.previewAutoplay!=="false",r.controls=this.dom.dataset.previewControls!=="false",r.loop=this.dom.dataset.previewLoop==="true",r.muted=this.dom.dataset.previewMuted==="true",r.playsInline=!0,r.src=e,s.appendChild(r),r.addEventListener("loadeddata",()=>{this.dom.dataset.state="loaded"},!1),r.addEventListener("error",()=>{this.dom.dataset.state="error",s.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'},!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:e}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",r=>{this.close(),r.preventDefault()},!1)}previewImage(e,t){this.previewMedia(e,"image",t)}previewVideo(e,t){this.previewMedia(e,"video",t)}toggleHelp(e){typeof e=="boolean"?e?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let e='<p class="title">Keyboard Shortcuts</p>',t=this.Reveal.keyboard.getShortcuts(),i=this.Reveal.keyboard.getBindings();e+="<table><th>KEY</th><th>ACTION</th>";for(let s in t)e+=`<tr><td>${s}</td><td>${t[s]}</td></tr>`;for(let s in i)i[s].key&&i[s].description&&(e+=`<tr><td>${i[s].key}</td><td>${i[s].description}</td></tr>`);e+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${e}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",s=>{this.close(),s.preventDefault()},!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(e){this.stateProps.every(t=>this.state[t]===e[t])||(e.previewIframe?this.previewIframe(e.previewIframe):e.previewImage?this.previewImage(e.previewImage,e.previewFit):e.previewVideo?this.previewVideo(e.previewVideo,e.previewFit):this.close())}onSlidesClicked(e){const t=e.target,i=t.closest(this.iframeTriggerSelector),s=t.closest(this.mediaTriggerSelector);if(i){if(e.metaKey||e.shiftKey||e.altKey)return;let r=i.getAttribute("href")||i.getAttribute("data-preview-link");r&&(this.previewIframe(r),e.preventDefault())}else if(s){if(s.hasAttribute("data-preview-image")){let r=s.dataset.previewImage||s.getAttribute("src");r&&(this.previewImage(r,s.dataset.previewFit),e.preventDefault())}else if(s.hasAttribute("data-preview-video")){let r=s.dataset.previewVideo||s.getAttribute("src");if(!r){let a=s.querySelector("source");a&&(r=a.getAttribute("src"))}r&&(this.previewVideo(r,s.dataset.previewFit),e.preventDefault())}}}destroy(){this.close()}}class Am{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();"onpointerdown"in window?(e.addEventListener("pointerdown",this.onPointerDown,!1),e.addEventListener("pointermove",this.onPointerMove,!1),e.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener("MSPointerDown",this.onPointerDown,!1),e.addEventListener("MSPointerMove",this.onPointerMove,!1),e.addEventListener("MSPointerUp",this.onPointerUp,!1)):(e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener("pointerdown",this.onPointerDown,!1),e.removeEventListener("pointermove",this.onPointerMove,!1),e.removeEventListener("pointerup",this.onPointerUp,!1),e.removeEventListener("MSPointerDown",this.onPointerDown,!1),e.removeEventListener("MSPointerMove",this.onPointerMove,!1),e.removeEventListener("MSPointerUp",this.onPointerUp,!1),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(e){if(fo(e,"video[controls], audio[controls]"))return!0;for(;e&&typeof e.hasAttribute=="function";){if(e.hasAttribute("data-prevent-swipe"))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.touchCaptured=!1,this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)kh&&e.preventDefault();else{this.Reveal.onUserInput(e);let i=e.touches[0].clientX,s=e.touches[0].clientY;if(e.touches.length===1&&this.touchStartCount!==2){let r=this.Reveal.availableRoutes({includeFragments:!0}),a=i-this.touchStartX,o=s-this.touchStartY;a>40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&r.up?(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):o<-40&&r.down&&(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}}const Xo="focus",Xu="blur";class wm{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==Xo&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Xo}blur(){this.state!==Xu&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Xu}isFocused(){return this.state===Xo}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=Wt(e.target,".reveal");t&&t===this.Reveal.getRevealElement()||this.blur()}}class Rm{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute("data-layout",typeof e.showNotes=="string"?e.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute("data-notes"))return e.getAttribute("data-notes");let t=e.querySelectorAll("aside.notes");return t?Array.from(t).map(i=>i.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class Cm{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(e){const t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,i=this.diameter2,s=this.diameter2,r=28;this.progressOffset+=.1*(1-this.progressOffset);const a=-Math.PI/2+e*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(i,s,t+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(i,s,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(i,s,t,o,a,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(i-14,s-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,r),this.context.fillRect(18,0,10,r)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,r),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var Pm={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const Vh="5.2.1";function Hh(n,e){arguments.length<2&&(e=arguments[0],n=document.querySelector(".reveal"));const t={};let i,s,r,a,o,l={},c=!1,u=!1,h={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},d=[],f=1,_={layout:"",overview:""},m={},v="idle",p=0,y=0,w=-1,b=!1,R=new cm(t),L=new dm(t),N=new hm(t),x=new pm(t),T=new fm(t),C=new mm(t),P=new gm(t),k=new vm(t),H=new _m(t),K=new xm(t),G=new Sm(t),B=new ym(t),V=new bm(t),se=new Em(t),X=new Mm(t),oe=new Tm(t),ye=new wm(t),xe=new Am(t),Ue=new Rm(t);function tt(){c!==!1&&(u=!0,l.showHiddenSlides||Ge(m.wrapper,'section[data-visibility="hidden"]').forEach(U=>{const ee=U.parentNode;ee.childElementCount===1&&/section/i.test(ee.nodeName)?ee.remove():U.remove()}),function(){m.slides.classList.add("no-transition"),ir?m.wrapper.classList.add("no-hover"):m.wrapper.classList.remove("no-hover"),T.render(),L.render(),N.render(),B.render(),V.render(),Ue.render(),m.pauseOverlay=((U,ee,_e,Ae="")=>{let Re=U.querySelectorAll("."+_e);for(let F=0;F<Re.length;F++){let $=Re[F];if($.parentNode===U)return $}let S=document.createElement(ee);return S.className=_e,S.innerHTML=Ae,U.appendChild(S),S})(m.wrapper,"div","pause-overlay",l.controls?'<button class="resume-button">Resume presentation</button>':null),m.statusElement=function(){let U=m.wrapper.querySelector(".aria-status");return U||(U=document.createElement("div"),U.style.position="absolute",U.style.height="1px",U.style.width="1px",U.style.overflow="hidden",U.style.clip="rect( 1px, 1px, 1px, 1px )",U.classList.add("aria-status"),U.setAttribute("aria-live","polite"),U.setAttribute("aria-atomic","true"),m.wrapper.appendChild(U)),U}(),m.wrapper.setAttribute("role","application")}(),l.postMessage&&window.addEventListener("message",Ar,!1),setInterval(()=>{(!C.isActive()&&m.wrapper.scrollTop!==0||m.wrapper.scrollLeft!==0)&&(m.wrapper.scrollTop=0,m.wrapper.scrollLeft=0)},1e3),document.addEventListener("fullscreenchange",es),document.addEventListener("webkitfullscreenchange",es),de().forEach(U=>{Ge(U,"section").forEach((ee,_e)=>{_e>0&&(ee.classList.remove("present"),ee.classList.remove("past"),ee.classList.add("future"),ee.setAttribute("aria-hidden","true"))})}),fe(),T.update(!0),function(){const U=l.view==="print",ee=l.view==="scroll"||l.view==="reader";(U||ee)&&(U?He():xe.unbind(),m.viewport.classList.add("loading-scroll-mode"),U?document.readyState==="complete"?P.activate():window.addEventListener("load",()=>P.activate()):C.activate())}(),G.readURL(),setTimeout(()=>{m.slides.classList.remove("no-transition"),m.wrapper.classList.add("ready"),A({type:"ready",data:{indexh:i,indexv:s,currentSlide:a}})},1))}function qe(U){m.statusElement.textContent=U}function te(U){let ee="";if(U.nodeType===3)ee+=U.textContent;else if(U.nodeType===1){let _e=U.getAttribute("aria-hidden"),Ae=window.getComputedStyle(U).display==="none";_e==="true"||Ae||Array.from(U.childNodes).forEach(Re=>{ee+=te(Re)})}return ee=ee.trim(),ee===""?"":ee+" "}function fe(U){const ee={...l};if(typeof U=="object"&&tr(l,U),t.isReady()===!1)return;const _e=m.wrapper.querySelectorAll(vs).length;m.wrapper.classList.remove(ee.transition),m.wrapper.classList.add(l.transition),m.wrapper.setAttribute("data-transition-speed",l.transitionSpeed),m.wrapper.setAttribute("data-background-transition",l.backgroundTransition),m.viewport.style.setProperty("--slide-width",typeof l.width=="string"?l.width:l.width+"px"),m.viewport.style.setProperty("--slide-height",typeof l.height=="string"?l.height:l.height+"px"),l.shuffle&&Ie(),Go(m.wrapper,"embedded",l.embedded),Go(m.wrapper,"rtl",l.rtl),Go(m.wrapper,"center",l.center),l.pause===!1&&W(),x.reset(),o&&(o.destroy(),o=null),_e>1&&l.autoSlide&&l.autoSlideStoppable&&(o=new Cm(m.wrapper,()=>Math.min(Math.max((Date.now()-w)/p,0),1)),o.on("click",_a),b=!1),l.navigationMode!=="default"?m.wrapper.setAttribute("data-navigation-mode",l.navigationMode):m.wrapper.removeAttribute("data-navigation-mode"),Ue.configure(l,ee),ye.configure(l,ee),se.configure(l,ee),B.configure(l,ee),V.configure(l,ee),K.configure(l,ee),k.configure(l,ee),L.configure(l,ee),Ce()}function ge(){window.addEventListener("resize",Rr,!1),l.touch&&xe.bind(),l.keyboard&&K.bind(),l.progress&&V.bind(),l.respondToHashChanges&&G.bind(),B.bind(),ye.bind(),m.slides.addEventListener("click",Ji,!1),m.slides.addEventListener("transitionend",wr,!1),m.pauseOverlay.addEventListener("click",W,!1),l.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Qi,!1)}function He(){xe.unbind(),ye.unbind(),K.unbind(),B.unbind(),V.unbind(),G.unbind(),window.removeEventListener("resize",Rr,!1),m.slides.removeEventListener("click",Ji,!1),m.slides.removeEventListener("transitionend",wr,!1),m.pauseOverlay.removeEventListener("click",W,!1)}function De(U,ee,_e){n.addEventListener(U,ee,_e)}function Fe(U,ee,_e){n.removeEventListener(U,ee,_e)}function it(U){typeof U.layout=="string"&&(_.layout=U.layout),typeof U.overview=="string"&&(_.overview=U.overview),_.layout?Bi(m.slides,_.layout+" "+_.overview):Bi(m.slides,_.overview)}function A({target:U=m.wrapper,type:ee,data:_e,bubbles:Ae=!0}){let Re=document.createEvent("HTMLEvents",1,2);return Re.initEvent(ee,Ae,!0),tr(Re,_e),U.dispatchEvent(Re),U===m.wrapper&&q(ee),Re}function I(U){A({type:"slidechanged",data:{indexh:i,indexv:s,previousSlide:r,currentSlide:a,origin:U}})}function q(U,ee){if(l.postMessageEvents&&window.parent!==window.self){let _e={namespace:"reveal",eventName:U,state:ft()};tr(_e,ee),window.parent.postMessage(JSON.stringify(_e),"*")}}function J(){if(m.wrapper&&!P.isActive()){const U=m.viewport.offsetWidth,ee=m.viewport.offsetHeight;if(!l.disableLayout){ir&&!l.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const _e=C.isActive()?M(U,ee):M(),Ae=f;ie(l.width,l.height),m.slides.style.width=_e.width+"px",m.slides.style.height=_e.height+"px",f=Math.min(_e.presentationWidth/_e.width,_e.presentationHeight/_e.height),f=Math.max(f,l.minScale),f=Math.min(f,l.maxScale),f===1||C.isActive()?(m.slides.style.zoom="",m.slides.style.left="",m.slides.style.top="",m.slides.style.bottom="",m.slides.style.right="",it({layout:""})):(m.slides.style.zoom="",m.slides.style.left="50%",m.slides.style.top="50%",m.slides.style.bottom="auto",m.slides.style.right="auto",it({layout:"translate(-50%, -50%) scale("+f+")"}));const Re=Array.from(m.wrapper.querySelectorAll(vs));for(let S=0,F=Re.length;S<F;S++){const $=Re[S];$.style.display!=="none"&&(l.center||$.classList.contains("center")?$.classList.contains("stack")?$.style.top=0:$.style.top=Math.max((_e.height-$.scrollHeight)/2,0)+"px":$.style.top="")}Ae!==f&&A({type:"resize",data:{oldScale:Ae,scale:f,size:_e}})}(function(){if(m.wrapper&&!l.disableLayout&&!P.isActive()&&typeof l.scrollActivationWidth=="number"&&l.view!=="scroll"){const _e=M();_e.presentationWidth>0&&_e.presentationWidth<=l.scrollActivationWidth?C.isActive()||(T.create(),C.activate()):C.isActive()&&C.deactivate()}})(),m.viewport.style.setProperty("--slide-scale",f),m.viewport.style.setProperty("--viewport-width",U+"px"),m.viewport.style.setProperty("--viewport-height",ee+"px"),C.layout(),V.update(),T.updateParallax(),H.isActive()&&H.update()}}function ie(U,ee){Ge(m.slides,"section > .stretch, section > .r-stretch").forEach(_e=>{let Ae=((Re,S=0)=>{if(Re){let F,$=Re.style.height;return Re.style.height="0px",Re.parentNode.style.height="auto",F=S-Re.parentNode.offsetHeight,Re.style.height=$+"px",Re.parentNode.style.removeProperty("height"),F}return S})(_e,ee);if(/(img|video)/gi.test(_e.nodeName)){const Re=_e.naturalWidth||_e.videoWidth,S=_e.naturalHeight||_e.videoHeight,F=Math.min(U/Re,Ae/S);_e.style.width=Re*F+"px",_e.style.height=S*F+"px"}else _e.style.width=U+"px",_e.style.height=Ae+"px"})}function M(U,ee){let _e=l.width,Ae=l.height;l.disableLayout&&(_e=m.slides.offsetWidth,Ae=m.slides.offsetHeight);const Re={width:_e,height:Ae,presentationWidth:U||m.wrapper.offsetWidth,presentationHeight:ee||m.wrapper.offsetHeight};return Re.presentationWidth-=Re.presentationWidth*l.margin,Re.presentationHeight-=Re.presentationHeight*l.margin,typeof Re.width=="string"&&/%$/.test(Re.width)&&(Re.width=parseInt(Re.width,10)/100*Re.presentationWidth),typeof Re.height=="string"&&/%$/.test(Re.height)&&(Re.height=parseInt(Re.height,10)/100*Re.presentationHeight),Re}function he(U,ee){typeof U=="object"&&typeof U.setAttribute=="function"&&U.setAttribute("data-previous-indexv",ee||0)}function ae(U){if(typeof U=="object"&&typeof U.setAttribute=="function"&&U.classList.contains("stack")){const ee=U.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(U.getAttribute(ee)||0,10)}return 0}function le(U=a){return U&&U.parentNode&&!!U.parentNode.nodeName.match(/section/i)}function z(){return!(!a||!le(a))&&!a.nextElementSibling}function E(){return i===0&&s===0}function g(){return!!a&&!a.nextElementSibling&&(!le(a)||!a.parentNode.nextElementSibling)}function D(){if(l.pause){const U=m.wrapper.classList.contains("paused");rn(),m.wrapper.classList.add("paused"),U===!1&&A({type:"paused"})}}function W(){const U=m.wrapper.classList.contains("paused");m.wrapper.classList.remove("paused"),st(),U&&A({type:"resumed"})}function Q(U){typeof U=="boolean"?U?D():W():Y()?W():D()}function Y(){return m.wrapper.classList.contains("paused")}function pe(U,ee,_e,Ae){if(A({type:"beforeslidechange",data:{indexh:U===void 0?i:U,indexv:ee===void 0?s:ee,origin:Ae}}).defaultPrevented)return;r=a;const Re=m.wrapper.querySelectorAll(Oi);if(C.isActive()){const we=C.getSlideByIndices(U,ee);return void(we&&C.scrollToSlide(we))}if(Re.length===0)return;ee!==void 0||H.isActive()||(ee=ae(Re[U])),r&&r.parentNode&&r.parentNode.classList.contains("stack")&&he(r.parentNode,s);const S=d.concat();d.length=0;let F=i||0,$=s||0;i=ue(Oi,U===void 0?i:U),s=ue(zu,ee===void 0?s:ee);let Z=i!==F||s!==$;Z||(r=null);let j=Re[i],Me=j.querySelectorAll("section");n.classList.toggle("is-vertical-slide",Me.length>1),a=Me[s]||j;let Te=!1;Z&&r&&a&&!H.isActive()&&(v="running",Te=me(r,a,F,$),Te&&m.slides.classList.add("disable-slide-transitions")),Ee(),J(),H.isActive()&&H.update(),_e!==void 0&&k.goto(_e),r&&r!==a&&(r.classList.remove("present"),r.setAttribute("aria-hidden","true"),E()&&setTimeout(()=>{Ge(m.wrapper,Oi+".stack").forEach(we=>{he(we,0)})},0));e:for(let we=0,Be=d.length;we<Be;we++){for(let ke=0;ke<S.length;ke++)if(S[ke]===d[we]){S.splice(ke,1);continue e}m.viewport.classList.add(d[we]),A({type:d[we]})}for(;S.length;)m.viewport.classList.remove(S.pop());Z&&I(Ae),!Z&&r||(R.stopEmbeddedContent(r),R.startEmbeddedContent(a)),requestAnimationFrame(()=>{qe(te(a))}),V.update(),B.update(),Ue.update(),T.update(),T.updateParallax(),L.update(),k.update(),G.writeURL(),st(),Te&&(setTimeout(()=>{m.slides.classList.remove("disable-slide-transitions")},0),l.autoAnimate&&x.run(r,a))}function me(U,ee,_e,Ae){return U.hasAttribute("data-auto-animate")&&ee.hasAttribute("data-auto-animate")&&U.getAttribute("data-auto-animate-id")===ee.getAttribute("data-auto-animate-id")&&!(i>_e||s>Ae?ee:U).hasAttribute("data-auto-animate-restart")}function Ce(){He(),ge(),J(),p=l.autoSlide,st(),T.create(),G.writeURL(),l.sortFragmentsOnSync===!0&&k.sortAll(),B.update(),V.update(),Ee(),Ue.update(),Ue.updateVisibility(),oe.update(),T.update(!0),L.update(),R.formatEmbeddedContent(),l.autoPlayMedia===!1?R.stopEmbeddedContent(a,{unloadIframes:!1}):R.startEmbeddedContent(a),H.isActive()&&H.layout()}function Ie(U=de()){U.forEach((ee,_e)=>{let Ae=U[Math.floor(Math.random()*U.length)];Ae.parentNode===ee.parentNode&&ee.parentNode.insertBefore(ee,Ae);let Re=ee.querySelectorAll("section");Re.length&&Ie(Re)})}function ue(U,ee){let _e=Ge(m.wrapper,U),Ae=_e.length,Re=C.isActive()||P.isActive(),S=!1,F=!1;if(Ae){l.loop&&(ee>=Ae&&(S=!0),(ee%=Ae)<0&&(ee=Ae+ee,F=!0)),ee=Math.max(Math.min(ee,Ae-1),0);for(let Me=0;Me<Ae;Me++){let Te=_e[Me],we=l.rtl&&!le(Te);Te.classList.remove("past"),Te.classList.remove("present"),Te.classList.remove("future"),Te.setAttribute("hidden",""),Te.setAttribute("aria-hidden","true"),Te.querySelector("section")&&Te.classList.add("stack"),Re?Te.classList.add("present"):Me<ee?(Te.classList.add(we?"future":"past"),l.fragments&&ve(Te)):Me>ee?(Te.classList.add(we?"past":"future"),l.fragments&&Le(Te)):Me===ee&&l.fragments&&(S?Le(Te):F&&ve(Te))}let $=_e[ee],Z=$.classList.contains("present");$.classList.add("present"),$.removeAttribute("hidden"),$.removeAttribute("aria-hidden"),Z||A({target:$,type:"visible",bubbles:!1});let j=$.getAttribute("data-state");j&&(d=d.concat(j.split(" ")))}else ee=0;return ee}function ve(U){Ge(U,".fragment").forEach(ee=>{ee.classList.add("visible"),ee.classList.remove("current-fragment")})}function Le(U){Ge(U,".fragment.visible").forEach(ee=>{ee.classList.remove("visible","current-fragment")})}function Ee(){let U,ee,_e=de(),Ae=_e.length;if(Ae&&i!==void 0){let Re=H.isActive()?10:l.viewDistance;ir&&(Re=H.isActive()?6:l.mobileViewDistance),P.isActive()&&(Re=Number.MAX_VALUE);for(let S=0;S<Ae;S++){let F=_e[S],$=Ge(F,"section"),Z=$.length;if(U=Math.abs((i||0)-S)||0,l.loop&&(U=Math.abs(((i||0)-S)%(Ae-Re))||0),U<Re?R.load(F):R.unload(F),Z){let j=ae(F);for(let Me=0;Me<Z;Me++){let Te=$[Me];ee=Math.abs(S===(i||0)?(s||0)-Me:Me-j),U+ee<Re?R.load(Te):R.unload(Te)}}}re()?m.wrapper.classList.add("has-vertical-slides"):m.wrapper.classList.remove("has-vertical-slides"),Se()?m.wrapper.classList.add("has-horizontal-slides"):m.wrapper.classList.remove("has-horizontal-slides")}}function be({includeFragments:U=!1}={}){let ee=m.wrapper.querySelectorAll(Oi),_e=m.wrapper.querySelectorAll(zu),Ae={left:i>0,right:i<ee.length-1,up:s>0,down:s<_e.length-1};if(l.loop&&(ee.length>1&&(Ae.left=!0,Ae.right=!0),_e.length>1&&(Ae.up=!0,Ae.down=!0)),ee.length>1&&l.navigationMode==="linear"&&(Ae.right=Ae.right||Ae.down,Ae.left=Ae.left||Ae.up),U===!0){let Re=k.availableRoutes();Ae.left=Ae.left||Re.prev,Ae.up=Ae.up||Re.prev,Ae.down=Ae.down||Re.next,Ae.right=Ae.right||Re.next}if(l.rtl){let Re=Ae.left;Ae.left=Ae.right,Ae.right=Re}return Ae}function We(U=a){let ee=de(),_e=0;e:for(let Ae=0;Ae<ee.length;Ae++){let Re=ee[Ae],S=Re.querySelectorAll("section");for(let F=0;F<S.length;F++){if(S[F]===U)break e;S[F].dataset.visibility!=="uncounted"&&_e++}if(Re===U)break;Re.classList.contains("stack")===!1&&Re.dataset.visibility!=="uncounted"&&_e++}return _e}function O(U){let ee,_e=i,Ae=s;if(U)if(C.isActive())_e=parseInt(U.getAttribute("data-index-h"),10),U.getAttribute("data-index-v")&&(Ae=parseInt(U.getAttribute("data-index-v"),10));else{let Re=le(U),S=Re?U.parentNode:U,F=de();_e=Math.max(F.indexOf(S),0),Ae=void 0,Re&&(Ae=Math.max(Ge(U.parentNode,"section").indexOf(U),0))}if(!U&&a&&a.querySelectorAll(".fragment").length>0){let Re=a.querySelector(".current-fragment");ee=Re&&Re.hasAttribute("data-fragment-index")?parseInt(Re.getAttribute("data-fragment-index"),10):a.querySelectorAll(".fragment.visible").length-1}return{h:_e,v:Ae,f:ee}}function ce(){return Ge(m.wrapper,vs+':not(.stack):not([data-visibility="uncounted"])')}function de(){return Ge(m.wrapper,Oi)}function Ne(){return Ge(m.wrapper,".slides>section>section")}function Se(){return de().length>1}function re(){return Ne().length>1}function Oe(){return ce().length}function Ye(U,ee){let _e=de()[U],Ae=_e&&_e.querySelectorAll("section");return Ae&&Ae.length&&typeof ee=="number"?Ae?Ae[ee]:void 0:_e}function ft(){let U=O();return{indexh:U.h,indexv:U.v,indexf:U.f,paused:Y(),overview:H.isActive(),...oe.getState()}}function st(){if(rn(),a&&l.autoSlide!==!1){let U=a.querySelector(".current-fragment[data-autoslide]"),ee=U?U.getAttribute("data-autoslide"):null,_e=a.parentNode?a.parentNode.getAttribute("data-autoslide"):null,Ae=a.getAttribute("data-autoslide");ee?p=parseInt(ee,10):Ae?p=parseInt(Ae,10):_e?p=parseInt(_e,10):(p=l.autoSlide,a.querySelectorAll(".fragment").length===0&&Ge(a,"video, audio").forEach(Re=>{Re.hasAttribute("data-autoplay")&&p&&1e3*Re.duration/Re.playbackRate>p&&(p=1e3*Re.duration/Re.playbackRate+1e3)})),!p||b||Y()||H.isActive()||g()&&!k.availableRoutes().next&&l.loop!==!0||(y=setTimeout(()=>{typeof l.autoSlideMethod=="function"?l.autoSlideMethod():Zi(),st()},p),w=Date.now()),o&&o.setPlaying(y!==-1)}}function rn(){clearTimeout(y),y=-1}function an(){p&&!b&&(b=!0,A({type:"autoslidepaused"}),clearTimeout(y),o&&o.setPlaying(!1))}function ji(){p&&b&&(b=!1,A({type:"autoslideresumed"}),st())}function wi({skipFragments:U=!1}={}){if(h.hasNavigatedHorizontally=!0,C.isActive())return C.prev();l.rtl?(H.isActive()||U||k.next()===!1)&&be().left&&pe(i+1,l.navigationMode==="grid"?s:void 0):(H.isActive()||U||k.prev()===!1)&&be().left&&pe(i-1,l.navigationMode==="grid"?s:void 0)}function Rs({skipFragments:U=!1}={}){if(h.hasNavigatedHorizontally=!0,C.isActive())return C.next();l.rtl?(H.isActive()||U||k.prev()===!1)&&be().right&&pe(i-1,l.navigationMode==="grid"?s:void 0):(H.isActive()||U||k.next()===!1)&&be().right&&pe(i+1,l.navigationMode==="grid"?s:void 0)}function Cs({skipFragments:U=!1}={}){if(C.isActive())return C.prev();(H.isActive()||U||k.prev()===!1)&&be().up&&pe(i,s-1)}function Ps({skipFragments:U=!1}={}){if(h.hasNavigatedVertically=!0,C.isActive())return C.next();(H.isActive()||U||k.next()===!1)&&be().down&&pe(i,s+1)}function Un({skipFragments:U=!1}={}){if(C.isActive())return C.prev();if(U||k.prev()===!1)if(be().up)Cs({skipFragments:U});else{let ee;if(ee=l.rtl?Ge(m.wrapper,Oi+".future").pop():Ge(m.wrapper,Oi+".past").pop(),ee&&ee.classList.contains("stack")){let _e=ee.querySelectorAll("section").length-1||void 0;pe(i-1,_e)}else l.rtl?Rs({skipFragments:U}):wi({skipFragments:U})}}function Zi({skipFragments:U=!1}={}){if(h.hasNavigatedHorizontally=!0,h.hasNavigatedVertically=!0,C.isActive())return C.next();if(U||k.next()===!1){let ee=be();ee.down&&ee.right&&l.loop&&z()&&(ee.down=!1),ee.down?Ps({skipFragments:U}):l.rtl?wi({skipFragments:U}):Rs({skipFragments:U})}}function Ar(U){let ee=U.data;if(typeof ee=="string"&&ee.charAt(0)==="{"&&ee.charAt(ee.length-1)==="}"&&(ee=JSON.parse(ee),ee.method&&typeof t[ee.method]=="function"))if(um.test(ee.method)===!1){const _e=t[ee.method].apply(t,ee.args);q("callback",{method:ee.method,result:_e})}else console.warn('reveal.js: "'+ee.method+'" is is blacklisted from the postMessage API')}function wr(U){v==="running"&&/section/gi.test(U.target.nodeName)&&(v="idle",A({type:"slidetransitionend",data:{indexh:i,indexv:s,previousSlide:r,currentSlide:a}}))}function Ji(U){const ee=Wt(U.target,'a[href^="#"]');if(ee){const _e=ee.getAttribute("href"),Ae=G.getIndicesFromHash(_e);Ae&&(t.slide(Ae.h,Ae.v,Ae.f),U.preventDefault())}}function Rr(U){J()}function Qi(U){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function es(U){(document.fullscreenElement||document.webkitFullscreenElement)===m.wrapper&&(U.stopImmediatePropagation(),setTimeout(()=>{t.layout(),t.focus.focus()},1))}function _a(U){g()&&l.loop===!1?(pe(0,0),ji()):b?ji():an()}const xa={VERSION:Vh,initialize:function(U){if(!n)throw'Unable to find presentation root (<div class="reveal">).';if(c)throw"Reveal.js has already been initialized.";if(c=!0,m.wrapper=n,m.slides=n.querySelector(".slides"),!m.slides)throw'Unable to find slides container (<div class="slides">).';return l={...Pm,...l,...e,...U,...Hu()},/print-pdf/gi.test(window.location.search)&&(l.view="print"),function(){l.embedded===!0?m.viewport=Wt(n,".reveal-viewport")||n:(m.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),m.viewport.classList.add("reveal-viewport")}(),window.addEventListener("load",J,!1),X.load(l.plugins,l.dependencies).then(tt),new Promise(ee=>t.on("ready",ee))},configure:fe,destroy:function(){c=!1,u!==!1&&(He(),rn(),Ue.destroy(),ye.destroy(),oe.destroy(),X.destroy(),se.destroy(),B.destroy(),V.destroy(),T.destroy(),L.destroy(),N.destroy(),document.removeEventListener("fullscreenchange",es),document.removeEventListener("webkitfullscreenchange",es),document.removeEventListener("visibilitychange",Qi,!1),window.removeEventListener("message",Ar,!1),window.removeEventListener("load",J,!1),m.pauseOverlay&&m.pauseOverlay.remove(),m.statusElement&&m.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),m.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),m.wrapper.removeAttribute("data-transition-speed"),m.wrapper.removeAttribute("data-background-transition"),m.viewport.classList.remove("reveal-viewport"),m.viewport.style.removeProperty("--slide-width"),m.viewport.style.removeProperty("--slide-height"),m.slides.style.removeProperty("width"),m.slides.style.removeProperty("height"),m.slides.style.removeProperty("zoom"),m.slides.style.removeProperty("left"),m.slides.style.removeProperty("top"),m.slides.style.removeProperty("bottom"),m.slides.style.removeProperty("right"),m.slides.style.removeProperty("transform"),Array.from(m.wrapper.querySelectorAll(vs)).forEach(U=>{U.style.removeProperty("display"),U.style.removeProperty("top"),U.removeAttribute("hidden"),U.removeAttribute("aria-hidden")}))},sync:Ce,syncSlide:function(U=a){T.sync(U),k.sync(U),R.load(U),T.update(),Ue.update()},syncFragments:k.sync.bind(k),slide:pe,left:wi,right:Rs,up:Cs,down:Ps,prev:Un,next:Zi,navigateLeft:wi,navigateRight:Rs,navigateUp:Cs,navigateDown:Ps,navigatePrev:Un,navigateNext:Zi,navigateFragment:k.goto.bind(k),prevFragment:k.prev.bind(k),nextFragment:k.next.bind(k),on:De,off:Fe,addEventListener:De,removeEventListener:Fe,layout:J,shuffle:Ie,availableRoutes:be,availableFragments:k.availableRoutes.bind(k),toggleHelp:oe.toggleHelp.bind(oe),toggleOverview:H.toggle.bind(H),toggleScrollView:C.toggle.bind(C),togglePause:Q,toggleAutoSlide:function(U){typeof U=="boolean"?U?ji():an():b?ji():an()},toggleJumpToSlide:function(U){typeof U=="boolean"?U?N.show():N.hide():N.isVisible()?N.hide():N.show()},isFirstSlide:E,isLastSlide:g,isLastVerticalSlide:z,isVerticalSlide:le,isVerticalStack:function(U=a){return U.classList.contains(".stack")||U.querySelector("section")!==null},isPaused:Y,isAutoSliding:function(){return!(!p||b)},isSpeakerNotes:Ue.isSpeakerNotesWindow.bind(Ue),isOverview:H.isActive.bind(H),isFocused:ye.isFocused.bind(ye),isOverlayOpen:oe.isOpen.bind(oe),isScrollView:C.isActive.bind(C),isPrintView:P.isActive.bind(P),isReady:()=>u,loadSlide:R.load.bind(R),unloadSlide:R.unload.bind(R),startEmbeddedContent:()=>R.startEmbeddedContent(a),stopEmbeddedContent:()=>R.stopEmbeddedContent(a,{unloadIframes:!1}),previewIframe:oe.previewIframe.bind(oe),previewImage:oe.previewImage.bind(oe),previewVideo:oe.previewVideo.bind(oe),showPreview:oe.previewIframe.bind(oe),hidePreview:oe.close.bind(oe),addEventListeners:ge,removeEventListeners:He,dispatchEvent:A,getState:ft,setState:function(U){if(typeof U=="object"){pe(js(U.indexh),js(U.indexv),js(U.indexf));let ee=js(U.paused),_e=js(U.overview);typeof ee=="boolean"&&ee!==Y()&&Q(ee),typeof _e=="boolean"&&_e!==H.isActive()&&H.toggle(_e),oe.setState(U)}},getProgress:function(){let U=Oe(),ee=We();if(a){let _e=a.querySelectorAll(".fragment");if(_e.length>0){let Ae=.9;ee+=a.querySelectorAll(".fragment.visible").length/_e.length*Ae}}return Math.min(ee/(U-1),1)},getIndices:O,getSlidesAttributes:function(){return ce().map(U=>{let ee={};for(let _e=0;_e<U.attributes.length;_e++){let Ae=U.attributes[_e];ee[Ae.name]=Ae.value}return ee})},getSlidePastCount:We,getTotalSlides:Oe,getSlide:Ye,getPreviousSlide:()=>r,getCurrentSlide:()=>a,getSlideBackground:function(U,ee){let _e=typeof U=="number"?Ye(U,ee):U;if(_e)return _e.slideBackgroundElement},getSlideNotes:Ue.getSlideNotes.bind(Ue),getSlides:ce,getHorizontalSlides:de,getVerticalSlides:Ne,hasHorizontalSlides:Se,hasVerticalSlides:re,hasNavigatedHorizontally:()=>h.hasNavigatedHorizontally,hasNavigatedVertically:()=>h.hasNavigatedVertically,shouldAutoAnimateBetween:me,addKeyBinding:K.addKeyBinding.bind(K),removeKeyBinding:K.removeKeyBinding.bind(K),triggerKey:K.triggerKey.bind(K),registerKeyboardShortcut:K.registerKeyboardShortcut.bind(K),getComputedSlideSize:M,setCurrentScrollPage:function(U,ee,_e){let Ae=i||0;i=ee,s=_e;const Re=a!==U;r=a,a=U,a&&r&&l.autoAnimate&&me(r,a,Ae,s)&&x.run(r,a),Re&&(r&&(R.stopEmbeddedContent(r),R.stopEmbeddedContent(r.slideBackgroundElement)),R.startEmbeddedContent(a),R.startEmbeddedContent(a.slideBackgroundElement)),requestAnimationFrame(()=>{qe(te(a))}),I()},getScale:()=>f,getConfig:()=>l,getQueryHash:Hu,getSlidePath:G.getHash.bind(G),getRevealElement:()=>n,getSlidesElement:()=>m.slides,getViewportElement:()=>m.viewport,getBackgroundsElement:()=>T.element,registerPlugin:X.registerPlugin.bind(X),hasPlugin:X.hasPlugin.bind(X),getPlugin:X.getPlugin.bind(X),getPlugins:X.getRegisteredPlugins.bind(X)};return tr(t,{...xa,announceStatus:qe,getStatusText:te,focus:ye,scroll:C,progress:V,controls:B,location:G,overview:H,keyboard:K,fragments:k,backgrounds:T,slideContent:R,slideNumber:L,onUserInput:function(U){l.autoSlideStoppable&&an()},closeOverlay:oe.close.bind(oe),updateSlidesVisibility:Ee,layoutSlideContents:ie,transformSlides:it,cueAutoSlide:st,cancelAutoSlide:rn}),xa}let $t=Hh,qu=[];$t.initialize=n=>(Object.assign($t,new Hh(document.querySelector(".reveal"),n)),qu.map(e=>e($t)),$t.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(n=>{$t[n]=(...e)=>{qu.push(t=>t[n].call(null,...e))}}),$t.isReady=()=>!1,$t.VERSION=Vh;/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Et={},sr=[],Dn=()=>{},zh=()=>!1,Co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qc=n=>n.startsWith("onUpdate:"),Ot=Object.assign,eu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lm=Object.prototype.hasOwnProperty,ht=(n,e)=>Lm.call(n,e),Ke=Array.isArray,rr=n=>ua(n)==="[object Map]",Gh=n=>ua(n)==="[object Set]",Yu=n=>ua(n)==="[object Date]",Je=n=>typeof n=="function",Lt=n=>typeof n=="string",jn=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",Wh=n=>(yt(n)||Je(n))&&Je(n.then)&&Je(n.catch),Xh=Object.prototype.toString,ua=n=>Xh.call(n),Dm=n=>ua(n).slice(8,-1),qh=n=>ua(n)==="[object Object]",tu=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gr=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Im=/-\w/g,En=Po(n=>n.replace(Im,e=>e.slice(1).toUpperCase())),Nm=/\B([A-Z])/g,ws=Po(n=>n.replace(Nm,"-$1").toLowerCase()),Lo=Po(n=>n.charAt(0).toUpperCase()+n.slice(1)),qo=Po(n=>n?`on${Lo(n)}`:""),Xi=(n,e)=>!Object.is(n,e),Yo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Um=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let $u;const da=()=>$u||($u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nu(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Lt(i)?km(i):nu(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(n)||yt(n))return n}const Fm=/;(?![^(]*\))/g,Om=/:([^]+)/,Bm=/\/\*[^]*?\*\//g;function km(n){const e={};return n.replace(Bm,"").split(Fm).forEach(t=>{if(t){const i=t.split(Om);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function iu(n){let e="";if(Lt(n))e=n;else if(Ke(n))for(let t=0;t<n.length;t++){const i=iu(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hm=Jc(Vm);function $h(n){return!!n||n===""}function zm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=su(n[i],e[i]);return t}function su(n,e){if(n===e)return!0;let t=Yu(n),i=Yu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=jn(n),i=jn(e),t||i)return n===e;if(t=Ke(n),i=Ke(e),t||i)return t&&i?zm(n,e):!1;if(t=yt(n),i=yt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!su(n[a],e[a]))return!1}}return String(n)===String(e)}const Kh=n=>!!(n&&n.__v_isRef===!0),jh=n=>Lt(n)?n:n==null?"":Ke(n)||yt(n)&&(n.toString===Xh||!Je(n.toString))?Kh(n)?jh(n.value):JSON.stringify(n,Zh,2):String(n),Zh=(n,e)=>Kh(e)?Zh(n,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[$o(i,r)+" =>"]=s,t),{})}:Gh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$o(t))}:jn(e)?$o(e):yt(e)&&!Ke(e)&&!qh(e)?String(e):e,$o=(n,e="")=>{var t;return jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class Gm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){this._on>0&&--this._on===0&&(cn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wm(){return cn}let bt;const Ko=new WeakSet;class Jh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ko.has(this)&&(Ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ef(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ku(this),tf(this);const e=bt,t=In;bt=this,In=!0;try{return this.fn()}finally{nf(this),bt=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ou(e);this.deps=this.depsTail=void 0,Ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gl(this)&&this.run()}get dirty(){return Gl(this)}}let Qh=0,Wr,Xr;function ef(n,e=!1){if(n.flags|=8,e){n.next=Xr,Xr=n;return}n.next=Wr,Wr=n}function ru(){Qh++}function au(){if(--Qh>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Wr;){let e=Wr;for(Wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function tf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ou(i),Xm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Gl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qr)||(n.globalVersion=Qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Gl(n))))return;n.flags|=2;const e=n.dep,t=bt,i=In;bt=n,In=!0;try{tf(n);const s=n.fn(n._value);(e.version===0||Xi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=t,In=i,nf(n),n.flags&=-3}}function ou(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ou(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const rf=[];function _i(){rf.push(In),In=!1}function xi(){const n=rf.pop();In=n===void 0?!0:n}function Ku(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let Qr=0;class qm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!In||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new qm(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,Qr++,this.notify(e)}notify(e){ru();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{au()}}}function af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Wl=new WeakMap,Ss=Symbol(""),Xl=Symbol(""),ea=Symbol("");function Kt(n,e,t){if(In&&bt){let i=Wl.get(n);i||Wl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new lu),s.map=i,s.key=t),s.track()}}function ui(n,e,t,i,s,r){const a=Wl.get(n);if(!a){Qr++;return}const o=l=>{l&&l.trigger()};if(ru(),e==="clear")a.forEach(o);else{const l=Ke(n),c=l&&tu(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,d)=>{(d==="length"||d===ea||!jn(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ea)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ss)),rr(n)&&o(a.get(Xl)));break;case"delete":l||(o(a.get(Ss)),rr(n)&&o(a.get(Xl)));break;case"set":rr(n)&&o(a.get(Ss));break}}au()}function Is(n){const e=dt(n);return e===n?e:(Kt(e,"iterate",ea),Nn(n)?e:e.map(Si))}function cu(n){return Kt(n=dt(n),"iterate",ea),n}function ki(n,e){return Yi(n)?ta(ar(n)?Si(e):e):Si(e)}const Ym={__proto__:null,[Symbol.iterator](){return jo(this,Symbol.iterator,n=>ki(this,n))},concat(...n){return Is(this).concat(...n.map(e=>Ke(e)?Is(e):e))},entries(){return jo(this,"entries",n=>(n[1]=ki(this,n[1]),n))},every(n,e){return ti(this,"every",n,e,void 0,arguments)},filter(n,e){return ti(this,"filter",n,e,t=>t.map(i=>ki(this,i)),arguments)},find(n,e){return ti(this,"find",n,e,t=>ki(this,t),arguments)},findIndex(n,e){return ti(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ti(this,"findLast",n,e,t=>ki(this,t),arguments)},findLastIndex(n,e){return ti(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ti(this,"forEach",n,e,void 0,arguments)},includes(...n){return Zo(this,"includes",n)},indexOf(...n){return Zo(this,"indexOf",n)},join(n){return Is(this).join(n)},lastIndexOf(...n){return Zo(this,"lastIndexOf",n)},map(n,e){return ti(this,"map",n,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...n){return Cr(this,"push",n)},reduce(n,...e){return ju(this,"reduce",n,e)},reduceRight(n,...e){return ju(this,"reduceRight",n,e)},shift(){return Cr(this,"shift")},some(n,e){return ti(this,"some",n,e,void 0,arguments)},splice(...n){return Cr(this,"splice",n)},toReversed(){return Is(this).toReversed()},toSorted(n){return Is(this).toSorted(n)},toSpliced(...n){return Is(this).toSpliced(...n)},unshift(...n){return Cr(this,"unshift",n)},values(){return jo(this,"values",n=>ki(this,n))}};function jo(n,e,t){const i=cu(n),s=i[e]();return i!==n&&!Nn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const $m=Array.prototype;function ti(n,e,t,i,s,r){const a=cu(n),o=a!==n&&!Nn(n),l=a[e];if(l!==$m[e]){const h=l.apply(n,r);return o?Si(h):h}let c=t;a!==n&&(o?c=function(h,d){return t.call(this,ki(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function ju(n,e,t,i){const s=cu(n);let r=t;return s!==n&&(Nn(n)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,n)}):r=function(a,o,l){return t.call(this,a,ki(n,o),l,n)}),s[e](r,...i)}function Zo(n,e,t){const i=dt(n);Kt(i,"iterate",ea);const s=i[e](...t);return(s===-1||s===!1)&&fu(t[0])?(t[0]=dt(t[0]),i[e](...t)):s}function Cr(n,e,t=[]){_i(),ru();const i=dt(n)[e].apply(n,t);return au(),xi(),i}const Km=Jc("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function jm(n){jn(n)||(n=String(n));const e=dt(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class lf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?ag:hf:r?df:uf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ke(e);if(!s){let l;if(a&&(l=Ym[t]))return l;if(t==="hasOwnProperty")return jm}const o=Reflect.get(e,t,Jt(e)?e:i);if((jn(t)?of.has(t):Km(t))||(s||Kt(e,"get",t),r))return o;if(Jt(o)){const l=a&&tu(t)?o:o.value;return s&&yt(l)?Yl(l):l}return yt(o)?s?Yl(o):du(o):o}}class cf extends lf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Ke(e)&&tu(t);if(!this._isShallow){const c=Yi(r);if(!Nn(i)&&!Yi(i)&&(r=dt(r),i=dt(i)),!a&&Jt(r)&&!Jt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ht(e,t),l=Reflect.set(e,t,i,Jt(e)?e:s);return e===dt(s)&&(o?Xi(i,r)&&ui(e,"set",t,i):ui(e,"add",t,i)),l}deleteProperty(e,t){const i=ht(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ui(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!jn(t)||!of.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",Ke(e)?"length":Ss),Reflect.ownKeys(e)}}class Zm extends lf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jm=new cf,Qm=new Zm,eg=new cf(!0);const ql=n=>n,Sa=n=>Reflect.getPrototypeOf(n);function tg(n,e,t){return function(...i){const s=this.__v_raw,r=dt(s),a=rr(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?ql:e?ta:Si;return!e&&Kt(r,"iterate",l?Xl:Ss),Ot(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function ya(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ng(n,e){const t={get(s){const r=this.__v_raw,a=dt(r),o=dt(s);n||(Xi(s,o)&&Kt(a,"get",s),Kt(a,"get",o));const{has:l}=Sa(a),c=e?ql:n?ta:Si;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Kt(dt(s),"iterate",Ss),s.size},has(s){const r=this.__v_raw,a=dt(r),o=dt(s);return n||(Xi(s,o)&&Kt(a,"has",s),Kt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=dt(o),c=e?ql:n?ta:Si;return!n&&Kt(l,"iterate",Ss),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Ot(t,n?{add:ya("add"),set:ya("set"),delete:ya("delete"),clear:ya("clear")}:{add(s){!e&&!Nn(s)&&!Yi(s)&&(s=dt(s));const r=dt(this);return Sa(r).has.call(r,s)||(r.add(s),ui(r,"add",s,s)),this},set(s,r){!e&&!Nn(r)&&!Yi(r)&&(r=dt(r));const a=dt(this),{has:o,get:l}=Sa(a);let c=o.call(a,s);c||(s=dt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Xi(r,u)&&ui(a,"set",s,r):ui(a,"add",s,r),this},delete(s){const r=dt(this),{has:a,get:o}=Sa(r);let l=a.call(r,s);l||(s=dt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ui(r,"delete",s,void 0),c},clear(){const s=dt(this),r=s.size!==0,a=s.clear();return r&&ui(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tg(s,n,e)}),t}function uu(n,e){const t=ng(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ht(t,s)&&s in i?t:i,s,r)}const ig={get:uu(!1,!1)},sg={get:uu(!1,!0)},rg={get:uu(!0,!1)};const uf=new WeakMap,df=new WeakMap,hf=new WeakMap,ag=new WeakMap;function og(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lg(n){return n.__v_skip||!Object.isExtensible(n)?0:og(Dm(n))}function du(n){return Yi(n)?n:hu(n,!1,Jm,ig,uf)}function cg(n){return hu(n,!1,eg,sg,df)}function Yl(n){return hu(n,!0,Qm,rg,hf)}function hu(n,e,t,i,s){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=lg(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function ar(n){return Yi(n)?ar(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function Nn(n){return!!(n&&n.__v_isShallow)}function fu(n){return n?!!n.__v_raw:!1}function dt(n){const e=n&&n.__v_raw;return e?dt(e):n}function ug(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&Yh(n,"__v_skip",!0),n}const Si=n=>yt(n)?du(n):n,ta=n=>yt(n)?Yl(n):n;function Jt(n){return n?n.__v_isRef===!0:!1}function dg(n){return pf(n,!1)}function ff(n){return pf(n,!0)}function pf(n,e){return Jt(n)?n:new hg(n,e)}class hg{constructor(e,t){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:dt(e),this._value=t?e:Si(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Nn(e)||Yi(e);e=i?e:dt(e),Xi(e,t)&&(this._rawValue=e,this._value=i?e:Si(e),this.dep.trigger())}}function fg(n){return Jt(n)?n.value:n}const pg={get:(n,e,t)=>e==="__v_raw"?n:fg(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Jt(s)&&!Jt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function mf(n){return ar(n)?n:new Proxy(n,pg)}class mg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return ef(this,!0),!0}get value(){const e=this.dep.track();return sf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gg(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new mg(i,s,t)}const ba={},po=new WeakMap;let hs;function vg(n,e=!1,t=hs){if(t){let i=po.get(t);i||po.set(t,i=[]),i.push(n)}}function _g(n,e,t=Et){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=b=>s?b:Nn(b)||s===!1||s===0?Hi(b,1):Hi(b);let u,h,d,f,_=!1,m=!1;if(Jt(n)?(h=()=>n.value,_=Nn(n)):ar(n)?(h=()=>c(n),_=!0):Ke(n)?(m=!0,_=n.some(b=>ar(b)||Nn(b)),h=()=>n.map(b=>{if(Jt(b))return b.value;if(ar(b))return c(b);if(Je(b))return l?l(b,2):b()})):Je(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){_i();try{d()}finally{xi()}}const b=hs;hs=u;try{return l?l(n,3,[f]):n(f)}finally{hs=b}}:h=Dn,e&&s){const b=h,R=s===!0?1/0:s;h=()=>Hi(b(),R)}const v=Wm(),p=()=>{u.stop(),v&&v.active&&eu(v.effects,u)};if(r&&e){const b=e;e=(...R)=>{b(...R),p()}}let y=m?new Array(n.length).fill(ba):ba;const w=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const R=u.run();if(s||_||(m?R.some((L,N)=>Xi(L,y[N])):Xi(R,y))){d&&d();const L=hs;hs=u;try{const N=[R,y===ba?void 0:m&&y[0]===ba?[]:y,f];y=R,l?l(e,3,N):e(...N)}finally{hs=L}}}else u.run()};return o&&o(w),u=new Jh(h),u.scheduler=a?()=>a(w,!1):w,f=b=>vg(b,!1,u),d=u.onStop=()=>{const b=po.get(u);if(b){if(l)l(b,4);else for(const R of b)R();po.delete(u)}},e?i?w(!0):y=u.run():a?a(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Hi(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Jt(n))Hi(n.value,e,t);else if(Ke(n))for(let i=0;i<n.length;i++)Hi(n[i],e,t);else if(Gh(n)||rr(n))n.forEach(i=>{Hi(i,e,t)});else if(qh(n)){for(const i in n)Hi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ha(n,e,t,i){try{return i?n(...i):n()}catch(s){Do(s,e,t)}}function Zn(n,e,t,i){if(Je(n)){const s=ha(n,e,t,i);return s&&Wh(s)&&s.catch(r=>{Do(r,e,t)}),s}if(Ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Zn(n[r],e,t,i));return s}}function Do(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Et;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){_i(),ha(r,null,10,[n,l,c]),xi();return}}xg(n,t,s,i,a)}function xg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const nn=[];let Hn=-1;const or=[];let Vi=null,Zs=0;const gf=Promise.resolve();let mo=null;function na(n){const e=mo||gf;return n?e.then(this?n.bind(this):n):e}function Sg(n){let e=Hn+1,t=nn.length;for(;e<t;){const i=e+t>>>1,s=nn[i],r=ia(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function pu(n){if(!(n.flags&1)){const e=ia(n),t=nn[nn.length-1];!t||!(n.flags&2)&&e>=ia(t)?nn.push(n):nn.splice(Sg(e),0,n),n.flags|=1,vf()}}function vf(){mo||(mo=gf.then(xf))}function yg(n){Ke(n)?or.push(...n):Vi&&n.id===-1?Vi.splice(Zs+1,0,n):n.flags&1||(or.push(n),n.flags|=1),vf()}function Zu(n,e,t=Hn+1){for(;t<nn.length;t++){const i=nn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;nn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _f(n){if(or.length){const e=[...new Set(or)].sort((t,i)=>ia(t)-ia(i));if(or.length=0,Vi){Vi.push(...e);return}for(Vi=e,Zs=0;Zs<Vi.length;Zs++){const t=Vi[Zs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vi=null,Zs=0}}const ia=n=>n.id==null?n.flags&2?-1:1/0:n.id;function xf(n){const e=Dn;try{for(Hn=0;Hn<nn.length;Hn++){const t=nn[Hn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ha(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Hn<nn.length;Hn++){const t=nn[Hn];t&&(t.flags&=-2)}Hn=-1,nn.length=0,_f(),mo=null,(nn.length||or.length)&&xf()}}let Pn=null,Sf=null;function go(n){const e=Pn;return Pn=n,Sf=n&&n.type.__scopeId||null,e}function bg(n,e=Pn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ld(-1);const r=go(e);let a;try{a=n(...s)}finally{go(r),i._d&&ld(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ns(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(_i(),Zn(l,t,8,[n.el,o,n,e]),xi())}}function Eg(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function Za(n,e,t=!1){const i=bv();if(i||lr){let s=lr?lr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const Mg=Symbol.for("v-scx"),Tg=()=>Za(Mg);function qr(n,e,t){return yf(n,e,t)}function yf(n,e,t=Et){const{immediate:i,deep:s,flush:r,once:a}=t,o=Ot({},t),l=e&&i||!e&&r!=="post";let c;if(ra){if(r==="sync"){const f=Tg();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Dn,f.resume=Dn,f.pause=Dn,f}}const u=jt;o.call=(f,_,m)=>Zn(f,u,_,m);let h=!1;r==="post"?o.scheduler=f=>{ln(f,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(f,_)=>{_?f():pu(f)}),o.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=_g(n,e,o);return ra&&(c?c.push(d):l&&d()),d}function Ag(n,e,t){const i=this.proxy,s=Lt(n)?n.includes(".")?bf(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const a=pa(this),o=yf(s,r.bind(i),t);return a(),o}function bf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const wg=Symbol("_vte"),Rg=n=>n.__isTeleport,Cg=Symbol("_leaveCb");function mu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,mu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ef(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ju(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const vo=new WeakMap;function Yr(n,e,t,i,s=!1){if(Ke(n)){n.forEach((m,v)=>Yr(m,e&&(Ke(e)?e[v]:e),t,i,s));return}if($r(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Yr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?yu(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Et?o.refs={}:o.refs,h=o.setupState,d=dt(h),f=h===Et?zh:m=>Ju(u,m)?!1:ht(d,m),_=(m,v)=>!(v&&Ju(u,v));if(c!=null&&c!==l){if(Qu(e),Lt(c))u[c]=null,f(c)&&(h[c]=null);else if(Jt(c)){const m=e;_(c,m.k)&&(c.value=null),m.k&&(u[m.k]=null)}}if(Je(l))ha(l,o,12,[a,u]);else{const m=Lt(l),v=Jt(l);if(m||v){const p=()=>{if(n.f){const y=m?f(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Ke(y)&&eu(y,r);else if(Ke(y))y.includes(r)||y.push(r);else if(m)u[l]=[r],f(l)&&(h[l]=u[l]);else{const w=[r];_(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else m?(u[l]=a,f(l)&&(h[l]=a)):v&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{p(),vo.delete(n)};y.id=-1,vo.set(n,y),ln(y,t)}else Qu(n),p()}}}function Qu(n){const e=vo.get(n);e&&(e.flags|=8,vo.delete(n))}da().requestIdleCallback;da().cancelIdleCallback;const $r=n=>!!n.type.__asyncLoader,Mf=n=>n.type.__isKeepAlive;function Pg(n,e){Tf(n,"a",e)}function Lg(n,e){Tf(n,"da",e)}function Tf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Io(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Mf(s.parent.vnode)&&Dg(i,e,t,s),s=s.parent}}function Dg(n,e,t,i){const s=Io(e,n,i,!0);wf(()=>{eu(i[e],s)},t)}function Io(n,e,t=jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{_i();const o=pa(t),l=Zn(e,t,n,a);return o(),xi(),l});return i?s.unshift(r):s.push(r),r}}const Mi=n=>(e,t=jt)=>{(!ra||n==="sp")&&Io(n,(...i)=>e(...i),t)},Ig=Mi("bm"),No=Mi("m"),Ng=Mi("bu"),Ug=Mi("u"),Af=Mi("bum"),wf=Mi("um"),Fg=Mi("sp"),Og=Mi("rtg"),Bg=Mi("rtc");function kg(n,e=jt){Io("ec",n,e)}const gu="components";function SM(n,e){return Pf(gu,n,!0,e)||n}const Rf=Symbol.for("v-ndc");function Cf(n){return Lt(n)?Pf(gu,n,!1)||n:n||Rf}function Pf(n,e,t=!0,i=!1){const s=Pn||jt;if(s){const r=s.type;if(n===gu){const o=wv(r,!1);if(o&&(o===e||o===En(e)||o===Lo(En(e))))return r}const a=ed(s[n]||r[n],e)||ed(s.appContext[n],e);return!a&&i?r:a}}function ed(n,e){return n&&(n[e]||n[En(e)]||n[Lo(En(e))])}const $l=n=>n?Zf(n)?yu(n):$l(n.parent):null,Kr=Ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$l(n.parent),$root:n=>$l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>vu(n),$forceUpdate:n=>n.f||(n.f=()=>{pu(n.update)}),$nextTick:n=>n.n||(n.n=na.bind(n.proxy)),$watch:n=>Ag.bind(n)}),Jo=(n,e)=>n!==Et&&!n.__isScriptSetup&&ht(n,e),Vg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Jo(i,e))return a[e]=1,i[e];if(s!==Et&&ht(s,e))return a[e]=2,s[e];if(ht(r,e))return a[e]=3,r[e];if(t!==Et&&ht(t,e))return a[e]=4,t[e];Kl&&(a[e]=0)}}const c=Kr[e];let u,h;if(c)return e==="$attrs"&&Kt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Et&&ht(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ht(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Jo(s,e)?(s[e]=t,!0):i!==Et&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==Et&&o[0]!=="$"&&ht(n,o)||Jo(e,o)||ht(r,o)||ht(i,o)||ht(Kr,o)||ht(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function td(n){return Ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Kl=!0;function Hg(n){const e=vu(n),t=n.proxy,i=n.ctx;Kl=!1,e.beforeCreate&&nd(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:m,deactivated:v,beforeDestroy:p,beforeUnmount:y,destroyed:w,unmounted:b,render:R,renderTracked:L,renderTriggered:N,errorCaptured:x,serverPrefetch:T,expose:C,inheritAttrs:P,components:k,directives:H,filters:K}=e;if(c&&zg(c,i,null),a)for(const V in a){const se=a[V];Je(se)&&(i[V]=se.bind(t))}if(s){const V=s.call(t,t);yt(V)&&(n.data=du(V))}if(Kl=!0,r)for(const V in r){const se=r[V],X=Je(se)?se.bind(t,t):Je(se.get)?se.get.bind(t,t):Dn,oe=!Je(se)&&Je(se.set)?se.set.bind(t):Dn,ye=Cv({get:X,set:oe});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>ye.value,set:xe=>ye.value=xe})}if(o)for(const V in o)Lf(o[V],i,t,V);if(l){const V=Je(l)?l.call(t):l;Reflect.ownKeys(V).forEach(se=>{Eg(se,V[se])})}u&&nd(u,n,"c");function B(V,se){Ke(se)?se.forEach(X=>V(X.bind(t))):se&&V(se.bind(t))}if(B(Ig,h),B(No,d),B(Ng,f),B(Ug,_),B(Pg,m),B(Lg,v),B(kg,x),B(Bg,L),B(Og,N),B(Af,y),B(wf,b),B(Fg,T),Ke(C))if(C.length){const V=n.exposed||(n.exposed={});C.forEach(se=>{Object.defineProperty(V,se,{get:()=>t[se],set:X=>t[se]=X,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Dn&&(n.render=R),P!=null&&(n.inheritAttrs=P),k&&(n.components=k),H&&(n.directives=H),T&&Ef(n)}function zg(n,e,t=Dn){Ke(n)&&(n=jl(n));for(const i in n){const s=n[i];let r;yt(s)?"default"in s?r=Za(s.from||i,s.default,!0):r=Za(s.from||i):r=Za(s),Jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function nd(n,e,t){Zn(Ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lf(n,e,t,i){let s=i.includes(".")?bf(t,i):()=>t[i];if(Lt(n)){const r=e[n];Je(r)&&qr(s,r)}else if(Je(n))qr(s,n.bind(t));else if(yt(n))if(Ke(n))n.forEach(r=>Lf(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&qr(s,r,n)}}function vu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>_o(l,c,a,!0)),_o(l,e,a)),yt(e)&&r.set(e,l),l}function _o(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&_o(n,r,t,!0),s&&s.forEach(a=>_o(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Gg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Gg={data:id,props:sd,emits:sd,methods:kr,computed:kr,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:kr,directives:kr,watch:Xg,provide:id,inject:Wg};function id(n,e){return e?n?function(){return Ot(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function Wg(n,e){return kr(jl(n),jl(e))}function jl(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Qt(n,e){return n?[...new Set([].concat(n,e))]:e}function kr(n,e){return n?Ot(Object.create(null),n,e):e}function sd(n,e){return n?Ke(n)&&Ke(e)?[...new Set([...n,...e])]:Ot(Object.create(null),td(n),td(e??{})):e}function Xg(n,e){if(!n)return e;if(!e)return n;const t=Ot(Object.create(null),n);for(const i in e)t[i]=Qt(n[i],e[i]);return t}function Df(){return{app:null,config:{isNativeTag:zh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function Yg(n,e){return function(i,s=null){Je(i)||(i=Ot({},i)),s!=null&&!yt(s)&&(s=null);const r=Df(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:qg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Pv,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&Je(u.install)?(a.add(u),u.install(c,...h)):Je(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||fi(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(f,u):n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,yu(f.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Zn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=lr;lr=c;try{return u()}finally{lr=h}}};return c}}let lr=null;const $g=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${En(e)}Modifiers`]||n[`${ws(e)}Modifiers`];function Kg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Et;let s=t;const r=e.startsWith("update:"),a=r&&$g(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Lt(u)?u.trim():u)),a.number&&(s=t.map(Um)));let o,l=i[o=qo(e)]||i[o=qo(En(e))];!l&&r&&(l=i[o=qo(ws(e))]),l&&Zn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Zn(c,n,6,s)}}const jg=new WeakMap;function If(n,e,t=!1){const i=t?jg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Je(n)){const l=c=>{const u=If(c,e,!0);u&&(o=!0,Ot(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(yt(n)&&i.set(n,null),null):(Ke(r)?r.forEach(l=>a[l]=null):Ot(a,r),yt(n)&&i.set(n,a),a)}function Uo(n,e){return!n||!Co(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,ws(e))||ht(n,e))}function Qo(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:_,inheritAttrs:m}=n,v=go(n);let p,y;try{if(t.shapeFlag&4){const b=s||i,R=b;p=Gn(c.call(R,b,u,h,f,d,_)),y=o}else{const b=e;p=Gn(b.length>1?b(h,{attrs:o,slots:a,emit:l}):b(h,null)),y=e.props?o:Zg(o)}}catch(b){jr.length=0,Do(b,n,1),p=fi(fr)}let w=p;if(y&&m!==!1){const b=Object.keys(y),{shapeFlag:R}=w;b.length&&R&7&&(r&&b.some(Qc)&&(y=Jg(y,r)),w=pr(w,y,!1,!0))}return t.dirs&&(w=pr(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&mu(w,t.transition),p=w,go(v),p}const Zg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Co(t))&&((e||(e={}))[t]=n[t]);return e},Jg=(n,e)=>{const t={};for(const i in n)(!Qc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qg(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?rd(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(Nf(a,i,d)&&!Uo(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?rd(i,a,c):!0:!!a;return!1}function rd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Nf(e,n,r)&&!Uo(t,r))return!0}return!1}function Nf(n,e,t){const i=n[t],s=e[t];return t==="style"&&yt(i)&&yt(s)?!su(i,s):i!==s}function ev({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Uf={},Ff=()=>Object.create(Uf),Of=n=>Object.getPrototypeOf(n)===Uf;function tv(n,e,t,i=!1){const s={},r=Ff();n.propsDefaults=Object.create(null),Bf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:cg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function nv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=dt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Uo(n.emitsOptions,d))continue;const f=e[d];if(l)if(ht(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=En(d);s[_]=Zl(l,o,_,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Bf(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!ht(e,h)&&((u=ws(h))===h||!ht(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Zl(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!ht(e,h))&&(delete r[h],c=!0)}c&&ui(n.attrs,"set","")}function Bf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Gr(l))continue;const c=e[l];let u;s&&ht(s,u=En(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Uo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=dt(t),c=o||Et;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Zl(s,l,h,c[h],n,!ht(c,h))}}return a}function Zl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ht(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=pa(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ws(t))&&(i=!0))}return i}const iv=new WeakMap;function kf(n,e,t=!1){const i=t?iv:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Je(n)){const u=h=>{l=!0;const[d,f]=kf(h,e,!0);Ot(a,d),f&&o.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return yt(n)&&i.set(n,sr),sr;if(Ke(r))for(let u=0;u<r.length;u++){const h=En(r[u]);ad(h)&&(a[h]=Et)}else if(r)for(const u in r){const h=En(u);if(ad(h)){const d=r[u],f=a[h]=Ke(d)||Je(d)?{type:d}:Ot({},d),_=f.type;let m=!1,v=!0;if(Ke(_))for(let p=0;p<_.length;++p){const y=_[p],w=Je(y)&&y.name;if(w==="Boolean"){m=!0;break}else w==="String"&&(v=!1)}else m=Je(_)&&_.name==="Boolean";f[0]=m,f[1]=v,(m||ht(f,"default"))&&o.push(h)}}const c=[a,o];return yt(n)&&i.set(n,c),c}function ad(n){return n[0]!=="$"&&!Gr(n)}const _u=n=>n==="_"||n==="_ctx"||n==="$stable",xu=n=>Ke(n)?n.map(Gn):[Gn(n)],sv=(n,e,t)=>{if(e._n)return e;const i=bg((...s)=>xu(e(...s)),t);return i._c=!1,i},Vf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(_u(s))continue;const r=n[s];if(Je(r))e[s]=sv(s,r,i);else if(r!=null){const a=xu(r);e[s]=()=>a}}},Hf=(n,e)=>{const t=xu(e);n.slots.default=()=>t},zf=(n,e,t)=>{for(const i in e)(t||!_u(i))&&(n[i]=e[i])},rv=(n,e,t)=>{const i=n.slots=Ff();if(n.vnode.shapeFlag&32){const s=e._;s?(zf(i,e,t),t&&Yh(i,"_",s,!0)):Vf(e,i)}else e&&Hf(n,e)},av=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Et;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:zf(s,e,t):(r=!e.$stable,Vf(e,s)),a=e}else e&&(Hf(n,e),a={default:1});if(r)for(const o in s)!_u(o)&&a[o]==null&&delete s[o]};function ov(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(da().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ln=hv;function lv(n){return cv(n)}function cv(n,e){ov();const t=da();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Dn,insertStaticContent:_}=n,m=(A,I,q,J=null,ie=null,M=null,he=void 0,ae=null,le=!!I.dynamicChildren)=>{if(A===I)return;A&&!Pr(A,I)&&(J=fe(A),xe(A,ie,M,!0),A=null),I.patchFlag===-2&&(le=!1,I.dynamicChildren=null);const{type:z,ref:E,shapeFlag:g}=I;switch(z){case Fo:v(A,I,q,J);break;case fr:p(A,I,q,J);break;case Ja:A==null&&y(I,q,J,he);break;case zn:k(A,I,q,J,ie,M,he,ae,le);break;default:g&1?R(A,I,q,J,ie,M,he,ae,le):g&6?H(A,I,q,J,ie,M,he,ae,le):(g&64||g&128)&&z.process(A,I,q,J,ie,M,he,ae,le,De)}E!=null&&ie?Yr(E,A&&A.ref,M,I||A,!I):E==null&&A&&A.ref!=null&&Yr(A.ref,null,M,A,!0)},v=(A,I,q,J)=>{if(A==null)i(I.el=o(I.children),q,J);else{const ie=I.el=A.el;I.children!==A.children&&c(ie,I.children)}},p=(A,I,q,J)=>{A==null?i(I.el=l(I.children||""),q,J):I.el=A.el},y=(A,I,q,J)=>{[A.el,A.anchor]=_(A.children,I,q,J,A.el,A.anchor)},w=({el:A,anchor:I},q,J)=>{let ie;for(;A&&A!==I;)ie=d(A),i(A,q,J),A=ie;i(I,q,J)},b=({el:A,anchor:I})=>{let q;for(;A&&A!==I;)q=d(A),s(A),A=q;s(I)},R=(A,I,q,J,ie,M,he,ae,le)=>{if(I.type==="svg"?he="svg":I.type==="math"&&(he="mathml"),A==null)L(I,q,J,ie,M,he,ae,le);else{const z=A.el&&A.el._isVueCE?A.el:null;try{z&&z._beginPatch(),T(A,I,ie,M,he,ae,le)}finally{z&&z._endPatch()}}},L=(A,I,q,J,ie,M,he,ae)=>{let le,z;const{props:E,shapeFlag:g,transition:D,dirs:W}=A;if(le=A.el=a(A.type,M,E&&E.is,E),g&8?u(le,A.children):g&16&&x(A.children,le,null,J,ie,el(A,M),he,ae),W&&ns(A,null,J,"created"),N(le,A,A.scopeId,he,J),E){for(const Y in E)Y!=="value"&&!Gr(Y)&&r(le,Y,null,E[Y],M,J);"value"in E&&r(le,"value",null,E.value,M),(z=E.onVnodeBeforeMount)&&On(z,J,A)}W&&ns(A,null,J,"beforeMount");const Q=uv(ie,D);Q&&D.beforeEnter(le),i(le,I,q),((z=E&&E.onVnodeMounted)||Q||W)&&ln(()=>{z&&On(z,J,A),Q&&D.enter(le),W&&ns(A,null,J,"mounted")},ie)},N=(A,I,q,J,ie)=>{if(q&&f(A,q),J)for(let M=0;M<J.length;M++)f(A,J[M]);if(ie){let M=ie.subTree;if(I===M||qf(M.type)&&(M.ssContent===I||M.ssFallback===I)){const he=ie.vnode;N(A,he,he.scopeId,he.slotScopeIds,ie.parent)}}},x=(A,I,q,J,ie,M,he,ae,le=0)=>{for(let z=le;z<A.length;z++){const E=A[z]=ae?ci(A[z]):Gn(A[z]);m(null,E,I,q,J,ie,M,he,ae)}},T=(A,I,q,J,ie,M,he)=>{const ae=I.el=A.el;let{patchFlag:le,dynamicChildren:z,dirs:E}=I;le|=A.patchFlag&16;const g=A.props||Et,D=I.props||Et;let W;if(q&&is(q,!1),(W=D.onVnodeBeforeUpdate)&&On(W,q,I,A),E&&ns(I,A,q,"beforeUpdate"),q&&is(q,!0),(g.innerHTML&&D.innerHTML==null||g.textContent&&D.textContent==null)&&u(ae,""),z?C(A.dynamicChildren,z,ae,q,J,el(I,ie),M):he||se(A,I,ae,null,q,J,el(I,ie),M,!1),le>0){if(le&16)P(ae,g,D,q,ie);else if(le&2&&g.class!==D.class&&r(ae,"class",null,D.class,ie),le&4&&r(ae,"style",g.style,D.style,ie),le&8){const Q=I.dynamicProps;for(let Y=0;Y<Q.length;Y++){const pe=Q[Y],me=g[pe],Ce=D[pe];(Ce!==me||pe==="value")&&r(ae,pe,me,Ce,ie,q)}}le&1&&A.children!==I.children&&u(ae,I.children)}else!he&&z==null&&P(ae,g,D,q,ie);((W=D.onVnodeUpdated)||E)&&ln(()=>{W&&On(W,q,I,A),E&&ns(I,A,q,"updated")},J)},C=(A,I,q,J,ie,M,he)=>{for(let ae=0;ae<I.length;ae++){const le=A[ae],z=I[ae],E=le.el&&(le.type===zn||!Pr(le,z)||le.shapeFlag&198)?h(le.el):q;m(le,z,E,null,J,ie,M,he,!0)}},P=(A,I,q,J,ie)=>{if(I!==q){if(I!==Et)for(const M in I)!Gr(M)&&!(M in q)&&r(A,M,I[M],null,ie,J);for(const M in q){if(Gr(M))continue;const he=q[M],ae=I[M];he!==ae&&M!=="value"&&r(A,M,ae,he,ie,J)}"value"in q&&r(A,"value",I.value,q.value,ie)}},k=(A,I,q,J,ie,M,he,ae,le)=>{const z=I.el=A?A.el:o(""),E=I.anchor=A?A.anchor:o("");let{patchFlag:g,dynamicChildren:D,slotScopeIds:W}=I;W&&(ae=ae?ae.concat(W):W),A==null?(i(z,q,J),i(E,q,J),x(I.children||[],q,E,ie,M,he,ae,le)):g>0&&g&64&&D&&A.dynamicChildren&&A.dynamicChildren.length===D.length?(C(A.dynamicChildren,D,q,ie,M,he,ae),(I.key!=null||ie&&I===ie.subTree)&&Gf(A,I,!0)):se(A,I,q,E,ie,M,he,ae,le)},H=(A,I,q,J,ie,M,he,ae,le)=>{I.slotScopeIds=ae,A==null?I.shapeFlag&512?ie.ctx.activate(I,q,J,he,le):K(I,q,J,ie,M,he,le):G(A,I,le)},K=(A,I,q,J,ie,M,he)=>{const ae=A.component=yv(A,J,ie);if(Mf(A)&&(ae.ctx.renderer=De),Ev(ae,!1,he),ae.asyncDep){if(ie&&ie.registerDep(ae,B,he),!A.el){const le=ae.subTree=fi(fr);p(null,le,I,q),A.placeholder=le.el}}else B(ae,A,I,q,ie,M,he)},G=(A,I,q)=>{const J=I.component=A.component;if(Qg(A,I,q))if(J.asyncDep&&!J.asyncResolved){V(J,I,q);return}else J.next=I,J.update();else I.el=A.el,J.vnode=I},B=(A,I,q,J,ie,M,he)=>{const ae=()=>{if(A.isMounted){let{next:g,bu:D,u:W,parent:Q,vnode:Y}=A;{const ue=Wf(A);if(ue){g&&(g.el=Y.el,V(A,g,he)),ue.asyncDep.then(()=>{ln(()=>{A.isUnmounted||z()},ie)});return}}let pe=g,me;is(A,!1),g?(g.el=Y.el,V(A,g,he)):g=Y,D&&Yo(D),(me=g.props&&g.props.onVnodeBeforeUpdate)&&On(me,Q,g,Y),is(A,!0);const Ce=Qo(A),Ie=A.subTree;A.subTree=Ce,m(Ie,Ce,h(Ie.el),fe(Ie),A,ie,M),g.el=Ce.el,pe===null&&ev(A,Ce.el),W&&ln(W,ie),(me=g.props&&g.props.onVnodeUpdated)&&ln(()=>On(me,Q,g,Y),ie)}else{let g;const{el:D,props:W}=I,{bm:Q,m:Y,parent:pe,root:me,type:Ce}=A,Ie=$r(I);if(is(A,!1),Q&&Yo(Q),!Ie&&(g=W&&W.onVnodeBeforeMount)&&On(g,pe,I),is(A,!0),D&&it){const ue=()=>{A.subTree=Qo(A),it(D,A.subTree,A,ie,null)};Ie&&Ce.__asyncHydrate?Ce.__asyncHydrate(D,A,ue):ue()}else{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(Ce);const ue=A.subTree=Qo(A);m(null,ue,q,J,A,ie,M),I.el=ue.el}if(Y&&ln(Y,ie),!Ie&&(g=W&&W.onVnodeMounted)){const ue=I;ln(()=>On(g,pe,ue),ie)}(I.shapeFlag&256||pe&&$r(pe.vnode)&&pe.vnode.shapeFlag&256)&&A.a&&ln(A.a,ie),A.isMounted=!0,I=q=J=null}};A.scope.on();const le=A.effect=new Jh(ae);A.scope.off();const z=A.update=le.run.bind(le),E=A.job=le.runIfDirty.bind(le);E.i=A,E.id=A.uid,le.scheduler=()=>pu(E),is(A,!0),z()},V=(A,I,q)=>{I.component=A;const J=A.vnode.props;A.vnode=I,A.next=null,nv(A,I.props,J,q),av(A,I.children,q),_i(),Zu(A),xi()},se=(A,I,q,J,ie,M,he,ae,le=!1)=>{const z=A&&A.children,E=A?A.shapeFlag:0,g=I.children,{patchFlag:D,shapeFlag:W}=I;if(D>0){if(D&128){oe(z,g,q,J,ie,M,he,ae,le);return}else if(D&256){X(z,g,q,J,ie,M,he,ae,le);return}}W&8?(E&16&&te(z,ie,M),g!==z&&u(q,g)):E&16?W&16?oe(z,g,q,J,ie,M,he,ae,le):te(z,ie,M,!0):(E&8&&u(q,""),W&16&&x(g,q,J,ie,M,he,ae,le))},X=(A,I,q,J,ie,M,he,ae,le)=>{A=A||sr,I=I||sr;const z=A.length,E=I.length,g=Math.min(z,E);let D;for(D=0;D<g;D++){const W=I[D]=le?ci(I[D]):Gn(I[D]);m(A[D],W,q,null,ie,M,he,ae,le)}z>E?te(A,ie,M,!0,!1,g):x(I,q,J,ie,M,he,ae,le,g)},oe=(A,I,q,J,ie,M,he,ae,le)=>{let z=0;const E=I.length;let g=A.length-1,D=E-1;for(;z<=g&&z<=D;){const W=A[z],Q=I[z]=le?ci(I[z]):Gn(I[z]);if(Pr(W,Q))m(W,Q,q,null,ie,M,he,ae,le);else break;z++}for(;z<=g&&z<=D;){const W=A[g],Q=I[D]=le?ci(I[D]):Gn(I[D]);if(Pr(W,Q))m(W,Q,q,null,ie,M,he,ae,le);else break;g--,D--}if(z>g){if(z<=D){const W=D+1,Q=W<E?I[W].el:J;for(;z<=D;)m(null,I[z]=le?ci(I[z]):Gn(I[z]),q,Q,ie,M,he,ae,le),z++}}else if(z>D)for(;z<=g;)xe(A[z],ie,M,!0),z++;else{const W=z,Q=z,Y=new Map;for(z=Q;z<=D;z++){const Ee=I[z]=le?ci(I[z]):Gn(I[z]);Ee.key!=null&&Y.set(Ee.key,z)}let pe,me=0;const Ce=D-Q+1;let Ie=!1,ue=0;const ve=new Array(Ce);for(z=0;z<Ce;z++)ve[z]=0;for(z=W;z<=g;z++){const Ee=A[z];if(me>=Ce){xe(Ee,ie,M,!0);continue}let be;if(Ee.key!=null)be=Y.get(Ee.key);else for(pe=Q;pe<=D;pe++)if(ve[pe-Q]===0&&Pr(Ee,I[pe])){be=pe;break}be===void 0?xe(Ee,ie,M,!0):(ve[be-Q]=z+1,be>=ue?ue=be:Ie=!0,m(Ee,I[be],q,null,ie,M,he,ae,le),me++)}const Le=Ie?dv(ve):sr;for(pe=Le.length-1,z=Ce-1;z>=0;z--){const Ee=Q+z,be=I[Ee],We=I[Ee+1],O=Ee+1<E?We.el||Xf(We):J;ve[z]===0?m(null,be,q,O,ie,M,he,ae,le):Ie&&(pe<0||z!==Le[pe]?ye(be,q,O,2):pe--)}}},ye=(A,I,q,J,ie=null)=>{const{el:M,type:he,transition:ae,children:le,shapeFlag:z}=A;if(z&6){ye(A.component.subTree,I,q,J);return}if(z&128){A.suspense.move(I,q,J);return}if(z&64){he.move(A,I,q,De);return}if(he===zn){i(M,I,q);for(let g=0;g<le.length;g++)ye(le[g],I,q,J);i(A.anchor,I,q);return}if(he===Ja){w(A,I,q);return}if(J!==2&&z&1&&ae)if(J===0)ae.beforeEnter(M),i(M,I,q),ln(()=>ae.enter(M),ie);else{const{leave:g,delayLeave:D,afterLeave:W}=ae,Q=()=>{A.ctx.isUnmounted?s(M):i(M,I,q)},Y=()=>{M._isLeaving&&M[Cg](!0),g(M,()=>{Q(),W&&W()})};D?D(M,Q,Y):Y()}else i(M,I,q)},xe=(A,I,q,J=!1,ie=!1)=>{const{type:M,props:he,ref:ae,children:le,dynamicChildren:z,shapeFlag:E,patchFlag:g,dirs:D,cacheIndex:W}=A;if(g===-2&&(ie=!1),ae!=null&&(_i(),Yr(ae,null,q,A,!0),xi()),W!=null&&(I.renderCache[W]=void 0),E&256){I.ctx.deactivate(A);return}const Q=E&1&&D,Y=!$r(A);let pe;if(Y&&(pe=he&&he.onVnodeBeforeUnmount)&&On(pe,I,A),E&6)qe(A.component,q,J);else{if(E&128){A.suspense.unmount(q,J);return}Q&&ns(A,null,I,"beforeUnmount"),E&64?A.type.remove(A,I,q,De,J):z&&!z.hasOnce&&(M!==zn||g>0&&g&64)?te(z,I,q,!1,!0):(M===zn&&g&384||!ie&&E&16)&&te(le,I,q),J&&Ue(A)}(Y&&(pe=he&&he.onVnodeUnmounted)||Q)&&ln(()=>{pe&&On(pe,I,A),Q&&ns(A,null,I,"unmounted")},q)},Ue=A=>{const{type:I,el:q,anchor:J,transition:ie}=A;if(I===zn){tt(q,J);return}if(I===Ja){b(A);return}const M=()=>{s(q),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(A.shapeFlag&1&&ie&&!ie.persisted){const{leave:he,delayLeave:ae}=ie,le=()=>he(q,M);ae?ae(A.el,M,le):le()}else M()},tt=(A,I)=>{let q;for(;A!==I;)q=d(A),s(A),A=q;s(I)},qe=(A,I,q)=>{const{bum:J,scope:ie,job:M,subTree:he,um:ae,m:le,a:z}=A;od(le),od(z),J&&Yo(J),ie.stop(),M&&(M.flags|=8,xe(he,A,I,q)),ae&&ln(ae,I),ln(()=>{A.isUnmounted=!0},I)},te=(A,I,q,J=!1,ie=!1,M=0)=>{for(let he=M;he<A.length;he++)xe(A[he],I,q,J,ie)},fe=A=>{if(A.shapeFlag&6)return fe(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const I=d(A.anchor||A.el),q=I&&I[wg];return q?d(q):I};let ge=!1;const He=(A,I,q)=>{let J;A==null?I._vnode&&(xe(I._vnode,null,null,!0),J=I._vnode.component):m(I._vnode||null,A,I,null,null,null,q),I._vnode=A,ge||(ge=!0,Zu(J),_f(),ge=!1)},De={p:m,um:xe,m:ye,r:Ue,mt:K,mc:x,pc:se,pbc:C,n:fe,o:n};let Fe,it;return e&&([Fe,it]=e(De)),{render:He,hydrate:Fe,createApp:Yg(He,Fe)}}function el({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function is({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function uv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Gf(n,e,t=!1){const i=n.children,s=e.children;if(Ke(i)&&Ke(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ci(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Gf(a,o)),o.type===Fo&&(o.patchFlag===-1&&(o=s[r]=ci(o)),o.el=a.el),o.type===fr&&!o.el&&(o.el=a.el)}}function dv(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function od(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Xf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Xf(e.subTree):null}const qf=n=>n.__isSuspense;function hv(n,e){e&&e.pendingBranch?Ke(n)?e.effects.push(...n):e.effects.push(n):yg(n)}const zn=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),jr=[];let mn=null;function ys(n=!1){jr.push(mn=n?null:[])}function fv(){jr.pop(),mn=jr[jr.length-1]||null}let sa=1;function ld(n,e=!1){sa+=n,n<0&&mn&&e&&(mn.hasOnce=!0)}function Yf(n){return n.dynamicChildren=sa>0?mn||sr:null,fv(),sa>0&&mn&&mn.push(n),n}function fa(n,e,t,i,s,r){return Yf(xo(n,e,t,i,s,r,!0))}function $f(n,e,t,i,s){return Yf(fi(n,e,t,i,s,!0))}function Kf(n){return n?n.__v_isVNode===!0:!1}function Pr(n,e){return n.type===e.type&&n.key===e.key}const jf=({key:n})=>n??null,Qa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||Jt(n)||Je(n)?{i:Pn,r:n,k:e,f:!!t}:n:null);function xo(n,e=null,t=null,i=0,s=null,r=n===zn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jf(e),ref:e&&Qa(e),scopeId:Sf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pn};return o?(Su(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),sa>0&&!a&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const fi=pv;function pv(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Rf)&&(n=fr),Kf(n)){const o=pr(n,e,!0);return t&&Su(o,t),sa>0&&!r&&mn&&(o.shapeFlag&6?mn[mn.indexOf(n)]=o:mn.push(o)),o.patchFlag=-2,o}if(Rv(n)&&(n=n.__vccOpts),e){e=mv(e);let{class:o,style:l}=e;o&&!Lt(o)&&(e.class=iu(o)),yt(l)&&(fu(l)&&!Ke(l)&&(l=Ot({},l)),e.style=nu(l))}const a=Lt(n)?1:qf(n)?128:Rg(n)?64:yt(n)?4:Je(n)?2:0;return xo(n,e,t,i,s,a,r,!0)}function mv(n){return n?fu(n)||Of(n)?Ot({},n):n:null}function pr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?_v(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jf(c),ref:e&&e.ref?t&&r?Ke(r)?r.concat(Qa(e)):[r,Qa(e)]:Qa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==zn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pr(n.ssContent),ssFallback:n.ssFallback&&pr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&mu(u,l.clone(u)),u}function gv(n=" ",e=0){return fi(Fo,null,n,e)}function vv(n,e){const t=fi(Ja,null,n);return t.staticCount=e,t}function Gn(n){return n==null||typeof n=="boolean"?fi(fr):Ke(n)?fi(zn,null,n.slice()):Kf(n)?ci(n):fi(Fo,null,String(n))}function ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pr(n)}function Su(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Su(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Of(e)?e._ctx=Pn:s===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),i&64?(t=16,e=[gv(e)]):t=8);n.children=e,n.shapeFlag|=t}function _v(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=iu([e.class,i.class]));else if(s==="style")e.style=nu([e.style,i.style]);else if(Co(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ke(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function On(n,e,t,i=null){Zn(n,e,7,[t,i])}const xv=Df();let Sv=0;function yv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||xv,r={uid:Sv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(i,s),emitsOptions:If(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Kg.bind(null,r),n.ce&&n.ce(r),r}let jt=null;const bv=()=>jt||Pn;let So,Jl;{const n=da(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};So=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Jl=e("__VUE_SSR_SETTERS__",t=>ra=t)}const pa=n=>{const e=jt;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},cd=()=>{jt&&jt.scope.off(),So(null)};function Zf(n){return n.vnode.shapeFlag&4}let ra=!1;function Ev(n,e=!1,t=!1){e&&Jl(e);const{props:i,children:s}=n.vnode,r=Zf(n);tv(n,i,r,e),rv(n,s,t||e);const a=r?Mv(n,e):void 0;return e&&Jl(!1),a}function Mv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vg);const{setup:i}=t;if(i){_i();const s=n.setupContext=i.length>1?Av(n):null,r=pa(n),a=ha(i,n,0,[n.props,s]),o=Wh(a);if(xi(),r(),(o||n.sp)&&!$r(n)&&Ef(n),o){if(a.then(cd,cd),e)return a.then(l=>{ud(n,l,e)}).catch(l=>{Do(l,n,0)});n.asyncDep=a}else ud(n,a,e)}else Jf(n,e)}function ud(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=mf(e)),Jf(n,t)}let dd;function Jf(n,e,t){const i=n.type;if(!n.render){if(!e&&dd&&!i.render){const s=i.template||vu(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Ot(Ot({isCustomElement:r,delimiters:o},a),l);i.render=dd(s,c)}}n.render=i.render||Dn}{const s=pa(n);_i();try{Hg(n)}finally{xi(),s()}}}const Tv={get(n,e){return Kt(n,"get",""),n[e]}};function Av(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Tv),slots:n.slots,emit:n.emit,expose:e}}function yu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(mf(ug(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Kr)return Kr[t](n)},has(e,t){return t in e||t in Kr}})):n.proxy}function wv(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function Rv(n){return Je(n)&&"__vccOpts"in n}const Cv=(n,e)=>gg(n,e,ra),Pv="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ql;const hd=typeof window<"u"&&window.trustedTypes;if(hd)try{Ql=hd.createPolicy("vue",{createHTML:n=>n})}catch{}const Qf=Ql?n=>Ql.createHTML(n):n=>n,Lv="http://www.w3.org/2000/svg",Dv="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,fd=li&&li.createElement("template"),Iv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?li.createElementNS(Lv,n):e==="mathml"?li.createElementNS(Dv,n):t?li.createElement(n,{is:t}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{fd.innerHTML=Qf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=fd.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Nv=Symbol("_vtc");function Uv(n,e,t){const i=n[Nv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const pd=Symbol("_vod"),Fv=Symbol("_vsh"),Ov=Symbol(""),Bv=/(?:^|;)\s*display\s*:/;function kv(n,e,t){const i=n.style,s=Lt(t);let r=!1;if(t&&!s){if(e)if(Lt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&eo(i,o,"")}else for(const a in e)t[a]==null&&eo(i,a,"");for(const a in t)a==="display"&&(r=!0),eo(i,a,t[a])}else if(s){if(e!==t){const a=i[Ov];a&&(t+=";"+a),i.cssText=t,r=Bv.test(t)}}else e&&n.removeAttribute("style");pd in n&&(n[pd]=r?i.display:"",n[Fv]&&(i.display="none"))}const md=/\s*!important$/;function eo(n,e,t){if(Ke(t))t.forEach(i=>eo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vv(n,e);md.test(t)?n.setProperty(ws(i),t.replace(md,""),"important"):n[i]=t}}const gd=["Webkit","Moz","ms"],tl={};function Vv(n,e){const t=tl[e];if(t)return t;let i=En(e);if(i!=="filter"&&i in n)return tl[e]=i;i=Lo(i);for(let s=0;s<gd.length;s++){const r=gd[s]+i;if(r in n)return tl[e]=r}return e}const vd="http://www.w3.org/1999/xlink";function _d(n,e,t,i,s,r=Hm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(vd,e.slice(6,e.length)):n.setAttributeNS(vd,e,t):t==null||r&&!$h(t)?n.removeAttribute(e):n.setAttribute(e,r?"":jn(t)?String(t):t)}function xd(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Qf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=$h(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Hv(n,e,t,i){n.addEventListener(e,t,i)}function zv(n,e,t,i){n.removeEventListener(e,t,i)}const Sd=Symbol("_vei");function Gv(n,e,t,i,s=null){const r=n[Sd]||(n[Sd]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Wv(e);if(i){const c=r[e]=Yv(i,s);Hv(n,o,c,l)}else a&&(zv(n,o,a,l),r[e]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function Wv(n){let e;if(yd.test(n)){e={};let i;for(;i=n.match(yd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ws(n.slice(2)),e]}let nl=0;const Xv=Promise.resolve(),qv=()=>nl||(Xv.then(()=>nl=0),nl=Date.now());function Yv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Zn($v(i,t.value),e,5,[i])};return t.value=n,t.attached=qv(),t}function $v(n,e){if(Ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const bd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Kv=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Uv(n,i,a):e==="style"?kv(n,t,i):Co(e)?Qc(e)||Gv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jv(n,e,i,a))?(xd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_d(n,e,i,a,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?xd(n,En(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),_d(n,e,i,a))};function jv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bd(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bd(e)&&Lt(t)?!1:e in n}const Zv=Ot({patchProp:Kv},Iv);let Ed;function Jv(){return Ed||(Ed=lv(Zv))}const yr=(...n)=>{const e=Jv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=e_(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Qv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Qv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function e_(n){return Lt(n)?document.querySelector(n):n}const t_="modulepreload",n_=function(n){return"/vite-graphologie/"+n},Md={},yo=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=n_(r),r in Md)return;Md[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":t_,a||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),a)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})},ep=(n,e)=>{const t=n[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Ti=typeof window<"u",to=Ti?window:null,aa=Ti?document:null,At={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},at={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},yn={NONE:0,AUTO:1,FORCE:2},un={replace:0,none:1,blend:2},Td=Symbol(),Oo=Symbol(),tp=Symbol(),Bo=Symbol(),np=Symbol(),_t=1e-11,ec=1e12,bs=1e3,tc=240,qi="",i_="var(",ip=(()=>{const n=new Map;return n.set("x","translateX"),n.set("y","translateY"),n.set("z","translateZ"),n})(),sp=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","matrix","matrix3d","perspective"],rp=sp.reduce((n,e)=>({...n,[e]:e+"("}),{}),_n=()=>{},s_=/\)\s*[-.\d]/,r_=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,a_=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,o_=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,l_=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,c_=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Ad=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,ap=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,u_=/([a-z])([A-Z])/g,d_=/(\w+)(\([^)]+\)+)/g,h_=/(\*=|\+=|-=)/,f_=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const bo={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:tc,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:bs,delay:0,loopDelay:0,ease:"out(2)",composition:un.replace,modifier:n=>n,onBegin:_n,onBeforeUpdate:_n,onUpdate:_n,onLoop:_n,onPause:_n,onComplete:_n,onRender:_n},p_={current:null,root:aa},kt={defaults:bo,precision:4,timeScale:1,tickThreshold:200},Ea=Ti&&to.AnimeJSDevTools,op={version:"4.3.6",engine:null};Ti&&(to.AnimeJS||(to.AnimeJS=[]),to.AnimeJS.push(op));/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const lp=n=>n.replace(u_,"$1-$2").toLowerCase(),pi=(n,e)=>n.indexOf(e)===0,mr=Date.now,Es=Array.isArray,il=n=>n&&n.constructor===Object,Zr=n=>typeof n=="number"&&!isNaN(n),Ms=n=>typeof n=="string",Ts=n=>typeof n=="function",ut=n=>typeof n>"u",cr=n=>ut(n)||n===null,cp=n=>Ti&&n instanceof SVGElement,up=n=>r_.test(n),dp=n=>pi(n,"rgb"),hp=n=>pi(n,"hsl"),m_=n=>up(n)||(dp(n)||hp(n))&&(n[n.length-1]===")"||!s_.test(n)),no=n=>!kt.defaults.hasOwnProperty(n),g_=["opacity","rotate","overflow","color"],v_=(n,e)=>{if(g_.includes(e))return!1;if(n.getAttribute(e)||e in n){if(e==="scale"){const t=n.parentNode;return t&&t.tagName==="filter"}return!0}},sl=n=>Ms(n)?parseFloat(n):n,Js=Math.pow,Eo=Math.sqrt,__=Math.sin,x_=Math.cos,wd=Math.abs,nc=Math.floor,S_=Math.asin,y_=Math.max,bu=Math.PI,Rd=Math.round,tn=(n,e,t)=>n<e?e:n>t?t:n,Cd={},wt=(n,e)=>{if(e<0)return n;if(!e)return Rd(n);let t=Cd[e];return t||(t=Cd[e]=10**e),Rd(n*t)/t},ss=(n,e,t)=>n+(e-n)*t,Eu=n=>n===1/0?ec:n===-1/0?-ec:n,Jr=n=>n<=_t?_t:Eu(wt(n,11)),Xt=n=>Es(n)?[...n]:n,b_=(n,e)=>{const t={...n};for(let i in e){const s=n[i];t[i]=ut(s)?e[i]:s}return t},Dt=(n,e,t,i="_prev",s="_next")=>{let r=n._head,a=s;for(t&&(r=n._tail,a=i);r;){const o=r[a];e(r),r=o}},Vr=(n,e,t="_prev",i="_next")=>{const s=e[t],r=e[i];s?s[i]=r:n._head=r,r?r[t]=s:n._tail=s,e[t]=null,e[i]=null},nr=(n,e,t,i="_prev",s="_next")=>{let r=n._tail;for(;r&&t&&t(r,e);)r=r[i];const a=r?r[s]:n._head;r?r[s]=e:n._head=e,a?a[i]=e:n._tail=e,e[i]=r,e[s]=a};/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const E_=(n,e,t)=>{const i=n.style.transform;let s;if(i){const r=n[Bo];let a;for(;a=d_.exec(i);){const o=a[1],l=a[2].slice(1,-1);r[o]=l,o===e&&(s=l,t&&(t[e]=l))}}return i&&!ut(s)?s:pi(e,"scale")?"1":pi(e,"rotate")||pi(e,"skew")?"0deg":"0px"};/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const M_=n=>{const e=a_.exec(n)||o_.exec(n),t=ut(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},T_=n=>{const e=n.length,t=e===4||e===5;return[+("0x"+n[1]+n[t?1:2]),+("0x"+n[t?2:3]+n[t?2:4]),+("0x"+n[t?3:5]+n[t?3:6]),e===5||e===9?+(+("0x"+n[t?4:7]+n[t?4:8])/255).toFixed(3):1]},rl=(n,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n),A_=n=>{const e=l_.exec(n)||c_.exec(n),t=+e[1]/360,i=+e[2]/100,s=+e[3]/100,r=ut(e[4])?1:+e[4];let a,o,l;if(i===0)a=o=l=s;else{const c=s<.5?s*(1+i):s+i-s*i,u=2*s-c;a=wt(rl(u,c,t+1/3)*255,0),o=wt(rl(u,c,t)*255,0),l=wt(rl(u,c,t-1/3)*255,0)}return[a,o,l,r]},w_=n=>dp(n)?M_(n):up(n)?T_(n):hp(n)?A_(n):[0,0,0,1];/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Yt=(n,e)=>ut(n)?e:n,ni=(n,e,t,i,s)=>{let r;if(Ts(n))r=()=>{const a=n(e,t,i);return isNaN(+a)?a||0:+a};else if(Ms(n)&&pi(n,i_))r=()=>{var u;const a=n.match(f_),o=a[1],l=a[2];let c=(u=getComputedStyle(e))==null?void 0:u.getPropertyValue(o);return(!c||c.trim()===qi)&&l&&(c=l.trim()),c||0};else return n;return s&&(s.func=r),r()},fp=(n,e)=>n[Oo]?n[tp]&&v_(n,e)?At.ATTRIBUTE:sp.includes(e)||ip.get(e)?At.TRANSFORM:pi(e,"--")?At.CSS_VAR:e in n.style?At.CSS:e in n?At.OBJECT:At.ATTRIBUTE:At.OBJECT,Pd=(n,e,t)=>{const i=n.style[e];i&&t&&(t[e]=i);const s=i||getComputedStyle(n[np]||n).getPropertyValue(e);return s==="auto"?"0":s},Qs=(n,e,t,i)=>{const s=ut(t)?fp(n,e):t;return s===At.OBJECT?n[e]||0:s===At.ATTRIBUTE?n.getAttribute(e):s===At.TRANSFORM?E_(n,e,i):s===At.CSS_VAR?Pd(n,e,i).trimStart():Pd(n,e,i)},io=(n,e,t)=>t==="-"?n-e:t==="+"?n+e:n*e,Mu=()=>({t:at.NUMBER,n:0,u:null,o:null,d:null,s:null}),Tn=(n,e)=>{if(e.t=at.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!n)return e;const t=+n;if(isNaN(t)){let i=n;i[1]==="="&&(e.o=i[0],i=i.slice(2));const s=i.includes(" ")?!1:ap.exec(i);if(s)return e.t=at.UNIT,e.n=+s[1],e.u=s[2],e;if(e.o)return e.n=+i,e;if(m_(i))return e.t=at.COLOR,e.d=w_(i),e;{const r=i.match(Ad);return e.t=at.COMPLEX,e.d=r?r.map(Number):[],e.s=i.split(Ad)||[],e}}else return e.n=t,e},Ld=(n,e)=>(e.t=n._valueType,e.n=n._toNumber,e.u=n._unit,e.o=null,e.d=Xt(n._toNumbers),e.s=Xt(n._strings),e),rs=Mu();/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const so=(n,e,t,i,s)=>{const r=n.parent,a=n.duration,o=n.completed,l=n.iterationDuration,c=n.iterationCount,u=n._currentIteration,h=n._loopDelay,d=n._reversed,f=n._alternate,_=n._hasChildren,m=n._delay,v=n._currentTime,p=m+l,y=e-m,w=tn(v,-m,a),b=tn(y,-m,a),R=y-v,L=b>0,N=b>=a,x=a<=_t,T=s===yn.FORCE;let C=0,P=y,k=0;if(c>1){const V=~~(b/(l+(N?0:h)));n._currentIteration=tn(V,0,c),N&&n._currentIteration--,C=n._currentIteration%2,P=b%(l+h)||0}const H=d^(f&&C),K=n._ease;let G=N?H?0:a:H?l-P:P;K&&(G=l*K(G/l)||0);const B=(r?r.backwards:y<v)?!H:!!H;if(n._currentTime=y,n._iterationTime=G,n.backwards=B,L&&!n.began?(n.began=!0,!t&&!(r&&(B||!r.began))&&n.onBegin(n)):y<=0&&(n.began=!1),!t&&!_&&L&&n._currentIteration!==u&&n.onLoop(n),T||s===yn.AUTO&&(e>=m&&e<=p||e<=m&&w>m||e>=p&&w!==a)||G>=p&&w!==a||G<=m&&w>0||e<=w&&w===a&&o||N&&!o&&x){if(L&&(n.computeDeltaTime(w),t||n.onBeforeUpdate(n)),!_){const V=T||(B?R*-1:R)>=kt.tickThreshold,se=n._offset+(r?r._offset:0)+m+G;let X=n._head,oe,ye,xe,Ue,tt=0;for(;X;){const qe=X._composition,te=X._currentTime,fe=X._changeDuration,ge=X._absoluteStartTime+X._changeDuration,He=X._nextRep,De=X._prevRep,Fe=qe!==un.none;if((V||(te!==fe||se<=ge+(He?He._delay:0))&&(te!==0||se>=X._absoluteStartTime))&&(!Fe||!X._isOverridden&&(!X._isOverlapped||se<=ge)&&(!He||He._isOverridden||se<=He._absoluteStartTime)&&(!De||De._isOverridden||se>=De._absoluteStartTime+De._changeDuration+X._delay))){const it=X._currentTime=tn(G-X._startTime,0,fe),A=X._ease(it/X._updateDuration),I=X._modifier,q=X._valueType,J=X._tweenType,ie=J===At.OBJECT,M=q===at.NUMBER,he=M&&ie||A===0||A===1?-1:kt.precision;let ae,le;if(M)ae=le=I(wt(ss(X._fromNumber,X._toNumber,A),he));else if(q===at.UNIT)le=I(wt(ss(X._fromNumber,X._toNumber,A),he)),ae=`${le}${X._unit}`;else if(q===at.COLOR){const z=X._fromNumbers,E=X._toNumbers,g=wt(tn(I(ss(z[0],E[0],A)),0,255),0),D=wt(tn(I(ss(z[1],E[1],A)),0,255),0),W=wt(tn(I(ss(z[2],E[2],A)),0,255),0),Q=tn(I(wt(ss(z[3],E[3],A),he)),0,1);if(ae=`rgba(${g},${D},${W},${Q})`,Fe){const Y=X._numbers;Y[0]=g,Y[1]=D,Y[2]=W,Y[3]=Q}}else if(q===at.COMPLEX){ae=X._strings[0];for(let z=0,E=X._toNumbers.length;z<E;z++){const g=I(wt(ss(X._fromNumbers[z],X._toNumbers[z],A),he)),D=X._strings[z+1];ae+=`${D?g+D:g}`,Fe&&(X._numbers[z]=g)}}if(Fe&&(X._number=le),!i&&qe!==un.blend){const z=X.property;oe=X.target,ie?oe[z]=ae:J===At.ATTRIBUTE?oe.setAttribute(z,ae):(ye=oe.style,J===At.TRANSFORM?(oe!==xe&&(xe=oe,Ue=oe[Bo]),Ue[z]=ae,tt=1):J===At.CSS?ye[z]=ae:J===At.CSS_VAR&&ye.setProperty(z,ae)),L&&(k=1)}else X._value=ae}if(tt&&X._renderTransforms){let it=qi;for(let A in Ue)it+=`${rp[A]}${Ue[A]}) `;ye.transform=it,tt=0}X=X._next}!t&&k&&n.onRender(n)}!t&&L&&n.onUpdate(n)}return r&&x?!t&&(r.began&&!B&&y>0&&!o||B&&y<=_t&&o)&&(n.onComplete(n),n.completed=!B):L&&N?c===1/0?n._startTime+=n.duration:n._currentIteration>=c-1&&(n.paused=!0,!o&&!_&&(n.completed=!0,!t&&!(r&&(B||!r.began))&&(n.onComplete(n),n._resolve(n)))):n.completed=!1,k},er=(n,e,t,i,s)=>{const r=n._currentIteration;if(so(n,e,t,i,s),n._hasChildren){const a=n,o=a.backwards,l=i?e:a._iterationTime,c=mr();let u=0,h=!0;if(!i&&a._currentIteration!==r){const d=a.iterationDuration;Dt(a,f=>{if(!o)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&so(f,d,t,1,yn.FORCE),f.began=!1,f.completed=!1;else{const _=f.duration,m=f._offset+f._delay,v=m+_;!t&&_<=_t&&(!m||v===d)&&f.onComplete(f)}}),t||a.onLoop(a)}Dt(a,d=>{const f=wt((l-d._offset)*d._speed,12),_=d._fps<a._fps?d.requestTick(c):s;u+=so(d,f,t,i,_),!d.completed&&h&&(h=!1)},o),!t&&u&&a.onRender(a),(h||o)&&a._currentTime>=a.duration&&(a.paused=!0,a.completed||(a.completed=!0,t||(a.onComplete(a),a._resolve(a))))}};/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Dd={},R_=(n,e,t)=>{if(t===At.TRANSFORM){const i=ip.get(n);return i||n}else if(t===At.CSS||t===At.ATTRIBUTE&&cp(e)&&n in e.style){const i=Dd[n];if(i)return i;{const s=n&&lp(n);return Dd[n]=s,s}}else return n},pp=n=>{if(n._hasChildren)Dt(n,pp,!0);else{const e=n;e.pause(),Dt(e,t=>{const i=t.property,s=t.target;if(s[Oo]){const r=s.style,a=t._inlineValue,o=cr(a)||a===qi;if(t._tweenType===At.TRANSFORM){const l=s[Bo];if(o?delete l[i]:l[i]=a,t._renderTransforms)if(!Object.keys(l).length)r.removeProperty("transform");else{let c=qi;for(let u in l)c+=rp[u]+l[u]+") ";r.transform=c}}else o?r.removeProperty(lp(i)):r[i]=a;e._tail===t&&e.targets.forEach(l=>{l.getAttribute&&l.getAttribute("style")===qi&&l.removeAttribute("style")})}})}return n};/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */class mp{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._scheduledTime=0,this._frameDuration=bs/tc,this._fps=tc,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const t=this._frameDuration,i=+e,s=i<_t?_t:i,r=bs/s;s>bo.frameRate&&(bo.frameRate=s),this._fps=s,this._frameDuration=r,this._scheduledTime+=r-t}get speed(){return this._speed}set speed(e){const t=+e;this._speed=t<_t?_t:t}requestTick(e){const t=this._scheduledTime;if(this._lastTickTime=e,e<t)return yn.NONE;const i=this._frameDuration,s=e-t;return this._scheduledTime+=s<i?i:s,yn.AUTO}computeDeltaTime(e){const t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}/**
 * Anime.js - animation - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const ur={animation:null,update:_n},C_=n=>{let e=ur.animation;return e||(e={duration:_t,computeDeltaTime:_n,_offset:0,_delay:0,_head:null,_tail:null},ur.animation=e,ur.update=()=>{n.forEach(t=>{for(let i in t){const s=t[i],r=s._head;if(r){const a=r._valueType,o=a===at.COMPLEX||a===at.COLOR?Xt(r._fromNumbers):null;let l=r._fromNumber,c=s._tail;for(;c&&c!==r;){if(o)for(let u=0,h=c._numbers.length;u<h;u++)o[u]+=c._numbers[u];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=o}}}),so(e,1,1,0,yn.FORCE)}),e};/**
 * Anime.js - engine - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const gp=(()=>Ti?requestAnimationFrame:setImmediate)(),P_=(()=>Ti?cancelAnimationFrame:clearImmediate)();class L_ extends mp{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=bo,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=mr();if(this.requestTick(e)){this.computeDeltaTime(e);const t=this._speed,i=this._fps;let s=this._head;for(;s;){const r=s._next;s.paused?(Vr(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):er(s,(e-s._startTime)*s._speed*t,0,0,s._fps<i?s.requestTick(e):yn.AUTO),s=r}ur.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(mr()),this.reqId=gp(vp)),this}pause(){if(this.reqId)return this.paused=!0,D_()}resume(){if(this.paused)return this.paused=!1,Dt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(kt.timeScale===1?1:bs)}set speed(e){this._speed=e*kt.timeScale,Dt(this,t=>t.speed=t._speed)}get timeUnit(){return kt.timeScale===1?"ms":"s"}set timeUnit(e){const i=e==="s",s=i?.001:1;if(kt.timeScale!==s){kt.timeScale=s,kt.tickThreshold=200*s;const r=i?.001:bs;this.defaults.duration*=r,this._speed*=r}}get precision(){return kt.precision}set precision(e){kt.precision=e}}const qt=(()=>{const n=new L_(mr());return Ti&&(op.engine=n,aa.addEventListener("visibilitychange",()=>{n.pauseOnDocumentHidden&&(aa.hidden?n.pause():n.resume())})),n})(),vp=()=>{qt._head?(qt.reqId=gp(vp),qt.update()):qt.reqId=0},D_=()=>(P_(qt.reqId),qt.reqId=0,qt);/**
 * Anime.js - animation - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Mo={_rep:new WeakMap,_add:new Map},Tu=(n,e,t="_rep")=>{const i=Mo[t];let s=i.get(n);return s||(s={},i.set(n,s)),s[e]?s[e]:s[e]={_head:null,_tail:null}},I_=(n,e)=>n._isOverridden||n._absoluteStartTime>e._absoluteStartTime,ro=n=>{n._isOverlapped=1,n._isOverridden=1,n._changeDuration=_t,n._currentTime=_t},_p=(n,e)=>{const t=n._composition;if(t===un.replace){const i=n._absoluteStartTime;nr(e,n,I_,"_prevRep","_nextRep");const s=n._prevRep;if(s){const r=s.parent,a=s._absoluteStartTime+s._changeDuration;if(n.parent.id!==r.id&&r.iterationCount>1&&a+(r.duration-r.iterationDuration)>i){ro(s);let c=s._prevRep;for(;c&&c.parent.id===r.id;)ro(c),c=c._prevRep}const o=i-n._delay;if(a>o){const c=s._startTime,u=a-(c+s._updateDuration),h=wt(o-u-c,12);s._changeDuration=h,s._currentTime=h,s._isOverlapped=1,h<_t&&ro(s)}let l=!0;if(Dt(r,c=>{c._isOverlapped||(l=!1)}),l){const c=r.parent;if(c){let u=!0;Dt(c,h=>{h!==r&&Dt(h,d=>{d._isOverlapped||(u=!1)})}),u&&c.cancel()}else r.cancel()}}}else if(t===un.blend){const i=Tu(n.target,n.property,"_add"),s=C_(Mo._add);let r=i._head;r||(r={...n},r._composition=un.replace,r._updateDuration=_t,r._startTime=0,r._numbers=Xt(n._fromNumbers),r._number=0,r._next=null,r._prev=null,nr(i,r),nr(s,r));const a=n._toNumber;if(n._fromNumber=r._fromNumber-a,n._toNumber=0,n._numbers=Xt(n._fromNumbers),n._number=0,r._fromNumber=a,n._toNumbers){const o=Xt(n._toNumbers);o&&o.forEach((l,c)=>{n._fromNumbers[c]=r._fromNumbers[c]-l,n._toNumbers[c]=0}),r._fromNumbers=o}nr(i,n,null,"_prevAdd","_nextAdd")}return n},N_=n=>{const e=n._composition;if(e!==un.none){const t=n.target,i=n.property,a=Mo._rep.get(t)[i];if(Vr(a,n,"_prevRep","_nextRep"),e===un.blend){const o=Mo._add,l=o.get(t);if(!l)return;const c=l[i],u=ur.animation;Vr(c,n,"_prevAdd","_nextAdd");const h=c._head;if(h&&h===c._tail){Vr(c,h,"_prevAdd","_nextAdd"),Vr(u,h);let d=!0;for(let f in l)if(l[f]._head){d=!1;break}d&&o.delete(t)}}}return n};/**
 * Anime.js - timer - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Id=n=>(n.paused=!0,n.began=!1,n.completed=!1,n),ic=n=>(n._cancelled&&(n._hasChildren?Dt(n,ic):Dt(n,e=>{e._composition!==un.none&&_p(e,Tu(e.target,e.property))}),n._cancelled=0),n);let Nd=0;class U_ extends mp{constructor(e={},t=null,i=0){super(0),++Nd;const{id:s,delay:r,duration:a,reversed:o,alternate:l,loop:c,loopDelay:u,autoplay:h,frameRate:d,playbackRate:f,onComplete:_,onLoop:m,onPause:v,onBegin:p,onBeforeUpdate:y,onUpdate:w}=e,b=t?0:qt._lastTickTime,R=t?t.defaults:kt.defaults,L=Ts(r)||ut(r)?R.delay:+r,N=Ts(a)||ut(a)?1/0:+a,x=Yt(c,R.loop),T=Yt(u,R.loopDelay);let C=x===!0||x===1/0||x<0?1/0:x+1;if(Ea){const k=C===1/0;if(Ea.register(this,e,k)&&k){const K=l?2:1,G=t?Ea.maxNestedInfiniteLoops:Ea.maxInfiniteLoops;C=Math.max(G,K)}}let P=0;t?P=i:(qt.reqId||qt.requestTick(mr()),P=(qt._lastTickTime-qt._startTime)*kt.timeScale),this.id=ut(s)?Nd:s,this.parent=t,this.duration=Eu((N+T)*C-T)||_t,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=p||R.onBegin,this.onBeforeUpdate=y||R.onBeforeUpdate,this.onUpdate=w||R.onUpdate,this.onLoop=m||R.onLoop,this.onPause=v||R.onPause,this.onComplete=_||R.onComplete,this.iterationDuration=N,this.iterationCount=C,this._autoplay=t?!1:Yt(h,R.autoplay),this._offset=P,this._delay=L,this._loopDelay=T,this._iterationTime=0,this._currentIteration=0,this._resolve=_n,this._running=!1,this._reversed=+Yt(o,R.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Yt(l,R.alternate),this._prev=null,this._next=null,this._lastTickTime=b,this._startTime=b,this._lastTime=b,this._fps=Yt(d,R.frameRate),this._speed=Yt(f,R.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return tn(wt(this._currentTime,kt.precision),-this._delay,this.duration)}set currentTime(e){const t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return tn(wt(this._iterationTime,kt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return tn(wt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return tn(wt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*tn(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return ic(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,er(this,0,1,~~e,yn.FORCE),Id(this),this._hasChildren&&Dt(this,Id),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&er(this,this.duration,1,~~e,yn.FORCE),this.reset(e);const t=this._autoplay;return t===!0?this.resume():t&&!ut(t.linked)&&t.link(this),this}resetTime(){const e=1/(this._speed*qt._speed);return this._startTime=mr()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=_t&&!this._hasChildren?er(this,_t,0,0,yn.FORCE):(this._running||(nr(qt,this),qt._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,qt.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,i=0){ic(this),this.completed=!1;const s=this.paused;return this.paused=!0,er(this,e+this._delay,~~t,~~i,yn.AUTO),s?this:this.resume()}alternate(){const e=this._reversed,t=this.iterationCount,i=this.iterationDuration,s=t===1/0?nc(ec/i):t;return this._reversed=+(this._alternate&&!(s%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Dt(this,e=>e.cancel(),!0):Dt(this,N_),this._cancelled=1,this.pause()}stretch(e){const t=this.duration,i=Jr(e);if(t===i)return this;const s=e/t,r=e<=_t;return this.duration=r?_t:i,this.iterationDuration=r?_t:Jr(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){er(this,0,1,0,yn.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=_n){const t=this.then,i=()=>{this.then=null,e(this),this.then=t,this._resolve=_n};return new Promise(s=>(this._resolve=()=>s(i()),this.completed&&this._resolve(),this))}}/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */function Ud(n){const e=Ms(n)?p_.root.querySelectorAll(n):n;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function xp(n){if(cr(n))return[];if(!Ti)return Es(n)&&n.flat(1/0)||[n];if(Es(n)){const t=n.flat(1/0),i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];if(!cr(a)){const o=Ud(a);if(o)for(let l=0,c=o.length;l<c;l++){const u=o[l];if(!cr(u)){let h=!1;for(let d=0,f=i.length;d<f;d++)if(i[d]===u){h=!0;break}h||i.push(u)}}else{let l=!1;for(let c=0,u=i.length;c<u;c++)if(i[c]===a){l=!0;break}l||i.push(a)}}}return i}const e=Ud(n);return e?Array.from(e):[n]}function Sp(n){const e=xp(n),t=e.length;if(t)for(let i=0;i<t;i++){const s=e[i];if(!s[Td]){s[Td]=!0;const r=cp(s);(s.nodeType||r)&&(s[Oo]=!0,s[tp]=r,s[Bo]={})}}return e}/**
 * Anime.js - core - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const al={deg:1,rad:180/bu,turn:360},Fd={},Od=(n,e,t,i=!1)=>{const s=e.u,r=e.n;if(e.t===at.UNIT&&s===t)return e;const a=r+s+t,o=Fd[a];if(!ut(o)&&!i)e.n=o;else{let l;if(s in al)l=r*al[s]/al[t];else{const u=n.cloneNode(),h=n.parentNode,d=h&&h!==aa?h:aa.body;d.appendChild(u);const f=u.style;f.width=100+s;const _=u.offsetWidth||100;f.width=100+t;const m=u.offsetWidth||100,v=_/m;d.removeChild(u),l=v*r}e.n=l,Fd[a]=l}return e.t,at.UNIT,e.u=t,e};/**
 * Anime.js - easings - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const $i=n=>n;/**
 * Anime.js - easings - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Lr=(n=1.68)=>e=>Js(e,+n),sc={in:n=>e=>n(e),out:n=>e=>1-n(1-e),inOut:n=>e=>e<.5?n(e*2)/2:1-n(e*-2+2)/2,outIn:n=>e=>e<.5?(1-n(1-e*2))/2:(n(e*2-1)+1)/2},F_=bu/2,Bd=bu*2,kd={[qi]:Lr,Quad:Lr(2),Cubic:Lr(3),Quart:Lr(4),Quint:Lr(5),Sine:n=>1-x_(n*F_),Circ:n=>1-Eo(1-n*n),Expo:n=>n?Js(2,10*n-10):0,Bounce:n=>{let e,t=4;for(;n<((e=Js(2,--t))-1)/11;);return 1/Js(4,3-t)-7.5625*Js((e*3-2)/22-n,2)},Back:(n=1.7)=>e=>(+n+1)*e*e*e-+n*e*e,Elastic:(n=1,e=.3)=>{const t=tn(+n,1,10),i=tn(+e,_t,2),s=i/Bd*S_(1/t),r=Bd/i;return a=>a===0||a===1?a:-t*Js(2,-10*(1-a))*__((1-a-s)*r)}},ol=(()=>{const n={linear:$i,none:$i};for(let e in sc)for(let t in kd){const i=kd[t],s=sc[e];n[e+t]=t===qi||t==="Back"||t==="Elastic"?(r,a)=>s(i(r,a)):s(i)}return n})(),Ma={linear:$i,none:$i},O_=n=>{if(Ma[n])return Ma[n];if(n.indexOf("(")<=-1){const t=sc[n]||n.includes("Back")||n.includes("Elastic")?ol[n]():ol[n];return t?Ma[n]=t:$i}else{const e=n.slice(0,-1).split("("),t=ol[e[0]];return t?Ma[n]=t(...e[1].split(",")):$i}},Vd=["steps(","irregular(","linear(","cubicBezier("],rc=n=>{if(Ms(n)){for(let t=0,i=Vd.length;t<i;t++)if(pi(n,Vd[t]))return console.warn(`String syntax for \`ease: "${n}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${n}\``),$i}return Ts(n)?n:Ms(n)?O_(n):$i};/**
 * Anime.js - animation - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Xe=Mu(),Qe=Mu(),Ns={},Ta={func:null},ll={func:null},Aa=[null],Us=[null,null],wa={to:null};let B_=0,Hd=0,Pi,Bn;const k_=(n,e)=>{const t={};if(Es(n)){const i=[].concat(...n.map(s=>Object.keys(s))).filter(no);for(let s=0,r=i.length;s<r;s++){const a=i[s],o=n.map(l=>{const c={};for(let u in l){const h=l[u];no(u)?u===a&&(c.to=h):c[u]=h}return c});t[a]=o}}else{const i=Yt(e.duration,kt.defaults.duration);Object.keys(n).map(r=>({o:parseFloat(r)/100,p:n[r]})).sort((r,a)=>r.o-a.o).forEach(r=>{const a=r.o,o=r.p;for(let l in o)if(no(l)){let c=t[l];c||(c=t[l]=[]);const u=a*i;let h=c.length,d=c[h-1];const f={to:o[l]};let _=0;for(let m=0;m<h;m++)_+=c[m].duration;h===1&&(f.from=d.to),o.ease&&(f.ease=o.ease),f.duration=u-(h?_:0),c.push(f)}return r});for(let r in t){const a=t[r];let o;for(let l=0,c=a.length;l<c;l++){const u=a[l],h=u.ease;u.ease=o||void 0,o=h}a[0].duration||a.shift()}}return t};class V_ extends U_{constructor(e,t,i,s,r=!1,a=0,o=0){super(t,i,s),++Hd;const l=Sp(e),c=l.length,u=t.keyframes,h=u?b_(k_(u,t),t):t,{id:d,delay:f,duration:_,ease:m,playbackEase:v,modifier:p,composition:y,onRender:w}=h,b=i?i.defaults:kt.defaults,R=Yt(m,b.ease),L=Yt(v,b.playbackEase),N=L?rc(L):null,x=!ut(R.ease),T=x?R.ease:Yt(m,N?"linear":b.ease),C=x?R.settlingDuration:Yt(_,b.duration),P=Yt(f,b.delay),k=p||b.modifier,H=ut(y)&&c>=bs?un.none:ut(y)?b.composition:y,K=this._offset+(i?i._offset:0);x&&(R.parent=this);let G=NaN,B=NaN,V=0,se=0;for(let X=0;X<c;X++){const oe=l[X],ye=a||X,xe=o||c;let Ue=NaN,tt=NaN;for(let qe in h)if(no(qe)){const te=fp(oe,qe),fe=R_(qe,oe,te);let ge=h[qe];const He=Es(ge);if(r&&!He&&(Us[0]=ge,Us[1]=ge,ge=Us),He){const q=ge.length,J=!il(ge[0]);q===2&&J?(wa.to=ge,Aa[0]=wa,Pi=Aa):q>2&&J?(Pi=[],ge.forEach((ie,M)=>{M?M===1?(Us[1]=ie,Pi.push(Us)):Pi.push(ie):Us[0]=ie})):Pi=ge}else Aa[0]=ge,Pi=Aa;let De=null,Fe=null,it=NaN,A=0,I=0;for(let q=Pi.length;I<q;I++){const J=Pi[I];il(J)?Bn=J:(wa.to=J,Bn=wa),Ta.func=null,ll.func=null;const ie=ni(Bn.to,oe,ye,xe,Ta);let M;il(ie)&&!ut(ie.to)?(Bn=ie,M=ie.to):M=ie;const he=ni(Bn.from,oe,ye,xe),ae=Bn.ease||T,le=ni(ae,oe,ye,xe),z=Ts(le)||Ms(le)?le:ae,E=!ut(z)&&!ut(z.ease),g=E?z.ease:z,D=E?z.settlingDuration:ni(Yt(Bn.duration,q>1?ni(C,oe,ye,xe)/q:C),oe,ye,xe),W=ni(Yt(Bn.delay,I?0:P),oe,ye,xe),Q=ni(Yt(Bn.composition,H),oe,ye,xe),Y=Zr(Q)?Q:un[Q],pe=Bn.modifier||k,me=!ut(he),Ce=!ut(M),Ie=Es(M),ue=Ie||me&&Ce,ve=Fe?A+W:W,Le=wt(K+ve,12);!se&&(me||Ie)&&(se=1);let Ee=Fe;if(Y!==un.none){De||(De=Tu(oe,fe));let ce=De._head;for(;ce&&!ce._isOverridden&&ce._absoluteStartTime<=Le;)if(Ee=ce,ce=ce._nextRep,ce&&ce._absoluteStartTime>=Le)for(;ce;)ro(ce),ce=ce._nextRep}if(ue){Tn(Ie?ni(M[0],oe,ye,xe,ll):he,Xe),Tn(Ie?ni(M[1],oe,ye,xe,Ta):M,Qe);const ce=Qs(oe,fe,te,Ns);Xe.t===at.NUMBER&&(Ee?Ee._valueType===at.UNIT&&(Xe.t=at.UNIT,Xe.u=Ee._unit):(Tn(ce,rs),rs.t===at.UNIT&&(Xe.t=at.UNIT,Xe.u=rs.u)))}else Ce?Tn(M,Qe):Fe?Ld(Fe,Qe):Tn(i&&Ee&&Ee.parent.parent===i?Ee._value:Qs(oe,fe,te,Ns),Qe),me?Tn(he,Xe):Fe?Ld(Fe,Xe):Tn(i&&Ee&&Ee.parent.parent===i?Ee._value:Qs(oe,fe,te,Ns),Xe);if(Xe.o&&(Xe.n=io(Ee?Ee._toNumber:Tn(Qs(oe,fe,te,Ns),rs).n,Xe.n,Xe.o)),Qe.o&&(Qe.n=io(Xe.n,Qe.n,Qe.o)),Xe.t!==Qe.t){if(Xe.t===at.COMPLEX||Qe.t===at.COMPLEX){const ce=Xe.t===at.COMPLEX?Xe:Qe,de=Xe.t===at.COMPLEX?Qe:Xe;de.t=at.COMPLEX,de.s=Xt(ce.s),de.d=ce.d.map(()=>de.n)}else if(Xe.t===at.UNIT||Qe.t===at.UNIT){const ce=Xe.t===at.UNIT?Xe:Qe,de=Xe.t===at.UNIT?Qe:Xe;de.t=at.UNIT,de.u=ce.u}else if(Xe.t===at.COLOR||Qe.t===at.COLOR){const ce=Xe.t===at.COLOR?Xe:Qe,de=Xe.t===at.COLOR?Qe:Xe;de.t=at.COLOR,de.s=ce.s,de.d=[0,0,0,1]}}if(Xe.u!==Qe.u){let ce=Qe.u?Xe:Qe;ce=Od(oe,ce,Qe.u?Qe.u:Xe.u,!1)}if(Qe.d&&Xe.d&&Qe.d.length!==Xe.d.length){const ce=Xe.d.length>Qe.d.length?Xe:Qe,de=ce===Xe?Qe:Xe;de.d=ce.d.map((Ne,Se)=>ut(de.d[Se])?0:de.d[Se]),de.s=Xt(ce.s)}const be=wt(+D||_t,12);let We=Ns[fe];cr(We)||(Ns[fe]=null);const O={parent:this,id:B_++,property:fe,target:oe,_value:null,_toFunc:Ta.func,_fromFunc:ll.func,_ease:rc(g),_fromNumbers:Xt(Xe.d),_toNumbers:Xt(Qe.d),_strings:Xt(Qe.s),_fromNumber:Xe.n,_toNumber:Qe.n,_numbers:Xt(Xe.d),_number:Xe.n,_unit:Qe.u,_modifier:pe,_currentTime:0,_startTime:ve,_delay:+W,_updateDuration:be,_changeDuration:be,_absoluteStartTime:Le,_tweenType:te,_valueType:Qe.t,_composition:Y,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:We,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Y!==un.none&&_p(O,De),isNaN(it)&&(it=O._startTime),A=wt(ve+be,12),Fe=O,V++,nr(this,O)}(isNaN(B)||it<B)&&(B=it),(isNaN(G)||A>G)&&(G=A),te===At.TRANSFORM&&(Ue=V-I,tt=V)}if(!isNaN(Ue)){let qe=0;Dt(this,te=>{qe>=Ue&&qe<tt&&(te._renderTransforms=1,te._composition===un.blend&&Dt(ur.animation,fe=>{fe.id===te.id&&(fe._renderTransforms=1)})),qe++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),B?(Dt(this,X=>{X._startTime-X._delay||(X._delay-=B),X._startTime-=B}),G-=B):B=0,G||(G=_t,this.iterationCount=0),this.targets=l,this.id=ut(d)?Hd:d,this.duration=G===_t?_t:Eu((G+this._loopDelay)*this.iterationCount-this._loopDelay)||_t,this.onRender=w||b.onRender,this._ease=N,this._delay=B,this.iterationDuration=G,!this._autoplay&&se&&this.onRender(this)}stretch(e){const t=this.duration;if(t===Jr(e))return this;const i=e/t;return Dt(this,s=>{s._updateDuration=Jr(s._updateDuration*i),s._changeDuration=Jr(s._changeDuration*i),s._currentTime*=i,s._startTime*=i,s._absoluteStartTime*=i}),super.stretch(e)}refresh(){return Dt(this,e=>{const t=e._toFunc,i=e._fromFunc;(t||i)&&(i?(Tn(i(),Xe),Xe.u!==e._unit&&e.target[Oo]&&Od(e.target,Xe,e._unit,!0),e._fromNumbers=Xt(Xe.d),e._fromNumber=Xe.n):t&&(Tn(Qs(e.target,e.property,e._tweenType),rs),e._fromNumbers=Xt(rs.d),e._fromNumber=rs.n),t&&(Tn(t(),Qe),e._toNumbers=Xt(Qe.d),e._strings=Xt(Qe.s),e._toNumber=Qe.o?io(e._fromNumber,Qe.n,Qe.o):Qe.n))}),this.duration===_t&&this.restart(),this}revert(){return super.revert(),pp(this)}then(e){return super.then(e)}}const Au=(n,e)=>new V_(n,e,null,0,!1).init();/**
 * Anime.js - timeline - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const H_=(n,e)=>{if(pi(e,"<")){const t=e[1]==="<",i=n._tail,s=i?i._offset+i._delay:0;return t?s:s+i.duration}},z_=(n,e)=>{let t=n.iterationDuration;if(t===_t&&(t=0),ut(e))return t;if(Zr(+e))return+e;const i=e,s=n?n.labels:null,r=!cr(s),a=H_(n,i),o=!ut(a),l=h_.exec(i);if(l){const c=l[0],u=i.split(c),h=r&&u[0]?s[u[0]]:t,d=o?a:r?h:t,f=+u[1];return io(d,f,c[0])}else return o?a:r?ut(s[i])?t:s[i]:t};/**
 * Anime.js - utils - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const G_=(n=0,e=1,t=0)=>{const i=10**t;return Math.floor((Math.random()*(e-n+1/i)+n)*i)/i},W_=n=>{let e=n.length,t,i;for(;e;)i=G_(0,--e),t=n[e],n[e]=n[i],n[i]=t;return n};/**
 * Anime.js - utils - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const X_=(n,e={})=>{let t=[],i=0;const s=e.from,r=e.reversed,a=e.ease,o=!ut(a),c=o&&!ut(a.ease)?a.ease:o?rc(a):null,u=e.grid,h=e.axis,d=e.total,f=ut(s)||s===0||s==="first",_=s==="center",m=s==="last",v=s==="random",p=Es(n),y=e.use,w=sl(p?n[0]:n),b=p?sl(n[1]):0,R=ap.exec((p?n[1]:n)+qi),L=e.start||0+(p?w:0);let N=f?0:Zr(s)?s:0;return(x,T,C,P)=>{const[k]=Sp(x),H=ut(d)?C:d,K=ut(y)?!1:Ts(y)?y(k,T,H):Qs(k,y),G=Zr(K)||Ms(K)&&Zr(+K)?+K:T;if(_&&(N=(H-1)/2),m&&(N=H-1),!t.length){for(let X=0;X<H;X++){if(!u)t.push(wd(N-X));else{const oe=_?(u[0]-1)/2:N%u[0],ye=_?(u[1]-1)/2:nc(N/u[0]),xe=X%u[0],Ue=nc(X/u[0]),tt=oe-xe,qe=ye-Ue;let te=Eo(tt*tt+qe*qe);h==="x"&&(te=-tt),h==="y"&&(te=-qe),t.push(te)}i=y_(...t)}c&&(t=t.map(X=>c(X/i)*i)),r&&(t=t.map(X=>h?X<0?X*-1:-X:wd(i-X))),v&&(t=W_(t))}const B=p?(b-w)/i:w;let se=(P?z_(P,ut(e.start)?P.iterationDuration:L):L)+(B*wt(t[G],2)||0);return e.modifier&&(se=e.modifier(se)),R&&(se=`${se}${R[2]}`),se}};/**
 * Anime.js - svg - ESM
 * @version v4.3.6
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const q_=n=>{let e=1;if(n&&n.getCTM){const t=n.getCTM();if(t){const i=Eo(t.a*t.a+t.b*t.b),s=Eo(t.c*t.c+t.d*t.d);e=(i+s)/2}}return e},Y_=(n,e,t)=>{const i=bs,s=getComputedStyle(n),r=s.strokeLinecap,a=s.vectorEffect==="non-scaling-stroke"?n:null;let o=r;const l=new Proxy(n,{get(c,u){const h=c[u];return u===np?c:u==="setAttribute"?(...d)=>{if(d[0]==="draw"){const _=d[1].split(" "),m=+_[0],v=+_[1],p=q_(a),y=m*-i*p,w=v*i*p+y,b=i*p+(m===0&&v===1||m===1&&v===0?0:10*p)-w;if(r!=="butt"){const R=m===v?"butt":r;o!==R&&(c.style.strokeLinecap=`${R}`,o=R)}c.setAttribute("stroke-dashoffset",`${y}`),c.setAttribute("stroke-dasharray",`${w} ${b}`)}return Reflect.apply(h,c,d)}:Ts(h)?(...d)=>Reflect.apply(h,c,d):h}});return n.getAttribute("pathLength")!==`${i}`&&(n.setAttribute("pathLength",`${i}`),l.setAttribute("draw",`${e} ${t}`)),l},$_=(n,e=0,t=0)=>xp(n).map(s=>Y_(s,e,t));function yp(n=document){n.querySelectorAll("svg").forEach(e=>{e.removeAttribute("width"),e.removeAttribute("height")}),n.querySelectorAll("svg [style]").forEach(e=>{e.style.strokeDasharray==="none"&&e.style.removeProperty("stroke-dasharray")})}function K_(n,e=.1){if(!n)return;const t=n.querySelectorAll("path");if(!t.length)return;let i=0;t.forEach(s=>{const r=s.getTotalLength(),a=r/e;s.style.strokeDasharray=r,s.style.strokeDashoffset=r,Au(s,{strokeDashoffset:[r,0],duration:a,delay:i,easing:"linear"}),i+=a})}function j_(n){const a=[...document.querySelectorAll(`#${n} text tspan tspan`)].map(c=>({el:c,text:c.textContent,index:0}));a.forEach(c=>c.el.textContent="");let o=0;function l(){if(o>=a.length)return;const c=a[o];if(c.index>c.text.length){o++,l();return}c.el.textContent=c.text.slice(0,c.index),c.index++;let u=30+Math.random()*30;c.text[c.index-2],Math.random()<.05&&(u+=200+Math.random()*100),Au({dummy:0},{dummy:1,duration:u,easing:"linear",onComplete:l})}l()}const wu=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Z_={class:"svg-center"},J_={__name:"SlideWriting",props:{svgFile:String},setup(n){const e=ff(null),t=n;let i=null;async function s(r){const a=await ep(Object.assign({"../assets/svg/handwriting.svg":()=>yo(()=>import("./handwriting-beb43d1f.js"),[]),"../assets/svg/typing.svg":()=>yo(()=>import("./typing-392b03c1.js"),[])}),`../assets/svg/${r}.svg`);e.value=a.default}return qr(()=>t.svgFile,r=>{r&&s(r)},{immediate:!0}),No(async()=>{await na(),$t&&(i=async r=>{const a=document.getElementById(t.svgFile);r.currentSlide.contains(a)&&(await na(),yp(),K_(a))},$t.on("slidechanged",i))}),(r,a)=>(ys(),fa("div",Z_,[(ys(),$f(Cf(e.value),{id:n.svgFile},null,8,["id"]))]))}},Q_=wu(J_,[["__scopeId","data-v-c772a9c8"]]),e0={__name:"SlideClassic",props:{text:String},setup(n){return(e,t)=>(ys(),fa(zn,null,[t[0]||(t[0]=xo("h1",null,"Slide 0",-1)),xo("p",null,jh(n.text),1)],64))}},t0={__name:"SlideAnime",setup(n){function e(){Au($_(".line"),{draw:["0 0","0 1"],ease:"inOutQuad",duration:600,delay:X_(100),loop:!1})}let t=null;return No(()=>{$t&&(t=i=>{i.currentSlide.contains(document.getElementById("my-svg-text"))&&e()},$t.on("slidechanged",t))}),(i,s)=>(ys(),fa("div",null,[...s[0]||(s[0]=[vv('<svg id="my-svg-text" viewBox="0 0 304 112"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path class="line" d="M59 90V56.136C58.66 46.48 51.225 39 42 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H42C23.222 90 8 74.778 8 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H59z"></path><polyline class="line" points="59 22.035 59 90 76 90 76 22 59 22"></polyline><path class="line" d="M59 90V55.74C59.567 36.993 74.39 22 93 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H59z"></path><polyline class="line" points="127 22.055 127 90 144 90 144 22 127 22"></polyline><path class="line" d="M127 90V55.74C127.567 36.993 142.39 22 161 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z"></path><path class="line" d="M118.5 22a8.5 8.5 0 1 1-8.477 9.067v-1.134c.283-4.42 3.966-7.933 8.477-7.933z"></path><path class="line" d="M144 73c-9.389 0-17-7.611-17-17v-8.5h-17V56c0 18.778 15.222 34 34 34V73z"></path><path class="line" d="M178 90V55.74C178.567 36.993 193.39 22 212 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z"></path><path class="line" d="M263 73c-9.389 0-17-7.611-17-17s7.611-17 17-17c9.18 0 16.58 7.4 17 17h-17v17h34V55.875C296.433 36.994 281.61 22 263 22c-18.778 0-34 15.222-34 34s15.222 34 34 34V73z"></path><path class="line" d="M288.477 73A8.5 8.5 0 1 1 280 82.067v-1.134c.295-4.42 3.967-7.933 8.477-7.933z"></path></g></svg>',1)])]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="183",n0=0,zd=1,i0=2,ao=1,s0=2,Hr=3,Ki=0,dn=1,di=2,mi=0,dr=1,Gd=2,Wd=3,Xd=4,r0=5,ps=100,a0=101,o0=102,l0=103,c0=104,u0=200,d0=201,h0=202,f0=203,ac=204,oc=205,p0=206,m0=207,g0=208,v0=209,_0=210,x0=211,S0=212,y0=213,b0=214,lc=0,cc=1,uc=2,gr=3,dc=4,hc=5,fc=6,pc=7,bp=0,E0=1,M0=2,Yn=0,Ep=1,Mp=2,Tp=3,Ap=4,wp=5,Rp=6,Cp=7,Pp=300,As=301,vr=302,cl=303,ul=304,ko=306,mc=1e3,hi=1001,gc=1002,Vt=1003,T0=1004,Ra=1005,Zt=1006,dl=1007,_s=1008,bn=1009,Lp=1010,Dp=1011,oa=1012,Cu=1013,Jn=1014,Xn=1015,yi=1016,Pu=1017,Lu=1018,la=1020,Ip=35902,Np=35899,Up=1021,Fp=1022,Ln=1023,bi=1026,xs=1027,Op=1028,Du=1029,_r=1030,Iu=1031,Nu=1033,oo=33776,lo=33777,co=33778,uo=33779,vc=35840,_c=35841,xc=35842,Sc=35843,yc=36196,bc=37492,Ec=37496,Mc=37488,Tc=37489,Ac=37490,wc=37491,Rc=37808,Cc=37809,Pc=37810,Lc=37811,Dc=37812,Ic=37813,Nc=37814,Uc=37815,Fc=37816,Oc=37817,Bc=37818,kc=37819,Vc=37820,Hc=37821,zc=36492,Gc=36494,Wc=36495,Xc=36283,qc=36284,Yc=36285,$c=36286,A0=3200,Bp=0,w0=1,zi="",xn="srgb",xr="srgb-linear",To="linear",pt="srgb",Fs=7680,qd=519,R0=512,C0=513,P0=514,Uu=515,L0=516,D0=517,Fu=518,I0=519,Yd=35044,$d="300 es",qn=2e3,Ao=2001;function N0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){const n=wo("canvas");return n.style.display="block",n}const Kd={};function jd(...n){const e="THREE."+n.shift();console.log(e,...n)}function kp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=kp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=kp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ro(...n){const e=n.join(" ");e in Kd||(Kd[e]=!0,$e(...n))}function F0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const O0={[lc]:cc,[uc]:fc,[dc]:pc,[gr]:hc,[cc]:lc,[fc]:uc,[pc]:dc,[hc]:gr};class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=Math.PI/180,Kc=180/Math.PI;function ma(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function B0(n,e){return(n%e+e)%e}function fl(n,e,t){return(1-t)*n+t*e}function Dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Er{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],_=r[a+2],m=r[a+3];if(h!==m||l!==d||c!==f||u!==_){let v=l*d+c*f+u*_+h*m;v<0&&(d=-d,f=-f,_=-_,m=-m,v=-v);let p=1-o;if(v<.9995){const y=Math.acos(v),w=Math.sin(y);p=Math.sin(p*y)/w,o=Math.sin(o*y)/w,l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+m*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+m*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new ne,Zd=new Er;class Ze{constructor(e,t,i,s,r,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],m=s[0],v=s[3],p=s[6],y=s[1],w=s[4],b=s[7],R=s[2],L=s[5],N=s[8];return r[0]=a*m+o*y+l*R,r[3]=a*v+o*w+l*L,r[6]=a*p+o*b+l*N,r[1]=c*m+u*y+h*R,r[4]=c*v+u*w+h*L,r[7]=c*p+u*b+h*N,r[2]=d*m+f*y+_*R,r[5]=d*v+f*w+_*L,r[8]=d*p+f*b+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,_=t*h+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=h*m,e[1]=(s*c-u*i)*m,e[2]=(o*i-s*a)*m,e[3]=d*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=f*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new Ze,Jd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k0(){const n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?To:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:e,whitePoint:i,transfer:To,toXYZ:Jd,fromXYZ:Qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Jd,fromXYZ:Qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),n}const ot=k0();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class V0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Os===void 0&&(Os=wo("canvas")),Os.width=e.width,Os.height=e.height;const s=Os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H0=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?V0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let z0=0;const vl=new ne;class sn extends br{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=hi,s=hi,r=Zt,a=_s,o=Ln,l=bn,c=sn.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ma(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Pp;sn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],m=l[2],v=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(_-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(_+v)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(f+1)/2,R=(p+1)/2,L=(u+d)/4,N=(h+m)/4,x=(_+v)/4;return w>b&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=L/i,r=N/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=L/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=N/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((v-_)*(v-_)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(v-_)/y,this.y=(h-m)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G0 extends br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ou(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends G0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vp extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W0 extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,_,m,v){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,m,v)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,m,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,m=c*h;t[0]=d+m*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,m=c*h;t[0]=d-m*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,m=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=m-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-m*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,q0)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Li.crossVectors(i,fn),Li.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Li.crossVectors(i,fn)),Li.normalize(),Ca.crossVectors(fn,Li),s[0]=Li.x,s[4]=Ca.x,s[8]=fn.x,s[1]=Li.y,s[5]=Ca.y,s[9]=fn.y,s[2]=Li.z,s[6]=Ca.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],m=i[6],v=i[10],p=i[14],y=i[3],w=i[7],b=i[11],R=i[15],L=s[0],N=s[4],x=s[8],T=s[12],C=s[1],P=s[5],k=s[9],H=s[13],K=s[2],G=s[6],B=s[10],V=s[14],se=s[3],X=s[7],oe=s[11],ye=s[15];return r[0]=a*L+o*C+l*K+c*se,r[4]=a*N+o*P+l*G+c*X,r[8]=a*x+o*k+l*B+c*oe,r[12]=a*T+o*H+l*V+c*ye,r[1]=u*L+h*C+d*K+f*se,r[5]=u*N+h*P+d*G+f*X,r[9]=u*x+h*k+d*B+f*oe,r[13]=u*T+h*H+d*V+f*ye,r[2]=_*L+m*C+v*K+p*se,r[6]=_*N+m*P+v*G+p*X,r[10]=_*x+m*k+v*B+p*oe,r[14]=_*T+m*H+v*V+p*ye,r[3]=y*L+w*C+b*K+R*se,r[7]=y*N+w*P+b*G+R*X,r[11]=y*x+w*k+b*B+R*oe,r[15]=y*T+w*H+b*V+R*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],m=e[7],v=e[11],p=e[15],y=l*f-c*d,w=o*f-c*h,b=o*d-l*h,R=a*f-c*u,L=a*d-l*u,N=a*h-o*u;return t*(m*y-v*w+p*b)-i*(_*y-v*R+p*L)+s*(_*w-m*R+p*N)-r*(_*b-m*L+v*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],m=e[13],v=e[14],p=e[15],y=t*o-i*a,w=t*l-s*a,b=t*c-r*a,R=i*l-s*o,L=i*c-r*o,N=s*c-r*l,x=u*m-h*_,T=u*v-d*_,C=u*p-f*_,P=h*v-d*m,k=h*p-f*m,H=d*p-f*v,K=y*H-w*k+b*P+R*C-L*T+N*x;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/K;return e[0]=(o*H-l*k+c*P)*G,e[1]=(s*k-i*H-r*P)*G,e[2]=(m*N-v*L+p*R)*G,e[3]=(d*L-h*N-f*R)*G,e[4]=(l*C-a*H-c*T)*G,e[5]=(t*H-s*C+r*T)*G,e[6]=(v*b-_*N-p*w)*G,e[7]=(u*N-d*b+f*w)*G,e[8]=(a*k-o*C+c*x)*G,e[9]=(i*C-t*k-r*x)*G,e[10]=(_*L-m*b+p*y)*G,e[11]=(h*b-u*L-f*y)*G,e[12]=(o*T-a*P-l*x)*G,e[13]=(t*P-i*T+s*x)*G,e[14]=(m*w-_*R-v*y)*G,e[15]=(u*R-h*w+d*y)*G,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,_=r*h,m=a*u,v=a*h,p=o*h,y=l*c,w=l*u,b=l*h,R=i.x,L=i.y,N=i.z;return s[0]=(1-(m+p))*R,s[1]=(f+b)*R,s[2]=(_-w)*R,s[3]=0,s[4]=(f-b)*L,s[5]=(1-(d+p))*L,s[6]=(v+y)*L,s[7]=0,s[8]=(_+w)*N,s[9]=(v-y)*N,s[10]=(1-(d+m))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length();const o=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);const c=1/a,u=1/o,h=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=qn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let _,m;if(l)_=r/(a-r),m=a*r/(a-r);else if(o===qn)_=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ao)_=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=qn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let _,m;if(l)_=1/(a-r),m=a/(a-r);else if(o===qn)_=-2/(a-r),m=-(a+r)/(a-r);else if(o===Ao)_=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bs=new ne,An=new Pt,X0=new ne(0,0,0),q0=new ne(1,1,1),Li=new ne,Ca=new ne,fn=new ne,eh=new Pt,th=new Er;class Ei{constructor(e=0,t=0,i=0,s=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Hp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y0=0;const nh=new ne,ks=new Er,ii=new Pt,Pa=new ne,Ir=new ne,$0=new ne,K0=new Er,ih=new ne(1,0,0),sh=new ne(0,1,0),rh=new ne(0,0,1),ah={type:"added"},j0={type:"removed"},Vs={type:"childadded",child:null},_l={type:"childremoved",child:null};class gn extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ne,t=new Ei,i=new Er,s=new ne(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ze}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pa.copy(e):Pa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ir,Pa,this.up):ii.lookAt(Pa,Ir,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(ii),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gn.DEFAULT_UP=new ne(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class La extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const v=t.getJointPose(m,i),p=this._getHandJoint(c,m);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=B0(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Sl(a,r,e+1/3),this.g=Sl(a,r,e),this.b=Sl(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=xn){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const i=zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return ot.workingToColorSpace(Gt.copy(this),e),Math.round(rt(Gt.r*255,0,255))*65536+Math.round(rt(Gt.g*255,0,255))*256+Math.round(rt(Gt.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=xn){ot.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Da);const i=fl(Di.h,Da.h,t),s=fl(Di.s,Da.s,t),r=fl(Di.l,Da.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new xt;xt.NAMES=zp;class J0 extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new ne,si=new ne,yl=new ne,ri=new ne,Hs=new ne,zs=new ne,oh=new ne,bl=new ne,El=new ne,Ml=new ne,Tl=new Rt,Al=new Rt,wl=new Rt;class Cn{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),si.subVectors(i,t),yl.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(si),l=wn.dot(yl),c=si.dot(si),u=si.dot(yl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Tl.setScalar(0),Al.setScalar(0),wl.setScalar(0),Tl.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,i),wl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Tl,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(wl,r.z),a}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),si.subVectors(e,t),wn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),wn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Hs.subVectors(s,i),zs.subVectors(r,i),bl.subVectors(e,i);const l=Hs.dot(bl),c=zs.dot(bl);if(l<=0&&c<=0)return t.copy(i);El.subVectors(e,s);const u=Hs.dot(El),h=zs.dot(El);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hs,a);Ml.subVectors(e,r);const f=Hs.dot(Ml),_=zs.dot(Ml);if(_>=0&&f<=_)return t.copy(r);const m=f*c-l*_;if(m<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(zs,o);const v=u*_-f*h;if(v<=0&&h-u>=0&&f-_>=0)return oh.subVectors(r,s),o=(h-u)/(h-u+(f-_)),t.copy(s).addScaledVector(oh,o);const p=1/(v+m+d);return a=m*p,o=d*p,t.copy(i).addScaledVector(Hs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Na.subVectors(this.max,Nr),Gs.subVectors(e.a,Nr),Ws.subVectors(e.b,Nr),Xs.subVectors(e.c,Nr),Ii.subVectors(Ws,Gs),Ni.subVectors(Xs,Ws),as.subVectors(Gs,Xs);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-as.z,as.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,as.z,0,-as.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-as.y,as.x,0];return!Rl(t,Gs,Ws,Xs,Na)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Gs,Ws,Xs,Na))?!1:(Ua.crossVectors(Ii,Ni),t=[Ua.x,Ua.y,Ua.z],Rl(t,Gs,Ws,Xs,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Rn=new ne,Ia=new ga,Gs=new ne,Ws=new ne,Xs=new ne,Ii=new ne,Ni=new ne,as=new ne,Nr=new ne,Na=new ne,Ua=new ne,os=new ne;function Rl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){os.fromArray(n,r);const o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ct=new ne,Fa=new mt;let Q0=0;class Kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yd,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yd&&(e.usage=this.usage),e}}class Gp extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wp extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vi extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ex=new ga,Ur=new ne,Cl=new ne;class Bu{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ex.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Cl)),this.expandByPoint(Ur.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tx=0;const vn=new Pt,Pl=new gn,qs=new ne,pn=new ga,Fr=new ga,Ft=new ne;class Ai extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?Wp:Gp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(pn.min,Fr.min),pn.expandByPoint(Ft),Ft.addVectors(pn.max,Fr.max),pn.expandByPoint(Ft)):(pn.expandByPoint(Fr.min),pn.expandByPoint(Fr.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),Ft.add(qs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new ne,l[x]=new ne;const c=new ne,u=new ne,h=new ne,d=new mt,f=new mt,_=new mt,m=new ne,v=new ne;function p(x,T,C){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,C),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,C),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),v.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[x].add(m),o[T].add(m),o[C].add(m),l[x].add(v),l[T].add(v),l[C].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){const C=y[x],P=C.start,k=C.count;for(let H=P,K=P+k;H<K;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new ne,b=new ne,R=new ne,L=new ne;function N(x){R.fromBufferAttribute(s,x),L.copy(R);const T=o[x];w.copy(T),w.sub(R.multiplyScalar(R.dot(T))).normalize(),b.crossVectors(L,T);const P=b.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,T=y.length;x<T;++x){const C=y[x],P=C.start,k=C.count;for(let H=P,K=P+k;H<K;H+=3)N(e.getX(H+0)),N(e.getX(H+1)),N(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new ne,r=new ne,a=new ne,o=new ne,l=new ne,c=new ne,u=new ne,h=new ne;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let m=0,v=l.length;m<v;m++){o.isInterleavedBufferAttribute?f=l[m]*o.data.stride+o.offset:f=l[m]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Kn(d,u,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nx=0;class va extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=dr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ac&&(i.blendSrc=this.blendSrc),this.blendDst!==oc&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const oi=new ne,Ll=new ne,Oa=new ne,Ui=new ne,Dl=new ne,Ba=new ne,Il=new ne;class ix{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ll.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ll);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Ui.dot(this.direction),l=-Ui.dot(Oa),c=Ui.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const m=1/u;h*=m,d*=m,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ll).addScaledVector(Oa,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){Dl.subVectors(t,e),Ba.subVectors(i,e),Il.crossVectors(Dl,Ba);let a=this.direction.dot(Il),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const l=o*this.direction.dot(Ba.crossVectors(Ui,Ba));if(l<0)return null;const c=o*this.direction.dot(Dl.cross(Ui));if(c<0||l+c>a)return null;const u=-o*Ui.dot(Il);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xp extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lh=new Pt,ls=new ix,ka=new Bu,ch=new ne,Va=new ne,Ha=new ne,za=new ne,Nl=new ne,Ga=new ne,uh=new ne,Wa=new ne;class Qn extends gn{constructor(e=new Ai,t=new Xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Nl.fromBufferAttribute(h,e),a?Ga.addScaledVector(Nl,u):Ga.addScaledVector(Nl.sub(t),u))}t.add(Ga)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(ka.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ka,ch)===null||ls.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,m=d.length;_<m;_++){const v=d[_],p=a[v.materialIndex],y=Math.max(v.start,f.start),w=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let b=y,R=w;b<R;b+=3){const L=o.getX(b),N=o.getX(b+1),x=o.getX(b+2);s=Xa(this,p,e,i,c,u,h,L,N,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let v=_,p=m;v<p;v+=3){const y=o.getX(v),w=o.getX(v+1),b=o.getX(v+2);s=Xa(this,a,e,i,c,u,h,y,w,b),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,m=d.length;_<m;_++){const v=d[_],p=a[v.materialIndex],y=Math.max(v.start,f.start),w=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let b=y,R=w;b<R;b+=3){const L=b,N=b+1,x=b+2;s=Xa(this,p,e,i,c,u,h,L,N,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let v=_,p=m;v<p;v+=3){const y=v,w=v+1,b=v+2;s=Xa(this,a,e,i,c,u,h,y,w,b),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function sx(n,e,t,i,s,r,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ki,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Va),n.getVertexPosition(l,Ha),n.getVertexPosition(c,za);const u=sx(n,e,t,i,Va,Ha,za,uh);if(u){const h=new ne;Cn.getBarycoord(uh,Va,Ha,za,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,o,l,c,h,new mt)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,o,l,c,h,new mt)),a&&(u.normal=Cn.getInterpolatedAttribute(a,o,l,c,h,new ne),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new ne,materialIndex:0};Cn.getNormal(Va,Ha,za,d.normal),u.face=d,u.barycoord=h}return u}class rx extends sn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Vt,u=Vt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ul=new ne,ax=new ne,ox=new Ze;class fs{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ul.subVectors(i,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ox.getNormalMatrix(e),s=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Bu,lx=new mt(.5,.5),qa=new ne;class qp{constructor(e=new fs,t=new fs,i=new fs,s=new fs,r=new fs,a=new fs){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],m=r[9],v=r[10],p=r[11],y=r[12],w=r[13],b=r[14],R=r[15];if(s[0].setComponents(c-a,f-u,p-_,R-y).normalize(),s[1].setComponents(c+a,f+u,p+_,R+y).normalize(),s[2].setComponents(c+o,f+h,p+m,R+w).normalize(),s[3].setComponents(c-o,f-h,p-m,R-w).normalize(),i)s[4].setComponents(l,d,v,b).normalize(),s[5].setComponents(c-l,f-d,p-v,R-b).normalize();else if(s[4].setComponents(c-l,f-d,p-v,R-b).normalize(),t===qn)s[5].setComponents(c+l,f+d,p+v,R+b).normalize();else if(t===Ao)s[5].setComponents(l,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=lx.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yp extends sn{constructor(e=[],t=As,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ca extends sn{constructor(e,t,i=Jn,s,r,a,o=Vt,l=Vt,c,u=bi,h=1){if(u!==bi&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cx extends ca{constructor(e,t=Jn,i=As,s,r,a=Vt,o=Vt,l,c=bi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $p extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mr extends Ai{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(h,2));function _(m,v,p,y,w,b,R,L,N,x,T){const C=b/N,P=R/x,k=b/2,H=R/2,K=L/2,G=N+1,B=x+1;let V=0,se=0;const X=new ne;for(let oe=0;oe<B;oe++){const ye=oe*P-H;for(let xe=0;xe<G;xe++){const Ue=xe*C-k;X[m]=Ue*y,X[v]=ye*w,X[p]=K,c.push(X.x,X.y,X.z),X[m]=0,X[v]=0,X[p]=L>0?1:-1,u.push(X.x,X.y,X.z),h.push(xe/N),h.push(1-oe/x),V+=1}}for(let oe=0;oe<x;oe++)for(let ye=0;ye<N;ye++){const xe=d+ye+G*oe,Ue=d+ye+G*(oe+1),tt=d+(ye+1)+G*(oe+1),qe=d+(ye+1)+G*oe;l.push(xe,Ue,qe),l.push(Ue,tt,qe),se+=6}o.addGroup(f,se,T),f+=se,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vo extends Ai{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],m=[],v=[];for(let p=0;p<u;p++){const y=p*d-a;for(let w=0;w<c;w++){const b=w*h-r;_.push(b,-y,0),m.push(0,0,1),v.push(w/o),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const w=y+c*p,b=y+c*(p+1),R=y+1+c*(p+1),L=y+1+c*p;f.push(w,b,L),f.push(b,R,L)}this.setIndex(f),this.setAttribute("position",new vi(_,3)),this.setAttribute("normal",new vi(m,3)),this.setAttribute("uv",new vi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=Sr(n[t]);for(const s in i)e[s]=i[s]}return e}function ux(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const dx={clone:Sr,merge:en};var hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class px extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mx extends va{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bp,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class gx extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vx extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ya=new ne,$a=new Er,kn=new ne;class jp extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,$a,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,$a,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ya,$a,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,$a,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new ne,dh=new mt,hh=new mt;class Sn extends jp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kc*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,dh,hh),t.subVectors(hh,dh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zp extends jp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ys=-90,$s=1;class _x extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Ys,$s,e,t);s.layers=this.layers,this.add(s);const r=new Sn(Ys,$s,e,t);r.layers=this.layers,this.add(r);const a=new Sn(Ys,$s,e,t);a.layers=this.layers,this.add(a);const o=new Sn(Ys,$s,e,t);o.layers=this.layers,this.add(o);const l=new Sn(Ys,$s,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Ys,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xx extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function fh(n,e,t,i){const s=Sx(i);switch(t){case Up:return n*e;case Op:return n*e/s.components*s.byteLength;case Du:return n*e/s.components*s.byteLength;case _r:return n*e*2/s.components*s.byteLength;case Iu:return n*e*2/s.components*s.byteLength;case Fp:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case Nu:return n*e*4/s.components*s.byteLength;case oo:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _c:case Sc:return Math.max(n,16)*Math.max(e,8)/4;case vc:case xc:return Math.max(n,8)*Math.max(e,8)/2;case yc:case bc:case Mc:case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Ac:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zc:case Gc:case Wc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sx(n){switch(n){case bn:case Lp:return{byteLength:1,components:1};case oa:case Dp:case yi:return{byteLength:2,components:1};case Pu:case Lu:return{byteLength:2,components:4};case Jn:case Cu:case Xn:return{byteLength:4,components:1};case Ip:case Np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],m=h[f];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++d,h[d]=m)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const m=h[f];n.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ux=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ES=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,US=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ay=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Py=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:bx,alphahash_pars_fragment:Ex,alphamap_fragment:Mx,alphamap_pars_fragment:Tx,alphatest_fragment:Ax,alphatest_pars_fragment:wx,aomap_fragment:Rx,aomap_pars_fragment:Cx,batching_pars_vertex:Px,batching_vertex:Lx,begin_vertex:Dx,beginnormal_vertex:Ix,bsdfs:Nx,iridescence_fragment:Ux,bumpmap_pars_fragment:Fx,clipping_planes_fragment:Ox,clipping_planes_pars_fragment:Bx,clipping_planes_pars_vertex:kx,clipping_planes_vertex:Vx,color_fragment:Hx,color_pars_fragment:zx,color_pars_vertex:Gx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:$x,displacementmap_vertex:Kx,emissivemap_fragment:jx,emissivemap_pars_fragment:Zx,colorspace_fragment:Jx,colorspace_pars_fragment:Qx,envmap_fragment:eS,envmap_common_pars_fragment:tS,envmap_pars_fragment:nS,envmap_pars_vertex:iS,envmap_physical_pars_fragment:pS,envmap_vertex:sS,fog_vertex:rS,fog_pars_vertex:aS,fog_fragment:oS,fog_pars_fragment:lS,gradientmap_pars_fragment:cS,lightmap_pars_fragment:uS,lights_lambert_fragment:dS,lights_lambert_pars_fragment:hS,lights_pars_begin:fS,lights_toon_fragment:mS,lights_toon_pars_fragment:gS,lights_phong_fragment:vS,lights_phong_pars_fragment:_S,lights_physical_fragment:xS,lights_physical_pars_fragment:SS,lights_fragment_begin:yS,lights_fragment_maps:bS,lights_fragment_end:ES,logdepthbuf_fragment:MS,logdepthbuf_pars_fragment:TS,logdepthbuf_pars_vertex:AS,logdepthbuf_vertex:wS,map_fragment:RS,map_pars_fragment:CS,map_particle_fragment:PS,map_particle_pars_fragment:LS,metalnessmap_fragment:DS,metalnessmap_pars_fragment:IS,morphinstance_vertex:NS,morphcolor_vertex:US,morphnormal_vertex:FS,morphtarget_pars_vertex:OS,morphtarget_vertex:BS,normal_fragment_begin:kS,normal_fragment_maps:VS,normal_pars_fragment:HS,normal_pars_vertex:zS,normal_vertex:GS,normalmap_pars_fragment:WS,clearcoat_normal_fragment_begin:XS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:YS,iridescence_pars_fragment:$S,opaque_fragment:KS,packing:jS,premultiplied_alpha_fragment:ZS,project_vertex:JS,dithering_fragment:QS,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:sy,shadowmap_vertex:ry,shadowmask_pars_fragment:ay,skinbase_vertex:oy,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:hy,tonemapping_fragment:fy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:vy,uv_pars_vertex:_y,uv_vertex:xy,worldpos_vertex:Sy,background_vert:yy,background_frag:by,backgroundCube_vert:Ey,backgroundCube_frag:My,cube_vert:Ty,cube_frag:Ay,depth_vert:wy,depth_frag:Ry,distance_vert:Cy,distance_frag:Py,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Iy,linedashed_frag:Ny,meshbasic_vert:Uy,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:By,meshmatcap_vert:ky,meshmatcap_frag:Vy,meshnormal_vert:Hy,meshnormal_frag:zy,meshphong_vert:Gy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:qy,meshtoon_vert:Yy,meshtoon_frag:$y,points_vert:Ky,points_frag:jy,shadow_vert:Zy,shadow_frag:Jy,sprite_vert:Qy,sprite_frag:eb},Pe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Wn={basic:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:en([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:en([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:en([Pe.points,Pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:en([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:en([Pe.common,Pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:en([Pe.sprite,Pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:en([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:en([Pe.lights,Pe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Wn.physical={uniforms:en([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ka={r:0,b:0,g:0},us=new Ei,tb=new Pt;function nb(n,e,t,i,s,r){const a=new xt(0);let o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function _(y){let w=!1;const b=f(y);b===null?v(a,o):b&&b.isColor&&(v(b,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,w){const b=f(w);b&&(b.isCubeTexture||b.mapping===ko)?(c===void 0&&(c=new Qn(new Mr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Sr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),us.copy(w.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(us)),c.material.toneMapped=ot.getTransfer(b.colorSpace)!==pt,(u!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Qn(new Vo(2,2),new ei({name:"BackgroundMaterial",uniforms:Sr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ot.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function v(y,w){y.getRGB(Ka,Kp(n)),t.buffers.color.setClear(Ka.r,Ka.g,Ka.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,v(a,o)},render:_,addToRenderList:m,dispose:p}}function ib(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(P,k,H,K,G){let B=!1;const V=h(P,K,H,k);r!==V&&(r=V,c(r.object)),B=f(P,K,H,G),B&&_(P,K,H,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(P,k,H,K),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function h(P,k,H,K){const G=K.wireframe===!0;let B=i[k.id];B===void 0&&(B={},i[k.id]=B);const V=P.isInstancedMesh===!0?P.id:0;let se=B[V];se===void 0&&(se={},B[V]=se);let X=se[H.id];X===void 0&&(X={},se[H.id]=X);let oe=X[G];return oe===void 0&&(oe=d(l()),X[G]=oe),oe}function d(P){const k=[],H=[],K=[];for(let G=0;G<t;G++)k[G]=0,H[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:K,object:P,attributes:{},index:null}}function f(P,k,H,K){const G=r.attributes,B=k.attributes;let V=0;const se=H.getAttributes();for(const X in se)if(se[X].location>=0){const ye=G[X];let xe=B[X];if(xe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),ye===void 0||ye.attribute!==xe||xe&&ye.data!==xe.data)return!0;V++}return r.attributesNum!==V||r.index!==K}function _(P,k,H,K){const G={},B=k.attributes;let V=0;const se=H.getAttributes();for(const X in se)if(se[X].location>=0){let ye=B[X];ye===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor));const xe={};xe.attribute=ye,ye&&ye.data&&(xe.data=ye.data),G[X]=xe,V++}r.attributes=G,r.attributesNum=V,r.index=K}function m(){const P=r.newAttributes;for(let k=0,H=P.length;k<H;k++)P[k]=0}function v(P){p(P,0)}function p(P,k){const H=r.newAttributes,K=r.enabledAttributes,G=r.attributeDivisors;H[P]=1,K[P]===0&&(n.enableVertexAttribArray(P),K[P]=1),G[P]!==k&&(n.vertexAttribDivisor(P,k),G[P]=k)}function y(){const P=r.newAttributes,k=r.enabledAttributes;for(let H=0,K=k.length;H<K;H++)k[H]!==P[H]&&(n.disableVertexAttribArray(H),k[H]=0)}function w(P,k,H,K,G,B,V){V===!0?n.vertexAttribIPointer(P,k,H,G,B):n.vertexAttribPointer(P,k,H,K,G,B)}function b(P,k,H,K){m();const G=K.attributes,B=H.getAttributes(),V=k.defaultAttributeValues;for(const se in B){const X=B[se];if(X.location>=0){let oe=G[se];if(oe===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),oe!==void 0){const ye=oe.normalized,xe=oe.itemSize,Ue=e.get(oe);if(Ue===void 0)continue;const tt=Ue.buffer,qe=Ue.type,te=Ue.bytesPerElement,fe=qe===n.INT||qe===n.UNSIGNED_INT||oe.gpuType===Cu;if(oe.isInterleavedBufferAttribute){const ge=oe.data,He=ge.stride,De=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let Fe=0;Fe<X.locationSize;Fe++)p(X.location+Fe,ge.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<X.locationSize;Fe++)v(X.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Fe=0;Fe<X.locationSize;Fe++)w(X.location+Fe,xe/X.locationSize,qe,ye,He*te,(De+xe/X.locationSize*Fe)*te,fe)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,oe.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<X.locationSize;ge++)v(X.location+ge);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ge=0;ge<X.locationSize;ge++)w(X.location+ge,xe/X.locationSize,qe,ye,xe*te,xe/X.locationSize*ge*te,fe)}}else if(V!==void 0){const ye=V[se];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(X.location,ye);break;case 3:n.vertexAttrib3fv(X.location,ye);break;case 4:n.vertexAttrib4fv(X.location,ye);break;default:n.vertexAttrib1fv(X.location,ye)}}}}y()}function R(){T();for(const P in i){const k=i[P];for(const H in k){const K=k[H];for(const G in K){const B=K[G];for(const V in B)u(B[V].object),delete B[V];delete K[G]}}delete i[P]}}function L(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const H in k){const K=k[H];for(const G in K){const B=K[G];for(const V in B)u(B[V].object),delete B[V];delete K[G]}}delete i[P.id]}function N(P){for(const k in i){const H=i[k];for(const K in H){const G=H[K];if(G[P.id]===void 0)continue;const B=G[P.id];for(const V in B)u(B[V].object),delete B[V];delete G[P.id]}}}function x(P){for(const k in i){const H=i[k],K=P.isInstancedMesh===!0?P.id:0,G=H[K];if(G!==void 0){for(const B in G){const V=G[B];for(const se in V)u(V[se].object),delete V[se];delete G[B]}delete H[K],Object.keys(H).length===0&&delete i[k]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfObject:x,releaseStatesOfProgram:N,initAttributes:m,enableAttribute:v,disableUnusedAttributes:y}}function sb(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let m=0;m<h;m++)_+=u[m]*d[m];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Ln&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const x=N===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==bn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Xn&&!x)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:R,samples:L}}function ab(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new fs,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!v)r?u(null):c();else{const y=r?0:i,w=y*4;let b=p.clippingState||null;l.value=b,b=u(_,d,w,f);for(let R=0;R!==w;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const m=h!==null?h.length:0;let v=null;if(m!==0){if(v=l.value,_!==!0||v===null){const p=f+m*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<p)&&(v=new Float32Array(p));for(let w=0,b=f;w!==m;++w,b+=4)a.copy(h[w]).applyMatrix4(y,o),a.normal.toArray(v,b),v[b+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}}const Wi=4,ph=[.125,.215,.35,.446,.526,.582],ms=20,ob=256,Or=new Zp,mh=new xt;let Fl=null,Ol=0,Bl=0,kl=!1;const lb=new ne;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=lb}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:yi,format:Ln,colorSpace:xr,depthBuffer:!1},s=vh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cb(r)),this._blurMaterial=db(r,e,t),this._ggxMaterial=ub(r,e,t)}return s}_compileMaterial(e){const t=new Qn(new Ai,e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,i,s,r){const l=new Sn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(mh),h.toneMapping=Yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new Mr,new Xp({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,v=m.material;let p=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,p=!0):(v.color.copy(mh),p=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const R=this._cubeSize;Ks(s,b*R,w>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===As||e.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:_}=this,m=this._sizeLods[i],v=3*m*(i>_-Wi?i-_+Wi:0),p=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,Ks(r,v,p,3*m,2*m),s.setRenderTarget(r),s.render(o,Or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Ks(e,v,p,3*m,2*m),s.setRenderTarget(e),s.render(o,Or)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ms-1),m=r/_,v=isFinite(r)?1+Math.floor(u*m):ms;v>ms&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ms}`);const p=[];let y=0;for(let N=0;N<ms;++N){const x=N/m,T=Math.exp(-x*x/2);p.push(T),N===0?y+=T:N<v&&(y+=2*T)}for(let N=0;N<p.length;N++)p[N]=p[N]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const b=this._sizeLods[s],R=3*b*(s>w-Wi?s-w+Wi:0),L=4*(this._cubeSize-b);Ks(t,R,L,3*b,2*b),l.setRenderTarget(t),l.render(h,Or)}}function cb(n){const e=[],t=[],i=[];let s=n;const r=n-Wi+1+ph.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Wi?l=ph[a-n+Wi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,m=3,v=2,p=1,y=new Float32Array(m*_*f),w=new Float32Array(v*_*f),b=new Float32Array(p*_*f);for(let L=0;L<f;L++){const N=L%3*2/3-1,x=L>2?0:-1,T=[N,x,0,N+2/3,x,0,N+2/3,x+1,0,N,x,0,N+2/3,x+1,0,N,x+1,0];y.set(T,m*_*L),w.set(d,v*_*L);const C=[L,L,L,L,L,L];b.set(C,p*_*L)}const R=new Ai;R.setAttribute("position",new Kn(y,m)),R.setAttribute("uv",new Kn(w,v)),R.setAttribute("faceIndex",new Kn(b,p)),i.push(new Qn(R,null)),s>Wi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function vh(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ks(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ub(n,e,t){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ob,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function db(n,e,t){const i=new Float32Array(ms),s=new ne(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function _h(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qp extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mr(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:mi});r.uniforms.tEquirect.value=t;const a=new Qn(s,r),o=t.minFilter;return t.minFilter===_s&&(t.minFilter=Zt),new _x(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function hb(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===cl||f===ul)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const m=new Qp(_.height);return m.fromEquirectangularTexture(n,d),e.set(d,m),d.addEventListener("dispose",c),o(m.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,_=f===cl||f===ul,m=f===As||f===vr;if(_||m){let v=t.get(d);const p=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new gh(n)),v=_?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return _&&y&&y.height>0||m&&y&&l(y)?(i===null&&(i=new gh(n)),v=_?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function o(d,f){return f===cl?d.mapping=As:f===ul&&(d.mapping=vr),d}function l(d){let f=0;const _=6;for(let m=0;m<_;m++)d[m]!==void 0&&f++;return f===_}function c(d){const f=d.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function fb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ro("WebGLRenderer: "+i+" extension not supported."),s}}}function pb(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let m=0;if(_===void 0)return;if(f!==null){const y=f.array;m=f.version;for(let w=0,b=y.length;w<b;w+=3){const R=y[w+0],L=y[w+1],N=y[w+2];d.push(R,L,L,N,N,R)}}else{const y=_.array;m=_.version;for(let w=0,b=y.length/3-1;w<b;w+=3){const R=w+0,L=w+1,N=w+2;d.push(R,L,L,N,N,R)}}const v=new(_.count>=65535?Wp:Gp)(d,1);v.version=m;const p=r.get(h);p&&e.remove(p),r.set(h,v)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function mb(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*a,_),t.update(f,i,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let v=0;for(let p=0;p<_;p++)v+=f[p];t.update(v,i,1)}function h(d,f,_,m){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],m[p]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,m,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*m[y];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function gb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vb(n,e,t){const i=new WeakMap,s=new Rt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let T=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let b=o.attributes.position.count*w,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*R*4*h),N=new Vp(L,b,R,h);N.type=Xn,N.needsUpdate=!0;const x=w*4;for(let C=0;C<h;C++){const P=v[C],k=p[C],H=y[C],K=b*R*4*C;for(let G=0;G<P.count;G++){const B=G*x;f===!0&&(s.fromBufferAttribute(P,G),L[K+B+0]=s.x,L[K+B+1]=s.y,L[K+B+2]=s.z,L[K+B+3]=0),_===!0&&(s.fromBufferAttribute(k,G),L[K+B+4]=s.x,L[K+B+5]=s.y,L[K+B+6]=s.z,L[K+B+7]=0),m===!0&&(s.fromBufferAttribute(H,G),L[K+B+8]=s.x,L[K+B+9]=s.y,L[K+B+10]=s.z,L[K+B+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:N,size:new mt(b,R)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function _b(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const xb={[Ep]:"LINEAR_TONE_MAPPING",[Mp]:"REINHARD_TONE_MAPPING",[Tp]:"CINEON_TONE_MAPPING",[Ap]:"ACES_FILMIC_TONE_MAPPING",[Rp]:"AGX_TONE_MAPPING",[Cp]:"NEUTRAL_TONE_MAPPING",[wp]:"CUSTOM_TONE_MAPPING"};function Sb(n,e,t,i,s){const r=new $n(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new $n(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),o=new Ai;o.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new vi([0,2,0,0,2,0],2));const l=new px({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Qn(o,l),u=new Zp(-1,1,1,-1,0,1);let h=null,d=null,f=!1,_,m=null,v=[],p=!1;this.setSize=function(y,w){r.setSize(y,w),a.setSize(y,w);for(let b=0;b<v.length;b++){const R=v[b];R.setSize&&R.setSize(y,w)}},this.setEffects=function(y){v=y,p=v.length>0&&v[0].isRenderPass===!0;const w=r.width,b=r.height;for(let R=0;R<v.length;R++){const L=v[R];L.setSize&&L.setSize(w,b)}},this.begin=function(y,w){if(f||y.toneMapping===Yn&&v.length===0)return!1;if(m=w,w!==null){const b=w.width,R=w.height;(r.width!==b||r.height!==R)&&this.setSize(b,R)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Yn,!0},this.hasRenderPass=function(){return p},this.end=function(y,w){y.toneMapping=_,f=!0;let b=r,R=a;for(let L=0;L<v.length;L++){const N=v[L];if(N.enabled!==!1&&(N.render(y,R,b,w),N.needsSwap!==!1)){const x=b;b=R,R=x}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},ot.getTransfer(h)===pt&&(l.defines.SRGB_TRANSFER="");const L=xb[d];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(c,u),m=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const em=new sn,jc=new ca(1,1),tm=new Vp,nm=new W0,im=new Yp,Sh=[],yh=[],bh=new Float32Array(16),Eh=new Float32Array(9),Mh=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zo(n,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function Tb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;Mh.set(i),n.uniformMatrix2fv(this.addr,!1,Mh),Nt(t,i)}}function Ab(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;Eh.set(i),n.uniformMatrix3fv(this.addr,!1,Eh),Nt(t,i)}}function wb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;bh.set(i),n.uniformMatrix4fv(this.addr,!1,bh),Nt(t,i)}}function Rb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function Pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function Lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function Db(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function Nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function Ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Fb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=t.isReversedDepthBuffer()?Fu:Uu,r=jc):r=em,t.setTexture2D(e||r,s)}function Ob(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nm,s)}function Bb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||im,s)}function kb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tm,s)}function Vb(n){switch(n){case 5126:return yb;case 35664:return bb;case 35665:return Eb;case 35666:return Mb;case 35674:return Tb;case 35675:return Ab;case 35676:return wb;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return Pb;case 35669:case 35673:return Lb;case 5125:return Db;case 36294:return Ib;case 36295:return Nb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return kb}}function Hb(n,e){n.uniform1fv(this.addr,e)}function zb(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Gb(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Wb(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Xb(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qb(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yb(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $b(n,e){n.uniform1iv(this.addr,e)}function Kb(n,e){n.uniform2iv(this.addr,e)}function jb(n,e){n.uniform3iv(this.addr,e)}function Zb(n,e){n.uniform4iv(this.addr,e)}function Jb(n,e){n.uniform1uiv(this.addr,e)}function Qb(n,e){n.uniform2uiv(this.addr,e)}function eE(n,e){n.uniform3uiv(this.addr,e)}function tE(n,e){n.uniform4uiv(this.addr,e)}function nE(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=jc:a=em;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function iE(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nm,r[a])}function sE(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||im,r[a])}function rE(n,e,t){const i=this.cache,s=e.length,r=zo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tm,r[a])}function aE(n){switch(n){case 5126:return Hb;case 35664:return zb;case 35665:return Gb;case 35666:return Wb;case 35674:return Xb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return $b;case 35667:case 35671:return Kb;case 35668:case 35672:return jb;case 35669:case 35673:return Zb;case 5125:return Jb;case 36294:return Qb;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return rE}}class oE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vb(t.type)}}class lE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aE(t.type)}}class cE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Th(n,e){n.seq.push(e),n.map[e.id]=e}function uE(n,e,t){const i=n.name,s=i.length;for(Vl.lastIndex=0;;){const r=Vl.exec(i),a=Vl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Th(t,c===void 0?new oE(o,n,e):new lE(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new cE(o),Th(t,h)),t=h}}}class ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);uE(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ah(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dE=37297;let hE=0;function fE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const wh=new Ze;function pE(n){ot._getMatrix(wh,ot.workingColorSpace,n);const e=`mat3( ${wh.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case To:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fE(n.getShaderSource(e),o)}else return r}function mE(n,e){const t=pE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const gE={[Ep]:"Linear",[Mp]:"Reinhard",[Tp]:"Cineon",[Ap]:"ACESFilmic",[Rp]:"AgX",[Cp]:"Neutral",[wp]:"Custom"};function vE(n,e){const t=gE[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ja=new ne;function _E(){ot.getLuminanceCoefficients(ja);const n=ja.x.toFixed(4),e=ja.y.toFixed(4),t=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function SE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zr(n){return n!==""}function Ch(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(n){return n.replace(bE,ME)}const EE=new Map;function ME(n,e){let t=et[e];if(t===void 0){const i=EE.get(e);if(i!==void 0)t=et[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(n){return n.replace(TE,AE)}function AE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wE={[ao]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function RE(n){return wE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CE={[As]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function PE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":CE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const LE={[vr]:"ENVMAP_MODE_REFRACTION"};function DE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":LE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IE={[bp]:"ENVMAP_BLENDING_MULTIPLY",[E0]:"ENVMAP_BLENDING_MIX",[M0]:"ENVMAP_BLENDING_ADD"};function NE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":IE[n.combine]||"ENVMAP_BLENDING_NONE"}function UE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FE(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=RE(t),c=PE(t),u=DE(t),h=NE(t),d=UE(t),f=xE(t),_=SE(r),m=s.createProgram();let v,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(v=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?et.tonemapping_pars_fragment:"",t.toneMapping!==Yn?vE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,mE("linearToOutputTexel",t.outputColorSpace),_E(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=Zc(a),a=Ch(a,t),a=Ph(a,t),o=Zc(o),o=Ch(o,t),o=Ph(o,t),a=Lh(a),o=Lh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+v+a,b=y+p+o,R=Ah(s,s.VERTEX_SHADER,w),L=Ah(s,s.FRAGMENT_SHADER,b);s.attachShader(m,R),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(P){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(m)||"",H=s.getShaderInfoLog(R)||"",K=s.getShaderInfoLog(L)||"",G=k.trim(),B=H.trim(),V=K.trim();let se=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,L);else{const oe=Rh(s,R,"vertex"),ye=Rh(s,L,"fragment");ct("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+oe+`
`+ye)}else G!==""?$e("WebGLProgram: Program Info Log:",G):(B===""||V==="")&&(X=!1);X&&(P.diagnostics={runnable:se,programLog:G,vertexShader:{log:B,prefix:v},fragmentShader:{log:V,prefix:p}})}s.deleteShader(R),s.deleteShader(L),x=new ho(s,m),T=yE(s,m)}let x;this.getUniforms=function(){return x===void 0&&N(this),x};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,dE)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=L,this}let OE=0;class BE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kE(e),t.set(e,i)),i}}class kE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function VE(n,e,t,i,s,r){const a=new Hp,o=new BE,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,T,C,P,k){const H=P.fog,K=k.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||G,B),se=V&&V.mapping===ko?V.image.height:null,X=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ye=oe!==void 0?oe.length:0;let xe=0;K.morphAttributes.position!==void 0&&(xe=1),K.morphAttributes.normal!==void 0&&(xe=2),K.morphAttributes.color!==void 0&&(xe=3);let Ue,tt,qe,te;if(X){const st=Wn[X];Ue=st.vertexShader,tt=st.fragmentShader}else Ue=x.vertexShader,tt=x.fragmentShader,o.update(x),qe=o.getVertexShaderID(x),te=o.getFragmentShaderID(x);const fe=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),He=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,Fe=!!x.map,it=!!x.matcap,A=!!V,I=!!x.aoMap,q=!!x.lightMap,J=!!x.bumpMap,ie=!!x.normalMap,M=!!x.displacementMap,he=!!x.emissiveMap,ae=!!x.metalnessMap,le=!!x.roughnessMap,z=x.anisotropy>0,E=x.clearcoat>0,g=x.dispersion>0,D=x.iridescence>0,W=x.sheen>0,Q=x.transmission>0,Y=z&&!!x.anisotropyMap,pe=E&&!!x.clearcoatMap,me=E&&!!x.clearcoatNormalMap,Ce=E&&!!x.clearcoatRoughnessMap,Ie=D&&!!x.iridescenceMap,ue=D&&!!x.iridescenceThicknessMap,ve=W&&!!x.sheenColorMap,Le=W&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,be=!!x.specularColorMap,We=!!x.specularIntensityMap,O=Q&&!!x.transmissionMap,ce=Q&&!!x.thicknessMap,de=!!x.gradientMap,Ne=!!x.alphaMap,Se=x.alphaTest>0,re=!!x.alphaHash,Oe=!!x.extensions;let Ye=Yn;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const ft={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:tt,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:xr,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:it,envMap:A,envMapMode:A&&V.mapping,envMapCubeUVHeight:se,aoMap:I,lightMap:q,bumpMap:J,normalMap:ie,displacementMap:M,emissiveMap:he,normalMapObjectSpace:ie&&x.normalMapType===w0,normalMapTangentSpace:ie&&x.normalMapType===Bp,metalnessMap:ae,roughnessMap:le,anisotropy:z,anisotropyMap:Y,clearcoat:E,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:Ce,dispersion:g,iridescence:D,iridescenceMap:Ie,iridescenceThicknessMap:ue,sheen:W,sheenColorMap:ve,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:be,specularIntensityMap:We,transmission:Q,transmissionMap:O,thicknessMap:ce,gradientMap:de,opaque:x.transparent===!1&&x.blending===dr&&x.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Se,alphaHash:re,combine:x.combine,mapUv:Fe&&_(x.map.channel),aoMapUv:I&&_(x.aoMap.channel),lightMapUv:q&&_(x.lightMap.channel),bumpMapUv:J&&_(x.bumpMap.channel),normalMapUv:ie&&_(x.normalMap.channel),displacementMapUv:M&&_(x.displacementMap.channel),emissiveMapUv:he&&_(x.emissiveMap.channel),metalnessMapUv:ae&&_(x.metalnessMap.channel),roughnessMapUv:le&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:pe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(x.sheenRoughnessMap.channel),specularMapUv:Ee&&_(x.specularMap.channel),specularColorMapUv:be&&_(x.specularColorMap.channel),specularIntensityMapUv:We&&_(x.specularIntensityMap.channel),transmissionMapUv:O&&_(x.transmissionMap.channel),thicknessMapUv:ce&&_(x.thicknessMap.channel),alphaMapUv:Ne&&_(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ie||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Fe||Ne),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||K.attributes.normal===void 0&&ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&x.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function v(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),x.push(a.mask)}function w(x){const T=f[x.type];let C;if(T){const P=Wn[T];C=dx.clone(P.uniforms)}else C=x.uniforms;return C}function b(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new FE(n,T,x,s),c.push(C),u.set(T,C)),C}function R(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function L(x){o.remove(x)}function N(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:w,acquireProgram:b,releaseProgram:R,releaseShaderCache:L,programs:c,dispose:N}}function HE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function zE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ih(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,m,v,p){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:m,renderOrder:d.renderOrder,z:v,group:p},n[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=_,y.materialVariant=a(d),y.groupOrder=m,y.renderOrder=d.renderOrder,y.z=v,y.group=p),e++,y}function l(d,f,_,m,v,p){const y=o(d,f,_,m,v,p);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):t.push(y)}function c(d,f,_,m,v,p){const y=o(d,f,_,m,v,p);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||zE),i.length>1&&i.sort(f||Ih),s.length>1&&s.sort(f||Ih)}function h(){for(let d=e,f=n.length;d<f;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function GE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Nh,n.set(i,[a])):s>=r.length?(a=new Nh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function WE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new xt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function XE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qE=0;function YE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $E(n){const e=new WE,t=XE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ne);const s=new ne,r=new Pt,a=new Pt;function o(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,_=0,m=0,v=0,p=0,y=0,w=0,b=0,R=0,L=0,N=0;c.sort(YE);for(let T=0,C=c.length;T<C;T++){const P=c[T],k=P.color,H=P.intensity,K=P.distance;let G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===_r?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*H,h+=k.g*H,d+=k.b*H;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],H);N++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,se=t.get(P);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,i.directionalShadow[f]=se,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(k).multiplyScalar(H),B.distance=K,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[m]=B;const V=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,V.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[m]=V.matrix,P.castShadow){const se=t.get(P);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,i.spotShadow[m]=se,i.spotShadowMap[m]=G,b++}m++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(k).multiplyScalar(H),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=B,v++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const V=P.shadow,se=t.get(P);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,se.shadowCameraNear=V.camera.near,se.shadowCameraFar=V.camera.far,i.pointShadow[_]=se,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=P.shadow.matrix,w++}i.point[_]=B,_++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(H),B.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[p]=B,p++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==f||x.pointLength!==_||x.spotLength!==m||x.rectAreaLength!==v||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==w||x.numSpotShadows!==b||x.numSpotMaps!==R||x.numLightProbes!==N)&&(i.directional.length=f,i.spot.length=m,i.rectArea.length=v,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+R-L,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=N,x.directionalLength=f,x.pointLength=_,x.spotLength=m,x.rectAreaLength=v,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=w,x.numSpotShadows=b,x.numSpotMaps=R,x.numLightProbes=N,i.version=qE++)}function l(c,u){let h=0,d=0,f=0,_=0,m=0;const v=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const w=c[p];if(w.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),h++}else if(w.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),f++}else if(w.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),a.identity(),r.copy(w.matrixWorld),r.premultiply(v),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),d++}else if(w.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(v),m++}}}return{setup:o,setupView:l,state:i}}function Uh(n){const e=new $E(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function KE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Uh(n),e.set(s,[o])):r>=a.length?(o=new Uh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JE=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],QE=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Fh=new Pt,Br=new ne,Hl=new ne;function eM(n,e,t){let i=new qp;const s=new mt,r=new mt,a=new Rt,o=new gx,l=new vx,c={},u=t.maxTextureSize,h={[Ki]:dn,[dn]:Ki,[di]:di},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:jE,fragmentShader:ZE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ai;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Qn(_,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let p=this.type;this.render=function(L,N,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;this.type===s0&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ao);const T=n.getRenderTarget(),C=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(mi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==this.type;H&&N.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(G=>G.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,G=L.length;K<G;K++){const B=L[K],V=B.shadow;if(V===void 0){$e("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const se=V.getFrameExtents();s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Hr){if(B.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new $n(s.x,s.y,{format:_r,type:yi,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new ca(s.x,s.y,Xn),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=bi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt}else B.isPointLight?(V.map=new Qp(s.x),V.map.depthTexture=new cx(s.x,Jn)):(V.map=new $n(s.x,s.y),V.map.depthTexture=new ca(s.x,s.y,Jn)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=bi,this.type===ao?(V.map.depthTexture.compareFunction=X?Fu:Uu,V.map.depthTexture.minFilter=Zt,V.map.depthTexture.magFilter=Zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt);V.camera.updateProjectionMatrix()}const oe=V.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<oe;ye++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(V.map),n.clear());const xe=V.getViewport(ye);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),k.viewport(a)}if(B.isPointLight){const xe=V.camera,Ue=V.matrix,tt=B.distance||xe.far;tt!==xe.far&&(xe.far=tt,xe.updateProjectionMatrix()),Br.setFromMatrixPosition(B.matrixWorld),xe.position.copy(Br),Hl.copy(xe.position),Hl.add(JE[ye]),xe.up.copy(QE[ye]),xe.lookAt(Hl),xe.updateMatrixWorld(),Ue.makeTranslation(-Br.x,-Br.y,-Br.z),Fh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Fh,xe.coordinateSystem,xe.reversedDepth)}else V.updateMatrices(B);i=V.getFrustum(),b(N,x,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===Hr&&y(V,x),V.needsUpdate=!1}p=this.type,v.needsUpdate=!1,n.setRenderTarget(T,C,P)};function y(L,N){const x=e.update(m);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new $n(s.x,s.y,{format:_r,type:yi})),d.uniforms.shadow_pass.value=L.map.depthTexture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(N,null,x,d,m,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(N,null,x,f,m,null)}function w(L,N,x,T){let C=null;const P=x.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const k=C.uuid,H=N.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let G=K[H];G===void 0&&(G=C.clone(),K[H]=G,N.addEventListener("dispose",R)),C=G}if(C.visible=N.visible,C.wireframe=N.wireframe,T===Hr?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:h[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const k=n.properties.get(C);k.light=x}return C}function b(L,N,x,T,C){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===Hr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,L.matrixWorld);const H=e.update(L),K=L.material;if(Array.isArray(K)){const G=H.groups;for(let B=0,V=G.length;B<V;B++){const se=G[B],X=K[se.materialIndex];if(X&&X.visible){const oe=w(L,X,T,C);L.onBeforeShadow(n,L,N,x,H,oe,se),n.renderBufferDirect(x,null,H,oe,L,se),L.onAfterShadow(n,L,N,x,H,oe,se)}}}else if(K.visible){const G=w(L,K,T,C);L.onBeforeShadow(n,L,N,x,H,G,null),n.renderBufferDirect(x,null,H,G,L,null),L.onAfterShadow(n,L,N,x,H,G,null)}}const k=L.children;for(let H=0,K=k.length;H<K;H++)b(k[H],N,x,T,C)}function R(L){L.target.removeEventListener("dispose",R);for(const x in c){const T=c[x],C=L.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function tM(n,e){function t(){let O=!1;const ce=new Rt;let de=null;const Ne=new Rt(0,0,0,0);return{setMask:function(Se){de!==Se&&!O&&(n.colorMask(Se,Se,Se,Se),de=Se)},setLocked:function(Se){O=Se},setClear:function(Se,re,Oe,Ye,ft){ft===!0&&(Se*=Ye,re*=Ye,Oe*=Ye),ce.set(Se,re,Oe,Ye),Ne.equals(ce)===!1&&(n.clearColor(Se,re,Oe,Ye),Ne.copy(ce))},reset:function(){O=!1,de=null,Ne.set(-1,0,0,0)}}}function i(){let O=!1,ce=!1,de=null,Ne=null,Se=null;return{setReversed:function(re){if(ce!==re){const Oe=e.get("EXT_clip_control");re?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const Ye=Se;Se=null,this.setClear(Ye)}},getReversed:function(){return ce},setTest:function(re){re?fe(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(re){de!==re&&!O&&(n.depthMask(re),de=re)},setFunc:function(re){if(ce&&(re=O0[re]),Ne!==re){switch(re){case lc:n.depthFunc(n.NEVER);break;case cc:n.depthFunc(n.ALWAYS);break;case uc:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case dc:n.depthFunc(n.EQUAL);break;case hc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=re}},setLocked:function(re){O=re},setClear:function(re){Se!==re&&(Se=re,ce&&(re=1-re),n.clearDepth(re))},reset:function(){O=!1,de=null,Ne=null,Se=null,ce=!1}}}function s(){let O=!1,ce=null,de=null,Ne=null,Se=null,re=null,Oe=null,Ye=null,ft=null;return{setTest:function(st){O||(st?fe(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(st){ce!==st&&!O&&(n.stencilMask(st),ce=st)},setFunc:function(st,rn,an){(de!==st||Ne!==rn||Se!==an)&&(n.stencilFunc(st,rn,an),de=st,Ne=rn,Se=an)},setOp:function(st,rn,an){(re!==st||Oe!==rn||Ye!==an)&&(n.stencilOp(st,rn,an),re=st,Oe=rn,Ye=an)},setLocked:function(st){O=st},setClear:function(st){ft!==st&&(n.clearStencil(st),ft=st)},reset:function(){O=!1,ce=null,de=null,Ne=null,Se=null,re=null,Oe=null,Ye=null,ft=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,m=!1,v=null,p=null,y=null,w=null,b=null,R=null,L=null,N=new xt(0,0,0),x=0,T=!1,C=null,P=null,k=null,H=null,K=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(se)[1]),B=V>=1):se.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),B=V>=2);let X=null,oe={};const ye=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ue=new Rt().fromArray(ye),tt=new Rt().fromArray(xe);function qe(O,ce,de,Ne){const Se=new Uint8Array(4),re=n.createTexture();n.bindTexture(O,re),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<de;Oe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ce+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return re}const te={};te[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(gr),J(!1),ie(zd),fe(n.CULL_FACE),I(mi);function fe(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ge(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function He(O,ce){return h[O]!==ce?(n.bindFramebuffer(O,ce),h[O]=ce,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function De(O,ce){let de=f,Ne=!1;if(O){de=d.get(ce),de===void 0&&(de=[],d.set(ce,de));const Se=O.textures;if(de.length!==Se.length||de[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Oe=Se.length;re<Oe;re++)de[re]=n.COLOR_ATTACHMENT0+re;de.length=Se.length,Ne=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(de)}function Fe(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const it={[ps]:n.FUNC_ADD,[a0]:n.FUNC_SUBTRACT,[o0]:n.FUNC_REVERSE_SUBTRACT};it[l0]=n.MIN,it[c0]=n.MAX;const A={[u0]:n.ZERO,[d0]:n.ONE,[h0]:n.SRC_COLOR,[ac]:n.SRC_ALPHA,[_0]:n.SRC_ALPHA_SATURATE,[g0]:n.DST_COLOR,[p0]:n.DST_ALPHA,[f0]:n.ONE_MINUS_SRC_COLOR,[oc]:n.ONE_MINUS_SRC_ALPHA,[v0]:n.ONE_MINUS_DST_COLOR,[m0]:n.ONE_MINUS_DST_ALPHA,[x0]:n.CONSTANT_COLOR,[S0]:n.ONE_MINUS_CONSTANT_COLOR,[y0]:n.CONSTANT_ALPHA,[b0]:n.ONE_MINUS_CONSTANT_ALPHA};function I(O,ce,de,Ne,Se,re,Oe,Ye,ft,st){if(O===mi){m===!0&&(ge(n.BLEND),m=!1);return}if(m===!1&&(fe(n.BLEND),m=!0),O!==r0){if(O!==v||st!==T){if((p!==ps||b!==ps)&&(n.blendEquation(n.FUNC_ADD),p=ps,b=ps),st)switch(O){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gd:n.blendFunc(n.ONE,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",O);break}else switch(O){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wd:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xd:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",O);break}y=null,w=null,R=null,L=null,N.set(0,0,0),x=0,v=O,T=st}return}Se=Se||ce,re=re||de,Oe=Oe||Ne,(ce!==p||Se!==b)&&(n.blendEquationSeparate(it[ce],it[Se]),p=ce,b=Se),(de!==y||Ne!==w||re!==R||Oe!==L)&&(n.blendFuncSeparate(A[de],A[Ne],A[re],A[Oe]),y=de,w=Ne,R=re,L=Oe),(Ye.equals(N)===!1||ft!==x)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ft),N.copy(Ye),x=ft),v=O,T=!1}function q(O,ce){O.side===di?ge(n.CULL_FACE):fe(n.CULL_FACE);let de=O.side===dn;ce&&(de=!de),J(de),O.blending===dr&&O.transparent===!1?I(mi):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ne=O.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),he(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){C!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),C=O)}function ie(O){O!==n0?(fe(n.CULL_FACE),O!==P&&(O===zd?n.cullFace(n.BACK):O===i0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),P=O}function M(O){O!==k&&(B&&n.lineWidth(O),k=O)}function he(O,ce,de){O?(fe(n.POLYGON_OFFSET_FILL),(H!==ce||K!==de)&&(H=ce,K=de,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,de))):ge(n.POLYGON_OFFSET_FILL)}function ae(O){O?fe(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function le(O){O===void 0&&(O=n.TEXTURE0+G-1),X!==O&&(n.activeTexture(O),X=O)}function z(O,ce,de){de===void 0&&(X===null?de=n.TEXTURE0+G-1:de=X);let Ne=oe[de];Ne===void 0&&(Ne={type:void 0,texture:void 0},oe[de]=Ne),(Ne.type!==O||Ne.texture!==ce)&&(X!==de&&(n.activeTexture(de),X=de),n.bindTexture(O,ce||te[O]),Ne.type=O,Ne.texture=ce)}function E(){const O=oe[X];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function W(){try{n.texSubImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function Q(){try{n.texSubImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function me(){try{n.texStorage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function Ce(){try{n.texStorage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function Ie(){try{n.texImage2D(...arguments)}catch(O){ct("WebGLState:",O)}}function ue(){try{n.texImage3D(...arguments)}catch(O){ct("WebGLState:",O)}}function ve(O){Ue.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ue.copy(O))}function Le(O){tt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Ee(O,ce){let de=c.get(ce);de===void 0&&(de=new WeakMap,c.set(ce,de));let Ne=de.get(O);Ne===void 0&&(Ne=n.getUniformBlockIndex(ce,O.name),de.set(O,Ne))}function be(O,ce){const Ne=c.get(ce).get(O);l.get(ce)!==Ne&&(n.uniformBlockBinding(ce,Ne,O.__bindingPointIndex),l.set(ce,Ne))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,oe={},h={},d=new WeakMap,f=[],_=null,m=!1,v=null,p=null,y=null,w=null,b=null,R=null,L=null,N=new xt(0,0,0),x=0,T=!1,C=null,P=null,k=null,H=null,K=null,Ue.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:ge,bindFramebuffer:He,drawBuffers:De,useProgram:Fe,setBlending:I,setMaterial:q,setFlipSided:J,setCullFace:ie,setLineWidth:M,setPolygonOffset:he,setScissorTest:ae,activeTexture:le,bindTexture:z,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Ie,texImage3D:ue,updateUBOMapping:Ee,uniformBlockBinding:be,texStorage2D:me,texStorage3D:Ce,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:pe,scissor:ve,viewport:Le,reset:We}}function nM(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return f?new OffscreenCanvas(E,g):wo("canvas")}function m(E,g,D){let W=1;const Q=z(E);if((Q.width>D||Q.height>D)&&(W=D/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(W*Q.width),pe=Math.floor(W*Q.height);h===void 0&&(h=_(Y,pe));const me=g?_(Y,pe):h;return me.width=Y,me.height=pe,me.getContext("2d").drawImage(E,0,0,Y,pe),$e("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+pe+")."),me}else return"data"in E&&$e("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function v(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,g,D,W,Q=!1){if(E!==null){if(n[E]!==void 0)return n[E];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=g;if(g===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),g===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),g===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),g===n.RGBA){const pe=Q?To:ot.getTransfer(W);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=pe===pt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(E,g){let D;return E?g===null||g===Jn||g===la?D=n.DEPTH24_STENCIL8:g===Xn?D=n.DEPTH32F_STENCIL8:g===oa&&(D=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Jn||g===la?D=n.DEPTH_COMPONENT24:g===Xn?D=n.DEPTH_COMPONENT32F:g===oa&&(D=n.DEPTH_COMPONENT16),D}function R(E,g){return v(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==Zt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function L(E){const g=E.target;g.removeEventListener("dispose",L),x(g),g.isVideoTexture&&u.delete(g)}function N(E){const g=E.target;g.removeEventListener("dispose",N),C(g)}function x(E){const g=i.get(E);if(g.__webglInit===void 0)return;const D=E.source,W=d.get(D);if(W){const Q=W[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(W).length===0&&d.delete(D)}i.remove(E)}function T(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const D=E.source,W=d.get(D);delete W[g.__cacheKey],a.memory.textures--}function C(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Q=0;Q<g.__webglFramebuffer[W].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[W][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=E.textures;for(let W=0,Q=D.length;W<Q;W++){const Y=i.get(D[W]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[W])}i.remove(E)}let P=0;function k(){P=0}function H(){const E=P;return E>=s.maxTextures&&$e("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function K(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function G(E,g){const D=i.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&D.__version!==E.version){const W=E.image;if(W===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,E,g);return}}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function B(E,g){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){te(D,E,g);return}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function V(E,g){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){te(D,E,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function se(E,g){const D=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&D.__version!==E.version){fe(D,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const X={[mc]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[gc]:n.MIRRORED_REPEAT},oe={[Vt]:n.NEAREST,[T0]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},ye={[R0]:n.NEVER,[I0]:n.ALWAYS,[C0]:n.LESS,[Uu]:n.LEQUAL,[P0]:n.EQUAL,[Fu]:n.GEQUAL,[L0]:n.GREATER,[D0]:n.NOTEQUAL};function xe(E,g){if(g.type===Xn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Zt||g.magFilter===dl||g.magFilter===Ra||g.magFilter===_s||g.minFilter===Zt||g.minFilter===dl||g.minFilter===Ra||g.minFilter===_s)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,X[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,X[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,X[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,oe[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,oe[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Vt||g.minFilter!==Ra&&g.minFilter!==_s||g.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ue(E,g){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",L));const W=g.source;let Q=d.get(W);Q===void 0&&(Q={},d.set(W,Q));const Y=K(g);if(Y!==E.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Q[Y].usedTimes++;const pe=Q[E.__cacheKey];pe!==void 0&&(Q[E.__cacheKey].usedTimes--,pe.usedTimes===0&&T(g)),E.__cacheKey=Y,E.__webglTexture=Q[Y].texture}return D}function tt(E,g,D){return Math.floor(Math.floor(E/D)/g)}function qe(E,g,D,W){const Y=E.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,W,g.data);else{Y.sort((ue,ve)=>ue.start-ve.start);let pe=0;for(let ue=1;ue<Y.length;ue++){const ve=Y[pe],Le=Y[ue],Ee=ve.start+ve.count,be=tt(Le.start,g.width,4),We=tt(ve.start,g.width,4);Le.start<=Ee+1&&be===We&&tt(Le.start+Le.count-1,g.width,4)===be?ve.count=Math.max(ve.count,Le.start+Le.count-ve.start):(++pe,Y[pe]=Le)}Y.length=pe+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ue=0,ve=Y.length;ue<ve;ue++){const Le=Y[ue],Ee=Math.floor(Le.start/4),be=Math.ceil(Le.count/4),We=Ee%g.width,O=Math.floor(Ee/g.width),ce=be,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,We,O,ce,de,D,W,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function te(E,g,D){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const Q=Ue(E,g),Y=g.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+D);const pe=i.get(Y);if(Y.version!==pe.__version||Q===!0){t.activeTexture(n.TEXTURE0+D);const me=ot.getPrimaries(ot.workingColorSpace),Ce=g.colorSpace===zi?null:ot.getPrimaries(g.colorSpace),Ie=g.colorSpace===zi||me===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ue=m(g.image,!1,s.maxTextureSize);ue=le(g,ue);const ve=r.convert(g.format,g.colorSpace),Le=r.convert(g.type);let Ee=w(g.internalFormat,ve,Le,g.colorSpace,g.isVideoTexture);xe(W,g);let be;const We=g.mipmaps,O=g.isVideoTexture!==!0,ce=pe.__version===void 0||Q===!0,de=Y.dataReady,Ne=R(g,ue);if(g.isDepthTexture)Ee=b(g.format===xs,g.type),ce&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ee,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ue.width,ue.height,0,ve,Le,null));else if(g.isDataTexture)if(We.length>0){O&&ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Ee,We[0].width,We[0].height);for(let Se=0,re=We.length;Se<re;Se++)be=We[Se],O?de&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,be.width,be.height,ve,Le,be.data):t.texImage2D(n.TEXTURE_2D,Se,Ee,be.width,be.height,0,ve,Le,be.data);g.generateMipmaps=!1}else O?(ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Ee,ue.width,ue.height),de&&qe(g,ue,ve,Le)):t.texImage2D(n.TEXTURE_2D,0,Ee,ue.width,ue.height,0,ve,Le,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){O&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Ee,We[0].width,We[0].height,ue.depth);for(let Se=0,re=We.length;Se<re;Se++)if(be=We[Se],g.format!==Ln)if(ve!==null)if(O){if(de)if(g.layerUpdates.size>0){const Oe=fh(be.width,be.height,g.format,g.type);for(const Ye of g.layerUpdates){const ft=be.data.subarray(Ye*Oe/be.data.BYTES_PER_ELEMENT,(Ye+1)*Oe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Ye,be.width,be.height,1,ve,ft)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,be.width,be.height,ue.depth,ve,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Ee,be.width,be.height,ue.depth,0,be.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,be.width,be.height,ue.depth,ve,Le,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Ee,be.width,be.height,ue.depth,0,ve,Le,be.data)}else{O&&ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Ee,We[0].width,We[0].height);for(let Se=0,re=We.length;Se<re;Se++)be=We[Se],g.format!==Ln?ve!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Ee,be.width,be.height,0,be.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,be.width,be.height,ve,Le,be.data):t.texImage2D(n.TEXTURE_2D,Se,Ee,be.width,be.height,0,ve,Le,be.data)}else if(g.isDataArrayTexture)if(O){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Ee,ue.width,ue.height,ue.depth),de)if(g.layerUpdates.size>0){const Se=fh(ue.width,ue.height,g.format,g.type);for(const re of g.layerUpdates){const Oe=ue.data.subarray(re*Se/ue.data.BYTES_PER_ELEMENT,(re+1)*Se/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,ve,Le,Oe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Le,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ue.width,ue.height,ue.depth,0,ve,Le,ue.data);else if(g.isData3DTexture)O?(ce&&t.texStorage3D(n.TEXTURE_3D,Ne,Ee,ue.width,ue.height,ue.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Le,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ue.width,ue.height,ue.depth,0,ve,Le,ue.data);else if(g.isFramebufferTexture){if(ce)if(O)t.texStorage2D(n.TEXTURE_2D,Ne,Ee,ue.width,ue.height);else{let Se=ue.width,re=ue.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,Ee,Se,re,0,ve,Le,null),Se>>=1,re>>=1}}else if(We.length>0){if(O&&ce){const Se=z(We[0]);t.texStorage2D(n.TEXTURE_2D,Ne,Ee,Se.width,Se.height)}for(let Se=0,re=We.length;Se<re;Se++)be=We[Se],O?de&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ve,Le,be):t.texImage2D(n.TEXTURE_2D,Se,Ee,ve,Le,be);g.generateMipmaps=!1}else if(O){if(ce){const Se=z(ue);t.texStorage2D(n.TEXTURE_2D,Ne,Ee,Se.width,Se.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Le,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ee,ve,Le,ue);v(g)&&p(W),pe.__version=Y.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function fe(E,g,D){if(g.image.length!==6)return;const W=Ue(E,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+D);const Y=i.get(Q);if(Q.version!==Y.__version||W===!0){t.activeTexture(n.TEXTURE0+D);const pe=ot.getPrimaries(ot.workingColorSpace),me=g.colorSpace===zi?null:ot.getPrimaries(g.colorSpace),Ce=g.colorSpace===zi||pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ie=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!Ie&&!ue?ve[re]=m(g.image[re],!0,s.maxCubemapSize):ve[re]=ue?g.image[re].image:g.image[re],ve[re]=le(g,ve[re]);const Le=ve[0],Ee=r.convert(g.format,g.colorSpace),be=r.convert(g.type),We=w(g.internalFormat,Ee,be,g.colorSpace),O=g.isVideoTexture!==!0,ce=Y.__version===void 0||W===!0,de=Q.dataReady;let Ne=R(g,Le);xe(n.TEXTURE_CUBE_MAP,g);let Se;if(Ie){O&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,Le.width,Le.height);for(let re=0;re<6;re++){Se=ve[re].mipmaps;for(let Oe=0;Oe<Se.length;Oe++){const Ye=Se[Oe];g.format!==Ln?Ee!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,Ye.width,Ye.height,Ee,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,We,Ye.width,Ye.height,0,Ye.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,Ye.width,Ye.height,Ee,be,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,We,Ye.width,Ye.height,0,Ee,be,Ye.data)}}}else{if(Se=g.mipmaps,O&&ce){Se.length>0&&Ne++;const re=z(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,re.width,re.height)}for(let re=0;re<6;re++)if(ue){O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,Ee,be,ve[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,ve[re].width,ve[re].height,0,Ee,be,ve[re].data);for(let Oe=0;Oe<Se.length;Oe++){const ft=Se[Oe].image[re].image;O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,ft.width,ft.height,Ee,be,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,We,ft.width,ft.height,0,Ee,be,ft.data)}}else{O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee,be,ve[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,Ee,be,ve[re]);for(let Oe=0;Oe<Se.length;Oe++){const Ye=Se[Oe];O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,Ee,be,Ye.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,We,Ee,be,Ye.image[re])}}}v(g)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ge(E,g,D,W,Q,Y){const pe=r.convert(D.format,D.colorSpace),me=r.convert(D.type),Ce=w(D.internalFormat,pe,me,D.colorSpace),Ie=i.get(g),ue=i.get(D);if(ue.__renderTarget=g,!Ie.__hasExternalTextures){const ve=Math.max(1,g.width>>Y),Le=Math.max(1,g.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,Ce,ve,Le,g.depth,0,pe,me,null):t.texImage2D(Q,Y,Ce,ve,Le,0,pe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),he(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Q,ue.__webglTexture,0,M(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Q,ue.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(E,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const W=g.depthTexture,Q=W&&W.isDepthTexture?W.type:null,Y=b(g.stencilBuffer,Q),pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;he(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,M(g),Y,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,M(g),Y,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Y,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,E)}else{const W=g.textures;for(let Q=0;Q<W.length;Q++){const Y=W[Q],pe=r.convert(Y.format,Y.colorSpace),me=r.convert(Y.type),Ce=w(Y.internalFormat,pe,me,Y.colorSpace);he(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,M(g),Ce,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,M(g),Ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(E,g,D){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",L)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),xe(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ie=r.convert(g.depthTexture.format),ue=r.convert(g.depthTexture.type);let ve;g.depthTexture.format===bi?ve=n.DEPTH_COMPONENT24:g.depthTexture.format===xs&&(ve=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,ve,g.width,g.height,0,Ie,ue,null)}}else G(g.depthTexture,0);const Y=Q.__webglTexture,pe=M(g),me=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ce=g.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===bi)he(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,me,Y,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,me,Y,0);else if(g.depthTexture.format===xs)he(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,me,Y,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,me,Y,0);else throw new Error("Unknown depthTexture format")}function Fe(E){const g=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=W}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let W=0;W<6;W++)De(g.__webglFramebuffer[W],E,W);else{const W=E.texture.mipmaps;W&&W.length>0?De(g.__webglFramebuffer[0],E,0):De(g.__webglFramebuffer,E,0)}else if(D){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),He(g.__webglDepthbuffer[W],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else{const W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),He(g.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(E,g,D){const W=i.get(E);g!==void 0&&ge(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Fe(E)}function A(E){const g=E.texture,D=i.get(E),W=i.get(g);E.addEventListener("dispose",N);const Q=E.textures,Y=E.isWebGLCubeRenderTarget===!0,pe=Q.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[me]=[];for(let Ce=0;Ce<g.mipmaps.length;Ce++)D.__webglFramebuffer[me][Ce]=n.createFramebuffer()}else D.__webglFramebuffer[me]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let me=0;me<g.mipmaps.length;me++)D.__webglFramebuffer[me]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(pe)for(let me=0,Ce=Q.length;me<Ce;me++){const Ie=i.get(Q[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&he(E)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let me=0;me<Q.length;me++){const Ce=Q[me];D.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[me]);const Ie=r.convert(Ce.format,Ce.colorSpace),ue=r.convert(Ce.type),ve=w(Ce.internalFormat,Ie,ue,Ce.colorSpace,E.isXRRenderTarget===!0),Le=M(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ve,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,D.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),He(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),xe(n.TEXTURE_CUBE_MAP,g);for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)ge(D.__webglFramebuffer[me][Ce],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce);else ge(D.__webglFramebuffer[me],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let me=0,Ce=Q.length;me<Ce;me++){const Ie=Q[me],ue=i.get(Ie);let ve=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,ue.__webglTexture),xe(ve,Ie),ge(D.__webglFramebuffer,E,Ie,n.COLOR_ATTACHMENT0+me,ve,0),v(Ie)&&p(ve)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,W.__webglTexture),xe(me,g),g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)ge(D.__webglFramebuffer[Ce],E,g,n.COLOR_ATTACHMENT0,me,Ce);else ge(D.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,me,0);v(g)&&p(me),t.unbindTexture()}E.depthBuffer&&Fe(E)}function I(E){const g=E.textures;for(let D=0,W=g.length;D<W;D++){const Q=g[D];if(v(Q)){const Y=y(E),pe=i.get(Q).__webglTexture;t.bindTexture(Y,pe),p(Y),t.unbindTexture()}}}const q=[],J=[];function ie(E){if(E.samples>0){if(he(E)===!1){const g=E.textures,D=E.width,W=E.height;let Q=n.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),me=g.length>1;if(me)for(let Ie=0;Ie<g.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const Ce=E.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ie=0;Ie<g.length;Ie++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ie]);const ue=i.get(g[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,D,W,0,0,D,W,Q,n.NEAREST),l===!0&&(q.length=0,J.length=0,q.push(n.COLOR_ATTACHMENT0+Ie),E.depthBuffer&&E.resolveDepthBuffer===!1&&(q.push(Y),J.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<g.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ie]);const ue=i.get(g[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function M(E){return Math.min(s.maxSamples,E.samples)}function he(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ae(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function le(E,g){const D=E.colorSpace,W=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==xr&&D!==zi&&(ot.getTransfer(D)===pt?(W!==Ln||Q!==bn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",D)),g}function z(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=se,this.rebindTextures=it,this.setupRenderTarget=A,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iM(n,e){function t(i,s=zi){let r;const a=ot.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===Pu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ip)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Np)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lp)return n.BYTE;if(i===Dp)return n.SHORT;if(i===oa)return n.UNSIGNED_SHORT;if(i===Cu)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Up)return n.ALPHA;if(i===Fp)return n.RGB;if(i===Ln)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Op)return n.RED;if(i===Du)return n.RED_INTEGER;if(i===_r)return n.RG;if(i===Iu)return n.RG_INTEGER;if(i===Nu)return n.RGBA_INTEGER;if(i===oo||i===lo||i===co||i===uo)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vc||i===_c||i===xc||i===Sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===bc||i===Ec||i===Mc||i===Tc||i===Ac||i===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yc||i===bc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ec)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mc)return r.COMPRESSED_R11_EAC;if(i===Tc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ac)return r.COMPRESSED_RG11_EAC;if(i===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===Vc||i===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ic)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===Gc||i===Wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===zc)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xc||i===qc||i===Yc||i===$c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===la?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:sM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new Vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends br{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const m=typeof XRWebGLBinding<"u",v=new aM,p={},y=t.getContextAttributes();let w=null,b=null;const R=[],L=[],N=new mt;let x=null;const T=new Sn;T.viewport=new Rt;const C=new Sn;C.viewport=new Rt;const P=[T,C],k=new xx;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=R[te];return fe===void 0&&(fe=new xl,R[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=R[te];return fe===void 0&&(fe=new xl,R[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=R[te];return fe===void 0&&(fe=new xl,R[te]=fe),fe.getHandSpace()};function G(te){const fe=L.indexOf(te.inputSource);if(fe===-1)return;const ge=R[fe];ge!==void 0&&(ge.update(te.inputSource,te.frame,c||a),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",V);for(let te=0;te<R.length;te++){const fe=L[te];fe!==null&&(L[te]=null,R[te].disconnect(fe))}H=null,K=null,v.reset();for(const te in p)delete p[te];e.setRenderTarget(w),f=null,d=null,h=null,s=null,b=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&m&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",B),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(N),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,He=null,De=null;y.depth&&(De=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?xs:bi,He=y.stencil?la:Jn);const Fe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new $n(d.textureWidth,d.textureHeight,{format:Ln,type:bn,depthTexture:new ca(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new $n(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(te){for(let fe=0;fe<te.removed.length;fe++){const ge=te.removed[fe],He=L.indexOf(ge);He>=0&&(L[He]=null,R[He].disconnect(ge))}for(let fe=0;fe<te.added.length;fe++){const ge=te.added[fe];let He=L.indexOf(ge);if(He===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=L.length){L.push(ge),He=Fe;break}else if(L[Fe]===null){L[Fe]=ge,He=Fe;break}if(He===-1)break}const De=R[He];De&&De.connect(ge)}}const se=new ne,X=new ne;function oe(te,fe,ge){se.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const He=se.distanceTo(X),De=fe.projectionMatrix.elements,Fe=ge.projectionMatrix.elements,it=De[14]/(De[10]-1),A=De[14]/(De[10]+1),I=(De[9]+1)/De[5],q=(De[9]-1)/De[5],J=(De[8]-1)/De[0],ie=(Fe[8]+1)/Fe[0],M=it*J,he=it*ie,ae=He/(-J+ie),le=ae*-J;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(le),te.translateZ(ae),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const z=it+ae,E=A+ae,g=M-le,D=he+(He-le),W=I*A/E*z,Q=q*A/E*z;te.projectionMatrix.makePerspective(g,D,W,Q,z,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ye(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let fe=te.near,ge=te.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),k.near=C.near=T.near=fe,k.far=C.far=T.far=ge,(H!==k.near||K!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,K=k.far),k.layers.mask=te.layers.mask|6,T.layers.mask=k.layers.mask&-5,C.layers.mask=k.layers.mask&-3;const He=te.parent,De=k.cameras;ye(k,He);for(let Fe=0;Fe<De.length;Fe++)ye(De[Fe],He);De.length===2?oe(k,T,C):k.projectionMatrix.copy(T.projectionMatrix),xe(te,k,He)};function xe(te,fe,ge){ge===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Kc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(k)},this.getCameraTexture=function(te){return p[te]};let Ue=null;function tt(te,fe){if(u=fe.getViewerPose(c||a),_=fe,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let He=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let A=0;A<ge.length;A++){const I=ge[A];let q=null;if(f!==null)q=f.getViewport(I);else{const ie=h.getViewSubImage(d,I);q=ie.viewport,A===0&&(e.setRenderTargetTextures(b,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(b))}let J=P[A];J===void 0&&(J=new Sn,J.layers.enable(A),J.viewport=new Rt,P[A]=J),J.matrix.fromArray(I.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(I.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(q.x,q.y,q.width,q.height),A===0&&(k.matrix.copy(J.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(J)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){h=i.getBinding();const A=h.getDepthInformation(ge[0]);A&&A.isValid&&A.texture&&v.init(A,s.renderState)}if(De&&De.includes("camera-access")&&m){e.state.unbindTexture(),h=i.getBinding();for(let A=0;A<ge.length;A++){const I=ge[A].camera;if(I){let q=p[I];q||(q=new $p,p[I]=q);const J=h.getCameraImage(I);q.sourceTexture=J}}}}for(let ge=0;ge<R.length;ge++){const He=L[ge],De=R[ge];He!==null&&De!==void 0&&De.update(He,fe,c||a)}Ue&&Ue(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const qe=new Jp;qe.setAnimationLoop(tt),this.setAnimationLoop=function(te){Ue=te},this.dispose=function(){}}}const ds=new Ei,lM=new Pt;function cM(n,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function i(v,p){p.color.getRGB(v.fogColor.value,Kp(n)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,y,w,b){p.isMeshBasicMaterial?r(v,p):p.isMeshLambertMaterial?(r(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(v,p),h(v,p)):p.isMeshPhongMaterial?(r(v,p),u(v,p),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,b)):p.isMeshMatcapMaterial?(r(v,p),_(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),m(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(a(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?l(v,p,y,w):p.isSpriteMaterial?c(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===dn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===dn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const y=e.get(p),w=y.envMap,b=y.envMapRotation;w&&(v.envMap.value=w,ds.copy(b),ds.x*=-1,ds.y*=-1,ds.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),v.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(ds)),v.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function a(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,y,w){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*y,v.scale.value=w*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function h(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,y){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,p){p.matcap&&(v.matcap.value=p.matcap)}function m(v,p){const y=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uM(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const b=w.program;i.uniformBlockBinding(y,b)}function c(y,w){let b=s[y.id];b===void 0&&(_(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",v));const R=w.program;i.updateUBOMapping(y,R);const L=e.render.frame;r[y.id]!==L&&(d(y),r[y.id]=L)}function u(y){const w=h();y.__bindingPointIndex=w;const b=n.createBuffer(),R=y.__size,L=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=s[y.id],b=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,N=b.length;L<N;L++){const x=Array.isArray(b[L])?b[L]:[b[L]];for(let T=0,C=x.length;T<C;T++){const P=x[T];if(f(P,L,T,R)===!0){const k=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let G=0;G<H.length;G++){const B=H[G],V=m(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,k+K,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,K),K+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,w,b,R){const L=y.value,N=w+"_"+b;if(R[N]===void 0)return typeof L=="number"||typeof L=="boolean"?R[N]=L:R[N]=L.clone(),!0;{const x=R[N];if(typeof L=="number"||typeof L=="boolean"){if(x!==L)return R[N]=L,!0}else if(x.equals(L)===!1)return x.copy(L),!0}return!1}function _(y){const w=y.uniforms;let b=0;const R=16;for(let N=0,x=w.length;N<x;N++){const T=Array.isArray(w[N])?w[N]:[w[N]];for(let C=0,P=T.length;C<P;C++){const k=T[C],H=Array.isArray(k.value)?k.value:[k.value];for(let K=0,G=H.length;K<G;K++){const B=H[K],V=m(B),se=b%R,X=se%V.boundary,oe=se+X;b+=X,oe!==0&&R-oe<V.storage&&(b+=R-oe),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=V.storage}}}const L=b%R;return L>0&&(b+=R-L),y.__size=b,y.__cache={},this}function m(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",y),w}function v(y){const w=y.target;w.removeEventListener("dispose",v);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function hM(){return Vn===null&&(Vn=new rx(dM,16,16,_r,yi),Vn.name="DFG_LUT",Vn.minFilter=Zt,Vn.magFilter=Zt,Vn.wrapS=hi,Vn.wrapT=hi,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class fM{constructor(e={}){const{canvas:t=U0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const m=f,v=new Set([Nu,Iu,Du]),p=new Set([bn,Jn,oa,la,Pu,Lu]),y=new Uint32Array(4),w=new Int32Array(4);let b=null,R=null;const L=[],N=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=xn;let P=0,k=0,H=null,K=-1,G=null;const B=new Rt,V=new Rt;let se=null;const X=new xt(0);let oe=0,ye=t.width,xe=t.height,Ue=1,tt=null,qe=null;const te=new Rt(0,0,ye,xe),fe=new Rt(0,0,ye,xe);let ge=!1;const He=new qp;let De=!1,Fe=!1;const it=new Pt,A=new ne,I=new Rt,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ie(){return H===null?Ue:1}let M=i;function he(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",ft,!1),M===null){const F="webgl2";if(M=he(F,S),M===null)throw he(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ct("WebGLRenderer: "+S.message),S}let ae,le,z,E,g,D,W,Q,Y,pe,me,Ce,Ie,ue,ve,Le,Ee,be,We,O,ce,de,Ne;function Se(){ae=new fb(M),ae.init(),ce=new iM(M,ae),le=new rb(M,ae,e,ce),z=new tM(M,ae),le.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),E=new gb(M),g=new HE,D=new nM(M,ae,z,g,le,ce,E),W=new hb(T),Q=new yx(M),de=new ib(M,Q),Y=new pb(M,Q,E,de),pe=new _b(M,Y,Q,de,E),be=new vb(M,le,D),ve=new ab(g),me=new VE(T,W,ae,le,de,ve),Ce=new cM(T,g),Ie=new GE,ue=new KE(ae),Ee=new nb(T,W,z,pe,_,l),Le=new eM(T,pe,le),Ne=new uM(M,E,le,z),We=new sb(M,ae,E),O=new mb(M,ae,E),E.programs=me.programs,T.capabilities=le,T.extensions=ae,T.properties=g,T.renderLists=Ie,T.shadowMap=Le,T.state=z,T.info=E}Se(),m!==bn&&(x=new Sb(m,t.width,t.height,s,r));const re=new oM(T,M);this.xr=re,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(S){S!==void 0&&(Ue=S,this.setSize(ye,xe,!1))},this.getSize=function(S){return S.set(ye,xe)},this.setSize=function(S,F,$=!0){if(re.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=S,xe=F,t.width=Math.floor(S*Ue),t.height=Math.floor(F*Ue),$===!0&&(t.style.width=S+"px",t.style.height=F+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(ye*Ue,xe*Ue).floor()},this.setDrawingBufferSize=function(S,F,$){ye=S,xe=F,Ue=$,t.width=Math.floor(S*$),t.height=Math.floor(F*$),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(m===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,F,$,Z){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,F,$,Z),z.viewport(B.copy(te).multiplyScalar(Ue).round())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,F,$,Z){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,F,$,Z),z.scissor(V.copy(fe).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){z.setScissorTest(ge=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){qe=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,$=!0){let Z=0;if(S){let j=!1;if(H!==null){const Me=H.texture.format;j=v.has(Me)}if(j){const Me=H.texture.type,Te=p.has(Me),we=Ee.getClearColor(),Be=Ee.getClearAlpha(),ke=we.r,je=we.g,nt=we.b;Te?(y[0]=ke,y[1]=je,y[2]=nt,y[3]=Be,M.clearBufferuiv(M.COLOR,0,y)):(w[0]=ke,w[1]=je,w[2]=nt,w[3]=Be,M.clearBufferiv(M.COLOR,0,w))}else Z|=M.COLOR_BUFFER_BIT}F&&(Z|=M.DEPTH_BUFFER_BIT),$&&(Z|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&M.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Ee.dispose(),Ie.dispose(),ue.dispose(),g.dispose(),W.dispose(),pe.dispose(),de.dispose(),Ne.dispose(),me.dispose(),re.dispose(),re.removeEventListener("sessionstart",Cs),re.removeEventListener("sessionend",Ps),Un.stop()};function Oe(S){S.preventDefault(),jd("WebGLRenderer: Context Lost."),C=!0}function Ye(){jd("WebGLRenderer: Context Restored."),C=!1;const S=E.autoReset,F=Le.enabled,$=Le.autoUpdate,Z=Le.needsUpdate,j=Le.type;Se(),E.autoReset=S,Le.enabled=F,Le.autoUpdate=$,Le.needsUpdate=Z,Le.type=j}function ft(S){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function st(S){const F=S.target;F.removeEventListener("dispose",st),rn(F)}function rn(S){an(S),g.remove(S)}function an(S){const F=g.get(S).programs;F!==void 0&&(F.forEach(function($){me.releaseProgram($)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,$,Z,j,Me){F===null&&(F=q);const Te=j.isMesh&&j.matrixWorld.determinant()<0,we=xa(S,F,$,Z,j);z.setMaterial(Z,Te);let Be=$.index,ke=1;if(Z.wireframe===!0){if(Be=Y.getWireframeAttribute($),Be===void 0)return;ke=2}const je=$.drawRange,nt=$.attributes.position;let ze=je.start*ke,gt=(je.start+je.count)*ke;Me!==null&&(ze=Math.max(ze,Me.start*ke),gt=Math.min(gt,(Me.start+Me.count)*ke)),Be!==null?(ze=Math.max(ze,0),gt=Math.min(gt,Be.count)):nt!=null&&(ze=Math.max(ze,0),gt=Math.min(gt,nt.count));const Tt=gt-ze;if(Tt<0||Tt===1/0)return;de.setup(j,Z,we,$,Be);let Mt,vt=We;if(Be!==null&&(Mt=Q.get(Be),vt=O,vt.setIndex(Mt)),j.isMesh)Z.wireframe===!0?(z.setLineWidth(Z.wireframeLinewidth*ie()),vt.setMode(M.LINES)):vt.setMode(M.TRIANGLES);else if(j.isLine){let Ht=Z.linewidth;Ht===void 0&&(Ht=1),z.setLineWidth(Ht*ie()),j.isLineSegments?vt.setMode(M.LINES):j.isLineLoop?vt.setMode(M.LINE_LOOP):vt.setMode(M.LINE_STRIP)}else j.isPoints?vt.setMode(M.POINTS):j.isSprite&&vt.setMode(M.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ro("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ht=j._multiDrawStarts,Ve=j._multiDrawCounts,hn=j._multiDrawCount,lt=Be?Q.get(Be).bytesPerElement:1,Mn=g.get(Z).currentProgram.getUniforms();for(let Fn=0;Fn<hn;Fn++)Mn.setValue(M,"_gl_DrawID",Fn),vt.render(Ht[Fn]/lt,Ve[Fn])}else if(j.isInstancedMesh)vt.renderInstances(ze,Tt,j.count);else if($.isInstancedBufferGeometry){const Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ve=Math.min($.instanceCount,Ht);vt.renderInstances(ze,Tt,Ve)}else vt.render(ze,Tt)};function ji(S,F,$){S.transparent===!0&&S.side===di&&S.forceSinglePass===!1?(S.side=dn,S.needsUpdate=!0,Qi(S,F,$),S.side=Ki,S.needsUpdate=!0,Qi(S,F,$),S.side=di):Qi(S,F,$)}this.compile=function(S,F,$=null){$===null&&($=S),R=ue.get($),R.init(F),N.push(R),$.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),S!==$&&S.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),R.setupLights();const Z=new Set;return S.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const we=Me[Te];ji(we,$,j),Z.add(we)}else ji(Me,$,j),Z.add(Me)}),R=N.pop(),Z},this.compileAsync=function(S,F,$=null){const Z=this.compile(S,F,$);return new Promise(j=>{function Me(){if(Z.forEach(function(Te){g.get(Te).currentProgram.isReady()&&Z.delete(Te)}),Z.size===0){j(S);return}setTimeout(Me,10)}ae.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let wi=null;function Rs(S){wi&&wi(S)}function Cs(){Un.stop()}function Ps(){Un.start()}const Un=new Jp;Un.setAnimationLoop(Rs),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){wi=S,re.setAnimationLoop(S),S===null?Un.stop():Un.start()},re.addEventListener("sessionstart",Cs),re.addEventListener("sessionend",Ps),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const $=re.enabled===!0&&re.isPresenting===!0,Z=x!==null&&(H===null||$)&&x.begin(T,H);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,F,H),R=ue.get(S,N.length),R.init(F),N.push(R),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),He.setFromProjectionMatrix(it,qn,F.reversedDepth),Fe=this.localClippingEnabled,De=ve.init(this.clippingPlanes,Fe),b=Ie.get(S,L.length),b.init(),L.push(b),re.enabled===!0&&re.isPresenting===!0){const Te=T.xr.getDepthSensingMesh();Te!==null&&Zi(Te,F,-1/0,T.sortObjects)}Zi(S,F,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(tt,qe),J=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,J&&Ee.addToRenderList(b,S),this.info.render.frame++,De===!0&&ve.beginShadows();const j=R.state.shadowsArray;if(Le.render(j,S,F),De===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&x.hasRenderPass())===!1){const Te=b.opaque,we=b.transmissive;if(R.setupLights(),F.isArrayCamera){const Be=F.cameras;if(we.length>0)for(let ke=0,je=Be.length;ke<je;ke++){const nt=Be[ke];wr(Te,we,S,nt)}J&&Ee.render(S);for(let ke=0,je=Be.length;ke<je;ke++){const nt=Be[ke];Ar(b,S,nt,nt.viewport)}}else we.length>0&&wr(Te,we,S,F),J&&Ee.render(S),Ar(b,S,F)}H!==null&&k===0&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),Z&&x.end(T),S.isScene===!0&&S.onAfterRender(T,S,F),de.resetDefaultState(),K=-1,G=null,N.pop(),N.length>0?(R=N[N.length-1],De===!0&&ve.setGlobalState(T.clippingPlanes,R.state.camera)):R=null,L.pop(),L.length>0?b=L[L.length-1]:b=null};function Zi(S,F,$,Z){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||He.intersectsSprite(S)){Z&&I.setFromMatrixPosition(S.matrixWorld).applyMatrix4(it);const Te=pe.update(S),we=S.material;we.visible&&b.push(S,Te,we,$,I.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||He.intersectsObject(S))){const Te=pe.update(S),we=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),I.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),I.copy(Te.boundingSphere.center)),I.applyMatrix4(S.matrixWorld).applyMatrix4(it)),Array.isArray(we)){const Be=Te.groups;for(let ke=0,je=Be.length;ke<je;ke++){const nt=Be[ke],ze=we[nt.materialIndex];ze&&ze.visible&&b.push(S,Te,ze,$,I.z,nt)}}else we.visible&&b.push(S,Te,we,$,I.z,null)}}const Me=S.children;for(let Te=0,we=Me.length;Te<we;Te++)Zi(Me[Te],F,$,Z)}function Ar(S,F,$,Z){const{opaque:j,transmissive:Me,transparent:Te}=S;R.setupLightsView($),De===!0&&ve.setGlobalState(T.clippingPlanes,$),Z&&z.viewport(B.copy(Z)),j.length>0&&Ji(j,F,$),Me.length>0&&Ji(Me,F,$),Te.length>0&&Ji(Te,F,$),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function wr(S,F,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Z.id]===void 0){const ze=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Z.id]=new $n(1,1,{generateMipmaps:!0,type:ze?yi:bn,minFilter:_s,samples:le.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Me=R.state.transmissionRenderTarget[Z.id],Te=Z.viewport||B;Me.setSize(Te.z*T.transmissionResolutionScale,Te.w*T.transmissionResolutionScale);const we=T.getRenderTarget(),Be=T.getActiveCubeFace(),ke=T.getActiveMipmapLevel();T.setRenderTarget(Me),T.getClearColor(X),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),J&&Ee.render($);const je=T.toneMapping;T.toneMapping=Yn;const nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),R.setupLightsView(Z),De===!0&&ve.setGlobalState(T.clippingPlanes,Z),Ji(S,$,Z),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let gt=0,Tt=F.length;gt<Tt;gt++){const Mt=F[gt],{object:vt,geometry:Ht,material:Ve,group:hn}=Mt;if(Ve.side===di&&vt.layers.test(Z.layers)){const lt=Ve.side;Ve.side=dn,Ve.needsUpdate=!0,Rr(vt,$,Z,Ht,Ve,hn),Ve.side=lt,Ve.needsUpdate=!0,ze=!0}}ze===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}T.setRenderTarget(we,Be,ke),T.setClearColor(X,oe),nt!==void 0&&(Z.viewport=nt),T.toneMapping=je}function Ji(S,F,$){const Z=F.isScene===!0?F.overrideMaterial:null;for(let j=0,Me=S.length;j<Me;j++){const Te=S[j],{object:we,geometry:Be,group:ke}=Te;let je=Te.material;je.allowOverride===!0&&Z!==null&&(je=Z),we.layers.test($.layers)&&Rr(we,F,$,Be,je,ke)}}function Rr(S,F,$,Z,j,Me){S.onBeforeRender(T,F,$,Z,j,Me),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(T,F,$,Z,S,Me),j.transparent===!0&&j.side===di&&j.forceSinglePass===!1?(j.side=dn,j.needsUpdate=!0,T.renderBufferDirect($,F,Z,j,S,Me),j.side=Ki,j.needsUpdate=!0,T.renderBufferDirect($,F,Z,j,S,Me),j.side=di):T.renderBufferDirect($,F,Z,j,S,Me),S.onAfterRender(T,F,$,Z,j,Me)}function Qi(S,F,$){F.isScene!==!0&&(F=q);const Z=g.get(S),j=R.state.lights,Me=R.state.shadowsArray,Te=j.state.version,we=me.getParameters(S,j.state,Me,F,$),Be=me.getProgramCacheKey(we);let ke=Z.programs;Z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,Z.fog=F.fog;const je=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Z.envMap=W.get(S.envMap||Z.environment,je),Z.envMapRotation=Z.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",st),ke=new Map,Z.programs=ke);let nt=ke.get(Be);if(nt!==void 0){if(Z.currentProgram===nt&&Z.lightsStateVersion===Te)return _a(S,we),nt}else we.uniforms=me.getUniforms(S),S.onBeforeCompile(we,T),nt=me.acquireProgram(we,Be),ke.set(Be,nt),Z.uniforms=we.uniforms;const ze=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=ve.uniform),_a(S,we),Z.needsLights=ee(S),Z.lightsStateVersion=Te,Z.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.currentProgram=nt,Z.uniformsList=null,nt}function es(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ho.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function _a(S,F){const $=g.get(S);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function xa(S,F,$,Z,j){F.isScene!==!0&&(F=q),D.resetTextureUnits();const Me=F.fog,Te=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?F.environment:null,we=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xr,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ke=W.get(Z.envMap||Te,Be),je=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!$.morphAttributes.position,gt=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color;let Mt=Yn;Z.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Mt=T.toneMapping);const vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ht=vt!==void 0?vt.length:0,Ve=g.get(Z),hn=R.state.lights;if(De===!0&&(Fe===!0||S!==G)){const Ut=S===G&&Z.id===K;ve.setState(Z,S,Ut)}let lt=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==hn.state.version||Ve.outputColorSpace!==we||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isBatchedMesh&&Ve.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ve.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==ke||Z.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ve.numPlanes||Ve.numIntersection!==ve.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==nt||Ve.morphTargets!==ze||Ve.morphNormals!==gt||Ve.morphColors!==Tt||Ve.toneMapping!==Mt||Ve.morphTargetsCount!==Ht)&&(lt=!0):(lt=!0,Ve.__version=Z.version);let Mn=Ve.currentProgram;lt===!0&&(Mn=Qi(Z,F,j));let Fn=!1,ts=!1,Ls=!1;const St=Mn.getUniforms(),Bt=Ve.uniforms;if(z.useProgram(Mn.program)&&(Fn=!0,ts=!0,Ls=!0),Z.id!==K&&(K=Z.id,ts=!0),Fn||G!==S){z.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),St.setValue(M,"projectionMatrix",S.projectionMatrix),St.setValue(M,"viewMatrix",S.matrixWorldInverse);const Ci=St.map.cameraPosition;Ci!==void 0&&Ci.setValue(M,A.setFromMatrixPosition(S.matrixWorld)),le.logarithmicDepthBuffer&&St.setValue(M,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(M,"isOrthographic",S.isOrthographicCamera===!0),G!==S&&(G=S,ts=!0,Ls=!0)}if(Ve.needsLights&&(hn.state.directionalShadowMap.length>0&&St.setValue(M,"directionalShadowMap",hn.state.directionalShadowMap,D),hn.state.spotShadowMap.length>0&&St.setValue(M,"spotShadowMap",hn.state.spotShadowMap,D),hn.state.pointShadowMap.length>0&&St.setValue(M,"pointShadowMap",hn.state.pointShadowMap,D)),j.isSkinnedMesh){St.setOptional(M,j,"bindMatrix"),St.setOptional(M,j,"bindMatrixInverse");const Ut=j.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),St.setValue(M,"boneTexture",Ut.boneTexture,D))}j.isBatchedMesh&&(St.setOptional(M,j,"batchingTexture"),St.setValue(M,"batchingTexture",j._matricesTexture,D),St.setOptional(M,j,"batchingIdTexture"),St.setValue(M,"batchingIdTexture",j._indirectTexture,D),St.setOptional(M,j,"batchingColorTexture"),j._colorsTexture!==null&&St.setValue(M,"batchingColorTexture",j._colorsTexture,D));const Ri=$.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&be.update(j,$,Mn),(ts||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,St.setValue(M,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&F.environment!==null&&(Bt.envMapIntensity.value=F.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=hM()),ts&&(St.setValue(M,"toneMappingExposure",T.toneMappingExposure),Ve.needsLights&&U(Bt,Ls),Me&&Z.fog===!0&&Ce.refreshFogUniforms(Bt,Me),Ce.refreshMaterialUniforms(Bt,Z,Ue,xe,R.state.transmissionRenderTarget[S.id]),ho.upload(M,es(Ve),Bt,D)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ho.upload(M,es(Ve),Bt,D),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(M,"center",j.center),St.setValue(M,"modelViewMatrix",j.modelViewMatrix),St.setValue(M,"normalMatrix",j.normalMatrix),St.setValue(M,"modelMatrix",j.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ut=Z.uniformsGroups;for(let Ci=0,Ds=Ut.length;Ci<Ds;Ci++){const ku=Ut[Ci];Ne.update(ku,Mn),Ne.bind(ku,Mn)}}return Mn}function U(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function ee(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(S,F,$){const Z=g.get(S);Z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),g.get(S.texture).__webglTexture=F,g.get(S.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const $=g.get(S);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const _e=M.createFramebuffer();this.setRenderTarget=function(S,F=0,$=0){H=S,P=F,k=$;let Z=null,j=!1,Me=!1;if(S){const we=g.get(S);if(we.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(M.FRAMEBUFFER,we.__webglFramebuffer),B.copy(S.viewport),V.copy(S.scissor),se=S.scissorTest,z.viewport(B),z.scissor(V),z.setScissorTest(se),K=-1;return}else if(we.__webglFramebuffer===void 0)D.setupRenderTarget(S);else if(we.__hasExternalTextures)D.rebindTextures(S,g.get(S.texture).__webglTexture,g.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const je=S.depthTexture;if(we.__boundDepthTexture!==je){if(je!==null&&g.has(je)&&(S.width!==je.image.width||S.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(S)}}const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const ke=g.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?Z=ke[F][$]:Z=ke[F],j=!0):S.samples>0&&D.useMultisampledRTT(S)===!1?Z=g.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[$]:Z=ke,B.copy(S.viewport),V.copy(S.scissor),se=S.scissorTest}else B.copy(te).multiplyScalar(Ue).floor(),V.copy(fe).multiplyScalar(Ue).floor(),se=ge;if($!==0&&(Z=_e),z.bindFramebuffer(M.FRAMEBUFFER,Z)&&z.drawBuffers(S,Z),z.viewport(B),z.scissor(V),z.setScissorTest(se),j){const we=g.get(S.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,$)}else if(Me){const we=F;for(let Be=0;Be<S.textures.length;Be++){const ke=g.get(S.textures[Be]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Be,ke.__webglTexture,$,we)}}else if(S!==null&&$!==0){const we=g.get(S.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,we.__webglTexture,$)}K=-1},this.readRenderTargetPixels=function(S,F,$,Z,j,Me,Te,we=0){if(!(S&&S.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Be=Be[Te]),Be){z.bindFramebuffer(M.FRAMEBUFFER,Be);try{const ke=S.textures[we],je=ke.format,nt=ke.type;if(S.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+we),!le.textureFormatReadable(je)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(nt)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-Z&&$>=0&&$<=S.height-j&&M.readPixels(F,$,Z,j,ce.convert(je),ce.convert(nt),Me)}finally{const ke=H!==null?g.get(H).__webglFramebuffer:null;z.bindFramebuffer(M.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,F,$,Z,j,Me,Te,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Be=Be[Te]),Be)if(F>=0&&F<=S.width-Z&&$>=0&&$<=S.height-j){z.bindFramebuffer(M.FRAMEBUFFER,Be);const ke=S.textures[we],je=ke.format,nt=ke.type;if(S.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+we),!le.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,ze),M.bufferData(M.PIXEL_PACK_BUFFER,Me.byteLength,M.STREAM_READ),M.readPixels(F,$,Z,j,ce.convert(je),ce.convert(nt),0);const gt=H!==null?g.get(H).__webglFramebuffer:null;z.bindFramebuffer(M.FRAMEBUFFER,gt);const Tt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await F0(M,Tt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,ze),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Me),M.deleteBuffer(ze),M.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,$=0){const Z=Math.pow(2,-$),j=Math.floor(S.image.width*Z),Me=Math.floor(S.image.height*Z),Te=F!==null?F.x:0,we=F!==null?F.y:0;D.setTexture2D(S,0),M.copyTexSubImage2D(M.TEXTURE_2D,$,0,0,Te,we,j,Me),z.unbindTexture()};const Ae=M.createFramebuffer(),Re=M.createFramebuffer();this.copyTextureToTexture=function(S,F,$=null,Z=null,j=0,Me=0){let Te,we,Be,ke,je,nt,ze,gt,Tt;const Mt=S.isCompressedTexture?S.mipmaps[Me]:S.image;if($!==null)Te=$.max.x-$.min.x,we=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,je=$.min.y,nt=$.isBox3?$.min.z:0;else{const Bt=Math.pow(2,-j);Te=Math.floor(Mt.width*Bt),we=Math.floor(Mt.height*Bt),S.isDataArrayTexture?Be=Mt.depth:S.isData3DTexture?Be=Math.floor(Mt.depth*Bt):Be=1,ke=0,je=0,nt=0}Z!==null?(ze=Z.x,gt=Z.y,Tt=Z.z):(ze=0,gt=0,Tt=0);const vt=ce.convert(F.format),Ht=ce.convert(F.type);let Ve;F.isData3DTexture?(D.setTexture3D(F,0),Ve=M.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(D.setTexture2DArray(F,0),Ve=M.TEXTURE_2D_ARRAY):(D.setTexture2D(F,0),Ve=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,F.unpackAlignment);const hn=M.getParameter(M.UNPACK_ROW_LENGTH),lt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(M.UNPACK_SKIP_PIXELS),Fn=M.getParameter(M.UNPACK_SKIP_ROWS),ts=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Mt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Mt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ke),M.pixelStorei(M.UNPACK_SKIP_ROWS,je),M.pixelStorei(M.UNPACK_SKIP_IMAGES,nt);const Ls=S.isDataArrayTexture||S.isData3DTexture,St=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Bt=g.get(S),Ri=g.get(F),Ut=g.get(Bt.__renderTarget),Ci=g.get(Ri.__renderTarget);z.bindFramebuffer(M.READ_FRAMEBUFFER,Ut.__webglFramebuffer),z.bindFramebuffer(M.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ds=0;Ds<Be;Ds++)Ls&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,g.get(S).__webglTexture,j,nt+Ds),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,g.get(F).__webglTexture,Me,Tt+Ds)),M.blitFramebuffer(ke,je,Te,we,ze,gt,Te,we,M.DEPTH_BUFFER_BIT,M.NEAREST);z.bindFramebuffer(M.READ_FRAMEBUFFER,null),z.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(j!==0||S.isRenderTargetTexture||g.has(S)){const Bt=g.get(S),Ri=g.get(F);z.bindFramebuffer(M.READ_FRAMEBUFFER,Ae),z.bindFramebuffer(M.DRAW_FRAMEBUFFER,Re);for(let Ut=0;Ut<Be;Ut++)Ls?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Bt.__webglTexture,j,nt+Ut):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Bt.__webglTexture,j),St?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ri.__webglTexture,Me,Tt+Ut):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ri.__webglTexture,Me),j!==0?M.blitFramebuffer(ke,je,Te,we,ze,gt,Te,we,M.COLOR_BUFFER_BIT,M.NEAREST):St?M.copyTexSubImage3D(Ve,Me,ze,gt,Tt+Ut,ke,je,Te,we):M.copyTexSubImage2D(Ve,Me,ze,gt,ke,je,Te,we);z.bindFramebuffer(M.READ_FRAMEBUFFER,null),z.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else St?S.isDataTexture||S.isData3DTexture?M.texSubImage3D(Ve,Me,ze,gt,Tt,Te,we,Be,vt,Ht,Mt.data):F.isCompressedArrayTexture?M.compressedTexSubImage3D(Ve,Me,ze,gt,Tt,Te,we,Be,vt,Mt.data):M.texSubImage3D(Ve,Me,ze,gt,Tt,Te,we,Be,vt,Ht,Mt):S.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Me,ze,gt,Te,we,vt,Ht,Mt.data):S.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Me,ze,gt,Mt.width,Mt.height,vt,Mt.data):M.texSubImage2D(M.TEXTURE_2D,Me,ze,gt,Te,we,vt,Ht,Mt);M.pixelStorei(M.UNPACK_ROW_LENGTH,hn),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,lt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(M.UNPACK_SKIP_ROWS,Fn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ts),Me===0&&F.generateMipmaps&&M.generateMipmap(Ve),z.unbindTexture()},this.initRenderTarget=function(S){g.get(S).__webglFramebuffer===void 0&&D.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?D.setTextureCube(S,0):S.isData3DTexture?D.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?D.setTexture2DArray(S,0):D.setTexture2D(S,0),z.unbindTexture()},this.resetState=function(){P=0,k=0,H=null,z.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const pM={__name:"SlideThreeJs",setup(n,{expose:e}){const t=dg(null);let i,s,r,a,o;function l(){if(!t.value)return;const d=t.value.clientWidth,f=t.value.clientHeight;s.aspect=d/f,s.updateProjectionMatrix(),r.setSize(d,f,!1)}function c(){if(!t.value)return;const d=t.value.getBoundingClientRect();i=new J0,s=new Sn(75,d.width/d.height,.1,1e3),s.position.z=3,r=new fM({antialias:!0,alpha:!0}),t.value.appendChild(r.domElement),r.domElement.style.width="100%",r.domElement.style.height="100%",r.domElement.style.display="block",l();const f=new Mr,_=new mx;a=new Qn(f,_),i.add(a);function m(){o=requestAnimationFrame(m),a.rotation.x+=.01,a.rotation.y+=.01,r.render(i,s)}m(),window.addEventListener("resize",h)}function u(){cancelAnimationFrame(o),r&&(r.dispose(),r.forceContextLoss(),r.domElement.remove()),i=s=r=a=o=null,window.removeEventListener("resize",h)}function h(){if(!t.value||!r||!s)return;const d=t.value.getBoundingClientRect();r.setSize(d.width,d.height,!1),s.aspect=d.width/d.height,s.updateProjectionMatrix()}return e({start:c,stop:u}),Af(()=>u()),(d,f)=>(ys(),fa("div",{ref_key:"container",ref:t,class:"three-container"},null,512))}},sm=wu(pM,[["__scopeId","data-v-8862aa16"]]);const mM={class:"svg-center"},gM={__name:"SlideTyping",props:{svgFile:String},setup(n){const e=ff(null),t=n;let i=null;async function s(r){const a=await ep(Object.assign({"../assets/svg/handwriting.svg":()=>yo(()=>import("./handwriting-beb43d1f.js"),[]),"../assets/svg/typing.svg":()=>yo(()=>import("./typing-392b03c1.js"),[])}),`../assets/svg/${r}.svg`);e.value=a.default}return qr(()=>t.svgFile,r=>{r&&s(r)},{immediate:!0}),No(async()=>{await na(),$t&&(i=async r=>{const a=document.getElementById(t.svgFile);r.currentSlide.contains(a)&&(await na(),yp(),j_(t.svgFile))},$t.on("slidechanged",i))}),(r,a)=>(ys(),fa("div",mM,[(ys(),$f(Cf(e.value),{id:n.svgFile},null,8,["id"]))]))}},vM=wu(gM,[["__scopeId","data-v-aac96f87"]]);let Gi=null,gs=null;$t.initialize({hash:!1,progress:!0,controls:!1,slideNumber:!1,backgroundTransition:"none",transition:"none"});yr(e0,{text:"Hello from..."}).mount("#vue-slide-intro");yr(t0,{}).mount("#vue-slide-anime");yr(Q_,{svgFile:"handwriting"}).mount("#vue-slide-handwriting");yr(vM,{svgFile:"typing"}).mount("#vue-slide-typing");$t.on("ready",n=>{const t=n.currentSlide.querySelector("#vue-slide-threejs");t&&!Gi&&(Gi=yr(sm),gs=Gi.mount(t),gs.start())});$t.on("slidechanged",n=>{var i;((i=n.previousSlide)==null?void 0:i.querySelector("#vue-slide-threejs"))&&gs&&(gs.stop(),Gi.unmount(),Gi=null,gs=null);const t=n.currentSlide.querySelector("#vue-slide-threejs");t&&!Gi&&(Gi=yr(sm),gs=Gi.mount(t),gs.start())});export{fi as a,vv as b,fa as c,xo as d,ys as o,SM as r,bg as w};
