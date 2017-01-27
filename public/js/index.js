for (var i = 0; i < 40; i++) {
    var d = document.createElement('div');
    d.className = 'bubble';
    var a = Math.random() * 15 + 20 + 'px';
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





// (function() {

//     var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

//     // Main
//     initHeader();
//     addListeners();

//     function initHeader() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         target = {x: 0, y: height};

//         largeHeader = document.getElementById('large-header');
//         largeHeader.style.height = height-'px';

//         canvas = document.getElementById('index-canvas');
//         canvas.width = width;
//         canvas.height = height;
//         ctx = canvas.getContext('2d');

//         // create particles
//         circles = [];
//         for(var x = 0; x < width*0.4; x++) {
//             var c = new Circle();
//             circles.push(c);
//         }
//         animate();
//     }

//     // Event handling
//     function addListeners() {
//         window.addEventListener('scroll', scrollCheck);
//         window.addEventListener('resize', resize);
//     }

//     function scrollCheck() {
//         if(document.body.scrollTop > height) animateHeader = false;
//         else animateHeader = true;
//     }

//     function resize() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         largeHeader.style.height = height-'px';
//         canvas.width = width;
//         canvas.height = height;
//     }

//     function animate() {
//         if(animateHeader) {
//             ctx.clearRect(0,0,width,height);
//             for(var i in circles) {
//                 circles[i].draw();
//             }
//         }
//         requestAnimationFrame(animate);
//     }

//     // Canvas manipulation
//     function Circle() {
//         var _this = this;

//         // constructor
//         (function() {
//             _this.pos = {};
//             init();
//         })();

//         function init() {
//             _this.pos.x = Math.random()*width;
//             _this.pos.y = height+Math.random()*200;
//             _this.alpha = 0.1+Math.random()*0.6;
//             _this.scale = 0.1+Math.random()*0.6;
//             _this.velocity = Math.random()*3;
//         }

//         this.draw = function() {
//             if(_this.alpha <= 0) {
//                 init();
//             }
//             _this.pos.y -= _this.velocity;
//             _this.alpha -= 0.0005;
//             ctx.beginPath();
//             ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
//             ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
//             ctx.fill();
//         };
//     }

// })();