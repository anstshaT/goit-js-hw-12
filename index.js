import{a as k,i as c,S as C}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function f(t,e,s){const i=t.map(({webformatURL:o,largeImageURL:r,tags:l,likes:q,views:M,comments:x,downloads:H})=>`
            <li class="gallery-items">
                <a class="gallery-link" href="${r}">
                    <img
                        class="gallery-image"
                        src="${o}"
                        alt="${l}"
                    />
                </a>
                <div class="info">
                    <div class="info-item">
                        <h3>Likes</h3>
                        <p>${q}</p>
                    </div>

                    <div class="info-item">
                        <h3>Views</h3>
                        <p>${M}</p>
                    </div>

                    <div class="info-item">
                        <h3>Comments</h3>
                        <p>${x}</p>
                    </div>

                    <div class="info-item">
                        <h3>Downloads</h3>
                        <p>${H}</p>
                    </div>
                </div>
            </li>
        `).join("");return e.insertAdjacentHTML("beforeend",i),s.refresh(),i}async function y(t,e,s){try{const i=await k.get("https://pixabay.com/api/",{params:{key:"47628462-4a8006828a6d084475c3078e6",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:s}});return console.log(i.data),i.data}catch(i){console.log(i.message)}}const L=document.querySelector(".search-form"),v=L.querySelector("#searchInput"),a=document.querySelector(".gallery"),b=document.querySelector(".loader"),w=document.querySelector(".loader-two"),n=document.querySelector(".btn");let d=1,h=15,m="";function P(){b.classList.add("active")}function g(){b.classList.remove("active")}function $(){w.classList.add("active")}function p(){w.classList.remove("active")}n.addEventListener("click",z);L.addEventListener("submit",async t=>{t.preventDefault(),P();const e=v.value.trim();if(a.innerHTML="",e===""){console.log("Input is empty"),c.info({message:"Input is empty",messageSize:"16px",position:"topRight"}),g();return}e!==m&&(m=e,d=1,a.innerHTML="",n.classList.add("disable"));try{const s=await y(m,d,h);if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),a.innerHTML="",t.target.reset();return}f(s.hits,a,u),S(s.totalHits)}catch(s){console.log(s.message),c.error({message:s.message,theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),g()}finally{g()}});let u=new C(".gallery .gallery-link",{captionsData:"alt",captionsDelay:250});u.on("show.simplelightbox",function(){});u.on("error.simplelightbox",function(t){console.log(t)});async function z(){d+=1;const t=v.value.trim();n.classList.add("disable"),$();try{const e=await y(t,d,h);a.insertAdjacentHTML("beforeend",f(e.hits,a,u)),console.log(e.hits),S(e.totalHits),O()}catch(e){console.log(e.message),c.error({message:e.message,theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),p()}finally{p(),n.classList.remove("disable")}}function O(){const t=document.querySelector(".gallery-items");if(console.log(t),t){const e=t.getBoundingClientRect().height,s=e*3.5;console.log(e),console.log(s),window.scrollBy({top:s,left:0,behavior:"smooth"})}}function S(t){if(t<=h*d)return n.classList.add("disable"),c.info({title:"We're sorry,",message:"but you've reached the end of search results.",position:"topRight"});n.classList.remove("disable")}
//# sourceMappingURL=index.js.map
