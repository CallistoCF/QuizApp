$(document).ready(function(){
	var a = "";
	var $questionnumber = 0;
    var correct = 0;
	$("#StartButton").submit(function(e) {	
		console.log("Start Button Clicked!");
		e.preventDefault();
		showq($questionnumber);
	});

	$( function() {
    $( "#scoreslider" ).progressbar({
      value: 37
    });
  } );
	$( "#scoreslider" ).progressbar({
  		create: function( event, ui ) {}
	});
    $( "#scoreslider" ).progressbar({	
  		max: 6
	});
    $( "#scoreslider" ).progressbar({
  		value: 0
	});
    

	

	$("input:checkbox").on('click', function() {
		var $box = $(this);
		a = $(this).attr("val");
		console.log(a);
		if ($box.is(":checked")) {
			var group = "input:checkbox[name='" + $box.attr("name") + "']";
			$(group).prop("checked", false);
			$box.prop("checked", true);
		} else {
			$box.prop("checked", false);
		}
		
	});

	$("#answerbutton").submit(function(e) {
		console.log("Submit Button Clicked");
		e.preventDefault();
		qn = $questionnumber;
		checkanswer(qn, a, correct);
		showq($questionnumber);
		$questionnumber += 1;
        console.log("number of correct is now " + returnscore(correct));
		updateq($questionnumber, correct);
		showq($questionnumber);
	});

});


function showq($questionnumber){
	
	console.log("Showing question #" + $questionnumber);
	//$("#question" + $questionnumber).toggle("slow");	
	$(".Question").toggle("slow");
	$(".QuestionImg").toggle("slow");
	$(".AnswerBox").toggle("slow");
	$(".AnwserCheckBox").toggle("slow");
	$(".bottomcrawl").toggle("slow");
	$(".submitanswer").toggle("slow");
	$(".inputboxes").toggle("slow");
	
};



function checkanswer(qn, answer, correct){
	console.log("updating to question " + qn);
    
	switch(qn) {
    case 0:
        console.log("answer is " + answer);
        $(".scoreslidercontainer").toggle("slow");
        
        if (answer != 5)
        {
        	$("#bottomcrawltext").text("1: Wrong Answer!  It was Star Wars");
        	
        }
        else
        {
        	$("#bottomcrawltext").text("Correct!!");
            updatescore(correct);	
        }
        $( ".scoreslider" ).progressbar( "option", "value", 1 );
        break;
    case 1:
        console.log("answer is " + answer);
        if (answer != 3)
        {
        	$("#bottomcrawltext").text("2: Nope!  That was from Blade Runner");
        }
        else
        {
        	$("#bottomcrawltext").text("Correct!!");
            updatescore(correct);
            
        }
        $( ".scoreslider" ).progressbar( "option", "value", 2 );
        break;
    case 2:
        console.log("answer is " + answer);
        if (answer != 5)
        {
        	$("#bottomcrawltext").text("3: No way man!  It was just released");
        }
        else
        {
        	$("#bottomcrawltext").text("That's Correct!! Stranger Things was just released this year");
            correct += 1;
            console.log("number of correct is now " + correct);
        }
        $( ".scoreslider" ).progressbar( "option", "value", 3 );
        break;
    case 3:
        console.log("answer is " + answer);
        if (answer != 4)
        {
        	$("#bottomcrawltext").text("4: That's Chewbacca, c'mon, get it together");
        }
        else
        {
        	$("#bottomcrawltext").text("Correctamundo!");
            correct += 1;
            console.log("number of correct is now " + correct);
        }
        $( ".scoreslider" ).progressbar( "option", "value", 4 );
        break;
    case 4:
        console.log("answer is " + answer);
        if (answer != 4)
        {
        	$("#bottomcrawltext").text("4: Nope- it was from Bill and Ted's Excellent Adventure");
        }
        else
        {
        	$("#bottomcrawltext").text("Yeah Dude, Rock on!");
            correct += 1;
            console.log("number of correct is now " + correct);
        }
        $( ".scoreslider" ).progressbar( "option", "value", 5 );
        break;
	}
}

function updatescore(correct){
    correct = correct + 1;
}

function returnscore(correct){
    return correct;
}

function updateq(questionnumber, correct)
{
	switch(questionnumber) 
	{
    case 1:
    	$(".Question").html("Question 2: And what movie is this picture from?");
       	$(".AnswerBox").html("<br><br>1) Thriller</br></br>2) Back to the Future</br></br>3)BladeRunner</br></br>4)Carl Sagan's Cosmos</br></br>5)Howard The Duck</br>");
       	$(".QuestionImg").attr("src", "images/br.jpg");
        break;
    case 2:
       	$(".Question").html("Question 3: What decade was this series produced?");
       	$(".AnswerBox").html("<br><br>1) 1930s-1940s</br></br>2) 1980-1990</br></br>3)1990-2000</br></br>4)2000-2010</br></br>5)2010-2020</br>");
       	$(".QuestionImg").attr("src", "images/st.jpg");
        break;
    case 3:
        $(".Question").html("Question 4: Which movie star is pictured in this photo?");
       	$(".AnswerBox").html("<br><br>1) David Hasslehoff</br></br>2) Tom Cruise</br></br>3)That dude from Princess Bride</br></br>4)The Wookie Chewbacca</br></br>5)Matt Damon</br>");
       	$(".QuestionImg").attr("src", "images/chew.jpg");
        break;
    case 4:
        $(".Question").html("Question 5: Which of the following movies contains these two characters?");
       	$(".AnswerBox").html("<br><br>1) Transformers the movie</br></br>2) Top Gun</br></br>3)Ferris Buelers Days Off</br></br>4)Bill and Ted's Excellent Adventure</br></br>5)Predator 2</br>");
       	$(".QuestionImg").attr("src", "images/bt.jpg");
        break;
    case 5:
        $(".Question").html("Congratulations!");
        console.log("Number of correct is" + correct);
        $(".AnswerBox").html("You win!!!!</br>");
        $(".QuestionImg").attr("src", "images/win.png");
        break;
	}
}
/*
if checkanswer(questionnumber){
			questionnumber++;
			showq(questionnumber);
		}

*/