// The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.
document.addEventListener("DOMContentLoaded", () => {
	const body = document.querySelector("body");

	const loadHeaderAndFooter = async () => {
		try {
			const headerRes = await fetch("/components/header.html");
			if (!headerRes.ok) {
				throw new Error("Failed to fetch header");
			}
			const footerRes = await fetch("/components/footer.html");
			if (!footerRes.ok) {
				throw new Error("Failed to fetch footer");
			}
			const header = await headerRes.text();
			const footer = await footerRes.text();
			body.insertAdjacentHTML("afterbegin", header);
			body.insertAdjacentHTML("beforeend", footer);

			setActiveLink();
			setupSearch();
		} catch (error) {
			console.error(error);
			body.innerHTML = "<h1>Failed to load header and footer</h1>";
		}
	};

	// Function to set the active link in the navbar
	const setActiveLink = () => {
		const currentPage =
			window.location.pathname.split("/").pop() || "index.html";
		const currentQuery = window.location.search;
		const navLinks = document.querySelectorAll("nav a");

		navLinks.forEach((link) => {
			const page = link.getAttribute("data-page");

			if (
				page === currentPage.replace(".html", "") ||
				(page === "home" && currentPage === "index.html")
			) {
				link.classList.add("active");
			} else if (currentQuery.includes(page)) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		});
	};

	const setupSearch = () => {
		document
			.querySelector(".search-form")
			.addEventListener("submit", function (event) {
				event.preventDefault();

				const query = document.getElementById("search").value.trim();
				if (query) {
					window.location.href = `/pages/search.html?q=${encodeURIComponent(
						query
					)}`;
				}
			});
	};

	loadHeaderAndFooter();
});
