///////////////////////////////////////////////////////////////////////////////
//CLICK LISTENERS to li's
//CHECK OFF specific todos by clicking
//
// $('li').on('click', function(e) {
//   //if li is grey go black
//   //else grey
//   if($(this).css('color') === 'rgb(128, 128, 128)') {
//     $(this).css({
//       color: 'black',
//       textDecoration: 'none'
//     });
//   } else {
//     $(this).css({
//       color: 'grey',
//       textDecoration: 'line-through'
//     });
//   }
// })
// === && Much easier!===
$('ul').on('click', 'li', function(e) {
  $(this).toggleClass('completed');
})
////////////////////////////////////////////////////////////////////////////////
//CLICK LISTENER on X
//DELETE Todo
$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    // this refers to span
    $(this).remove();
    //this refers to the li because of parent() is on li
  });
  e.stopPropagation();
})
///////////////////////////////////////////////////////////////////////////////
//NEW TODO
//ADD LISTENER TO TEXT INPUT
$('input[type= text]').on('keypress', function(e) {
  if(event.which === 13){
    let todoText = $(this).val();
    $(this).val('');
    //create a new li
    //append()
    $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>')
  }
})
///////////////////////////////////////////////////////////////////////////////////
$('.fa-brain').on('click', function(e) {
  $("input[type=text]").fadeToggle();
})
