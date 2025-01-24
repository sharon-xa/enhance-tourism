import { places } from "./data.js";

const getQueryParam = (param) => {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
};

document.addEventListener("DOMContentLoaded", () => {
	const placeName = getQueryParam("name");

	// Find the matching place from the dataset
	const place = places.find(
		(p) => p.name.toLowerCase() === placeName.toLowerCase()
	);

	if (!place) {
		document.querySelector("main").innerHTML = "<h1>Place Not Found</h1>";
		return;
	}

	// Populate the page
	populateGallery(place.gallery);
	populatePlaceDetails(place);
	populateSuggestions(place);
});

document.querySelector(".go-back-btn").addEventListener("click", () => {
	history.back();
});

function populateGallery(images) {
	const imgContainer = document.querySelector(".gallery-img-container");
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");

	let currentIndex = 0;
	let totalSlides = 0;

	const loadImages = () => {
		images.forEach((image) => {
			const imgElement = document.createElement("img");
			imgElement.src = image;
			imgElement.loading = "lazy";

			imgContainer.appendChild(imgElement);
		});

		totalSlides = images.length;

		imgContainer.style.width = `${100 * totalSlides}%`;
	};

	const updateSlide = (index) => {
		currentIndex = (index + totalSlides) % totalSlides;
		const offset = -(currentIndex * 100) / totalSlides;
		imgContainer.style.transform = `translateX(${offset}%)`;
	};

	prevBtn.addEventListener("click", () => updateSlide(currentIndex - 1));
	nextBtn.addEventListener("click", () => updateSlide(currentIndex + 1));

	loadImages();
}

const populatePlaceDetails = (place) => {
	// Populate information section
	document.querySelector(".place-category").textContent = place.category;

	document.querySelectorAll(".place-name").forEach((placeName) => {
		placeName.textContent = place.name;
	});

	document.querySelector(".place-description").textContent =
		place.detaildDescription;

	document.querySelector(".place-details").innerHTML = `
		<li><strong>Location:</strong> ${place.location}</li>
		<li><strong>Rating:</strong> ${place.rating} ⭐</li>
		<li><strong>Open Time:</strong> ${
			place.alwaysOpen ? "24/7" : `${place.openTime} - ${place.closeTime}`
		}</li>
		<li><strong>Price of Entrance:</strong> ${
			place.PriceOfEntrance === 0 ? "Free" : `$${place.PriceOfEntrance}`
		}</li>
		<li><strong>Tourists Annually:</strong> ${place.touristsNum}</li>
	  `;

	// populate map
	const mapSection = document.querySelector(".details-location");

	const iframe = document.createElement("iframe");
	iframe.src = place.mapEmbedUrl;
	iframe.allowfullscreen = "";
	iframe.loading = "lazy";
	iframe.referrerpolicy = "no-referrer-when-downgrade";

	mapSection.appendChild(iframe);

	// Populate reviews
	const reviewsContainer = document.querySelector(".reviews-container");
	reviewsContainer.innerHTML = place.reviews
		.map(
			(review) => `
			<div class="review">
				<div class="review-header">
					<span class="review-user">${review.user}</span>
					<span class="review-rating">
					${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
					</span>
				</div>
				<p class="review-comment">${review.comment}</p>
			</div>`
		)
		.join("");
};

const populateSuggestions = (currentPlace) => {
	const suggestionsContainer = document.querySelector(".suggestions-list");

	const relatedPlaces = places.filter(
		(place) =>
			place.name.toLowerCase() !== currentPlace.name.toLowerCase() &&
			place.category.toLowerCase() === currentPlace.category.toLowerCase()
	);

	if (relatedPlaces.length === 0) {
		suggestionsContainer.innerHTML = "<li>No related places found</li>";
		return;
	}

	relatedPlaces.forEach((place) => {
		const suggestion = document.createElement("li");
		suggestion.innerHTML = `
			<a href="/pages/details.html?name=${place.name}">${place.name}</a>
			`;

		suggestionsContainer.appendChild(suggestion);
	});
};

document.getElementById("review-form").addEventListener("submit", function (e) {
	e.preventDefault();

	// Get form data
	const name = document.getElementById("review-name").value;
	const rating = document.getElementById("review-rating").value;
	const comment = document.getElementById("review-comment").value;

	// Create new review element
	const newReview = document.createElement("div");
	newReview.classList.add("review");
	newReview.innerHTML = `
	<div class="review-header">
		<span class="review-user">${name}</span>
		<span class="review-rating">
		${"★".repeat(rating)}${"☆".repeat(5 - rating)}
		</span>
	</div>
	<p class="review-comment">${comment}</p>
  `;

	// Append the new review to the reviews section
	const reviewsSection = document.querySelector(".reviews-container");
	reviewsSection.appendChild(newReview);

	// Clear the form
	e.target.reset();
});
