$( document ).ready(function() {
  $('.more-comments').click( function() {
    $(this).on('ajax:success', function(event) {
      var postId = $(this).data("post-id");
      $("#comments_" + postId).html(event.detail[2].responseText);
      $("#comments-paginator-" + postId).html("<a id='more-comments' data-post-id=" + postId + "data-type='html' data-remote='true' href='/posts/" + postId + "/comments>show more comments</a>");
    });
  });
});

// $( document ).ready(function() {
//   $(".more-comments").click(function () {
//     $(this).on("ajax:success", function (event) {
//       var postId = $(this).data("post-id");
//       $("#comments_" + postId).html(event.detail[2].responseText);
//       $("#comments-paginator-" + postId).html("show more comments");
//       Append.open = true;
//       Append.comment = true;
//       Append.link = false;
//     });
//   });
// });

// $(document).on('turbolinks:load', function(){
//   $('.more-comments').click( function() {
//     $(this).on('ajax:success', function(event) {
//       var postId = $(this).data("post-id");
//       $("#comments_" + postId).html(event.detail[2].responseText);
//       $("#comments-paginator-" + postId).html("<a id='more-comments' data-post-id=" + postId + "data-type='html' data-remote='true' href='/posts/" + postId + "/comments>show more comments</a>");
//     });
//   });
// });