// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {
		//console.log(response.data);
		const cardsDiv = document.querySelector('.cards-container');
		//console.log(response.data.articles);	
		Object.keys(response.data.articles).forEach( (key) => {
			//console.log(response.data.articles[key]);
			response.data.articles[key].forEach( (article) => {
				cardsDiv.appendChild(new addArticle(article));
			});
		});
	})
	.catch((err) => {
		console.log("Error: ", err);
	});

function addArticle(article) {
	const divCardElement = document.createElement('div');
	const divHlElement = document.createElement('div');
	const divAuthorElement = document.createElement('div');
	const divImgElement = document.createElement('div');
	const imgElement = document.createElement('img');
	const spanElement = document.createElement('span');

	divCardElement.classList.add('card');
	divHlElement.classList.add('headline');
	divAuthorElement.classList.add('author');
	divImgElement.classList.add('img-container');

	divHlElement.textContent = article.headline;
	imgElement.setAttribute('src', article.authorPhoto);
	spanElement.textContent = "By " + article.authorName;

	divImgElement.appendChild(imgElement);
	divAuthorElement.appendChild(divImgElement);
	
	divCardElement.appendChild(divHlElement);
	divCardElement.appendChild(divAuthorElement);
	divCardElement.appendChild(spanElement);

	return divCardElement;
}
