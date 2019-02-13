"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/



/* The line below creates a variable called thisTime which is given the value of the date Febuary 3, 2018 and the time 03:15:28. */
var thisTime = new Date();

/* Creates a var named timeStr that is given the variable a value of thisTime using local time coventions */
var timeStr = thisTime.toLocaleString();

/* The line below states that the value of the element with an id of timeStamp will be changed in the HTML and become the value of the variable timeStr. */
document.getElementById("timeStamp").innerHTML = timeStr;

/* The line creates a variable names thisHour that is given the value of the hour value in thisTime. */
var thisHour = thisTime.getHours();

/* The line creates a variable named thisMonth that is given the value of the month in thisMonth */
var thisMonth = thisTime.getMonth();

/* The line creates a variable mapNum which has the value of the remainder of 2 times the value of thisMonth plus the value of thisHour. */
var mapNum = ((2 * thisMonth + thisHour) % 24);

/* The line creates the variable imgStr which has a value of the first text string plus the value of mapNum plus the second text string. */
var imgStr = "<img src='sd_sky" + mapNum + ".png'/>";

/* The line states that the value of the element with an id of planisphere  will have the value of imgStr inserted into it right before its first child. */
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);