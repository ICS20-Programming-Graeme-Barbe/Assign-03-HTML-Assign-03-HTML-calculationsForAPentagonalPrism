// Created by Graeme
// Created on: April  22
// JS functions for index.html


// This function calculates the surface area and volume of a Pentagonal Prism
'use strict';
function answer() {
	// Declares variables 
	let sideA = parseFloat(document.getElementById('side-a').value)
	let height = parseFloat(document.getElementById('height').value)
	let unit = document.getElementById('unit').value
	//Calculates SA and volume
	let surfaceArea = 5 * sideA * height + 1 / 2 * Math.sqrt(5(5 + 2 * Math.sqrt(5))) * (sideA ** 22)
	let volume = 1 / 4 * Math.sqrt(5(5 + 2 * Math.sqrt(5))) * (sideA ** 2) * height
	//Answers
	document.getElementById('surface-area').innerHTML = 'The surface area of the pentagonal prism is ' + surfaceArea.toFixed(2) + " " + unit + "²"
	document.getElementById('volume').innerHTML = 'The volume of the pentagonal prism is ' + volume.toFixed(2) + " " + unit + "³" 
}
