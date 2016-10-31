var elOutputTarget, outputText, IdOfClickTarget, elH1, elInput, elGuineaPig;
elOutputTarget = document.getElementById('output-target');
var elH1 = document.getElementById('page-title');
var input = document.getElementById('keypress-input');
var HulkifyButton = document.getElementById('make-large');
var CaptureItButton = document.getElementById("add-border");
var RoundedButton = document.getElementById("add-rounding");
var AddColorButton = document.getElementById('add-color');
var elGuineaPig = document.getElementById('guinea-pig');










function handleH1 (event) {

	elOutputTarget.innerHTML = "You moved your mouse over the header";
	
}

function handleH1Out (event) {
	 elOutputTarget.innerHTML = "left me!"

}

function ClickStatement(event) {
	elOutputTarget.innerHTML = `You clicked on the ${event.target.textContent} section`;
}

function mirror (event) {
	elOutputTarget.innerHTML = document.getElementById('keypress-input').value
}

function Hulk(event) {
	var elGuineaPig = document.getElementById('guinea-pig');

	elGuineaPig.className = "hulk";

}

function Capture(event) {
	var elGuineaPig = document.getElementById('guinea-pig');

	elGuineaPig.className = "border";

}

function Rounding(event) {
	var elGuineaPig = document.getElementById('guinea-pig');

	elGuineaPig.className = "rounded_border";

}

	
function Crayon(event) {
	var elGuineaPig = document.getElementById('guinea-pig');

	elGuineaPig.className = "color";

}

document.body.addEventListener("click", ClickStatement)
elH1.addEventListener('mouseover', handleH1);
elH1.addEventListener('mouseout', handleH1Out);
input.addEventListener('input', mirror, false);

HulkifyButton.addEventListener("click", Hulk) 
CaptureItButton.addEventListener("click", Capture) 
RoundedButton.addEventListener("click", Rounding) 
AddColorButton.addEventListener("click", Crayon) 
var sectionCollection;
sectionCollection = document.getElementsByClassName('article-section');
sectionCollection[0].classList.add("bold");
sectionCollection[5].classList.add("boldplus");
console.log("ClassList", sectionCollection[5].classList.add("boldplus"));
// console.log("classlist5thelem",sectionCollection[5].classList);


























