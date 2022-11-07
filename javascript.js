// var x = 5;
// var y = 6;
// var z = x + y;	

// var d = new Date();
// document.getElementById("demo").innerHTML = d.toDateString();




// function myFunction() {
// 	var myNumber = 2;
// 	var txt = "";

// 	while (myNumber != Infinity){
// 		myNumber = myNumber * myNumber;
// 		txt = txt + myNumber +"<br>";
// 	}
// 	document.getElementById("demo").innerHTML = txt;
// }

// function getRndInteger(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// var today, someday, text;
// today = new Date();
// someday = new Date();
// someday.setFullYear(2100, 0, 12);

// if (someday > today) {
// 	text = " today is before Jan 12, 2100.";
// } else{
// 	text = " today is Jan 12, 2100.";
// }
// document.getElementById('demo1').innerHTML = text;


// var days, text, i;
// days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
// text = "<ul>";

//  for (i = 0; i < days.length; i++) {
//  	text +="<li>" + days[i] + "</li>";
//  }
//  text += "</ul>";
//  document.getElementById('demo2').innerHTML = text;



//  var Names = ["john", "kun", "tuns", "segs"];
//  document.getElementById("demo3").innerHTML = Names;

//  function jams() {
//     Names.splice(2, 0, "tims","toms");
//     document.getElementById("demo3").innerHTML = Names;
//  }

const toggleButton = document.querySelector('.toggle-menu');
const navbar = document.querySelector('.nav-bar');

toggleButton.addEventListener('click', () => {
   navbar.classlist.toggle('toggle');
});