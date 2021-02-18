  $(window).on('load', function(){
    $.instagramFeed({
      'username': 'sydney.kit.anim',
      'container': "#instagram-feed",
      'display_profile': true,
      'display_biography': true,
      'display_igtv': false,
      'items': 9,
      'items_per_row': 3,
      'display_captions': true,


    });
  });