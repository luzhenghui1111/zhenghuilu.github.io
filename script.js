const paperDetails={
  "Computationally tuned dual-layer lattice pads adapted to gait-induced pressure distribution":{
    en:"Combining finite element simulation, Gaussian-process surrogate modeling and Bayesian optimization, this study tuned a dual-layer lattice pad to gait-induced forefoot loading and reduced simulated peak plantar pressure by 51.36%.",
    zh:"该研究结合有限元、高斯过程代理模型和贝叶斯优化，根据步态前足压力优化双层晶格垫，并在模拟中将峰值足底压力降低 51.36%。",
    image:"https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44334-025-00055-8/MediaObjects/44334_2025_55_Fig3_HTML.png",
    imageAlt:"Dual-layer lattice pad design and validation figure"
  },
  "Parametric cushioning lattice insole based on finite element method and machine learning: A preliminary computational analysis":{
    en:"This study coupled a controllable parametric lattice insole with finite element simulation and machine learning, identifying an optimized design that reduced plantar pressure by up to 44.45%.",
    zh:"该研究将可控参数化晶格鞋垫与有限元和机器学习结合，筛选出最优结构组合，使足底压力最高降低约 44.45%。"
  },
  "Will this be the next step? A systematic review of 3D printing in footwear biomechanics":{
    en:"This systematic review maps how 3D-printed footwear has been studied for injury prevention, comfort and athletic performance, and highlights key needs for future personalized design.",
    zh:"该系统综述梳理 3D 打印鞋具在损伤预防、舒适性和运动表现中的研究证据，并总结未来个体化设计仍需解决的关键问题。",
    image:"https://www.tandfonline.com/action/showGraphicalAbstractImage?doi=10.1080%2F19424280.2025.2472251&id=tfws_a_2472251_uf0001_c.jpg",
    imageAlt:"Graphical abstract for the 3D-printing footwear systematic review"
  },
  "Pregnancy-related transverse arch deformation: A subject-specific finite element analysis of the contributions of body weight and tissue stiffness":{
    en:"Subject-specific finite element modeling was used to separate the effects of increased body weight and tissue softening on pregnancy-related transverse-arch deformation and plantar loading.",
    zh:"该研究利用个体化有限元模型分离体重增加与组织软化对妊娠相关足横弓变形和足底负荷的贡献。"
  },
  "Foot progression angle modulates knee loading during walking in individuals with flexible flatfoot":{
    en:"Combining musculoskeletal and finite element modeling, this study shows that foot-progression-angle changes redistribute tibiofemoral and medial-meniscus loading, supporting individualized gait modification in flexible flatfoot.",
    zh:"该研究结合肌肉骨骼与有限元建模，发现足进展角调整会重新分配胫股关节和内侧半月板负荷，提示柔性扁平足的步态干预应个体化。"
  },
  "Speed-related increases in plantar tissue stress without affected-side laterality in individuals with unilateral shoulder dislocation":{
    en:"Faster walking increased forefoot and plantar-tissue stresses, but loading remained symmetric relative to the affected shoulder, indicating that speed rather than shoulder-side laterality drove the observed foot mechanics.",
    zh:"该研究发现步行速度增加会提高前足和足底组织应力，但与患侧肩并无明显侧别对应，说明足部力学变化主要由速度而非肩部患侧驱动。"
  },
  "Heterogeneous Neuromuscular Control Strategies in the Soccer Instep Kick: A Cross-Sectional Study of Synergy Structure Mapping Across Skill Levels":{
    en:"Muscle-synergy analysis revealed three shared coordination patterns across skill levels, while more skilled soccer players showed more concentrated and differentiated neuromuscular control during instep kicking.",
    zh:"肌肉协同分析显示不同技能水平共享三类基本协调模式，但高水平足球运动员在脚背踢球中表现出更集中、更分化的神经肌肉控制策略。"
  },
  "Foot progression angle modulates three-dimensional lower-limb biomechanics in flexible flatfoot: Kinematic–kinetic patterns and clinical implications":{
    en:"Changing foot progression angle systematically altered ankle and knee kinematics and kinetics in flexible flatfoot, indicating that toe-in and toe-out strategies create distinct lower-limb loading patterns.",
    zh:"该研究发现足进展角调整会系统改变柔性扁平足人群的踝膝三维运动学与动力学，说明内八和外八步态会形成不同的下肢负荷模式。"
  },
  "The effects of different carbon-fiber plate shapes in shoes on lower limb biomechanics following running-induced fatigue":{
    en:"Curved carbon-fiber plates changed forefoot bending and reduced selected hip and knee joint angles and hip flexion moment after running-induced fatigue.",
    zh:"该研究表明弯曲碳板会改变前足弯曲特征，并在跑步疲劳后降低部分髋膝关节角度及髋屈曲力矩。"
  },
  "Biomechanical effects of asymmetric backpack shoulder straps on the unilateral flatfoot: A finite element analysis":{
    en:"Finite element analysis showed that equal-length backpack straps minimized plantar-fascia and Achilles-tendon stress, whereas asymmetric strap length altered arch mechanics at the cost of higher soft-tissue loading.",
    zh:"有限元结果表明等长肩带可降低足底筋膜和跟腱负荷，而不对称肩带长度虽会改变足弓力学，却增加软组织受力。"
  },
  "Integrating footwear features into fatigue prediction models for marathon runners: A hybrid CNN-LSTM approach":{
    en:"Adding footwear features to a hybrid CNN-LSTM improved marathon fatigue-state prediction from 69% to 85%, while curved carbon plates delayed the onset of semi-fatigue.",
    zh:"将鞋具特征加入 CNN-LSTM 后，马拉松疲劳状态预测准确率由 69% 提升至 85%，同时弯曲碳板可延缓半疲劳状态出现。"
  },
  "Impact of Becker muscular dystrophy on gait patterns: Insights from biomechanical analysis":{
    en:"Biomechanical analysis showed that Becker muscular dystrophy was associated with longer stance, shorter swing, increased rearfoot pressure and reduced forefoot pressure, highlighting distinct compensatory gait patterns.",
    zh:"生物力学分析显示 Becker 肌营养不良与支撑期延长、摆动期缩短、后足压力升高及前足压力降低有关，反映出特征性的代偿步态模式。"
  }
};

function applyLanguage(lang){
  const zh=lang==="zh";
  document.documentElement.lang=zh?"zh-CN":"en";
  document.body.classList.toggle("lang-zh-mode",zh);
  document.body.classList.toggle("lang-en-mode",!zh);
  document.querySelectorAll(".lang-en").forEach(el=>el.hidden=zh);
  document.querySelectorAll(".lang-zh").forEach(el=>el.hidden=!zh);
  document.querySelectorAll('[data-lang="en"]').forEach(b=>{b.classList.toggle("active",!zh);b.setAttribute("aria-pressed",String(!zh))});
  document.querySelectorAll('[data-lang="zh"]').forEach(b=>{b.classList.toggle("active",zh);b.setAttribute("aria-pressed",String(zh))});
  localStorage.setItem("preferredLanguage",zh?"zh":"en");
}

function scholarUrlFor(title,existing){
  if(existing&&existing.includes("scholar.google"))return existing;
  return "https://scholar.google.com/scholar?q="+encodeURIComponent(title);
}

function injectPublicationDetailStyles(){
  if(document.getElementById("publication-detail-runtime-styles"))return;
  const style=document.createElement("style");
  style.id="publication-detail-runtime-styles";
  style.textContent=`
    .publication-detail.has-image{grid-template-columns:minmax(190px,260px) 1fr!important;align-items:start}
    .publication-detail.no-image{grid-template-columns:1fr!important}
    .publication-figure{background:#fff7e8;border:1px solid #b9a980;padding:7px;min-height:120px;display:flex;align-items:center;justify-content:center}
    .publication-figure img{display:block;width:100%;max-height:220px;object-fit:contain;background:#fff}
    .publication-detail .detail-copy p{font-size:14px;line-height:1.75;color:#4e4b41;margin:0 0 10px}
    @media(max-width:640px){.publication-detail.has-image{grid-template-columns:1fr!important}}
  `;
  document.head.appendChild(style);
}

function enhancePublicationItem(item){
  if(item.dataset.enhanced)return;
  const titleWrap=item.querySelector(".publication-title");
  if(!titleWrap)return;
  const oldLink=titleWrap.querySelector("a");
  const title=(oldLink?oldLink.textContent:titleWrap.textContent).trim();
  if(!title)return;
  const existingHref=oldLink?oldLink.href:"";
  const scholar=scholarUrlFor(title,existingHref);
  const summaryEn=item.querySelector(".publication-summary.lang-en")?.textContent.trim()||"This study contributes to my broader work in biomechanics, computational modeling, rehabilitation, or data-driven design.";
  const summaryZh=item.querySelector(".publication-summary.lang-zh")?.textContent.trim()||"该研究属于我在生物力学、计算建模、康复或数据驱动设计方向的工作。";
  const d=paperDetails[title];

  titleWrap.innerHTML="";
  const head=document.createElement("div");
  head.className="publication-head";
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="publication-toggle";
  btn.textContent=title;
  btn.setAttribute("aria-expanded","false");
  const sl=document.createElement("a");
  sl.className="scholar-link";
  sl.href=scholar;
  sl.target="_blank";
  sl.rel="noopener noreferrer";
  sl.textContent="Google Scholar";
  head.append(btn,sl);
  titleWrap.appendChild(head);

  const detail=document.createElement("div");
  detail.className=`publication-detail ${d?.image?"has-image":"no-image"}`;
  detail.hidden=true;
  const figureHtml=d?.image?`<div class="publication-figure"><img src="${d.image}" alt="${d.imageAlt||title}" loading="lazy"></div>`:"";
  const publisherHtml=existingHref&&!existingHref.includes("scholar.google")?`<p><a href="${existingHref}" target="_blank" rel="noopener noreferrer"><span class="lang-en">Publisher / article page →</span><span class="lang-zh">期刊 / 论文页面 →</span></a></p>`:"";
  detail.innerHTML=`${figureHtml}<div class="detail-copy"><p class="lang-en">${d?.en||summaryEn}</p><p class="lang-zh">${d?.zh||summaryZh}</p>${publisherHtml}</div>`;
  item.appendChild(detail);

  const img=detail.querySelector("img");
  if(img){
    img.addEventListener("error",()=>{
      img.closest(".publication-figure")?.remove();
      detail.classList.remove("has-image");
      detail.classList.add("no-image");
    });
  }
  btn.addEventListener("click",()=>{
    detail.hidden=!detail.hidden;
    btn.setAttribute("aria-expanded",String(!detail.hidden));
  });
  item.dataset.enhanced="1";
}

function customizeHomeLinks(){
  if(!location.pathname.endsWith("/")&&!location.pathname.endsWith("index.html"))return;
  const links=[...document.querySelectorAll(".hero .social-links a")];
  const email=links.find(a=>a.textContent.trim()==="Email");
  if(email){email.href="https://space.bilibili.com/49579977?spm_id_from=333.1007.0.0";email.target="_blank";email.rel="noopener noreferrer";email.textContent="Bilibili";}
}

function loadInteriorTheme(){
  const isHome=document.body.classList.contains("home-vintage")||location.pathname.endsWith("/")||location.pathname.endsWith("index.html");
  if(isHome)return;
  const link=document.createElement("link");
  link.rel="stylesheet";
  link.href="interior.css?v=20261003-1";
  document.head.appendChild(link);
}

function normalizeSiteNavigation(){
  document.querySelectorAll('.nav-links a[href="publications.html"]').forEach(a=>a.remove());
  document.querySelectorAll('[data-lang="zh"]').forEach(b=>b.textContent="中");
}

document.addEventListener("DOMContentLoaded",()=>{
  loadInteriorTheme();
  injectPublicationDetailStyles();
  normalizeSiteNavigation();
  customizeHomeLinks();
  document.querySelectorAll(".publication-item").forEach(enhancePublicationItem);
  const lang=localStorage.getItem("preferredLanguage")||"en";
  applyLanguage(lang);
  document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>applyLanguage(b.getAttribute("data-lang"))));
});