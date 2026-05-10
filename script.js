const cars = [

{
  name:"Toyota Prado",
  year:2023,
  seats:7,
  transmission:"Automatic",
  noDriver:120,
  withDriver:170,
  image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Range Rover",
  year:2024,
  seats:5,
  transmission:"Automatic",
  noDriver:250,
  withDriver:320,
  image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Mercedes Benz",
  year:2023,
  seats:5,
  transmission:"Automatic",
  noDriver:180,
  withDriver:230,
  image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Toyota Rav4",
  year:2022,
  seats:5,
  transmission:"Manual",
  noDriver:90,
  withDriver:130,
  image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"BMW X6",
  year:2022,
  seats:5,
  transmission:"Automatic",
  noDriver:190,
  withDriver:250,
  image:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Land Cruiser V8",
  year:2024,
  seats:8,
  transmission:"Automatic",
  noDriver:300,
  withDriver:370,
  image:"https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Toyota Hilux",
  year:2021,
  seats:5,
  transmission:"Manual",
  noDriver:100,
  withDriver:140,
  image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Hyundai Tucson",
  year:2021,
  seats:5,
  transmission:"Manual",
  noDriver:85,
  withDriver:120,
  image:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Nissan Patrol",
  year:2023,
  seats:7,
  transmission:"Automatic",
  noDriver:180,
  withDriver:240,
  image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
},

{
  name:"Kia Sportage",
  year:2020,
  seats:5,
  transmission:"Manual",
  noDriver:70,
  withDriver:100,
  image:"https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop"
}

];

const container = document.getElementById("cars-container");

cars.forEach(car=>{

container.innerHTML += `

<div class="car-card">

<img src="${car.image}">

<div class="car-info">

<h3>${car.name}</h3>

<p><strong>Year:</strong> ${car.year}</p>

<p><strong>Seats:</strong> ${car.seats}</p>

<p><strong>Transmission:</strong> ${car.transmission}</p>

<div class="price-box">

<p>Without Driver:
<strong>$${car.noDriver}/day</strong></p>

<p>With Driver:
<strong>$${car.withDriver}/day</strong></p>

</div>

<button class="book-btn"
onclick="bookCar('${car.name}')">
Book / Rent
</button>

</div>

</div>

`;

});

function bookCar(car){

window.location.href =
`booking.html?car=${encodeURIComponent(car)}`;

}