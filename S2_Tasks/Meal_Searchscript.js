async function searchMeal() {

    let mealName = document.getElementById("mealInput").value;

    let mealsDiv = document.getElementById("meals");

    mealsDiv.innerHTML = "Loading...";

    try {

        let response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName
        );

        let data = await response.json();
        mealsDiv.innerHTML = "";
        if (data.meals == null) {
            mealsDiv.innerHTML = "<h2>No meals found.</h2>";
            return;
        }

        for (let i = 0; i < data.meals.length; i++) {
            let meal = data.meals[i];
            let card = document.createElement("div");
            let image = document.createElement("img");
            image.src = meal.strMealThumb;
            image.width = 200;
            let name = document.createElement("h3");
            name.innerText = meal.strMeal;
            card.appendChild(image);
            card.appendChild(name);
            mealsDiv.appendChild(card);
            let line = document.createElement("hr");
            mealsDiv.appendChild(line);
        }

    } catch (error) {

        mealsDiv.innerHTML = "<h2>Error loading meals.</h2>";

    }

}