animateCollection = (position) ->
  $('.collection-wrapper').animate
      scrollLeft: position

setupCollection = ->
  windowWidth = $(window).width()
  collectionScrollLeft = windowWidth/2 - 200

  $('.collection-container').width(windowWidth - 200)
  $('.collection-right').css
    left: windowWidth - 200

  $('.collection-wrapper').on "DOMMouseScroll mousewheel", (event) ->
    console.log event
    if $('.collection-left').is(":hover")
      $element = $('.collection-left')
    else
      $element = $('.collection-right')

    $element.scrollTop $element.scrollTop() - event.originalEvent.wheelDeltaY
    $element.find('.collection-toggle').css
      top: $element.scrollTop() + 100
    false

  $('[data-collection-toggle]').click ->
    factor = parseInt($(this).attr('data-collection-toggle'))
    position = windowWidth * factor
    animateCollection position


  $('.collection-wrapper').overscroll
   scrollLeft: collectionScrollLeft
   wheelDirection: 'vertical'

$ ->
  setupCollection()
