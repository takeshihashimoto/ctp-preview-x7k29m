(function(){
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('gnav');
  toggle.addEventListener('click', function(){
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();


// ハッシュ付き遷移時、画像・フォント読み込み後の最終レイアウトでアンカー位置へ再スクロール
window.addEventListener('load', function () {
  if (!location.hash) return;
  var el = document.querySelector(location.hash);
  if (!el) return;
  el.scrollIntoView({ behavior: 'instant', block: 'start' });
});
