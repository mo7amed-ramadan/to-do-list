// add and remove tasks
// Golbal variables
var taskVal = document.getElementById("add-tasks");
var dateVAl = document.getElementById("task-date");
var priorityVal = document.getElementById("selected");
var descriptionVal = document.getElementById("task-description");
var home = document.getElementById("your-tasks");
const cardContainer = document.getElementById("card-container");
// Create cards variables
var card = null;
var cardHead = null;
var taskName = null;
var doneNot = null;
var correct = null;
var wrong = null;
var taskDate = null;
var taskPriority = null;
var taskDescription = null;
// Add values variables
var taskContent = null;
var dateContent = null;
var priorityContent = null;
var descriptionContent = null;
// storage variables
var cards = null;

//put the content in the card and put the card to home section
function addContent() {
  createCard();
  addValues();
  home.appendChild(card);
  card.appendChild(cardHead);
  cardHead.appendChild(taskName);
  taskName.innerText = taskContent;
  cardHead.appendChild(doneNot);
  doneNot.appendChild(correct);
  doneNot.appendChild(wrong);
  card.appendChild(taskDate);
  taskDate.innerHTML = "<i class='fa-solid fa-clock'></i>" + dateContent;
  card.appendChild(taskPriority);
  taskPriority.innerHTML = priorityContent;
  card.appendChild(taskDescription);
  taskDescription.innerText = descriptionContent;
  // Store card in local storage
  storeCards();
  window.location.reload();
}

// create element of card
function createCard() {
  card = document.createElement("div");
  cardHead = document.createElement("div");
  taskName = document.createElement("div");
  doneNot = document.createElement("div");
  correct = document.createElement("div");
  wrong = document.createElement("div");
  taskDate = document.createElement("div");
  taskPriority = document.createElement("div");
  taskDescription = document.createElement("div");
}
// put values that selected to card
function addValues() {
  taskContent = taskVal.value;
  dateContent = dateVAl.value;
  priorityContent = priorityVal.innerHTML;
  descriptionContent = descriptionVal.value;
  correct.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  wrong.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
  card.setAttribute("id", "card");
  cardHead.classList.add("card-head");
  taskName.setAttribute("id", "taskName");
  doneNot.classList.add("done-or-not");
  correct.setAttribute("id", "correct");
  wrong.setAttribute("id", "wrong");
  taskDate.setAttribute("id", "taskDate");
  taskPriority.setAttribute("id", "taskPriority");
  taskDescription.setAttribute("id", "taskDescription");
}
//store cards in local storage
function storeCards() {
  cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push(card.outerHTML);
  localStorage.setItem("cards", JSON.stringify(cards));
}
// Add event listener to the "wrong" div
// Add event listener to the "wrong" div
