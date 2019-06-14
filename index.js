var dogCount = 0;

'use strict';



function getDogImages(Count) {
    console.log(Count);
    for(let i=0; i<Count; i++)
    {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    }
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').append(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
    var Count;
  $('form').submit(event => {
    Count=$('.dog-number').val();
    event.preventDefault();
    getDogImages(Count);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  $(".dog-number").attr("value", 3);
  watchForm();
});