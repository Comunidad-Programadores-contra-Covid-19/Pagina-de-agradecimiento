var itemCount = 6
function addItem(){
	
	let widthInput = document.getElementById("inputWidth")
	let heightInput = document.getElementById("inputHeight")
	let container = document.getElementById("container")

	let width = widthInput.value
	let height = heightInput.value
	let allowedValues = ['1','2']
	
	if (!allowedValues.includes(width) || !allowedValues.includes(height)){
		alert('value of width and height can only be 1 or 2')
		widthInput.value = ''
		heightInput.value = ''
		return
	}
	itemCount++;
	let item = document.createElement("div"); 
	item.className = "item";
	if(width === '2') item.classList.add('width2');
	if(height === '2') item.classList.add('height2');
	let text = document.createTextNode(`item${itemCount}`);
	item.appendChild(text)
	container.appendChild(item)
}