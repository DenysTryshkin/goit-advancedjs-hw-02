import"./assets/styles-bRFQ6uDp.js";import{f as b,i as p}from"./assets/vendor-BsWh0j-M.js";import{a as C}from"./assets/refs-Bb3iQBAc.js";const{input:r,days:s,hours:i,minutes:a,seconds:u,btnStart:n}=C;let d=null,c=null;b(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<new Date?(p.error({message:"Please choose a date in the future",position:"topRight"}),n.setAttribute("disabled","true")):(d=e,n.removeAttribute("disabled"))}});n.addEventListener("click",()=>{v()});function v(){c=setInterval(()=>{const t=d-Date.now();if(n.setAttribute("disabled",""),r.setAttribute("disabled",""),t<0){r.removeAttribute("disabled"),n.removeAttribute("disabled"),x();return}const e=y(t);s.textContent=o(e.days),i.textContent=o(e.hours),a.textContent=o(e.minutes),u.textContent=o(e.seconds)},1e3)}function x(){clearInterval(c),s.textContent="00",i.textContent="00",a.textContent="00",u.textContent="00"}function o(t){return String(t).padStart(2,"0")}function y(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=1-timer.js.map
