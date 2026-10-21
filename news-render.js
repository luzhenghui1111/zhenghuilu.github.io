(function(){
  const data = Array.isArray(window.NEWS_DATA) ? window.NEWS_DATA : [];

  function esc(v){
    return String(v ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
  }

  function langPair(en, zh, tag="span", cls=""){
    const c = cls ? ` class="${cls}"` : "";
    return `<${tag}${c}><span class="lang-en">${en ?? ""}</span><span class="lang-zh">${zh ?? ""}</span></${tag}>`;
  }

  function renderHome(){
    const root = document.querySelector("[data-news-home]");
    if(!root) return;
    root.innerHTML = data.slice(0,3).map(note => `
      <a class="v-news-card" href="news.html#${esc(note.id)}">
        <div class="v-news-date">${esc(note.date)}</div>
        <h3><span class="lang-en">${note.titleEn}</span><span class="lang-zh">${note.titleZh}</span></h3>
        <p class="lang-en">${note.summaryEn}</p>
        <p class="lang-zh">${note.summaryZh}</p>
      </a>`
    ).join("");
  }

  function bodyBlocks(note){
    return (note.body || []).map(block => {
      if(block.headingEn || block.headingZh){
        return `<h3 class="news-entry-subheading"><span class="lang-en">${block.headingEn || ""}</span><span class="lang-zh">${block.headingZh || ""}</span></h3>`;
      }
      if(block.image){
        const src=esc(block.image);
        return `<figure class="news-inline-figure">
          <a class="news-figure-link" href="${src}" target="_blank" rel="noopener noreferrer" title="Open original image">
            <img src="${src}" alt="${esc(block.altEn || block.altZh || "Paper figure")}" referrerpolicy="no-referrer" loading="lazy" decoding="async">
          </a>
          <a class="news-image-fallback" href="${src}" target="_blank" rel="noopener noreferrer"><span class="lang-en">The image could not be loaded here. Open the original image ↗</span><span class="lang-zh">图片暂时无法加载，点击查看原图 ↗</span></a>
          <figcaption><span class="lang-en">${esc(block.captionEn || "")}</span><span class="lang-zh">${esc(block.captionZh || "")}</span></figcaption>
        </figure>`;
      }
      if(block.link){
        return `<p><a class="news-source-link" href="${esc(block.link)}" target="_blank" rel="noopener noreferrer"><span class="lang-en">${block.linkEn || "Open link →"}</span><span class="lang-zh">${block.linkZh || "打开链接 →"}</span></a></p>`;
      }
      return `<p class="lang-en">${block.en || ""}</p><p class="lang-zh">${block.zh || ""}</p>`;
    }).join("");
  }

  function renderArchive(){
    const root = document.querySelector("[data-news-archive]");
    if(!root) return;
    root.innerHTML = data.map((note, i) => `
      <article class="news-entry ${note.featured || i===0 ? "news-featured" : ""}" id="${esc(note.id)}">
        <div class="news-entry-meta"><span>${esc(note.date)}</span><span class="lang-en">${note.categoryEn || ""}</span><span class="lang-zh">${note.categoryZh || ""}</span></div>
        <h2><span class="lang-en">${note.titleEn}</span><span class="lang-zh">${note.titleZh}</span></h2>
        ${bodyBlocks(note)}
        ${note.sourceUrl ? `<p><a class="news-source-link" href="${esc(note.sourceUrl)}" target="_blank" rel="noopener noreferrer"><span class="lang-en">${note.sourceLabelEn || "Open source →"}</span><span class="lang-zh">${note.sourceLabelZh || "查看来源 →"}</span></a></p>` : ""}
        <div class="news-entry-footer"><span class="lang-en">${note.footerEn || ""}</span><span class="lang-zh">${note.footerZh || ""}</span></div>
      </article>`
    ).join("");
    root.querySelectorAll(".news-inline-figure img").forEach(img => {
      img.addEventListener("error",() => img.closest(".news-inline-figure")?.classList.add("image-unavailable"));
    });
  }

  function init(){
    renderHome();
    renderArchive();
    if(location.hash){
      requestAnimationFrame(() => {
        const el = document.querySelector(location.hash);
        if(el) el.scrollIntoView({behavior:"auto", block:"start"});
      });
    }
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
