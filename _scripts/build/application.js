(function() {
  var animateCollection, setupCollection;

  animateCollection = function(position) {
    return $('.collection-wrapper').animate({
      scrollLeft: position
    });
  };

  setupCollection = function() {
    var collectionScrollLeft, windowWidth;
    windowWidth = $(window).width();
    collectionScrollLeft = windowWidth / 2 - 200;
    $('.collection-container').width(windowWidth - 200);
    $('.collection-right').css({
      left: windowWidth - 200
    });
    $('.collection-wrapper').on("DOMMouseScroll mousewheel", function(event) {
      var $element;
      console.log(event);
      if ($('.collection-left').is(":hover")) {
        $element = $('.collection-left');
      } else {
        $element = $('.collection-right');
      }
      $element.scrollTop($element.scrollTop() - event.originalEvent.wheelDeltaY);
      $element.find('.collection-toggle').css({
        top: $element.scrollTop() + 100
      });
      return false;
    });
    $('[data-collection-toggle]').click(function() {
      var factor, position;
      factor = parseInt($(this).attr('data-collection-toggle'));
      position = windowWidth * factor;
      return animateCollection(position);
    });
    return $('.collection-wrapper').overscroll({
      scrollLeft: collectionScrollLeft,
      wheelDirection: 'vertical'
    });
  };

  $(function() {
    return setupCollection();
  });

}).call(this);
