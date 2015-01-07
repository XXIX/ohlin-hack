(function() {
  var setupCollection;

  setupCollection = function() {
    var collectionScrollLeft, windowWidth;
    windowWidth = $(window).width();
    collectionScrollLeft = windowWidth / 2 - 100;
    $('.collection-container').width(windowWidth - 100);
    $('.collection-right').css({
      left: windowWidth - 100
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
      return $('.collection-wrapper').animate({
        scrollLeft: position
      });
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
