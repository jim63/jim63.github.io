$('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// $('#flashMessage').delay(1000);
// $('#flashMessage').slideUp(1000);


const title = "my <h2>first</h2> blog post"
const content = "<h2>this is my <i>first</i> post!</h2>";

console.log($('.blogPage-title').text());


$('#previewButton').click(() => {
  console.log('rrr');
  $('#blogTitlePreview').text($('#blogTitleInput').val());
  $('#blogContentPreview').html($('#blogContentInput').val());
  $('#flashMessage').slideDown(1000)
    .delay(1000)
    .slideUp(1000);

})