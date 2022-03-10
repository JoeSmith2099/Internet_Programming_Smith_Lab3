
  var modDate = document.lastModified;
  document.getElementById("update_date").innerHTML = modDate;
/*The scipt to be used for action is in the assignment description https://webdevbasics.net/scripts/yoga.php.*/

/* Snippet taken from https://www.w3schools.com/jsref/prop_style_color.asp
  Colors, function name, and names of ID's have been changed.
  This passes the current background color of the article to the function and changes it.
*/

function paintItBlack() {
  document.getElementById("grid_article").style.backgroundColor = "black"; 
  document.getElementById("grid_article").style.color = "white"; 

}
function changeColor(){ 
  document.getElementById("grid_article").style.backgroundColor = "violet";
 }
function greenScreen(){
  document.getElementById("grid_article").style.backgroundColor = "green";
}