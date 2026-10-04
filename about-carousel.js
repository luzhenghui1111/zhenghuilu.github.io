document.addEventListener("DOMContentLoaded",()=>{
  const root=document.querySelector("[data-about-carousel]");
  if(root){
    const slides=[...root.querySelectorAll(".about-carousel-slide")];
    const prev=root.querySelector(".about-carousel-btn.prev");
    const next=root.querySelector(".about-carousel-btn.next");
    const dotsWrap=root.querySelector(".about-carousel-dots");
    const counter=root.querySelector(".about-carousel-counter");
    let index=0,timer=null;

    const dots=slides.map((_,i)=>{
      const b=document.createElement("button");
      b.type="button";b.className="about-carousel-dot";
      b.setAttribute("aria-label",`Show photo ${i+1}`);
      b.addEventListener("click",()=>{show(i);restart();});
      dotsWrap.appendChild(b);return b;
    });

    function show(i){
      index=(i+slides.length)%slides.length;
      slides.forEach((slide,j)=>slide.classList.toggle("is-active",j===index));
      dots.forEach((dot,j)=>dot.classList.toggle("is-active",j===index));
      if(counter)counter.textContent=`${String(index+1).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`;
    }
    function start(){stop();timer=setInterval(()=>show(index+1),5200);}
    function stop(){if(timer){clearInterval(timer);timer=null;}}
    function restart(){start();}

    prev?.addEventListener("click",()=>{show(index-1);restart();});
    next?.addEventListener("click",()=>{show(index+1);restart();});
    root.addEventListener("mouseenter",stop);
    root.addEventListener("mouseleave",start);
    root.addEventListener("focusin",stop);
    root.addEventListener("focusout",start);
    root.addEventListener("keydown",e=>{
      if(e.key==="ArrowLeft"){show(index-1);restart();}
      if(e.key==="ArrowRight"){show(index+1);restart();}
    });
    document.addEventListener("visibilitychange",()=>document.hidden?stop():start());
    show(0);start();
  }

  const figures=[
    [".v-round-visual.pressure","assets/research-featured-1.png","Finite element foot model and radiographic reference from the featured study"],
    [".v-round-visual.lattice","assets/research-featured-2.png","Footwear lattice structure and unit-cell design from the featured study"],
    [".v-round-visual.printing","assets/research-featured-3.png","Graphical abstract of the 3D-printing footwear biomechanics review"]
  ];
  figures.forEach(([selector,src,alt])=>{
    const frame=document.querySelector(selector);
    if(!frame)return;
    frame.classList.add("paper-figure");
    frame.innerHTML="";
    const img=document.createElement("img");
    img.src=src;img.alt=alt;img.loading="eager";
    frame.appendChild(img);
  });

  setupBilibiliMedia();
});

async function setupBilibiliMedia(){
  const research=document.querySelector("#research");
  const projects=document.querySelector("#projects");
  if(!research||!projects||document.querySelector("#social-media"))return;

  const style=document.createElement("style");
  style.id="bilibili-media-style";
  style.textContent=`
    .v-social-media{position:relative;padding:92px 0 0;overflow:visible;background:linear-gradient(to bottom,var(--paper2) 0 64%,var(--charcoal) 64% 100%);border-bottom:0}
    .v-media-heading{text-align:center;color:var(--olive);font-size:clamp(34px,4.2vw,56px);line-height:1;margin:0 0 28px;text-transform:uppercase;letter-spacing:-.02em}
    .v-media-divider{display:flex;align-items:center;justify-content:center;gap:12px;margin:0 0 38px}.v-media-divider:before,.v-media-divider:after{content:"";width:54px;height:1px;background:var(--orange)}.v-media-divider i{width:8px;height:8px;background:var(--orange);transform:rotate(45deg)}
    .v-media-wrap{max-width:1040px;margin:0 auto;position:relative;z-index:3;padding-bottom:56px}
    .v-media-stage{position:relative;margin:0 auto;border:1px solid rgba(53,68,47,.28);background:#111;box-shadow:0 18px 45px rgba(20,20,20,.18)}
    .v-media-player{position:relative;width:100%;aspect-ratio:16/9;background:#111;overflow:hidden}
    .v-media-player iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block;background:#111;pointer-events:auto}
    .v-media-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:46px;height:64px;border:0;background:rgba(255,247,232,.78);color:var(--forest);font-size:34px;line-height:1;cursor:pointer;transition:.18s ease}.v-media-arrow:hover{background:var(--orange);color:var(--charcoal)}.v-media-arrow.prev{left:-54px}.v-media-arrow.next{right:-54px}.v-media-arrow[disabled]{opacity:.28;cursor:default}
    .v-media-info{text-align:center;padding:22px 20px 0;color:var(--cream)}
    .v-media-title{margin:0 auto 8px;max-width:860px;font-size:22px;line-height:1.35;color:var(--cream)}
    .v-media-caption-meta{font-family:"Arial Narrow",Arial,sans-serif;text-transform:uppercase;letter-spacing:.08em;font-size:11px;color:#cfc4ad}
    .v-media-link{display:inline-block;margin-top:8px;color:var(--orange);font-size:12px;text-decoration:none}.v-media-link:hover{color:#fff}
    .v-media-dots{display:flex;justify-content:center;gap:8px;margin-top:16px}.v-media-dot{width:8px;height:8px;border-radius:50%;border:0;background:#8f866f;padding:0;cursor:pointer}.v-media-dot.active{background:var(--orange);transform:scale(1.25)}
    .v-projects{border-top:0!important}
    @media(max-width:1180px){.v-media-arrow.prev{left:8px}.v-media-arrow.next{right:8px}}
    @media(max-width:700px){.v-social-media{padding-top:70px;background:linear-gradient(to bottom,var(--paper2) 0 58%,var(--charcoal) 58% 100%)}.v-media-wrap{padding-bottom:42px}.v-media-title{font-size:17px}.v-media-arrow{width:38px;height:52px;font-size:28px}.v-media-heading{font-size:36px}}
  `;
  document.head.appendChild(style);

  const section=document.createElement("section");
  section.id="social-media";
  section.className="v-social-media";
  section.innerHTML=`
    <div class="v-container">
      <h2 class="v-media-heading"><span class="lang-en">On Social Media</span><span class="lang-zh">我在社交媒体</span></h2>
      <div class="v-media-divider"><i></i></div>
      <div class="v-media-wrap">
        <div class="v-media-stage" tabindex="0" aria-label="Bilibili video carousel">
          <div class="v-media-player"><iframe title="Bilibili video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen scrolling="no" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
          <button class="v-media-arrow prev" type="button" aria-label="Previous video">‹</button>
          <button class="v-media-arrow next" type="button" aria-label="Next video">›</button>
        </div>
        <div class="v-media-info">
          <h3 class="v-media-title">医学（骨科）、运动生物力学有限元分析-01-介绍</h3>
          <div class="v-media-caption-meta"></div>
          <a class="v-media-link" target="_blank" rel="noopener noreferrer"><span class="lang-en">Open on Bilibili ↗</span><span class="lang-zh">在哔哩哔哩打开 ↗</span></a>
          <div class="v-media-dots" aria-label="Video selector"></div>
        </div>
      </div>
    </div>`;
  projects.parentNode.insertBefore(section,projects);

  let config={mid:"49579977",videos:[{bvid:"BV1WsztB7EQa",title:"医学（骨科）、运动生物力学有限元分析-01-介绍",date:""}]};
  try{
    const r=await fetch(`assets/bilibili-videos.json?v=${Date.now()}`,{cache:"no-store"});
    if(r.ok)config=await r.json();
  }catch(e){}

  let videos=[];
  try{
    const url=`https://api.bilibili.com/x/space/arc/search?mid=${encodeURIComponent(config.mid)}&pn=1&ps=50&order=pubdate`;
    const r=await fetch(url,{mode:"cors",credentials:"omit"});
    const j=await r.json();
    const list=j?.data?.list?.vlist||[];
    videos=list.map(v=>({bvid:v.bvid,title:v.title||"Bilibili video",timestamp:Number(v.created)||0,date:v.created?new Date(v.created*1000).toISOString().slice(0,10):""}));
  }catch(e){}

  if(!videos.length){
    videos=(config.videos||[]).map(v=>({...v,timestamp:v.date?Date.parse(v.date)/1000:0}));
    await Promise.all(videos.map(async v=>{
      if(v.title&&v.date)return;
      try{
        const r=await fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${encodeURIComponent(v.bvid)}`,{mode:"cors",credentials:"omit"});
        const j=await r.json();
        if(j?.data){v.title=j.data.title||v.title||"Bilibili video";v.timestamp=Number(j.data.pubdate)||v.timestamp||0;v.date=v.timestamp?new Date(v.timestamp*1000).toISOString().slice(0,10):(v.date||"");}
      }catch(e){}
    }));
  }

  videos=videos.filter(v=>v.bvid).sort((a,b)=>(b.timestamp||0)-(a.timestamp||0));
  if(!videos.length)return;

  const stage=section.querySelector(".v-media-stage");
  const iframe=section.querySelector("iframe");
  const title=section.querySelector(".v-media-title");
  const meta=section.querySelector(".v-media-caption-meta");
  const link=section.querySelector(".v-media-link");
  const prev=section.querySelector(".v-media-arrow.prev");
  const next=section.querySelector(".v-media-arrow.next");
  const dotsWrap=section.querySelector(".v-media-dots");
  let index=0;

  const dots=videos.map((_,i)=>{
    const b=document.createElement("button");
    b.type="button";b.className="v-media-dot";
    b.setAttribute("aria-label",`Show video ${i+1}`);
    b.addEventListener("click",()=>show(i));
    dotsWrap.appendChild(b);return b;
  });

  function show(i){
    index=(i+videos.length)%videos.length;
    const v=videos[index];
    iframe.src=`https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&bvid=${encodeURIComponent(v.bvid)}&p=1&autoplay=0&danmaku=0&hideCoverInfo=1`;
    iframe.title=v.title||"Bilibili video";
    title.textContent=v.title||"Bilibili video";
    meta.textContent=[v.date?formatDate(v.date):"",`${String(index+1).padStart(2,"0")} / ${String(videos.length).padStart(2,"0")}`].filter(Boolean).join(" · ");
    link.href=`https://www.bilibili.com/video/${v.bvid}/`;
    dots.forEach((d,j)=>d.classList.toggle("active",j===index));
    prev.disabled=next.disabled=videos.length<2;
  }

  function formatDate(s){
    const d=new Date(`${s}T00:00:00`);
    return Number.isNaN(d.getTime())?s:d.toLocaleDateString(document.documentElement.lang.startsWith("zh")?"zh-CN":"en-CA",{year:"numeric",month:"short",day:"numeric"});
  }

  prev.addEventListener("click",()=>show(index-1));
  next.addEventListener("click",()=>show(index+1));
  stage.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")show(index-1);if(e.key==="ArrowRight")show(index+1);});
  show(0);
}
