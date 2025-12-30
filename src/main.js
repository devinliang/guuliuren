const slides = Array.from(document.querySelectorAll('.carousel__slide'));
const prevBtn = document.querySelector('.carousel__control.prev');
const nextBtn = document.querySelector('.carousel__control.next');
const indicators = Array.from(document.querySelectorAll('.indicator'));
let current = 0;
let timer = null;
const INTERVAL = 5000;

function goTo(index){
  slides.forEach((s,i)=>{
    const active = i === index;
    s.classList.toggle('active', active);
    s.setAttribute('aria-hidden', (!active).toString());
  });
  indicators.forEach((btn,i)=>btn.classList.toggle('active', i===index));
  current = index;
}

function next(){
  goTo((current+1)%slides.length);
}
function prev(){
  goTo((current-1+slides.length)%slides.length);
}

nextBtn.addEventListener('click', ()=>{
  reset(); next();
});
prevBtn.addEventListener('click', ()=>{
  reset(); prev();
});

indicators.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const idx = Number(btn.dataset.slide);
    reset(); goTo(idx);
  });
});

function start(){
  timer = setInterval(next, INTERVAL);
}
function reset(){
  clearInterval(timer);
  start();
}

// Start carousel when DOM loaded
start();

// Pause on hover for better UX
const carouselEl = document.querySelector('.carousel');
carouselEl.addEventListener('mouseenter', ()=>clearInterval(timer));
carouselEl.addEventListener('mouseleave', ()=>start());
