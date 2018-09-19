function increaseFakeCounter(){
	var fakeCounterObject = document.getElementById("fakeCounter")
	var fakeCounter = parseInt(fakeCounterObject.innerText)
	fakeCounter += 1
	fakeCounterObject.innerText = fakeCounter
}
window.addEventListener("mousemove", increaseFakeCounter);