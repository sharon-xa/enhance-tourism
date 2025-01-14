// Function to load the cards based on the data in the data.js file
export const loadCards = (places, containerName) => {
	const cardsContainer = document.querySelector(containerName);

	places.forEach((place) => {
		const newA = document.createElement("a");
		newA.dataset.name = place.name;
		newA.innerHTML = `
			<div class="card">
				<img src="${place.image}" loading="lazy" />
				<div class="details">
					<div class="location">
						<img src="../assets/location-dot-solid.svg" loading="lazy" />
						<span>${place.location}</span>
					</div>

					<div class="time">
						<img src="../assets/clock-solid.svg" loading="lazy" />
						<span>${
							place.alwaysOpen
								? "24 hours"
								: `<span>${place.openTime}</span>
								<br>
								<span>${place.closeTime}</span>`
						}
						</span>
					</div>

					<div class="tourists">
						<img src="../assets/users-solid.svg" loading="lazy" />
						<span>${place.touristsNum}</span>
					</div>
				</div>
				<div class="name-and-description">
					<h3 class="name">${place.name}</h3>
					<p class="description">${place.description}</p>
				</div>
				<div class="bottom">
					<hr
						style="
							height: 1px;
							width: 100%;
							border: none;
							color: #333;
							background-color: #ccc;
							padding: 0 40px;
						"
					/>

					<div class="details-cont">
						<div class="rating">
							<img src="../assets/star-solid.svg" loading="lazy" />
							<span>${place.rating}</span>
						</div>

						<div class="price">
							<span>${
								place.PriceOfEntrance === 0
									? "Free"
									: `$${place.PriceOfEntrance}`
							}</span>
						</div>
					</div>
				</div>
			</div>
			`;
		newA.href = `/pages/details.html?name=${place.name}`;
		cardsContainer.appendChild(newA);
	});
};
