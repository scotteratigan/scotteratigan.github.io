function increaseFakeCounter() {
	var fakeCounterObject = document.getElementById("fakeCounter")
	var fakeCounter = parseInt(fakeCounterObject.innerText);
	fakeCounter += 1;
	if (fakeCounter > 300) {
		changePage();
	}
	fakeCounterObject.innerText = fakeCounter;
}

function changePage() {
	window.location="http://home.mcom.com/home/welcome.html";
}

window.addEventListener("mousemove", increaseFakeCounter);