import { loadCards } from "./cards.js";
import { places } from "./data.js";

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

loadSlider();
loadCards(places, ".cards-container");
