// Load cards from local storage on page load
cards = JSON.parse(localStorage.getItem("cards")) || [];
cards.forEach((cardHTML) => {
  const card = document.createElement("div");
  card.innerHTML = cardHTML;
  cardContainer.appendChild(card);
});
// Attach event listener to the parent element (assuming it has the id "cardContainer")
cardContainer.addEventListener("click", function (event) {
  // Check if the clicked element or a parent has the id "correct"
  var correctButton = event.target.closest("#correct");
  if (correctButton) {
    // Handle "correct" button click
    var taskName = correctButton.closest("#card").querySelector("#taskName");
    taskName.style.textDecoration = "line-through";
    correctButton.closest("#card").style.color = "gray";
    alert("your tasks is done");
  }
  // Check if the clicked element or a parent has the id "wrong"
  var wrongButton = event.target.closest("#wrong");
  if (wrongButton) {
    // Handle "wrong" button click
    var wrongCard = wrongButton.closest("#card");
    removeCardFromLocalStorage(wrongCard);
    wrongCard.style.display = "none";
    alert("Card removed successfully.");
  }
});

// for every click on wrong button will do this effect

// when client click on burger icon the side show will appear
var burgerIcon = document.getElementById("bar");
var closeIcon = document.getElementById("close-bar");
var sideBar = document.getElementById("sidebar");
burgerIcon.onclick = function () {
  sideBar.style.display = "block";
  sideBar.style.position = "absolute";
  sideBar.style.backgroundColor = "#FFF";
  sideBar.style.height = "100%";
  sideBar.style.borderRadius = "0 0 20px 0";
  sideBar.style.left = "0";
  sideBar.style.top = "0";
  burgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  closeIcon.style.position = "absolute";
  closeIcon.style.left = "240px";
  closeIcon.style.top = "15px";
};
closeIcon.onclick = function () {
  sideBar.style.display = "none";
  closeIcon.style.display = "none";
  burgerIcon.style.display = "block";
};
// Function to remove card from local storage
function removeCardFromLocalStorage(card) {
  var storedCards = JSON.parse(localStorage.getItem("cards")) || [];

  var index = storedCards.indexOf(card.outerHTML);
  if (index !== -1) {
    storedCards.splice(index, 1);

    localStorage.setItem("cards", JSON.stringify(storedCards));
  }
}
