// The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.
document.addEventListener("DOMContentLoaded", () => {
	const main = document.querySelector("main");

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
				page.charAt(0).toUpperCase() + page.slice(1) + " - My App";
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
	if (location.pathname === "/" || location.pathname === "/index.html") {
		initialPage = "home";
	} else {
		initialPage = location.pathname
			.replace("/pages/", "")
			.replace(".html", "");
	}

	loadContent(initialPage);
});
