$(function () {
  $('p.inviewOne').one('inview', function (event, visible) {
    if (visible) {
      $(this).text('Single bound found - I won\'t change again.');
    }
  });

  $('p.inview').bind('inview', function (event, visible) {
    if (visible) {
      $(this).text('Yay! You can see me!');
    } else {
      $(this).text('Hidden again. Muhahah!');
    }
  });
});
