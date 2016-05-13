//////
//Ya, I know... this code could use some help, but i just whipped this up for proof of conecpt ^–^
/////
(function($){
  var words = ["Boom!" , "Booya!"  , "All Good!" , "Right on!"];
  var feedback = $(".feedback-box");
  
  //Feedback Toggle
	$("#feedback").on("click" , function(){
		feedback.addClass("show");
	});
  
  //Close Trigger
	$(".close").on("click" , function(){
    feedback.removeClass("show");
    setTimeout(function(){ 
      feedback.removeClass("show-confirm").find("textarea").val('');
      console.log("reset")
    }, 1000);
	});

//Submit
  $("#submit").on("click" , function(){
     if( !$("textarea").val() ) {
		
       feedback.addClass("error");
       setTimeout(function(){
         feedback.removeClass("error");
       }, 500)
    }else{
		postContactToGoogle();
      feedback.addClass("show-confirm");
      var randomWord = words[Math.floor(Math.random() * words.length)];
      $(".feedback-box h1 strong").text(randomWord);
      
      setTimeout(function(){
         feedback.removeClass("show").find("textarea").val('').delay(1000);
      },2000);
      
       setTimeout(function(){
         feedback.removeClass("show-confirm");
      },2200);
    }
  })

   function postContactToGoogle(event) {
        var suggestion_text = $('textarea').val();
          $.ajax({
                url: "https://docs.google.com/forms/d/1yvWSaStMoXpL-ktL229gLB-UQvF68FTvFYfpb1wvEyI/formResponse",
                data: { "entry_1805312605": suggestion_text },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                      
                    },
                    200: function () {
                        
                    }
                }
            });

    }
  
  
  })(jQuery);


