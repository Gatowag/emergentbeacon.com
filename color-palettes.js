let palette = localStorage.getItem("palette");
const themeSwitch = document.getElementById("theme");

if (palette === "dark") { enableDark() }
else if (palette === "light") { enableLight() }
else if (palette === "contrast") { enableContrast() }

themeSwitch.addEventListener("click", () => {
	let palette = localStorage.getItem("palette");

	if (palette == "dark") {
		enableLight()
	} else if (palette == "light") {
		enableContrast()
	} else {
		enableDark()
	}
})

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