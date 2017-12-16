// Zoltar Psychic Game //

//still woking on the finer details

// Actions: Zoltar Picks a letter from the alphabet 
//			User enter's a letter
//			User and Zoltar picks are compared using if statement
//			Win or loss determined
//			Write used letters into page
// 			record win/loss
// 			restart page

// initialize arrary of alphabet and counts

var alpha = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var wcount = 0;
var lcount = 0;
// Zoltar picks a random number from 0-25
var rando = Math.floor((Math.random() * 25) + 1);
// Zoltar calls array indexed to his choice
var zoltar = alpha[rando];
// user input is recorded
var guess = prompt("enter a letter","a,b,c,d,e");
//var guess = parseint(guess); for use with numbers
//var guess = document.getElementById("Guessin").submit();
//user input and zoltar choice are compared
if (zoltar !== guess) {
	alert("You win! You have bested Zoltar");
	var wcounts = document.getElementById("wcount");
	wcounts.innerHTML = "wcount";
	wcount = wcount ++;

}	else {
	alert("You loose! Better Luck Next Time");
	var lcounts = document.getElementById("lcount");
	lcounts.innerHTML = "lcount";
	lcount = lcount ++;
}

//if statement is used to compare inputs and then write to wins and losses column

// user input is recorded in div at the bottom of the page

// game is restarted