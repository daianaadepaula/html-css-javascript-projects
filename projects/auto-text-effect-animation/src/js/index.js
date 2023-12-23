const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Desenvolvedor", "Freelancer", "Instrutor"];

let carrerIndex = 0;

let characterIndex = 0;

updateText();

function updateText(){
	characterIndex++;

	containerEl.innerHTML = `
	<h1>Eu sou ${careers[carrerIndex].slice(0, characterIndex)}</h1>
	`;

	if(characterIndex === careers[carrerIndex].length){
		carrerIndex++;
		characterIndex = 0;
	};

	if(carrerIndex === careers.length){
		carrerIndex = 0;
	}

	setTimeout(updateText, 400);
}

