$(document).ready(function(){

  $('button[name=btnRemoveBook]').on('click', function(event){
    var bookToRemove = event.target.parentElement.parentElement.parentElement.parentElement.id;
    window.location.replace("/books/delete/" + bookToRemove);
  });

});
