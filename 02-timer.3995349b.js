function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},e.parcelRequired7c6=r);var a=r("fbklV"),s=r("7Y9D8");a=r("fbklV");const i=document.querySelector("button[data-start]"),d=document.querySelector("span[data-days]"),u=document.querySelector("span[data-hours]"),l=document.querySelector("span[data-minutes]"),c=document.querySelector("span[data-seconds]");i.classList.add("button--inactive"),i.addEventListener("click",(function(){const e=setInterval((()=>{const n=new Date,o=function(t){const e=1e3,n=60*e,o=60*n,r=24*o,a=Math.floor(t/r),s=Math.floor(t%r/o),i=Math.floor(t%r%o/n),d=Math.floor(t%r%o%n/e);return{days:a,hours:s,minutes:i,seconds:d}}(p-n);o.seconds>=0?(d.textContent=o.days.toString().padStart(2,"0"),u.textContent=o.hours.toString().padStart(2,"0"),l.textContent=o.minutes.toString().padStart(2,"0"),c.textContent=o.seconds.toString().padStart(2,"0")):(clearInterval(e),t(s).Notify.success("Congratulation! Time is ower."))}),1e3)}));const f=new Date;let p;a('input[type="text"]',{enableTime:!0,time_24hr:!0,defaultDate:f,minuteIncrement:1,onClose(e){p=e[0],f>p?t(s).Notify.failure("Please choose a date in the future"):i.classList.remove("button--inactive")}});
//# sourceMappingURL=02-timer.3995349b.js.map
