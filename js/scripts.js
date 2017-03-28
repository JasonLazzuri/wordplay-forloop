$(document).ready(function(){
  $('#form').submit(function(event){

    var splitSentence = $("#sentence1").val().split(' ');
    var threeOrMore = [];

    function something(){
      for(var i=0; i < splitSentence.length; i++){
        if(splitSentence[i].length>=3){
          threeOrMore.push(splitSentence[i])
      }
      }
    };
    something();

    var reversed = threeOrMore.reverse().join(' ')
    alert(reversed)

    event.preventDefault();
  });
});

// for(var i=0;i<splitSentence.length;i++){
//   if(splitSentence[i].length>=3){
//     threeOrMore.push(splitSentence[i])
//   }
// }
