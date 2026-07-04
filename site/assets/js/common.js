(function(){
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('gnav');
  toggle.addEventListener('click', function(){
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
