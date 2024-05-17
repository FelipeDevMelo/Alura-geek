const btnCTA = document.querySelector(".button_CTA");
const containerButton = document.querySelector(".container_button");
btnCTA.addEventListener("mousedown", (event) => {
	event.preventDefault();
	containerButton.classList.add("click");
});
document.addEventListener("mouseup", () => {
	containerButton.classList.remove("click");
});
