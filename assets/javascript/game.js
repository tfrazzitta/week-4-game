var GeneratedNumber= Math.floor((Math.random() * 101)+19);
  var counter = 0;
  var YourScore =0;
 // var imageSrc = ["assets/images/luigi.png", "assets/images/princess.png", "assets/images/bowser.png", "assets/images/mario.png"];

  var win =0;
  var loss =0;
  //var objArray= [];
  $("#random-number").html(GeneratedNumber);
  var luigiNumber= Math.floor((Math.random()* 11)+1);
  var peachNumber= Math.floor((Math.random()* 11)+1);
  var bowserNumber= Math.floor((Math.random()* 11)+1);
  var marioNumber= Math.floor((Math.random()* 11)+1);
  
  
  // for(i=0; i < 4; i++){    ///// trying something different
  // var image = {
  // number:Math.floor((Math.random()* 11)+1),
  // src: imageSrc[i],
  // };
  // objArray.push(image);

  // var Pics = $("<img>");
  // Pics.addClass("gem"); ///create a class in images called gems
  // Pics.attr("src", image.src);
  // Pics.attr("data", image.number);
  // $("#images").append(Pics);
  // }
  
$("#luigi").on("click", function(){
YourScore= YourScore + luigiNumber;
$("#your-score").html(YourScore);
decision()
});

$("#peach").on("click", function(){
YourScore= YourScore + peachNumber;
$("#your-score").html(YourScore);
decision()
});

$("#bowser").on("click", function(){
YourScore= YourScore + bowserNumber;
$("#your-score").html(YourScore);
decision()
});

$("#mario").on("click", function(){
YourScore= YourScore + marioNumber;
$("#your-score").html(YourScore);
decision()
});


  function PlayAgain(){
  var b = confirm("Would you like to play again?");
  if( b === true){
  Reset();
  }
  };


  function Reset(){
  counter = 0;
  luigiNumber= Math.floor((Math.random()* 11)+1);
  peachNumber= Math.floor((Math.random()* 11)+1);
  bowserNumber= Math.floor((Math.random()* 11)+1);
  marioNumber= Math.floor((Math.random()* 11)+1);
  YourScore =0;
  $("#win-loss").html("")
  $("#random-number").html(GeneratedNumber);
  $("#your-score").html(YourScore);
  };
 


  function decision(){

  if (YourScore === GeneratedNumber) {
  win ++;
  $("#win-loss").html("<img src= assets/images/0e66cc5434981f41879043d6bac6739b.png>");
  $('#audio1')[0].play();
  $("#wins").html(win);
  setTimeout(PlayAgain, 6000);
  }


 else if (YourScore >= GeneratedNumber){
 loss ++;
 $("#win-loss").html("<img src= assets/images/30fc19c7812d9707c41d094c697836c9.png>");
 $('#audio')[0].play();
 $("#loses").html(loss);
 $("#your-score").html(" ");
 setTimeout(PlayAgain, 4000)
  }
};