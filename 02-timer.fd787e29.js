function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("fbklV"),s=r("7Y9D8");a=r("fbklV");document.querySelector("#datetime-picker");const i=document.querySelector("button[data-start]"),d=document.querySelector("span[data-days]"),u=document.querySelector("span[data-hours]"),l=document.querySelector("span[data-minutes]"),c=document.querySelector("span[data-seconds]");i.classList.add("button--inactive"),i.addEventListener("click",(function(){const t=setInterval((()=>{const n=new Date,o=function(e){const t=1e3,n=60*t,o=60*n,r=24*o,a=Math.floor(e/r),s=Math.floor(e%r/o),i=Math.floor(e%r%o/n),d=Math.floor(e%r%o%n/t);return{days:a,hours:s,minutes:i,seconds:d}}(p-n);o.seconds>=0?(d.textContent=o.days.toString().padStart(2,"0"),u.textContent=o.hours.toString().padStart(2,"0"),l.textContent=o.minutes.toString().padStart(2,"0"),c.textContent=o.seconds.toString().padStart(2,"0")):(clearInterval(t),e(s).Notify.success("Congratulation! Time is ower."))}),1e3)}));const f=new Date;let p;a("input",{enableTime:!0,time_24hr:!0,defaultDate:f,minuteIncrement:1,onClose(t){p=t[0],f>p?e(s).Notify.failure("Please choose a date in the future"):i.classList.remove("button--inactive")}});
//# sourceMappingURL=02-timer.fd787e29.js.map
