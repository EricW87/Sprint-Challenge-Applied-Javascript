// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	const divElement = document.createElement('div');
	divElement.classList.add('header');

	const spanDateElement = document.createElement('span');
	spanDateElement.classList.add('date');
	spanDateElement.textContent = "SMARCH 28, 2019";

	const h1Element = document.createElement('h1');
	h1Element.textContent = "Lambda Times";

	const spanElement = document.createElement('span');
	spanElement.classList.add('temp');
	spanElement.textContent = "98*";

	divElement.appendChild(spanDateElement);
	divElement.appendChild(h1Element);
	divElement.appendChild(spanElement);

	return divElement;
}


const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(new Header());
