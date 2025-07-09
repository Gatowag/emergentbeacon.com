let palette = localStorage.getItem("palette");
const themeSwitch = document.getElementById("theme");

if (palette === "dark") { enableDark() }
else if (palette === "light") { enableLight() }
else if (palette === "contrast") { enableContrast() }

themeSwitch.addEventListener("click", () => {
	let palette = localStorage.getItem("palette");

	if (palette == "dark") {
		enableLight();
		updateBandcamp(".mode-light");
	} else if (palette == "light") {
		enableContrast()
		updateBandcamp(".mode-contrast");
	} else {
		enableDark()
		updateBandcamp(":root");
	}
})

function updateBandcamp(b) {
	let bcamp = document.getElementById("bandcamp-player");
	if (bcamp !== null) {
		let p = document.querySelector(b);
		let s = bcamp.src;
		let lColor = getComputedStyle(p).getPropertyValue('--bcampLink').slice(1);
		let a = s.indexOf("/linkcol=");
		bcamp.src = (s.slice(0, a + 9) + lColor + s.slice(a + 9 + 6, -1));
	}
}

function enableLight() {
	document.body.classList.add("mode-light");
	document.body.classList.remove("mode-contrast");
	localStorage.setItem("palette", "light");
}
function enableDark() {
	document.body.classList.remove("mode-contrast");
	localStorage.setItem("palette", "dark");
}
function enableContrast() {
	document.body.classList.add("mode-contrast");
	document.body.classList.remove("mode-light");
	localStorage.setItem("palette", "contrast");
}