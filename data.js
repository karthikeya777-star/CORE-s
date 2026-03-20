const container = document.getElementById("car-list");

cars.forEach(car => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>${car.name}</h2>
    <p>Price: ${car.price}</p>
    <p>Engine: ${car.engine}</p>
    <p>Mileage: ${car.mileage}</p>
    <p>${car.description}</p>
  `;

  container.appendChild(div);
});
