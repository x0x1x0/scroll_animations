
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

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));




$(document).ready(function () {
    var $horizontal = $('.horizontal');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = ( 2 * scrollPercent * ($(document).width() - $horizontal.width()));
        
        $horizontal.css({
            'left': position
        });
    });
});



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