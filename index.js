import{a as h,i as g,S as y}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function v(r,t,s){const n=r.map(({webformatURL:e,largeImageURL:o,tags:i,likes:d,views:f,comments:m,downloads:p})=>`
            <li class="gallery-items">
                <a class="gallery-link" href="${o}">
                    <img
                        class="gallery-image"
                        src="${e}"
                        alt="${i}"
                    />
                </a>
                <div class="info">
                    <div class="info-item">
                        <h3>Likes</h3>
                        <p>${d}</p>
                    </div>

                    <div class="info-item">
                        <h3>Views</h3>
                        <p>${f}</p>
                    </div>

                    <div class="info-item">
                        <h3>Comments</h3>
                        <p>${m}</p>
                    </div>

                    <div class="info-item">
                        <h3>Downloads</h3>
                        <p>${p}</p>
                    </div>
                </div>
            </li>
        `).join("");t.innerHTML="",t.insertAdjacentHTML("beforeend",n),s.refresh()}async function c(r){try{const t=await h.get("https://pixabay.com/api/",{params:{key:"47628462-4a8006828a6d084475c3078e6",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}});return console.log(t.data),t.data}catch(t){console.log(t.message)}}const l=document.querySelector(".search-form"),L=l.querySelector("#searchInput"),b=document.querySelector(".gallery"),u=document.querySelector(".loader");function w(){u.classList.add("active")}function S(){u.classList.remove("active")}l.addEventListener("submit",async r=>{r.preventDefault(),w();const t=L.value;if(t.trim()===""){console.log("Input is empty");return}try{const s=await c(t);if(console.log(c(t)),s.hits.length===0){g.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"red",messageColor:"white",messageSize:"16px",position:"topRight"});return}v(s.hits,b,a)}catch(s){console.log(s.message)}finally{S(),r.target.reset()}});let a=new y(".gallery .gallery-link",{captionsData:"alt",captionsDelay:250});a.on("show.simplelightbox",function(){});a.on("error.simplelightbox",function(r){console.log(r)});
//# sourceMappingURL=index.js.map
