// priority dropdown
//  Definition of variable
var dropDown = document.querySelectorAll(".priority");
var priority = document.getElementById("selected");
var high = document.getElementById("high");
var highValue = high.innerHTML;
var medium = document.getElementById("medium");
var mediumValue = medium.innerHTML;
var low = document.getElementById("low");
var lowValue = low.innerHTML;
var caret = null;
var list= null;
// for each click on select show options
dropDown.forEach((dropDown) => {
    // when you click on select the list will be open
    selectPriority(dropDown)
    //your selected option will show in select field
    openOptions(dropDown)
});
// open the dropdown to select priority
function selectPriority (ele){
    const select = ele.querySelector(".select");
    caret = ele.querySelector(".caret");
    list = ele.querySelector(".list");
    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        list.classList.toggle("list-open");
        caret.classList.toggle("caret-rotate");
    });
}
//your selected option will show in select field
function openOptions (element){
    const selected = document.getElementById("selected");
    const options = element.querySelectorAll(".list li");
    list = element.querySelector(".list");
    caret = element.querySelector(".caret");
    options.forEach((option) => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.innerHTML;
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            list.classList.remove("list-open");
            if (selected.innerHTML == highValue) {
                selected.style.color = "red";
            } else if (selected.innerHTML == mediumValue) {
                selected.style.color = "#FFD300";
            } else {
                selected.style.color = "green";
            }
            options.forEach((option) => {
                option.classList.remove("active");
            });
            option.classList.add("active");
        });
    });
}