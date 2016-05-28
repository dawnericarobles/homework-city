/*
  >> get the user input from the textbox, city-type
  >> declare a variable city
  >> assign user's input to the declared var city to easily reference user's request
  >> list all possible keywords that a user might input, keywords that can be associated with stored images
  >> when user clicks on update or hit enter, do conditional for the control-flow -- use the listed keywords 
*/

$(document).ready(function() {
	$("#submit-btn").click(updateFunc);
	$("form").submit(updateFunc); 
	//gives an option for user to just hit enter without moving their mouse to hit update

	function updateFunc() {
		var city = $("#city-type").val();
		city = city.trim(city);  //removes extra spaces and new line
		city = city.toLowerCase();  //converts the input to lower case, 
	 			//so that web app can read the input in any char cases.

		console.log("entered city: " + city);

		//always remove the current class that calls the image background
		//clearBGimage();  //doesn't need it anymore since it automatically changes overwrites the class

		if (city === "new york" || city === "new york city" || city === "nyc") {  //check if input is NY, if yes, change it to NY bg.. Clear error message.
			$("body").attr("class","nyc");
			$("#error").html("");
		} 
		else if (city === "san francisco" || city === "bay area" || city === "sf") {  //if input is SF, change it to SF bg.
			$("body").attr("class","sf");
			$("#error").html("");
		}
		else if (city === "los angeles" || city === "los angeles city" || city === "la" || city === "lax") {  //if input is LA, change it to LA bg.
			$("body").attr("class","la");
			$("#error").html("");
		}
		else if (city === "austin" || city === "atx" || city === "aust") {  //if input is Austin, change it to Austin bg.
			$("body").attr("class","austin");
			$("#error").html("");
		} 
		else if (city === "sydney" || city === "syd") {   //if input is Sydney, change it to Sydney bg.
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