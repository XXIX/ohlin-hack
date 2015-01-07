(function() {
  var animateCollection, setupCollection;

  animateCollection = function(position) {
    return $('.collection-wrapper').animate({
      scrollLeft: position
    });
  };

  setupCollection = function() {
    var collectionScrollLeft, windowHeight, windowWidth;
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    collectionScrollLeft = windowWidth / 2 - 200;
    $('.collection-container').width(windowWidth - 200);
    $('.collection-right').css({
      left: windowWidth - 200
    });
    $('.collection-toggle').css({
      top: windowHeight / 2
    });
    $('.collection-wrapper').height($('.collection-right').height());
    $('[data-collection-toggle]').click(function() {
      var factor, position;
      factor = parseInt($(this).attr('data-collection-toggle'));
      position = windowWidth * factor;
      return animateCollection(position);
    });
    $('.collection-wrapper').overscroll({
      scrollLeft: collectionScrollLeft
    });
    return $('.collection-wrapper').scroll(function() {
      console.log($('.collection-wrapper').scrollTop());
      if (!(($('.collection-right').offset().top + $('.collection-right').height()) >= $(window).height())) {
        return $('.collection-right').css({
          'margin-top': $(this).scrollTop() - ($('.collection-right').height() - $(window).height())
        });
      } else if ($('.collection-right').offset().top + $(window).height() >= $(window).height()) {
        return $('.collection-right').css({
          'margin-top': $(this).scrollTop()
        });
      }
    });
  };

  $(function() {
    return setupCollection();
  });

}).call(this);
