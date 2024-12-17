import{a as H,i as c,S as C}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function f(o,e,r){const i=o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:S,views:q,comments:M,downloads:x})=>`
            <li class="gallery-items">
                <a class="gallery-link" href="${s}">
                    <img
                        class="gallery-image"
                        src="${t}"
                        alt="${n}"
                    />
                </a>
                <div class="info">
                    <div class="info-item">
                        <h3>Likes</h3>
                        <p>${S}</p>
                    </div>

                    <div class="info-item">
                        <h3>Views</h3>
                        <p>${q}</p>
                    </div>

                    <div class="info-item">
                        <h3>Comments</h3>
                        <p>${M}</p>
                    </div>

                    <div class="info-item">
                        <h3>Downloads</h3>
                        <p>${x}</p>
                    </div>
                </div>
            </li>
        `).join("");return e.insertAdjacentHTML("beforeend",i),r.refresh(),i}async function y(o,e,r){try{const i=await H.get("https://pixabay.com/api/",{params:{key:"47628462-4a8006828a6d084475c3078e6",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:r}});return console.log(i.data),i.data}catch(i){console.log(i.message)}}const L=document.querySelector(".search-form"),v=L.querySelector("#searchInput"),a=document.querySelector(".gallery"),b=document.querySelector(".loader"),w=document.querySelector(".loader-two"),d=document.querySelector(".btn");let l=1,h=15,m="";function k(){b.classList.add("active")}function g(){b.classList.remove("active")}function P(){w.classList.add("active")}function p(){w.classList.remove("active")}d.addEventListener("click",$);L.addEventListener("submit",async o=>{o.preventDefault(),k();const e=v.value.trim();if(a.innerHTML="",e===""){console.log("Input is empty"),c.info({message:"Input is empty",messageSize:"16px",position:"topRight"}),g();return}e!==m&&(m=e,l=1,a.innerHTML="",d.classList.add("disable"));try{const r=await y(m,l,h);if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),a.innerHTML="",o.target.reset();return}f(r.hits,a,u),d.classList.remove("disable")}catch(r){console.log(r.message),c.error({message:r.message,theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),g()}finally{g()}});let u=new C(".gallery .gallery-link",{captionsData:"alt",captionsDelay:250});u.on("show.simplelightbox",function(){});u.on("error.simplelightbox",function(o){console.log(o)});async function $(){l+=1;const o=v.value.trim();d.classList.add("disable"),P();try{const e=await y(o,l,h);if(a.insertAdjacentHTML("beforeend",f(e.hits,a,u)),console.log(e.hits),e.totalHits/h<l)return c.info({title:"We're sorry,",message:"but you've reached the end of search results.",position:"topRight"});z()}catch(e){console.log(e.message),c.error({message:e.message,theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"}),p()}finally{p(),d.classList.remove("disable")}}function z(){const o=document.querySelector(".gallery-items");if(console.log(o),o){const r=o.getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
