(function() {
  var animateCollection, setupCollection, setupListing, showListing;

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
      $('.collection-toggle').css({
        left: windowWidth - 200 - $(this).scrollLeft()
      });
      $('.collection-toggle-left').css({
        left: windowWidth - 200 - $(this).scrollLeft() - 25
      });
      if ($(this).scrollTop() > windowHeight / 2) {
        $('.collection-toggle').css({
          top: 0
        });
      } else {
        $('.collection-toggle').css({
          top: windowHeight / 2 - $(this).scrollTop()
        });
      }
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

  showListing = function(element) {
    console.log(element);
    $('.listing-bg').css({
      'background-image': $(element).attr('data-bg')
    });
    return $('.listing-image').css({
      background: $(element).attr('data-image'),
      width: $(element).attr('data-image-width'),
      left: $(element).attr('data-image-left')
    });
  };

  setupListing = function() {
    var waypoint, windowHeight;
    windowHeight = $(window).height();
    waypoint = new Waypoint({
      element: $('[data-listing-1]'),
      handler: function(direction) {
        if (direction === 'down') {
          showListing(this.element);
        }
      },
      offset: 0
    });
    waypoint = new Waypoint({
      element: $('[data-listing-2]'),
      handler: function(direction) {
        if (direction === 'down') {
          showListing(this.element);
        }
      },
      offset: 200
    });
    waypoint = new Waypoint({
      element: $('[data-listing-3]'),
      handler: function(direction) {
        if (direction === 'down') {
          showListing(this.element);
        }
      },
      offset: 200
    });
    waypoint = new Waypoint({
      element: $('[data-listing-4]'),
      handler: function(direction) {
        if (direction === 'down') {
          showListing(this.element);
        }
      },
      offset: 200
    });
    waypoint = new Waypoint({
      element: $('[data-listing-5]'),
      handler: function(direction) {
        if (direction === 'down') {
          showListing(this.element);
        }
      },
      offset: 200
    });
    waypoint = new Waypoint({
      element: $('[data-listing-1]'),
      handler: function(direction) {
        if (direction === 'up') {
          showListing(this.element);
        }
      },
      offset: -200
    });
    waypoint = new Waypoint({
      element: $('[data-listing-2]'),
      handler: function(direction) {
        if (direction === 'up') {
          showListing(this.element);
        }
      },
      offset: -200
    });
    waypoint = new Waypoint({
      element: $('[data-listing-3]'),
      handler: function(direction) {
        if (direction === 'up') {
          showListing(this.element);
        }
      },
      offset: -200
    });
    waypoint = new Waypoint({
      element: $('[data-listing-4]'),
      handler: function(direction) {
        if (direction === 'up') {
          showListing(this.element);
        }
      },
      offset: -200
    });
    return waypoint = new Waypoint({
      element: $('[data-listing-5]'),
      handler: function(direction) {
        if (direction === 'up') {
          showListing(this.element);
        }
      },
      offset: -200
    });
  };

  $(function() {
    setupCollection();
    return setupListing();
  });

}).call(this);
