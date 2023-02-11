car_prices = [{
    name: "BYDAtto3",
    long_name: "BYD Atto 3",
    plate_no: "SKL1F",
    daily_price: 100,
    weekly_price: 80,
    monthly_price: 60
},
{
    name: "Ioniq5",
    long_name: "Hyundai Ioniq 5",
    plate_no: "SKL2F",
    daily_price: 110,
    weekly_price: 90,
    monthly_price: 70
},
{
    name: "Tesla3",
    long_name: "Tesla Model 3",
    plate_no: "SKL3F",
    daily_price: 130,
    weekly_price: 110,
    monthly_price: 90
},
];

function onload() {
    let dateInput = document.getElementById('expiry');
    dateInput.value = new Date().toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];

    let pickup_date = document.getElementById('pickup_date');
    pickup_date.value = new Date().toISOString().split('T')[0];
    pickup_date.min = new Date().toISOString().split('T')[0];
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    showDetails(e.target);
  });

function changeCarPrice() {
    let price_elem = document.querySelector("div#price");
    let car_selected = document.querySelector("select#car");
    let rent_duration = document.querySelector("input[name='rent_duration']:checked");
    let car = car_prices.find(o => o.name === car_selected.value);

    console.log(rent_duration.value);
    console.log(price_elem);
    console.log(car.weekly_price);
    let now = new Date();
    let no_of_days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    if (rent_duration.value == "day") {
        price_elem.innerHTML = "$" + car.daily_price;
    }
    else if (rent_duration.value == "week") {
        price_elem.innerHTML = "$" + car.weekly_price * 7;
    }
    else if (rent_duration.value == "month") {
        price_elem.innerHTML = "$" + car.monthly_price * no_of_days;
    }
}

function showDetails(form) {
    let form_data = new FormData(form);
    let form_obj = Object.fromEntries(form_data);
    let car = car_prices.find(o => o.name === form_obj.car);
    let duration = document.querySelector('input[name="rent_duration"]:checked');
    console.log(duration);

    let reserve_info = document.querySelector("div#form");
    reserve_info.innerHTML = `<h1>You have Selected</h1><p>Car: ${car.long_name}</p><p>Plate Number: ${car.plate_no}</p><p>Duration: 1 ${duration.value}</p><p>Pick up on: ${form_obj.pickup_date}</p><p>Pick up location: ${form_obj.location}</p>`
}