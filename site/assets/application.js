(function() {
  var setupCollection;

  setupCollection = function() {
    return $('.wrapper').scrollLeft($(window).width() / 2);
  };

  $(function() {
    return setupCollection();
  });

  $(window).load(function() {});

}).call(this);
