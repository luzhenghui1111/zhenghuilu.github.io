document.addEventListener("DOMContentLoaded",()=>{
  enhanceSocialMediaPosters();
});

async function enhanceSocialMediaPosters(){
  let config=null;
  try{
    const r=await fetch(`assets/bilibili-videos.json?v=${Date.now()}`,{cache:"no-store"});
    if(r.ok)config=await r.json();
  }catch(e){}
  if(!config?.series?.length)return;

  const style=document.createElement("style");
  style.id="social-media-poster-enhance-style";
  style.textContent=`
    .v-media-poster{
      background-color:#1d1c18!important;
      background-position:center!important;
      background-size:cover!important;
      background-repeat:no-repeat!important;
      isolation:isolate;
    }
    .v-media-poster::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:0;
      background:linear-gradient(to bottom,rgba(22,22,19,.34),rgba(22,22,19,.50) 48%,rgba(22,22,19,.64));
      pointer-events:none;
    }
    .v-media-poster-inner{position:relative;z-index:2;text-shadow:0 2px 9px rgba(0,0,0,.52)}
    .v-media-poster-title{color:#fffaf0!important}
    .v-media-poster-kicker{color:#f0d08f!important}
    .v-media-info>.v-media-title{display:none!important}
    .v-media-info{padding-top:14px!important}
  `;
  document.head.appendChild(style);

  const coverCache=new Map();

  function currentVideo(){
    const section=document.querySelector("#social-media");
    if(!section)return null;
    const tabs=[...section.querySelectorAll(".v-media-series-tab")];
    const episodes=[...section.querySelectorAll(".v-media-episode")];
    let si=tabs.findIndex(b=>b.classList.contains("active"));
    let ei=episodes.findIndex(b=>b.classList.contains("active"));
    if(si<0)si=0;
    if(ei<0)ei=0;
    return config.series?.[si]?.videos?.[ei]||null;
  }

  async function fetchCover(bvid){
    if(!bvid)return "";
    if(coverCache.has(bvid))return coverCache.get(bvid);
    try{
      const r=await fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${encodeURIComponent(bvid)}`,{
        mode:"cors",
        credentials:"omit",
        cache:"force-cache"
      });
      const j=await r.json();
      const pic=j?.data?.pic||"";
      coverCache.set(bvid,pic);
      return pic;
    }catch(e){
      coverCache.set(bvid,"");
      return "";
    }
  }

  let token=0;
  async function updatePoster(){
    const poster=document.querySelector("#social-media .v-media-poster");
    if(!poster)return;
    const video=currentVideo();
    if(!video?.bvid)return;
    const myToken=++token;
    const cover=await fetchCover(video.bvid);
    if(myToken!==token)return;
    const livePoster=document.querySelector("#social-media .v-media-poster");
    if(!livePoster)return;
    if(cover){
      livePoster.style.backgroundImage=`url("${cover.replace(/"/g,"%22")}")`;
    }
  }

  const observer=new MutationObserver(()=>{
    window.clearTimeout(observer._t);
    observer._t=window.setTimeout(updatePoster,40);
  });
  observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:["class"]});

  document.addEventListener("click",e=>{
    if(e.target.closest(".v-media-series-tab,.v-media-episode,.v-media-arrow")){
      window.setTimeout(updatePoster,60);
    }
  },true);

  updatePoster();
}
