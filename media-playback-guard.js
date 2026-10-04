(()=>{
  const PLAYER_SELECTOR="#social-media .v-media-player iframe";

  const addStyles=()=>{
    if(document.getElementById("media-playback-guard-style"))return;
    const style=document.createElement("style");
    style.id="media-playback-guard-style";
    style.textContent=`
      .v-media-player{position:relative}
      .v-media-play-guard{position:absolute;inset:0;z-index:4;display:flex;align-items:center;justify-content:center;background:#171717;cursor:pointer}
      .v-media-play-guard.hidden{display:none}
      .v-media-play-button{display:flex;align-items:center;gap:10px;border:1px solid rgba(255,247,232,.82);background:rgba(255,247,232,.92);color:#35442f;padding:13px 21px;border-radius:999px;font-family:"Arial Narrow",Arial,sans-serif;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.22)}
      .v-media-play-button:hover{background:#e49a33;border-color:#e49a33;color:#26231f}
      .v-media-play-icon{font-size:18px;line-height:1}
    `;
    document.head.appendChild(style);
  };

  const ensureGuard=(iframe)=>{
    const player=iframe.closest(".v-media-player");
    if(!player)return null;
    let guard=player.querySelector(".v-media-play-guard");
    if(!guard){
      guard=document.createElement("div");
      guard.className="v-media-play-guard";
      guard.innerHTML=`<button class="v-media-play-button" type="button"><span class="v-media-play-icon">▶</span><span class="lang-en">Play video</span><span class="lang-zh">播放视频</span></button>`;
      player.appendChild(guard);
      guard.addEventListener("click",()=>{
        const target=player.querySelector("iframe");
        const src=target?.dataset.pendingSrc;
        if(!target||!src)return;
        guard.classList.add("hidden");
        target.src=src;
        target.dataset.userStarted="1";
      });
    }
    return guard;
  };

  const resetIframe=(iframe,src)=>{
    if(!iframe)return;
    if(src)iframe.dataset.pendingSrc=src;
    iframe.dataset.userStarted="0";
    const guard=ensureGuard(iframe);
    guard?.classList.remove("hidden");
    if(iframe.getAttribute("src"))iframe.removeAttribute("src");
  };

  const intercept=(iframe)=>{
    if(!iframe||iframe.matches("[data-playback-guard-ready]"))return;
    iframe.setAttribute("data-playback-guard-ready","1");
    const initial=iframe.getAttribute("src");
    if(initial)resetIframe(iframe,initial);

    const obs=new MutationObserver(()=>{
      const src=iframe.getAttribute("src");
      if(!src)return;
      if(iframe.dataset.userStarted==="1")return;
      resetIframe(iframe,src);
    });
    obs.observe(iframe,{attributes:true,attributeFilter:["src"]});
  };

  const scan=()=>document.querySelectorAll(PLAYER_SELECTOR).forEach(intercept);

  addStyles();
  const rootObserver=new MutationObserver(scan);
  rootObserver.observe(document.documentElement,{childList:true,subtree:true});
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",scan,{once:true});
  else scan();
})();
