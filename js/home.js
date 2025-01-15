import { loadCards } from "./cards.js";
import { places } from "./data.js";

const TIME_TO_SLIDE = 6000; // in milliseconds

const loadSlider = () => {
	const slider = document.querySelector(".hero-slider");
	const slides = document.querySelectorAll(".hero-slide");
	const leftBtn = document.querySelector(".left-btn");
	const rightBtn = document.querySelector(".right-btn");
	const indicatorsContainer = document.querySelector(".slider-indicators");

	let currentIndex = 0;
	const totalSlides = slides.length;

	// Update the slider position
	const updateSlider = () => {
		const offset = -currentIndex * 100; // Each slide is 100vw
		slider.style.transform = `translateX(${offset}vw)`;

		document.querySelectorAll(".indicator").forEach((indicator, index) => {
			indicator.classList.toggle("active", index === currentIndex);
		});
	};

	const autoSlideFn = () => {
		currentIndex = (currentIndex + 1) % totalSlides;
		updateSlider();
	};

	let autoSlide = setInterval(autoSlideFn, TIME_TO_SLIDE);

	const createIndicators = () => {
		for (let i = 0; i < totalSlides; i++) {
			const indicator = document.createElement("div");
			indicator.classList.add("indicator");
			if (i === currentIndex) indicator.classList.add("active");
			indicatorsContainer.appendChild(indicator);

			indicator.addEventListener("click", () => {
				currentIndex = i;
				updateSlider();
				clearInterval(autoSlide);
				autoSlide = setInterval(autoSlideFn, TIME_TO_SLIDE);
			});
		}
	};

	rightBtn.addEventListener("click", () => {
		currentIndex = (currentIndex + 1) % totalSlides;
		// (0 + 1) % 3 = 1
		// (1 + 1) % 3 = 2
		// (2 + 1) % 3 = 0
		updateSlider();
		clearInterval(autoSlide);
		autoSlide = setInterval(autoSlideFn, TIME_TO_SLIDE);
	});

	leftBtn.addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		updateSlider();
		clearInterval(autoSlide);
		autoSlide = setInterval(autoSlideFn, TIME_TO_SLIDE);
	});

	createIndicators();
};

loadSlider();
loadCards(places, ".cards-container");
