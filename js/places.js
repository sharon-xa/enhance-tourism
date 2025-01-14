import { loadCards } from "./cards.js";
import { places } from "./data.js";

const types = {
	natural: {
		title: "Natural Attractions",
	},
	historical: {
		title: "Historical Landmarks",
	},
	religious: {
		title: "Religious Sites",
	},
};

const searchParams = new URLSearchParams(window.location.search);
const placesType = searchParams.get("type");

document.querySelector(".places-type").textContent = types[placesType].title;

// filter places based on the type
const filteredPlaces = places.filter((place) => place.category === placesType);

loadCards(filteredPlaces, ".cards-container");
