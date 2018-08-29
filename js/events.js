function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('.tasty border-color: red;');
  });
}

$(document).ready(function(){

// call functions here

});
