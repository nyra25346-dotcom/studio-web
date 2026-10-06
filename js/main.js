'use strict';
const config=window.STUDIO_CONFIG;
const t=text=>window.STUDIO_I18N?window.STUDIO_I18N.translate(text):text;
const setStatus=text=>{if(window.STUDIO_I18N)window.STUDIO_I18N.showStatus(text);else document.querySelector('#form-status').textContent=text};
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeURL=value=>{try{const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:''}catch{return ''}};
const projects=document.querySelector('#project-list');
projects.innerHTML=config.PROJECTS.map((p,i)=>`<article class="project project-${escapeHTML(p.id)}"><div class="project-heading"><span class="project-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><div><p class="project-category">${escapeHTML(p.category)} · CONCEPTO</p><h3>${escapeHTML(p.name)}</h3></div></div><a class="project-visual" href="${escapeHTML(safeURL(p.url))}" target="_blank" rel="noopener noreferrer" aria-label="Abrir concepto ${escapeHTML(p.name)} en otra pestaña"><div class="browser"><div class="browser-bar"><span>● ● ●</span><span>${escapeHTML(p.name)} · CONCEPTO WEB</span><span>↗</span></div><img src="assets/projects/${escapeHTML(p.id)}.webp" srcset="assets/projects/${escapeHTML(p.id)}-720.webp 720w, assets/projects/${escapeHTML(p.id)}.webp 1440w" sizes="(max-width:800px) 88vw, 80vw" width="1440" height="1000" loading="lazy" decoding="async" alt="Vista de escritorio del concepto web ${escapeHTML(p.name)}"></div></a><div class="project-details"><p class="project-description">${escapeHTML(p.description)}</p><div class="tags">${p.tags.map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div><a class="text-link" href="${escapeHTML(safeURL(p.url))}" target="_blank" rel="noopener noreferrer" aria-label="Ver proyecto ${escapeHTML(p.name)}; se abre en otra pestaña">Ver proyecto <span aria-hidden="true">↗</span></a></div></article>`).join('');
document.querySelectorAll('[data-price]').forEach(el=>el.textContent=config.PRICING[el.dataset.price]);
document.querySelector('#year').textContent=new Date().getFullYear();
const header=document.querySelector('#header');const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>20);updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
const menu=document.querySelector('#mobile-menu');const toggle=document.querySelector('.menu-toggle');
const closeMenu=()=>menu.close();toggle.addEventListener('click',()=>{menu.showModal();toggle.setAttribute('aria-expanded','true');document.body.classList.add('menu-open')});document.querySelector('.menu-close').addEventListener('click',closeMenu);menu.addEventListener('close',()=>{document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.focus()});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{closeMenu();const target=a.hash?document.querySelector(a.hash):null;if(target){setTimeout(()=>{target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});},0)}}));window.addEventListener('resize',()=>{if(innerWidth>800&&menu.open)closeMenu()});
const message='Hola, he visto vuestra web de Studio Web y me gustaría mejorar la página web de mi restaurante.';
const whatsapp=config.WHATSAPP_NUMBER.replace(/\D/g,'');
const whatsappURL=text=>`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
function updateContactLinks(){
  document.querySelectorAll('.whatsapp-link,.floating-contact').forEach(a=>{
    a.hidden=whatsapp.length<8;
    const text=a.dataset.plan?`${t(message)}\n\n${t('Estoy interesado en')}: ${t(a.dataset.plan)}`:t(message);
    a.href=whatsappURL(text);a.target='_blank';a.rel='noopener noreferrer';
  });
}
updateContactLinks();
document.querySelectorAll('[data-contact]').forEach(a=>{const key=a.dataset.contact,value=config[key];const href=key==='EMAIL'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)?`mailto:${value}`:safeURL(value);if(href){a.href=href;if(key!=='EMAIL'){a.target='_blank';a.rel='noopener noreferrer'}}else a.remove()});
const form=document.querySelector('#contact-form');
form.hidden=whatsapp.length<8;
const compose=()=>{const data=new FormData(form);return `${t('Hola Studio Web,')}\n\n${t('Nombre')}: ${data.get('nombre').trim()}\n${t('Restaurante')}: ${data.get('restaurante').trim()}\n${t('Ciudad')}: ${data.get('ciudad').trim()}\n${t('Web actual')}: ${data.get('web_actual').trim()||t('Sin indicar')}\n${t('Estoy interesado en')}: ${t(data.get('necesidad'))}\n\n${t('Mensaje')}: ${data.get('mensaje').trim()}`};
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;window.open(whatsappURL(compose()),'_blank','noopener,noreferrer');setStatus('Tu consulta está preparada en WhatsApp. Revisa el mensaje y pulsa enviar allí.');});
const sticky=document.querySelector('.floating-contact');
const updateSticky=()=>{sticky.hidden=whatsapp.length<8||document.querySelector('.hero').getBoundingClientRect().bottom>0||document.querySelector('#contacto').getBoundingClientRect().top<innerHeight||menu.open};
window.addEventListener('scroll',updateSticky,{passive:true});window.addEventListener('resize',updateSticky);menu.addEventListener('close',updateSticky);toggle.addEventListener('click',updateSticky);updateSticky();
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{if(isIntersecting){target.classList.add('is-visible');observer.unobserve(target)}}),{threshold:.05});
 document.querySelectorAll('.project,.service-list article,.timeline article').forEach(el=>{el.classList.add('scroll-reveal');observer.observe(el)});
}
