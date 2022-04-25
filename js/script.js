// Created by Graeme
// Created on: April  22
// JS functions for index.html


// This function calculates the surface area and volume of a Pentagonal Prism
'use strict';
function answer() {
	// Declares variables 
	let sideA = parseFloat(document.getElementById('side-a').value)
	let height = parseFloat(document.getElementById('height').value)
	let units = document.getElementById('unit').value
	//Calculates SA and volume
	let surfaceArea = 5 * sideA * height + 1 / 2 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * (sideA ** 2)
	let volume = 1 / 4 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * (sideA ** 2) * height
	
	
	// If statement for unit of measurement (Van helped a lot)
	if (units === "mm" || units === "cm" || units === "dm" || units === "m" ||units === "dam" || units === "hm" || units === "km") {
		//Outputs SA and volume of a Pentagonal Prism
		document.getElementById('surface-area').innerHTML = 'The surface area of the pentagonal prism is ' + surfaceArea.toFixed(2) + " " + units + "²";
		document.getElementById('volume').innerHTML = 'The volume of the pentagonal prism is ' + volume.toFixed(2) + " " + units + "³";
		document.getElementById('error').innerHTML = "";
	} else {
		//Error message if unit of measurement is invalid
		document.getElementById('error').innerHTML = "The unit of measurement you chose is not valid. Please enter one of the following: mm, cm, dm, m, dam, hm or km";
		document.getElementById('volume').innerHTML = ""
		document.getElementById('surface-area').innerHTML = ""
		
	} 
}