if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  $('.dark-mode').addClass('dark-mode-active');
} else {
  $('.dark-mode').removeClass('dark-mode-active');
}
