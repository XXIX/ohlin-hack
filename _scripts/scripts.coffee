setupCollection = ->
  windowWidth = $(window).width()
  collectionScrollLeft = windowWidth/2 - 100

  $('.collection-container').width(windowWidth - 100)
  $('.collection-right').css
    left: windowWidth - 100

  $('.collection-wrapper').scroll (event) ->
    console.log event

  $('.collection-wrapper').overscroll
   scrollLeft: collectionScrollLeft
   wheelDirection: 'vertical'

$ ->
  setupCollection()
