
const summaryButton = document.getElementById("summary-button");
if (summaryButton) {
    summaryButton.addEventListener("click", () => window.location.href = "about-me.html");
}

const goBackButton = document.getElementById("go-back");
if (goBackButton) {
    goBackButton.addEventListener("click", () => window.location.href = "index.html");
}