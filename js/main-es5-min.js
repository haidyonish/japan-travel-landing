!function(){let e=document.querySelector(".header"),t=document.querySelector(".header__wrapper");window.onscroll=()=>{window.pageYOffset>5?(e.classList.add("header_active"),t.classList.add("header__wrapper_active")):(e.classList.remove("header_active"),t.classList.remove("header__wrapper_active"))}}(),(function(){let e=document.querySelector(".header__burger"),t=document.querySelector(".header__nav__cross"),r=document.querySelector(".header__nav"),a=document.querySelectorAll(".header__nav__link");if(e.addEventListener("click",()=>{r.classList.add("header__nav_active")}),t.addEventListener("click",()=>{r.classList.remove("header__nav_active")}),window.innerWidth<=767)for(let l=0;l<a.length;l+=1)a[l].addEventListener("click",()=>{r.classList.remove("header__nav_active")})})()(function(){let e=function(e,t){let r=document.querySelector(".header").clientHeight,a=document.querySelector(e).getBoundingClientRect().top-r,l=window.pageYOffset,c=null,i=function(e){var r,n,s,d;null===c&&(c=e);let o=e-c,v=(r=o,n=l,s=a,d=t,(r/=d/2)<1?s/2*r*r+n:-s/2*(--r*(r-2)-1)+n);window.scrollTo(0,v),o<t&&requestAnimationFrame(i)};requestAnimationFrame(i)};!function(){let t=document.querySelectorAll(".js-scroll");t.forEach(t=>{t.addEventListener("click",function(){let t=this.getAttribute("href");e(t,1e3)})})}()}());