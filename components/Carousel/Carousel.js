/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function addCarousel() {
	let index = 0;

	const divCarousel = document.createElement('div');
	const divLeftB = document.createElement('div');
	const imgMount = document.createElement('img');
	const imgComp = document.createElement('img');
	const imgTrees = document.createElement('img');
	const imgTurnT = document.createElement('img');
	const divRightB = document.createElement('div');

	divCarousel.classList.add("carousel");
	divLeftB.classList.add("left-button");
	divRightB.classList.add("right-button");

	divLeftB.textContent = " < ";
	divRightB.textContent = " > ";

	divLeftB.addEventListener('click', function(event) {
		console.log(index);
		switch(index)
		{
			case 0:
				imgMount.style.display = 'none';
				break;
			case 1:
				imgComp.style.display = 'none';
				break;
			case 2:
				imgTrees.style.display = 'none';
				break;
			case 3:
				imgTurnT.style.display = 'none';
				break;
			default:
				console.log("Error");
				break;
		}

		if(index > 0)
			index--;
		else
			index = 3;

		switch(index)
		{
			case 0:
				imgMount.style.display = 'block';
				break;
			case 1:
				imgComp.style.display = 'block';
				break;
			case 2:
				imgTrees.style.display = 'block';
				break;
			case 3:
				imgTurnT.style.display = 'block';
				break;
			default:
				console.log("Error");
				break;
		}

		console.log(imgMount.style.display);
				
	});
		
	divRightB.addEventListener('click', function(event) {
		console.log(index);
		switch(index)
		{
			case 0:
				imgMount.style.display = 'none';
				break;
			case 1:
				imgComp.style.display = 'none';
				break;
			case 2:
				imgTrees.style.display = 'none';
				break;
			case 3:
				imgTurnT.style.display = 'none';
				break;
			default:
				console.log("Error");
				break;
		}

		if(index < 3)
			index++;
		else
			index = 0;

		switch(index)
		{
			case 0:
				imgMount.style.display = 'block';
				break;
			case 1:
				imgComp.style.display = 'block';
				break;
			case 2:
				imgTrees.style.display = 'block';
				break;
			case 3:
				imgTurnT.style.display = 'block';
				break;
			default:
				console.log("Error");
				break;
		}

		console.log(imgMount.style.display);
				
	});
	imgMount.setAttribute('src', './assets/carousel/mountains.jpeg');
	imgComp.setAttribute('src', './assets/carousel/computer.jpeg');
	imgTrees.setAttribute('src', './assets/carousel/trees.jpeg');
	imgTurnT.setAttribute('src', './assets/carousel/turntable.jpeg');

	imgMount.style.display = 'block';

	divCarousel.appendChild(divLeftB);
	divCarousel.appendChild(imgMount);
	divCarousel.appendChild(imgComp);
	divCarousel.appendChild(imgTrees);
	divCarousel.appendChild(imgTurnT);
	divCarousel.appendChild(divRightB);

	return divCarousel;
}

const carousel = document.querySelector(".carousel-container");
carousel.appendChild(new addCarousel());
