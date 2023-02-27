const toggleEl = document.querySelector(".toggle");
const mobilemenuEl = document.querySelector(".menumobile")
const closebtn = document.querySelector(".close")
const rightsideEl = document.querySelector(".right-side")

toggleEl.addEventListener("click", function () {
    mobilemenuEl.style.display = "inline-block"
rightsideEl.style.display="none"
});

closebtn.addEventListener("click", function () {
    mobilemenuEl.style.display = "none"
    rightsideEl.style.display="block"
});




