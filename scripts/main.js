var myImage = document.querySelector('img');

// Vaihdetaan kuvaa klikatessa kuva toiseen
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if ( mySrc === 'images/icecreamlogo1.png') {
		myImage.setAttribute('src','images/icecreamlogo.png');
	} else {
	    myImage.setAttribute('src','images/icecreamlogo1.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName); // localStorage antaa tallentaa selaimeen dataa jonka voi noutaa myöhemmin
	myHeading.textContent = 'ICE CREAM, ' + myName;
	if (!localStorage.getItem('name')) {
		setUserName();
	} else {
		var storedName = localStorage.getItem('name');
		myHeading.textContent = 'ICE CREAM, ' + storedName;
    }
}
myButton.onclick = function() {
	setUserName();
}