import { places } from "./data.js";

// The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.
document.addEventListener("DOMContentLoaded", () => {
	const main = document.querySelector("main");
	const navLinks = document.querySelectorAll("nav a");

	// Function to load content dynamically
	const loadContent = async (page) => {
		try {
			const response = await fetch(`/pages/${page}.html`);
			if (!response.ok) {
				throw new Error(`Page not found: ${page}`);
			}
			const content = await response.text();
			main.innerHTML = content;
			document.title =
				page.charAt(0).toUpperCase() + page.slice(1) + " - TRAVELER";

			highlightActiveLink(page, navLinks);

			if (page.toLowerCase() === "home") {
				loadSlider();
				loadCards();
			}
		} catch (error) {
			main.innerHTML = "<h1>404 - Page Not Found</h1>";
			console.error(error);
		}
	};

	// Event listener for navigation
	document.querySelector("nav").addEventListener("click", (event) => {
		event.preventDefault();
		const page = event.target.getAttribute("data-page");
		if (page) {
			history.pushState({ page }, null, event.target.href);
			loadContent(page);
		}
	});

	// Handle back/forward navigation
	// The popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history. It changes the current history entry to that of the last page the user visited or, if history.pushState() has been used to add a history entry to the history stack, that history entry is used instead.
	window.addEventListener("popstate", (event) => {
		const page = event.state ? event.state.page : "home";
		loadContent(page);
	});

	// Load the initial page
	let initialPage;
	if (location.pathname === "/" || location.pathname === "/index.html") {
		initialPage = "home";
	} else {
		initialPage = location.pathname
			.replace("/pages/", "")
			.replace(".html", "");
	}

	loadContent(initialPage);
});

// Function to highlight the active link in the navbar
const highlightActiveLink = (page, navLinks) => {
	navLinks.forEach((link) => {
		if (link.getAttribute("data-page") === page) {
			link.classList.add("pc-text");
		} else {
			link.classList.remove("pc-text");
		}
	});
};

// Function to load the cards based on the data in the data.js file
const loadCards = () => {
	const cardsContainer = document.querySelector(".cards");

	places.forEach((place) => {
		const newA = document.createElement("a");
		newA.dataset.name = place.name;
		newA.innerHTML = `
			<div class="card">
				<img src="${place.image}" />
				<div class="details">
					<div class="location">
						<img src="../assets/location-dot-solid.svg" />
						<span>${place.location}</span>
					</div>

					<div class="rating">
						<img src="../assets/star-solid.svg" />
						<span>${place.rating}</span>
					</div>
				</div>
				<p class="name">${place.name}</p>
				<hr
					style="
						height: 1px;
						border: none;
						color: #333;
						background-color: #ccc;
						margin: 0 40px;
						margin-top: auto;
					"
				/>
				<div class="details-cont">
					<div class="time-and-tourists">
						<div class="time">
							<img src="../assets/clock-solid.svg" />
							<div>
							${
								place.alwaysOpen
									? "24 hours"
									: `
								Open <span class="pc-text">${place.openTime}</span><br />
								Close <span class="pc-text">${place.closeTime}</span>
								`
							}
							</div>
						</div>

						<div class="tourists">
							<img src="../assets/users-solid.svg" />
							<span>${place.touristsNum}</span>
						</div>
					</div>
				</div>
			</div>
			`;
		newA.href = `/pages/details.html?name=${place.name}`;
		cardsContainer.appendChild(newA);
	});
};

const loadSlider = () => {
	const slider = document.querySelector(".hero-slider");
	const slides = document.querySelectorAll(".hero-slide");
	const leftBtn = document.querySelector(".left-btn");
	const rightBtn = document.querySelector(".right-btn");

	let currentIndex = 0;
	const totalSlides = slides.length;

	// Helper function to update the slider position
	const updateSlider = () => {
		const offset = -currentIndex * 100; // Each slide is 100vw
		slider.style.transform = `translateX(${offset}vw)`;
	};

	// Right button click handler
	rightBtn.addEventListener("click", () => {
		currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide, loop back to the first
		updateSlider();
	});

	// Left button click handler
	leftBtn.addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide, loop back to the last
		updateSlider();
	});
};
