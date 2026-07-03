// Mobile nav toggle
(function(){
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if(!toggle || !links) return;
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
  });
})();

// Draw-in animation for the orbit path in the hero card (respects reduced motion)
(function(){
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var path = document.getElementById('orbit-path');
  if(!path) return;
  if(prefersReduced){ return; }
  var length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect(); // force reflow
  path.style.transition = 'stroke-dashoffset 1.6s ease-out';
  requestAnimationFrame(function(){
    path.style.strokeDashoffset = '0';
  });
})();

// Animate proficiency bars on skills page
(function(){
  var bars = document.querySelectorAll('.prof-fill');
  if(!bars.length) return;
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  bars.forEach(function(bar){
    var target = bar.getAttribute('data-pct') + '%';
    if(prefersReduced){ bar.style.width = target; return; }
    bar.style.width = '0%';
    requestAnimationFrame(function(){
      setTimeout(function(){ bar.style.transition = 'width 1s ease-out'; bar.style.width = target; }, 100);
    });
  });
})();
