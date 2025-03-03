import{a as m,S as h,i as l}from"./assets/vendor-D9tHNiur.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=m.create({baseURL:"https://pixabay.com/api",params:{key:"49097244-8862dd375f26540a0b3f58369",image_type:"photo",orientation:"horizontal",safesearch:!0}});function f(o){return d.get("/",{params:{q:o}}).then(r=>r.data)}const g=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(o){const r=document.querySelector(".gallery"),a=o.map(({largeImageURL:i,webformatURL:e,tags:t,likes:s,views:c,comments:u,downloads:p})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${e}"
            alt="${t}"
          />
        </a>
        <ul class="image-info">
          <li>
            <h5>Likes</h5>
            <p>${s}</p>
          </li>
          <li>
            <h5>Views</h5>
            <p>${c}</p>
          </li>
          <li>
            <h5>Comments</h5>
            <p>${u}</p></p>
          </li>
          <li>
            <h5>Downloads</h5>
            <p>${p}</p>
          </li>
        </ul>
      </li>`).join("");r.insertAdjacentHTML("afterbegin",a),g.refresh()}const n={searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),searchButton:document.querySelector("button[data-start]"),gallery:document.querySelector(".gallery"),jsLoader:document.querySelector(".js-loader")};n.searchForm.addEventListener("submit",o=>{o.preventDefault(),n.gallery.innerHTML="";let r=o.target.elements.query.value.trim();if(!r){l.warning({message:"Please enter a search query!",position:"topRight"});return}n.jsLoader.innerHTML='<span class="loader"></span>',f(r).then(a=>{a.hits.length==0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight"}):y(a.hits),n.jsLoader.textContent=""}).catch(a=>{console.log(a)}),o.target.reset()});
//# sourceMappingURL=index.js.map
