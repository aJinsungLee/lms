!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=90)}({90:function(e,t,o){e.exports=o(91)},91:function(e,t,o){"use strict";o(92),o(93),o(94),o(95),o(96)},92:function(e,t){!function(){"use strict";domFactory.handler.autoInit(),$('[data-toggle="tooltip"]').tooltip()}()},93:function(e,t){!function(){"use strict";document.querySelectorAll("[data-perfect-scrollbar]").forEach(e=>{const t=new PerfectScrollbar(e,{wheelPropagation:!1,swipeEasing:!1});Object.defineProperty(e,"PerfectScrollbar",{configurable:!0,writable:!1,value:t})})}()},94:function(e,t){!function(){"use strict";window.addEventListener("load",function(){$(".preloader").fadeOut(),domFactory.handler.upgradeAll()})}()},95:function(e,t){!function(){"use strict"}()},96:function(e,t){!function(){"use strict";var e=document.querySelectorAll('[data-toggle="sidebar"]');(e=Array.prototype.slice.call(e)).forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-target")||"#default-drawer",o=document.querySelector(t);o&&o.mdkDrawer.toggle()})}),$(".sidebar .collapse").on("show.bs.collapse",function(e){$(this).closest(".sidebar-menu").find(".open").find(".collapse").collapse("hide"),$(this).closest("li").addClass("open")}),$(".sidebar .collapse").on("hidden.bs.collapse",function(e){$(this).closest("li").removeClass("open")}),$(".sidebar .collapse").on("show.bs.collapse hide.bs.collapse shown.bs.collapse hidden.bs.collapse",function(){const e=$(this).closest("[data-perfect-scrollbar]").get(0);e&&void 0!==e.PerfectScrollbar&&e.PerfectScrollbar.update()})}()}});