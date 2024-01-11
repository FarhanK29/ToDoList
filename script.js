const addBtn = document.querySelector("#addBtn");
const addInput = document.querySelector("#input-box");
const divList = document.querySelector(".list-container");

addInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (addInput.value === "") {
            alert("You must type something");
        } else {
            addBtn.click();
        }
    }
    saveData();
});

addBtn.addEventListener("click", () => {
    if (addInput.value === "") {
        alert("You must type something");
    } else {
        const ul = divList.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML = addInput.value;
        ul.appendChild(li);
        addInput.value = "";
        let span = document.createElement("span");
        span.innerHTML =
            '<button class="check">&#10003;</button><button class="cross">&#10005;</button>';
        li.appendChild(span);
        saveData();


        const crossButton = li.querySelector(".cross");
        crossButton.addEventListener("click", function () {
            this.closest("li").remove();
            saveData();
        });
        const checkButton = li.querySelector(".check");
        checkButton.addEventListener("click", function () {
            li.classList.toggle("strikethrough");
            saveData();
        });

    
    }
});

function saveData(){
    localStorage.setItem("data", divList.innerHTML);
}

function showTask() {
    divList.innerHTML = localStorage.getItem("data");

    const crossButtons = document.querySelectorAll(".cross");
    crossButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest("li").remove();
            saveData();
        });
    });

    const checkButtons = document.querySelectorAll(".check");
    checkButtons.forEach(button => {
        button.addEventListener("click", function () {
            const li = this.closest("li");
            li.classList.toggle("strikethrough");
            saveData();
        });
    });
}

showTask();
