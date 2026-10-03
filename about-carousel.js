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

  const figures=[
    [".v-round-visual.pressure","assets/research-featured-1.jpg","Finite element foot model and radiographic reference from the featured study"],
    [".v-round-visual.lattice","assets/research-featured-2.jpg","Footwear lattice structure and unit-cell design from the featured study"],
    [".v-round-visual.printing","assets/research-featured-3.jpg","Graphical abstract of the 3D-printing footwear biomechanics review"]
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
});
