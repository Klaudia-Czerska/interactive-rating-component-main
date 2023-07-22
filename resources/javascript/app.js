const RATINGS = document.querySelectorAll(".rating ul li button");
const chosenRating = document.querySelector(".chosen-rating");
const submitButton = document.querySelector(".submit");
const thankYou = document.querySelector(".thank-you")
const headingThankYou = document.querySelector(".thank-you h2")

RATINGS.forEach((rating) => {
    rating.addEventListener("click", () => {
        chosenRating.innerHTML = rating.innerHTML;
        })
})

submitButton.addEventListener("click", () => {
    thankYou.style.display = 'flex';
})