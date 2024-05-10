import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const p="https://pixabay.com/api/",m="43800208-301c21487611dae4b6f535cf2",f=(r="pug")=>{const e=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${e}`).then(a=>{if(!a.ok)throw new Error(a.statusText);return a.json()})},d=r=>r.map(e=>`
<li class='gallery-item'>
<a class='gallery-item-link' href='${e.largeImageURL}'>
    <img
    src='${e.webformatURL}'
    alt='${e.tags}'>
</a>
<div class='stats'>
<span>
<p class='stat-name'>Likes</p>
<p class='stat-value'>${e.likes}</p>
</span>
<span>
<p class='stat-name'>Views</p>
<p class='stat-value'>${e.views}</p>
</span>
<span>
<p class='stat-name'>Comments</p>
<p class='stat-value'>${e.comments}</p>
</span>
<span>
<p class='stat-name'>Downloads</p>
<p class='stat-value'>${e.downloads}</p>
</span>
</div>
</li>
`).join(""),i=document.querySelector(".gallery"),h=document.querySelector(".search-form"),l=document.querySelector(".loader");function y(r){r.preventDefault();const e=r.target.elements.searchQuery.value.trim();if(e===""){i.innerHTML="",r.target.reset(),c.warning({position:"topRight",transitionIn:"bounceInLeft",message:"input field cannot be empty",messageSize:16,timeout:3e3});return}i.innerHTML="",l.classList.remove("is-hidden"),f(e).then(a=>{a.total===0&&(r.target.reset(),c.error({position:"topRight",transitionIn:"bounceInLeft",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:16,timeout:3e3}));const o=new u(".gallery a",{captionsData:"alt",captionDelay:250});i.innerHTML=d(a.hits),o.refresh()}).catch(a=>a).finally(()=>{r.target.reset(),l.classList.add("is-hidden")})}h.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
