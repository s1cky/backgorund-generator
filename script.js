var list = document.getElementsByTagName('li');
var input = document.getElementsByName('adaugaElement');
var button = document.getElementById('button');
var ul = document.querySelector('ul');
 

function inputLength() {
	return input.value.legnth;
}



button.addEventListener("click", function(){
	if (input.value.length>0) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
	}
})



/*function addElementForClick(){
	if (input.value.length>0) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
	}
}


button.addEventListener("click", addElementForClick);*/