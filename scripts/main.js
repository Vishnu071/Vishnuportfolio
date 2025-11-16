document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('projects-grid');
  if(window.projectsData && grid){
    projectsData.forEach(p=>{
      const el=document.createElement('article');
      el.className='p-4 border rounded';
      el.innerHTML=`<img src="${p.img}" alt="${p.title}" class="w-full h-40 object-cover rounded"><h3 class="mt-2 font-semibold">${p.title}</h3><p class="text-sm text-slate-600">${p.desc}</p>`;
      grid.appendChild(el);
    });
  }
  // render skills placeholder
  document.getElementById('skills').innerHTML = `
    <ul class="space-y-2">
      <li>HTML & CSS — 90%</li>
      <li>JavaScript — 70%</li>
      <li>Python — 75%</li>
      <li>Django — 70%</li>
      <li>Java — 55%</li>
    </ul>`;
});