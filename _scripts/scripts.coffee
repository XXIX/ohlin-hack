animateCollection = (position) ->
  $('.collection-wrapper').animate
      scrollLeft: position

setupCollection = ->
  windowHeight = $(window).height()
  windowWidth = $(window).width()
  collectionScrollLeft = windowWidth/2 - 200

  $('.collection-container').width(windowWidth - 200)

  $('.collection-right').css
    left: windowWidth - 200

  $('.collection-wrapper').height $('.collection-right').height()

  $('[data-collection-toggle]').click ->
    factor = parseInt($(this).attr('data-collection-toggle'))
    position = windowWidth * factor
    animateCollection position

  $('.collection-wrapper').overscroll
   scrollLeft: collectionScrollLeft

  $('.collection-wrapper').scroll ->
    $('.collection-toggle').css
      left: windowWidth - 200 - $(this).scrollLeft()

    $('.collection-toggle-left').css
      left: windowWidth - 200 - $(this).scrollLeft() - 25

    if $(this).scrollTop() > windowHeight/2
      $('.collection-toggle').css
        top: 0
    else
      $('.collection-toggle').css
        top: windowHeight/2 - $(this).scrollTop()

    if !(($('.collection-right').offset().top + $('.collection-right').height()) >= $(window).height())
      $('.collection-right').css
        'margin-top': $(this).scrollTop() - ($('.collection-right').height() - $(window).height())

    else if ($('.collection-right').offset().top + $(window).height() >= $(window).height())
      $('.collection-right').css
        'margin-top': $(this).scrollTop()

showListing = (element) ->
  console.log element
  $('.listing-bg').css
    background: $(element).attr('data-bg')

  $('.listing-image').css
    background: $(element).attr('data-image')
    width: $(element).attr('data-image-width')
    left: $(element).attr('data-image-left')

setupListing = ->
  windowHeight = $(window).height()

  waypoint = new Waypoint(
    element: $('[data-listing-1]')
    handler: (direction) ->
      if direction == 'down'
        showListing(this.element)
      return

    offset: 0
  )

  waypoint = new Waypoint(
    element: $('[data-listing-2]')
    handler: (direction) ->
      if direction == 'down'
        showListing(this.element)
      return

    offset: 200
  )

  waypoint = new Waypoint(
    element: $('[data-listing-3]')
    handler: (direction) ->
      if direction == 'down'
        showListing(this.element)
      return

    offset: 200
  )

  waypoint = new Waypoint(
    element: $('[data-listing-1]')
    handler: (direction) ->
      if direction == 'up'
        showListing(this.element)
      return

    offset: -200
  )

  waypoint = new Waypoint(
    element: $('[data-listing-2]')
    handler: (direction) ->
      if direction == 'up'
        showListing(this.element)
      return

    offset: -200
  )

  waypoint = new Waypoint(
    element: $('[data-listing-3]')
    handler: (direction) ->
      if direction == 'up'
        showListing(this.element)
      return

    offset: -200
  )

$ ->
  setupCollection()
  setupListing()
