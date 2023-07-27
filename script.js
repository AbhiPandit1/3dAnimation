var crsr = document.querySelector('#cursor');
var crsblur = document.querySelector('#cursor-blur');

document.addEventListener('mousemove', (dets) => {
  crsr.style.left = dets.x + 'px';
  crsr.style.top = dets.y + 'px';

  crsblur.style.left = dets.x - 250 + 'px';
  crsblur.style.top = dets.y - 250 + 'px';
});

gsap.to('#nav', {
  backgroundColor: '#000',
  height: '100px',
  duration: 0.5,
  scrollTrigger: {
    trigger: '#nav',
    scroller: 'body',
    start: 'top -10%',
    end: 'top -11%',
    scrub: 1,
  },
});

gsap.to('#main', {
  backgroundColor: '#000',
  scrollTrigger: {
    trigger: '#main',
    scroller: 'body',
    start: 'top -25%',
    end: 'top -70%',
    scrub: 2,
  },
});
