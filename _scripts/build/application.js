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
    $('.collection-wrapper').scroll(function(event) {
      return console.log(event);
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
