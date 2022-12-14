$( window ).on('scroll', function(){

  var scrollTop = $(this).scrollTop();
  $( '.hscroll' ).css({
    transform: 'translateX('+  ( -1 * scrollTop ) +'px)',
  });

});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('in-viewport');
            } else {
              entry.target.classList.remove('in-viewport');
            }
          });
        
    });
});

const hiddenElements = document.querySelectorAll('.hidden:not([class*="circle"]');

hiddenElements.forEach((el) => observer.observe(el));


$(window).on('scroll', function () {
    let height = $('body').height();
    let scroll = $(document).scrollTop();

    calcPositionOnViewPort($('.div1'), 0.8);
    calcPositionOnViewPort($('.div2'), 0.8);
    calcPositionOnViewPort($('.div3'), 0.8);
});

function calcPositionOnViewPort(el, mult) {
 let scrollPos = $(document).scrollTop();
let viewPortHeight = $(window).height();
let elementScrollPos = $(el).offset().top;


if((scrollPos + viewPortHeight) >  elementScrollPos) {
let moveVal = (scrollPos + viewPortHeight - elementScrollPos) * mult;
if($(el).hasClass('move-left')) {
    $(el).find('.move').css({
            left: -350 + Math.min(350, moveVal)
        });
}
else if($(el).hasClass('move-right')) {
    $(el).find('.move').css({
            right: -350 + Math.min(350, moveVal)
        });
}
else if($(el).hasClass('move-right2')) {
  $(el).find('.move').css({
          right: -350 + Math.min(350, moveVal)
      });
}
}
}







/* work in this

window.onscroll = function (e) {
  var vertical_position = 0;
  if (pageYOffset)//usual
    vertical_position = pageYOffset;
  else if (document.documentElement.clientHeight)//ie
    vertical_position = document.documentElement.scrollTop;
  else if (document.body)//ie quirks
    vertical_position = document.body.scrollTop;

  var your_div = document.getElementById('some_div');
  your_div.style.top = (vertical_position + 200) + 'px';//200 is arbitrary.. just to show you could now position it how you want
}
*/