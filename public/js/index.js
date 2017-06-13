for (var i = 0; i < 30; i++) {
    var d = document.createElement('div');
    d.className = 'bubble';
    var a = Math.random() * 10 + 10 + 'px';
    d.style.width = a;d.style.height = a;
    d.style.bottom = Math.random() * 500 + 'px';d.style.left = Math.random() * document.body.offsetWidth + 'px';
    document.body.appendChild(d);Animate(d)
}

function Animate(a) {
  $(a).animate({
    bottom: document.body.offsetHeight + 'px',
  }, Math.random() * 6000 + 1000, 'linear', function() {
    a.style.bottom = '0px';Animate(a)
  });
}

$('.color').click(function(){
    $('.bubble').css("background-color", $(this).attr('id'));
});

