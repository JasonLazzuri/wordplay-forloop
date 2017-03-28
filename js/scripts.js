$(document).ready(function(){
  $('#form').submit(function(event){

    var splitSentence = $("#sentence1").val().split(' ');
    var threeOrMore = [];

    var something = function(){
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


function hello(str){
var puzzle = ""
var split = str.split('');
for(var i=0;i<split.length;i++){
	if(split[i]==="a" ||split[i]==="e" ||split[i]==="i" ||split[i]==="o" 	||split[i]==="u"){
  puzzle+="-"
  }else{
  puzzle += split[i]
    }
  } alert(puzzle)
}
