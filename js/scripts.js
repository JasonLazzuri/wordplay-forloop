$(document).ready(function(){
  $('#form').submit(function(event){

    var splitSentence = $("#sentence1").val().split(' ');
    var threeOrMore = [];

    splitSentence.forEach(function(word){
      if(word.length>=3){
        threeOrMore.push(word)
      }
    });

    var reversed = threeOrMore.reverse().join(' ')
    alert(reversed)

    event.preventDefault();
  });
});
