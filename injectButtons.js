//Create and attach the element
function createElement(context, func, elemType, type, textVal, bgColor, marginRight, padding) {
	var element = document.createElement(type);
	element.type = type;
	element.textContent = textVal;
	element.onclick = func;
	element.style.backgroundColor = bgColor;
	element.style.marginRight = marginRight;
	element.style.padding = padding;
	context.appendChild(element);
}

//AutoSelect ComboBoxes function
function autoSelectFromButton(htmlSelectsArray, cj) {
	var i = 0;
	var selectElement = null;
	for (; i < htmlSelectsArray.length; i++) {
		selectElement = document.getElementById(htmlSelectsArray[i]);
		//get the select input texts
		var texts = [];
		for (var j = 0; j < selectElement.options.length; j++) {
			texts[j] = selectElement.options[j].text;
		}
		var index = texts.indexOf(cj[htmlSelectsArray[i]]);
		var funct = selectingFunctionFactory(selectElement, index);
		window.setTimeout(funct, 500*i);
	}
	window.setTimeout(function(){
		selectElement = document.getElementById("element");
		selectElement.focus();
		//opposite of focus() is blur()
	}, 500*i);
}

function selectingFunctionFactory(selectElement, index) {
	return function(){
		selectElement.selectedIndex = index;
		//selectElement.onchange();
		var changeEvent = document.createEvent("HTMLEvents");
		changeEvent.initEvent("change", true, true);
		selectElement.dispatchEvent(changeEvent);
	};
	//Learn about object factories at - https://developer.mozilla.org/en/docs/Web/JavaScript/Closures & http://courseware.codeschool.com.s3.amazonaws.com/javascript-roadtrip/js3.pdf
}

function fun() {
	var str = this.textContent.split(" ");
	var etype = "";
	for (var i = 0; i < str.length - 2; i++) {
		if (i != 0) {
			etype += " ";
		}
		etype += str[i];
	}
	var lists = ["own", "etype", "vol", "substn"];
	var resulJSON = {
		"own": "--Any--",
		"etype": etype,
		"vol": str[str.length - 2] + " " + str[str.length - 1],
		"substn": "--Any--",
	}
	autoSelectFromButton(lists, resulJSON);
}

window.onload = onloadFunction();

function onloadFunction(){
	var iDiv = document.createElement('div');
	iDiv.id = 'block';
	iDiv.className = 'block';
	iDiv.style.padding = "10px";
	//iDiv.style.border = "1px dotted black";
	//document.getElementsByTagName('body')[0].appendChild(iDiv);
	var pa= document.getElementsByTagName('h2')[0]; 
	if(pa){pa.parentElement.insertBefore(iDiv,pa);}
	
	createElement(iDiv, fun, "input", "button", "Line 765 kV", "yellow", "5px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Line 400 kV", "red", "5px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Line 220 kV", "green", "30px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Line Reactor 765 kV", "yellow", "5px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Line Reactor 400 kV", "red", "5px", "10px 5px");
	
	var mybr = document.createElement('br');
	iDiv.appendChild(mybr);
	mybr = document.createElement('br');
	iDiv.appendChild(mybr);
	
	createElement(iDiv, fun, "input", "button", "Bus 765 kV", "yellow", "5px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Bus 400 kV", "red", "5px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Bus 220 kV", "green", "30px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Bus Reactor 765 kV", "yellow", "5px", "10px 5px");
	
	createElement(iDiv, fun, "input", "button", "Bus Reactor 400 kV", "red", "5px", "10px 5px");
	}	