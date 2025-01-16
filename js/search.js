import { places } from "./data.js";
import { loadCards } from "./cards.js";

const searchTerm = document.querySelector(".search-term");
const empty = document.querySelector(".empty-result");
const cardsContainer = document.querySelector(".cards-container");

const params = new URLSearchParams(window.location.search);
const query = params.get("q");
if (query) {
	searchTerm.textContent = query;

	const searchResults = places.filter((place) => {
		return place.name.toLowerCase().includes(query.toLowerCase());
	});

	if (searchResults.length === 0) {
		cardsContainer.style.display = "none";
		empty.style.display = "block";
		empty.innerHTML = `No results found for "${query}"`;
	} else {
		loadCards(searchResults, ".cards-container");
	}
}
