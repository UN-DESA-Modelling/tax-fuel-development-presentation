function endGuide() {
  $(document).ready(function() {
    $.fn.fullpage.moveTo(6);
  })
}

function upArrow() {
  $(document).ready(function() {
    $.fn.fullpage.moveSectionUp();
  })
}

function downArrow() {
  $(document).ready(function() {
    $.fn.fullpage.moveSectionDown();
  })
}

$(document).ready(function() {

  $('[data-toggle="tooltip"]').tooltip()

  //disable fullpage in mobile
  if (window.innerWidth > 480) {
    $('#fullpage').fullpage({
      'verticalCentered': true,
      'css3': true,
      'navigation': true,
      'navigationPosition': 'right',
      'navigationTooltips': ['Home', 'Informing Development Policies', 'Interpreting Result', 'Policy Scenarios', 'Modelling Strategy', 'How to Use This Tool'],

      'afterLoad': function(anchorLink, index) {

      },

      'onLeave': function(index, nextIndex, direction) {
        $('.overlay').removeClass('animated fadeIn');

        if (nextIndex == 5) { //last page
          $('#playground-overlay').addClass('animated fadeIn');
          $('#buttonHolder').css("display", "none");
          $('#bottomArrow').css("display", "none");
          $('#staticButton').css("display", "");
        } else {
          $('#buttonHolder').css("display", "");
          $('#bottomArrow').css("display", "");
          $('#staticButton').css("display", "none");
        }
        if (nextIndex == 1) {
          $('#topArrow').css("display", "none");
          $('#arrowDown').css("display", "none");
          $('#scrollText').css('display', '')
          $('#landingButton').css('display', '')
        } else {
          $('#topArrow').css("display", "");
          $('#arrowDown').css("display", "");
          $('#scrollText').css('display', 'none')
          $('#landingButton').css('display', 'none')
        }
      }
    });

  }


});
