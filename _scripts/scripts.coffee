setupCollection = ->
  windowWidth = $(window).width()
  collectionScrollLeft = windowWidth/2 - 100

  $('.collection-container').width(windowWidth - 100)
  $('.collection-right').css
    left: windowWidth - 100

  $('.collection-wrapper').on "DOMMouseScroll mousewheel", (event) ->
    console.log event
    if $('.collection-left').is(":hover")
      $element = $('.collection-left')
    else
      $element = $('.collection-right')

    $element.scrollTop $element.scrollTop() - event.originalEvent.wheelDeltaY
    if event.originalEvent.detail > 0 or event.originalEvent.wheelDelta < 0 #alternative options for wheelData: wheelDeltaX & wheelDeltaY
      #scroll down
      console.log "Down"
    else
      #scroll up
      $element.scrollTop $element.scrollTop() - 15
      console.log "Up"
    #prevent page fom scrolling
    false


  $('.collection-wrapper').overscroll
   scrollLeft: collectionScrollLeft
   wheelDirection: 'vertical'

$ ->
  setupCollection()
