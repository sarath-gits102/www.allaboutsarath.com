gsap.registerPlugin(ScrollTrigger);

// Hero text animation
gsap.from(".hero-title span", {
  y:100,
  opacity:0,
  stagger:0.1,
  duration:1
});

// Sub + CTA
gsap.from(".hero-sub", {
  opacity:0,
  y:30,
  delay:0.3
});

gsap.from(".hero-cta", {
  opacity:0,
  scale:0.8,
  delay:0.5
});

// Scroll reveal
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    opacity:0,
    y:80,
    scrollTrigger:{
      trigger:section,
      start:"top 80%"
    }
  });
});

// Logo infinite scroll
gsap.to("#logoSlider", {
  x:"-50%",
  duration:20,
  repeat:-1,
  ease:"linear"
});

// Magnetic buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    gsap.to(btn,{x:x*0.2,y:y*0.2});
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn,{x:0,y:0});
  });
});

// Cursor glow
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:0.2
  });
});