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
      if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
        console.log("Down");
      } else {
        $element.scrollTop($element.scrollTop() - 15);
        console.log("Up");
      }
      return false;
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
