document.addEventListener("DOMContentLoaded",()=>{
  setupAboutCarousel();
  setupFeaturedFigures();
  setupBilibiliMedia();
});

function setupAboutCarousel(){
  const root=document.querySelector("[data-about-carousel]");
  if(!root)return;

  const gallery=[
    ["assets/about-gallery/01_fengmian.jpg","Portrait of Zhenghui Lu"],
    ["assets/about-gallery/微信图片_20261003105326_60_154.jpg","Zhenghui Lu photo 2"],
    ["assets/about-gallery/微信图片_20261003105330_61_154.jpg","Zhenghui Lu photo 3"],
    ["assets/about-gallery/微信图片_20261003105331_62_154.jpg","Zhenghui Lu photo 4"],
    ["assets/about-gallery/微信图片_20261003105332_63_154.jpg","Zhenghui Lu photo 5"],
    ["assets/about-gallery/微信图片_20261003105845_64_154.jpg","Zhenghui Lu photo 6"],
    ["assets/about-gallery/微信图片_20261003105847_65_154.jpg","Zhenghui Lu photo 7"]
  ];

  const track=root.querySelector(".about-carousel-track");
  const dotsWrap=root.querySelector(".about-carousel-dots");
  const counter=root.querySelector(".about-carousel-counter");
  const prev=root.querySelector(".about-carousel-btn.prev");
  const next=root.querySelector(".about-carousel-btn.next");
  if(!track)return;

  track.innerHTML="";
  dotsWrap && (dotsWrap.innerHTML="");

  gallery.forEach(([src,alt],i)=>{
    const figure=document.createElement("figure");
    figure.className="about-carousel-slide"+(i===0?" is-active":"");
    const img=document.createElement("img");
    img.src=src;
    img.alt=alt;
    img.loading=i===0?"eager":"lazy";
    img.decoding="async";
    figure.appendChild(img);
    track.appendChild(figure);
  });

  if(!document.querySelector("#about-gallery-fix-style")){
    const s=document.createElement("style");
    s.id="about-gallery-fix-style";
    s.textContent=`
      .about-carousel-slide img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center center!important;display:block!important;background:var(--paper2)!important}
      .about-carousel-frame{background:var(--paper2)!important}
    `;
    document.head.appendChild(s);
  }

  const slides=[...track.querySelectorAll(".about-carousel-slide")];
  let index=0,timer=null;
  const dots=slides.map((_,i)=>{
    const b=document.createElement("button");
    b.type="button";
    b.className="about-carousel-dot";
    b.setAttribute("aria-label",`Show photo ${i+1}`);
    b.addEventListener("click",()=>{show(i);restart();});
    dotsWrap?.appendChild(b);
    return b;
  });

  function show(i){
    index=(i+slides.length)%slides.length;
    slides.forEach((slide,j)=>slide.classList.toggle("is-active",j===index));
    dots.forEach((dot,j)=>dot.classList.toggle("is-active",j===index));
    if(counter)counter.textContent=`${String(index+1).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`;
  }
  function stop(){if(timer){clearInterval(timer);timer=null;}}
  function start(){stop();timer=setInterval(()=>show(index+1),5200);}
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
  show(0);
  start();
}

function setupFeaturedFigures(){
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
    img.src=src;
    img.alt=alt;
    img.loading="eager";
    frame.appendChild(img);
  });
}

async function setupBilibiliMedia(){
  const projects=document.querySelector("#projects");
  const research=document.querySelector("#research");
  if(!projects||!research||document.querySelector("#social-media"))return;

  let config=null;
  try{
    const r=await fetch(`assets/bilibili-videos.json?v=${Date.now()}`,{cache:"no-store"});
    if(r.ok)config=await r.json();
  }catch(e){}
  if(!config?.series?.length)return;

  const style=document.createElement("style");
  style.id="bilibili-media-style";
  style.textContent=`
    .v-social-media{position:relative;padding:92px 0 0;overflow:visible;background:linear-gradient(to bottom,var(--paper2) 0 63%,var(--charcoal) 63% 100%);border-bottom:0}
    .v-media-heading{text-align:center;color:var(--olive);font-size:clamp(34px,4.2vw,56px);line-height:1;margin:0 0 26px;text-transform:uppercase;letter-spacing:-.02em}
    .v-media-divider{display:flex;align-items:center;justify-content:center;gap:12px;margin:0 0 24px}.v-media-divider:before,.v-media-divider:after{content:"";width:54px;height:1px;background:var(--orange)}.v-media-divider i{width:8px;height:8px;background:var(--orange);transform:rotate(45deg)}
    .v-media-series-tabs{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin:0 auto 28px}
    .v-media-series-tab{border:1px solid var(--forest);background:transparent;color:var(--forest);padding:10px 17px;border-radius:999px;font-family:"Arial Narrow",Arial,sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.07em;font-size:12px;cursor:pointer;transition:.18s ease}
    .v-media-series-tab:hover,.v-media-series-tab.active{background:var(--forest);color:var(--cream)}
    .v-media-wrap{max-width:1040px;margin:0 auto;position:relative;z-index:3;padding-bottom:56px}
    .v-media-stage{position:relative;margin:0 auto;border:1px solid rgba(53,68,47,.28);background:#111;box-shadow:0 18px 45px rgba(20,20,20,.18)}
    .v-media-player{position:relative;width:100%;aspect-ratio:16/9;background:#181818;overflow:hidden}
    .v-media-player iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block;background:#111}
    .v-media-preview-frame{pointer-events:none;z-index:1}
    .v-media-poster{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;background:rgba(22,21,18,.48);color:#fff;text-align:center;padding:30px;cursor:pointer}
    .v-media-poster:before{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,rgba(17,16,14,.22),rgba(17,16,14,.58));pointer-events:none}
    .v-media-poster-inner{position:relative;z-index:2;max-width:760px;padding:28px 34px}
    .v-media-poster-kicker{font-family:"Arial Narrow",Arial,sans-serif;text-transform:uppercase;letter-spacing:.12em;color:#efd18e;font-size:12px;margin-bottom:16px}
    .v-media-poster-title{font-size:clamp(21px,2.5vw,34px);line-height:1.28;margin:0 0 24px;color:#fff8eb;text-shadow:0 2px 12px rgba(0,0,0,.45)}
    .v-media-play-button{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(255,247,232,.9);background:rgba(255,247,232,.95);color:var(--forest);padding:13px 22px;border-radius:999px;font-family:"Arial Narrow",Arial,sans-serif;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:.18s ease}
    .v-media-play-button:hover{background:var(--orange);border-color:var(--orange);color:var(--charcoal)}
    .v-media-play-icon{font-size:18px;line-height:1}
    .v-media-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:6;width:46px;height:64px;border:0;background:rgba(255,247,232,.82);color:var(--forest);font-size:34px;line-height:1;cursor:pointer;transition:.18s ease}.v-media-arrow:hover{background:var(--orange);color:var(--charcoal)}.v-media-arrow.prev{left:-54px}.v-media-arrow.next{right:-54px}
    .v-media-info{text-align:center;padding:18px 20px 0;color:var(--cream)}
    .v-media-title{display:none!important}
    .v-media-caption-meta{font-family:"Arial Narrow",Arial,sans-serif;text-transform:uppercase;letter-spacing:.08em;font-size:11px;color:#cfc4ad}
    .v-media-link{display:inline-block;margin-top:8px;color:var(--orange);font-size:12px;text-decoration:none}.v-media-link:hover{color:#fff}
    .v-media-episodes{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:16px}
    .v-media-episode{min-width:34px;height:30px;border:1px solid #8f866f;background:transparent;color:#d8cdb7;font-family:"Arial Narrow",Arial,sans-serif;font-size:11px;cursor:pointer;border-radius:5px}
    .v-media-episode:hover,.v-media-episode.active{background:var(--orange);border-color:var(--orange);color:var(--charcoal);font-weight:800}
    .v-projects{border-top:0!important}
    @media(max-width:1180px){.v-media-arrow.prev{left:8px}.v-media-arrow.next{right:8px}}
    @media(max-width:700px){.v-social-media{padding-top:70px;background:linear-gradient(to bottom,var(--paper2) 0 58%,var(--charcoal) 58% 100%)}.v-media-wrap{padding-bottom:42px}.v-media-arrow{width:38px;height:52px;font-size:28px}.v-media-heading{font-size:36px}.v-media-series-tab{font-size:11px;padding:8px 13px}.v-media-poster{padding:18px}.v-media-poster-inner{padding:18px 20px}.v-media-poster-title{font-size:19px}}
  `;
  document.head.appendChild(style);

  const section=document.createElement("section");
  section.id="social-media";
  section.className="v-social-media";
  section.innerHTML=`
    <div class="v-container">
      <h2 class="v-media-heading"><span class="lang-en">On Social Media</span><span class="lang-zh">我在社交媒体</span></h2>
      <div class="v-media-divider"><i></i></div>
      <div class="v-media-series-tabs" aria-label="Video series"></div>
      <div class="v-media-wrap">
        <div class="v-media-stage" tabindex="0" aria-label="Bilibili video carousel">
          <div class="v-media-player"></div>
          <button class="v-media-arrow prev" type="button" aria-label="Previous video">‹</button>
          <button class="v-media-arrow next" type="button" aria-label="Next video">›</button>
        </div>
        <div class="v-media-info">
          <h3 class="v-media-title"></h3>
          <div class="v-media-caption-meta"></div>
          <a class="v-media-link" target="_blank" rel="noopener noreferrer"><span class="lang-en">Open on Bilibili ↗</span><span class="lang-zh">在哔哩哔哩打开 ↗</span></a>
          <div class="v-media-episodes" aria-label="Episodes"></div>
        </div>
      </div>
    </div>`;
  projects.parentNode.insertBefore(section,projects);

  const tabsWrap=section.querySelector(".v-media-series-tabs");
  const stage=section.querySelector(".v-media-stage");
  const player=section.querySelector(".v-media-player");
  const title=section.querySelector(".v-media-title");
  const meta=section.querySelector(".v-media-caption-meta");
  const link=section.querySelector(".v-media-link");
  const prev=section.querySelector(".v-media-arrow.prev");
  const next=section.querySelector(".v-media-arrow.next");
  const episodesWrap=section.querySelector(".v-media-episodes");

  let seriesIndex=0,episodeIndex=0;

  const seriesTabs=config.series.map((series,i)=>{
    const b=document.createElement("button");
    b.type="button";
    b.className="v-media-series-tab";
    b.innerHTML=`<span class="lang-en">${escapeHtml(series.labelEn||series.id)}</span><span class="lang-zh">${escapeHtml(series.labelZh||series.labelEn||series.id)}</span>`;
    b.addEventListener("click",()=>{seriesIndex=i;episodeIndex=0;renderSeries();});
    tabsWrap.appendChild(b);
    return b;
  });

  function renderSeries(){
    seriesTabs.forEach((b,i)=>b.classList.toggle("active",i===seriesIndex));
    episodesWrap.innerHTML="";
    const series=config.series[seriesIndex];
    (series.videos||[]).forEach((video,i)=>{
      const b=document.createElement("button");
      b.type="button";
      b.className="v-media-episode";
      b.textContent=String(video.episode??i+1).padStart(2,"0");
      b.setAttribute("aria-label",`Episode ${video.episode??i+1}`);
      b.addEventListener("click",()=>{episodeIndex=i;renderVideo();});
      episodesWrap.appendChild(b);
    });
    renderVideo();
  }

  function renderVideo(){
    const series=config.series[seriesIndex];
    const videos=series.videos||[];
    if(!videos.length)return;
    episodeIndex=(episodeIndex+videos.length)%videos.length;
    const v=videos[episodeIndex];
    const episodeLabel=`${String(episodeIndex+1).padStart(2,"0")} / ${String(videos.length).padStart(2,"0")}`;

    const previewSrc=`https://player.bilibili.com/player.html?bvid=${encodeURIComponent(v.bvid)}&page=1&high_quality=1&danmaku=0&autoplay=0`;
    player.innerHTML=`
      <iframe class="v-media-preview-frame" title="Video preview" src="${previewSrc}" scrolling="no" allow="encrypted-media; picture-in-picture; fullscreen" tabindex="-1"></iframe>
      <div class="v-media-poster" role="button" tabindex="0" aria-label="Play video">
        <div class="v-media-poster-inner">
          <div class="v-media-poster-kicker"><span class="lang-en">${escapeHtml(series.shortEn||series.labelEn||series.id)} · ${episodeLabel}</span><span class="lang-zh">${escapeHtml(series.shortZh||series.labelZh||series.id)} · ${episodeLabel}</span></div>
          <h4 class="v-media-poster-title"><span class="lang-en">${escapeHtml(v.titleEn||v.titleZh||"Bilibili video")}</span><span class="lang-zh">${escapeHtml(v.titleZh||v.titleEn||"哔哩哔哩视频")}</span></h4>
          <button class="v-media-play-button" type="button"><span class="v-media-play-icon">▶</span><span class="lang-en">Play video</span><span class="lang-zh">播放视频</span></button>
        </div>
      </div>`;

    const poster=player.querySelector(".v-media-poster");
    const play=()=>{
      const iframe=document.createElement("iframe");
      iframe.title=v.titleEn||v.titleZh||"Bilibili video";
      iframe.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";
      iframe.allowFullscreen=true;
      iframe.scrolling="no";
      iframe.referrerPolicy="strict-origin-when-cross-origin";
      iframe.src=`https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&bvid=${encodeURIComponent(v.bvid)}&p=1&autoplay=1&danmaku=0&hideCoverInfo=1`;
      player.innerHTML="";
      player.appendChild(iframe);
    };
    poster.addEventListener("click",e=>{if(e.target.closest(".v-media-play-button")||e.currentTarget===e.target||e.target.closest(".v-media-poster-inner"))play();});
    poster.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();play();}});

    title.innerHTML=`<span class="lang-en">${escapeHtml(v.titleEn||v.titleZh||"Bilibili video")}</span><span class="lang-zh">${escapeHtml(v.titleZh||v.titleEn||"哔哩哔哩视频")}</span>`;
    meta.innerHTML=`<span class="lang-en">${escapeHtml(series.shortEn||series.labelEn||series.id)} · ${episodeLabel}</span><span class="lang-zh">${escapeHtml(series.shortZh||series.labelZh||series.id)} · ${episodeLabel}</span>`;
    link.href=`https://www.bilibili.com/video/${v.bvid}/`;
    [...episodesWrap.children].forEach((b,i)=>b.classList.toggle("active",i===episodeIndex));
  }

  prev.addEventListener("click",()=>{episodeIndex--;renderVideo();});
  next.addEventListener("click",()=>{episodeIndex++;renderVideo();});
  stage.addEventListener("keydown",e=>{
    if(e.key==="ArrowLeft"){episodeIndex--;renderVideo();}
    if(e.key==="ArrowRight"){episodeIndex++;renderVideo();}
  });
  renderSeries();
}

function escapeHtml(value){
  return String(value??"").replace(/[&<>\"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch]));
}
