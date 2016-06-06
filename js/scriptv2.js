/*
  >> list all cities that the client requires to add
  >> declare an array variable to hold the cities
  >> do a looping statement to handle all cities to be added on a dropdown
  >> do conditional statements for the control flow
  >> when user selects a city from the dropdown, change image according to city name
*/

$(document).ready(function() {

	var cities = [ "NYC", "SF", "LA", "ATX", "SYD"]; //global variables
	//do this on page load to print cities' value
	for (var i = 0; i < cities.length; i++) {
		var tempCity = cities[i]; //this will be a local variable that will always change its value while in loop
		$('#city-type').append($("<option></option>").attr("value",i+1).text(tempCity));
		//console.log("test", tempCity);
	}
		
	
	$("#city-type").change(updateCity);

	function updateCity() {
		var city = $("#city-type").val(); //get the selected val on change
		console.log("selected city: ", city);

		
		if (city == "1") {  //change it to NY bg
			$("body").attr("class","nyc");
		} 
		else if (city == "2") {  //change it to SF bg
			$("body").attr("class","sf");
		}
		else if (city == "3") {  //change it to LA bg
			$("body").attr("class","la");
		}
		else if (city == "4") {  //change it to ATX bg
			$("body").attr("class","austin");
		} 
		else if (city == "5") {  //change it to SYD bg
			$("body").attr("class","sydney");
		} 
		

		//$("#city-type").val("0"); //resets the selected to normal once bg changed

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