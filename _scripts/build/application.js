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
      if (($('.collection-right').offset().top + $('.collection-right').height()) >= $(window).height()) {
        if ($('.collection-right').css('top') !== 'auto') {
          return $('.collection-right').css({
            top: 'auto'
          });
        }
      } else {
        $('.collection-right').css({
          top: $(this).scrollTop() - ($('.collection-right').height() - $(window).height())
        });
        return console.log('bottom!');
      }
    });
  };

  $(function() {
    return setupCollection();
  });

}).call(this);
