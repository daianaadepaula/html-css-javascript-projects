const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
	const colorContainerEl = document.createElement("div");
	colorContainerEl.classList.add("color-container");

	containerEl.appendChild(colorContainerEl);	
}

const colorcontainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
	colorcontainerEls.forEach((colorContainerEl)=>{
		const newcolorCode = randomColor();
		colorContainerEl.style.backgroundColor = "#" + newcolorCode;
		colorContainerEl.innerText = "#" + newcolorCode;
	});
}


function randomColor(){
	const chars = "0123456789abcdef";
	const colorCodeLend = 6;
	let colorCode = "";

	for (let index = 0; index < colorCodeLend; index++) {
		const randomNum = Math.floor(Math.random() * chars.length);
		colorCode += chars.substring(randomNum, randomNum + 1);
	}

	return colorCode
} 