// Manipulasi style pada 5 elemen dengan 10 properti

(function() {
  const targets = document.querySelectorAll('.target');
  const applyBtn = document.getElementById('applyBtn');
  const randomBtn = document.getElementById('randomBtn');
  const resetBtn = document.getElementById('resetBtn');

  const initialStyles = Array.from(targets).map(el => {
    const s = window.getComputedStyle(el);
    return {
      color: s.color,
      backgroundColor: s.backgroundColor,
      fontSize: s.fontSize,
      fontFamily: s.fontFamily,
      textAlign: s.textAlign,
      letterSpacing: s.letterSpacing,
      lineHeight: s.lineHeight,
      transform: s.transform,
      opacity: s.opacity,
      boxShadow: s.boxShadow
    };
  });

  function styleForIndex(i) {
    const styles = [
      { color:'#f8d5b8ff', bg:'#794500ff', fontSize:'36px', fontFamily:'Georgia, serif', textAlign:'left', letterSpacing:'0.6px', lineHeight:'1.1', transform:'translateX(0)', opacity:'1', boxShadow:'0 6px 18px rgba(59,130,246,0.12)' },
      { color:'#dc6a6aff', bg:'#a30000ff', fontSize:'30px', fontFamily:'Segoe UI, Tahoma, sans-serif', textAlign:'center', letterSpacing:'0.4px', lineHeight:'1.2', transform:'translateY(0)', opacity:'0.95', boxShadow:'0 8px 22px rgba(0,0,0,0.06)' },
      { color:'#7c5500ff', bg:'#ffe8b5ff', fontSize:'26px', fontFamily:'Courier New, monospace', textAlign:'right', letterSpacing:'0.8px', lineHeight:'1.15', transform:'scale(1)', opacity:'0.98', boxShadow:'0 4px 12px rgba(123,44,191,0.08)' },
      { color:'#edf8b5ff', bg:'#d6af02ff', fontSize:'22px', fontFamily:'Trebuchet MS, sans-serif', textAlign:'left', letterSpacing:'0.3px', lineHeight:'1.25', transform:'rotate(-1deg)', opacity:'0.97', boxShadow:'0 10px 30px rgba(6,95,70,0.06)' },
      { color:'#e8fe20ff', bg:'#959000ff', fontSize:'20px', fontFamily:'Arial, sans-serif', textAlign:'center', letterSpacing:'0.2px', lineHeight:'1.3', transform:'rotate(0deg) scale(1)', opacity:'0.96', boxShadow:'0 6px 16px rgba(112, 46, 112, 0.06)' }
    ];
    return styles[i % styles.length];
  }

  function applyStyles() {
    targets.forEach((el, i) => {
      const s = styleForIndex(i);
      el.style.color = s.color;
      el.style.backgroundColor = s.bg;
      el.style.fontSize = s.fontSize;
      el.style.fontFamily = s.fontFamily;
      el.style.textAlign = s.textAlign;
      el.style.letterSpacing = s.letterSpacing;
      el.style.lineHeight = s.lineHeight;
      el.style.transform = s.transform;
      el.style.opacity = s.opacity;
      el.style.boxShadow = s.boxShadow;
    });
  }

  function randomizeStyles() {
    const rand = (min, max) => Math.round(Math.random() * (max - min) + min);
    targets.forEach(el => {
      el.style.color = `rgb(${rand(10,200)},${rand(10,200)},${rand(10,200)})`;
      el.style.backgroundColor = `rgba(${rand(200,255)},${rand(200,255)},${rand(200,255)},0.6)`;
      el.style.fontSize = `${rand(18,44)}px`;
      const fonts = ['Arial','Georgia','Courier New','Segoe UI','Trebuchet MS','Verdana'];
      el.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
      el.style.textAlign = ['left','center','right'][Math.floor(Math.random()*3)];
      el.style.letterSpacing = `${(Math.random()*1).toFixed(2)}px`;
      el.style.lineHeight = `${(1+Math.random()*0.6).toFixed(2)}`;
      el.style.transform = `rotate(${rand(-3,3)}deg) scale(${(0.9+Math.random()*0.25).toFixed(2)})`;
      el.style.opacity = `${(0.85+Math.random()*0.15).toFixed(2)}`;
      el.style.boxShadow = `0 ${rand(4,18)}px ${rand(8,30)}px rgba(0,0,0,0.08)`;
    });
  }

  function resetStyles() {
    targets.forEach((el, i) => {
      const s = initialStyles[i];
      Object.assign(el.style, s);
    });
  }

  applyBtn.addEventListener('click', applyStyles);
  randomBtn.addEventListener('click', randomizeStyles);
  resetBtn.addEventListener('click', resetStyles);
})();
