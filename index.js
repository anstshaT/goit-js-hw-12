import{a as M,i as h,S as H}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function f(o,e,s){const i=o.map(({webformatURL:t,largeImageURL:r,tags:n,likes:b,views:w,comments:S,downloads:q})=>`
            <li class="gallery-items">
                <a class="gallery-link" href="${r}">
                    <img
                        class="gallery-image"
                        src="${t}"
                        alt="${n}"
                    />
                </a>
                <div class="info">
                    <div class="info-item">
                        <h3>Likes</h3>
                        <p>${b}</p>
                    </div>

                    <div class="info-item">
                        <h3>Views</h3>
                        <p>${w}</p>
                    </div>

                    <div class="info-item">
                        <h3>Comments</h3>
                        <p>${S}</p>
                    </div>

                    <div class="info-item">
                        <h3>Downloads</h3>
                        <p>${q}</p>
                    </div>
                </div>
            </li>
        `).join("");e.insertAdjacentHTML("beforeend",i),s.refresh()}async function g(o,e,s){try{const i=await M.get("https://pixabay.com/api/",{params:{key:"47628462-4a8006828a6d084475c3078e6",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:s}});return console.log(i.data),i.data}catch(i){console.log(i.message)}}const p=document.querySelector(".search-form"),y=p.querySelector("#searchInput"),l=document.querySelector(".gallery"),v=document.querySelector(".loader"),L=document.querySelector(".loader-two"),c=document.querySelector(".btn");let a=1,m=15,u="";function P(){v.classList.add("active")}function $(){v.classList.remove("active")}function x(){L.classList.add("active")}function O(){L.classList.remove("active")}c.addEventListener("click",B);p.addEventListener("submit",async o=>{o.preventDefault(),P();const e=y.value.trim();if(e===""){console.log("Input is empty");return}e!==u&&(u=e,a=1,l.innerHTML="",c.classList.add("disable"));try{const s=await g(u,a,m);if(s.hits.length===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"});return}f(s.hits,l,d),c.classList.remove("disable")}catch(s){console.log(s.message)}finally{$()}});let d=new H(".gallery .gallery-link",{captionsData:"alt",captionsDelay:250});d.on("show.simplelightbox",function(){});d.on("error.simplelightbox",function(o){console.log(o)});async function B(){a+=1;const o=y.value.trim();c.classList.add("disable"),x();try{const e=await g(o,a,m);if(l.insertAdjacentHTML("beforeend",f(e.hits,l,d)),console.log(e.hits),e.totalHits/m<a)return h.info({title:"We're sorry,",message:"but you've reached the end of search results.",position:"topRight"});C()}catch(e){console.log(e.message)}finally{O(),c.classList.remove("disable")}}function C(){const o=document.querySelector(".gallery-items");if(console.log(o),o){const s=o.getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
