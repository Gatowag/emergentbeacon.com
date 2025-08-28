let palette = localStorage.getItem("palette");
const themeSwitch = document.getElementById("theme");

if (palette === "dark") {
	enableDark();
	updateThemeButton("1");
}
else if (palette === "light") {
	enableLight();
	updateThemeButton("2");
}
else if (palette === "contrast") {
	enableContrast();
	updateThemeButton("3");
}

themeSwitch.addEventListener("click", () => {
	let palette = localStorage.getItem("palette");

	if (palette == "dark") {
		enableLight();
		updateThemeButton("2");
		updateBandcamp(".mode-light");
	} else if (palette == "light") {
		enableContrast();
		updateThemeButton("3");
		updateBandcamp(".mode-contrast");
	} else {
		enableDark();
		updateThemeButton("1");
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

function updateThemeButton(id) {
	a = [1, 2, 3];
	b = a.splice(id - 1, 1);
	document.getElementById("theme" + id).setAttribute("opacity", "1");
	a.forEach(element => {
		document.getElementById("theme" + element).setAttribute("opacity", "0.4");
	});
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