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
	populatePlaceDetails(place);
});

const populatePlaceDetails = (place) => {
	// Populate information section
	document.querySelectorAll(".place_name").forEach((placeName) => {
		placeName.textContent = place.name;
	});
	document.querySelector(".place_description").textContent =
		place.description;
	document.querySelector(".place_list_of_info").innerHTML = `
    <li><strong>Location:</strong> ${place.location}</li>
    <li><strong>Tourists Annually:</strong> ${place.touristsNum}</li>
    <li><strong>Open Time:</strong> ${
		place.alwaysOpen ? "24/7" : `${place.openTime} - ${place.closeTime}`
	}</li>
    <li><strong>Rating:</strong> ${place.rating}</li>
    <li><strong>Price of Entrance:</strong> ${place.PriceOfEntrance}</li>
  `;

	// Populate gallery
	populateGallery(place.gallery);

	// populate map
	const mapSection = document.querySelector(".details_location");

	const h2 = document.createElement("h2");
	h2.textContent = "Location";

	const iframe = document.createElement("iframe");
	iframe.src = place.mapEmbedUrl;
	iframe.allowfullscreen = "";
	iframe.loading = "lazy";
	iframe.referrerpolicy = "no-referrer-when-downgrade";

	mapSection.appendChild(h2);
	mapSection.appendChild(iframe);

	// Populate reviews
	const reviewsContainer = document.querySelector(".reviews_container");
	reviewsContainer.innerHTML = place.reviews
		.map(
			(review) => `
      <div class="review">
        <p>
          <strong>${review.user}:</strong> ${review.comment}
          <span class="rating">${"★".repeat(review.rating)}${"☆".repeat(
				5 - review.rating
			)}</span>
        </p>
      </div>
    `
		)
		.join("");
};

// Function to populate the gallery dynamically
function populateGallery(images) {
	const simpleGallery = document.getElementById("simple-gallery");

	// Populate all images
	images.forEach((image) => {
		const imgElement = document.createElement("img");
		imgElement.src = image;
		imgElement.alt = "Gallery Image";

		simpleGallery.appendChild(imgElement);
	});
}

document.querySelector(".go_back_btn").addEventListener("click", () => {
	history.back();
});

document.getElementById("reviewForm").addEventListener("submit", function (e) {
	e.preventDefault();

	// Get form data
	const name = document.getElementById("name").value;
	const rating = document.getElementById("rating").value;
	const comment = document.getElementById("comment").value;

	// Create new review element
	const newReview = document.createElement("div");
	newReview.classList.add("review");
	newReview.innerHTML = `
    <p>
      <strong>${name}:</strong> ${comment}
      <span class="rating">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>
    </p>
  `;

	// Append the new review to the reviews section
	const reviewsSection = document.querySelector(".reviews_container");
	reviewsSection.appendChild(newReview);

	// Clear the form
	e.target.reset();
});
