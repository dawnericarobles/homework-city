/*
  >> get the user input from the textbox, city-type
  >> declare a variable city
  >> assign user's input to the declared var city to easily reference user's request
  >> list all possible keywords that a user might input, keywords that can be associated with stored images
  >> when user clicks on update, do conditional for the control-flow -- use the listed keywords 
*/

$(document).ready(function() {
	$("#submit-btn").click(updateFunc);
	$("form").submit(updateFunc); 
	//gives an option for user to just hit enter without moving their mouse to hit update

	function updateFunc() {
		var city = $("#city-type").val();
		city = city.toLowerCase(); 
		//converts the input to lower case, 
		//so that web app can read the input in any char cases.
		
		console.log("entered city: " + city);
		//always remove the current class that calls the image background
		clearBGimage();

		if (city === "new york" || city === "new york city" || city === "nyc") {
			$("body").attr("class","nyc");
			$("#error").html("");
		} 
		else if (city === "san francisco" || city === "bay area" || city === "sf") {
			$("body").attr("class","sf");
			$("#error").html("");
		}
		else if (city === "los angeles" || city === "los angeles city" || city === "la" || city === "lax") {
			$("body").attr("class","la");
			$("#error").html("");
		}
		else if (city === "austin" || city === "atx" || city === "nyc") {
			$("body").attr("class","austin");
			$("#error").html("");
		} 
		else if (city === "sydney" || city === "syd") {
			$("body").attr("class","sydney");
			$("#error").html("");
		} 
		else {
			//show message when city entered was not on the list
			$("#error").html("<p class='errMsg'>City entered cannot be found.  Please try again.</p>");
		}

		$("#city-type").val(""); //resets the inputbox to blank
		event.preventDefault();	
	}
	

	function clearBGimage(){
		$("body").removeClass("nyc");
		$("body").removeClass("sf");
		$("body").removeClass("la");
		$("body").removeClass("austin");
		$("body").removeClass("sydney");
	}

});