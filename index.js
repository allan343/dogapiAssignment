var dogCount = 0;

'use strict';



function getDogImages(Count) {
    console.log(Count);
  
    let url = 'https://dog.ceo/api/breeds/image/random/' + Count;
    console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error =>{

      console.log(error.message);
      alert('Something went wrong. Try again later.');
    } 
    )
    
}

function displayResults(responseJson) {
  console.log(responseJson);
  let image="";
  //replace the existing image with the new one
  for(let i =0; i< responseJson.message.length;i++)
  {
    image += `<img src="${responseJson.message[i]}" class="results-img">`;
  
  //display the results section
  }
  $('.results-img').html(
    image
   );
  $('.results').removeClass('hidden');
}

function watchForm() {
    var Count;
  $('form').submit(event => {
    Count=$('.dog-number').val();
    event.preventDefault();
    if(Count<=50 && Count>0 )
    {
    getDogImages(Count);
    }
    else{
        alert('you cannot request more than 50 images')
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  $(".dog-number").attr("value", 3);
  watchForm();
});