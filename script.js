let item = document.getElementById("searchinput");
let totEl = document.getElementById("tot");
let bannersecEL = document.getElementById("banner");
let dEL = document.getElementById("mainingre");
let buttonEL = document.getElementById("viewbutton");
let finEl = document.getElementById("fin");


let divEL = document.getElementById("main");
divEL.style.backgroundColor = "#949fcf";

function createappend(meals) {

    let headingEl = document.createElement("h1");
    headingEl.textContent = "Your Search Results:";
    divEL.appendChild(headingEl);

    let div2EL = document.createElement("div");
    div2EL.classList.add("d-flex", "styling");
    divEL.appendChild(div2EL);

    for (let items of meals) {

        let div1EL = document.createElement("div");
        div1EL.classList.add("itemscard");
        div1EL.style.backgroundColor = "#ffffff";
        div1EL.classList.add("m-2", "menu-item-card", "shadow", "p-3", "mb-3");
        div2EL.appendChild(div1EL);

        let imageEl = document.createElement("img");
        imageEl.src = items.strMealThumb;
        imageEl.classList.add("imagestyling", "menu-item-image");
        div1EL.appendChild(imageEl);

        let paraEl = document.createElement("h1");
        paraEl.textContent = items.strMeal;
        paraEl.classList.add("menu-card-title");
        div1EL.appendChild(paraEl);

    }


    let button1El = document.createElement("button");
    button1El.classList.add("buttonelement", "custom-button", "mb-4");
    button1El.textContent = "Back";
    divEL.appendChild(button1El);
    button1El.onclick = function() {
        divEL.textContent = "";

    }





}

function reposit() {
    let ximageEl = document.createElement("img");
    ximageEl.src = "https://thumbs.dreamstime.com/z/vector-oops-symbol-over-white-29840798.jpg";
    ximageEl.classList.add("m-1", "oops");
    divEL.appendChild(ximageEl);

    let div2EL = document.createElement("div");
    div2EL.classList.add("d-flex", "styling");
    divEL.appendChild(div2EL);

    let x = item.value;
    let paragEl = document.createElement("p");
    paragEl.textContent = `Oops, couldn't find relevant matches for '${x}' `;
    paragEl.classList.add("text-center");
    paragEl.style.color = "red";
    paragEl.style.fontSize = "24px";
    paragEl.style.fontWeight = "bold";
    div2EL.appendChild(paragEl);


    let button1El = document.createElement("button");
    button1El.classList.add("buttonelement", "custom-button", "mb-4");
    button1El.textContent = "Back";
    divEL.appendChild(button1El);
    button1El.onclick = function() {
        divEL.textContent = "";

    }
}



item.addEventListener("keydown", function() {
    if (event.key === "Enter") {
        divEL.textContent = "";
        let options = {
            method: "GET"
        };

        let x = item.value;
        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`;

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let {
                    meals
                } = data;
                if (meals === null) {
                    reposit();
                } else {
                    createappend(meals);
                }
            });
    }

});