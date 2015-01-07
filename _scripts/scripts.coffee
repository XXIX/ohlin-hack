animateCollection = (position) ->
  $('.collection-wrapper').animate
      scrollLeft: position

setupCollection = ->
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
    if (($('.collection-right').offset().top + $('.collection-right').height()) >= $(window).height())
      unless $('.collection-right').css('top') == 'auto'
        $('.collection-right').css
          top: 'auto'
    else
      $('.collection-right').css
        top: $(this).scrollTop() - ($('.collection-right').height() - $(window).height())
      console.log 'bottom!'
$ ->
  setupCollection()
