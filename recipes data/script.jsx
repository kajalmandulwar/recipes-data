const recepieContainer = document.querySelector(".recepie-container");

fetch("https://dummyjson.com/recipes").then((res) => {
  res.json().then((data) => {
    console.log(data.recipes);
    data.recipes.map((Element) => {
      // console.log(Element);
      const recepieCard = document.createElement("a");
      recepieCard.classList = "recepie-card";
      recepieCard.href = `/recipedetails.html?id=${Element.id}`
      // console.log(Element.id);
        

      recepieCard.innerHTML = ` <div class="recepie-image">
                    <img src=${Element.image} alt="image here">
                </div>
                      <h2 class="recepie-name">${Element.name}</h2>
                        <div class="recepie-content">
                         <p>${Element.cuisine}</p>
                         <p>${Element.difficulty}</p>
                         <p>${Element.rating}</p>
                     </div>`;
      recepieContainer.append(recepieCard);
    });
  });
});

console.log(recepieContainer);
