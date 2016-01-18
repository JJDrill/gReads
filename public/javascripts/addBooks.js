$(document).ready(function(){

  $('input[name=title]').blur(function(event){
    if (event.target.value === '') {
      alert("Book title is required.")
      event.target.style.borderColor = 'red';
    } else {
      event.target.style.borderColor = 'black';
    }
  });

  $('input[name=genre]').blur(function(event){
    if (event.target.value === '') {
      alert("Book genre is required.")
      event.target.style.borderColor = 'red';
    } else {
      event.target.style.borderColor = 'black';
    }
  });

  $('input[name=coverImageUrl]').blur(function(event){
    if (event.target.value === '') {
      alert("Book genre is required.")
      event.target.style.borderColor = 'red';
    } else if (event.target.value.indexOf("http://") != 0 &&
               event.target.value.indexOf("https://") != 0) {
      alert("URL must be valid.")
      event.target.style.borderColor = 'red';
    } else {
      event.target.style.borderColor = 'black';
    }
  });

});
