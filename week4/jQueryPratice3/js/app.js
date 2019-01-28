const $button = $('<button>Reveal Spoiler</button>')
$('.spoiler').append($button);

$('.spoiler span').hide();
$('.spoiler').on('click', 'button', (event) => {
  console.log(event.target);

  $(event.target).prev().show();
  $(event.target).hide();
})