document.addEventListener("DOMContentLoaded",()=>{
  const root=document.querySelector("[data-about-carousel]");
  if(root){
    const slides=[...root.querySelectorAll(".about-carousel-slide")];
    const prev=root.querySelector(".about-carousel-btn.prev");
    const next=root.querySelector(".about-carousel-btn.next");
    const dotsWrap=root.querySelector(".about-carousel-dots");
    const counter=root.querySelector(".about-carousel-counter");
    let index=0;
    let timer=null;

    const dots=slides.map((_,i)=>{
      const b=document.createElement("button");
      b.type="button";
      b.className="about-carousel-dot";
      b.setAttribute("aria-label",`Show photo ${i+1}`);
      b.addEventListener("click",()=>{show(i);restart();});
      dotsWrap.appendChild(b);
      return b;
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

    show(0);
    start();
  }

  // Featured research: use the user's original paper figures rather than
  // generated placeholder graphics. The image data are kept as small text
  // assets so GitHub Pages can load them reliably through the same repository.
  const researchFigures=[
    [".v-round-visual.pressure","assets/research-featured-1.b64","Finite element foot model and radiographic reference from the featured study"],
    [".v-round-visual.lattice","assets/research-featured-2.b64","Footwear lattice structure and unit-cell design from the featured study"],
    [".v-round-visual.printing","assets/research-featured-3.b64","Graphical abstract of the 3D-printing footwear biomechanics review"]
  ];

  researchFigures.forEach(async([selector,path,alt])=>{
    const frame=document.querySelector(selector);
    if(!frame)return;
    try{
      const b64=(await fetch(path,{cache:"force-cache"}).then(r=>r.text())).trim();
      if(!b64)return;
      frame.classList.add("paper-figure");
      frame.innerHTML="";
      const img=document.createElement("img");
      img.src=`data:image/jpeg;base64,${b64}`;
      img.alt=alt;
      img.loading="eager";
      frame.appendChild(img);
    }catch(e){
      console.warn("Could not load featured research image",path,e);
    }
  });
});
