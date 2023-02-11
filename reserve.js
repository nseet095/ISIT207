car_prices = [{
    name: "BYDAtto3",
    daily_price: 100,
    weekly_price: 80,
    monthly_price: 60
},
{
    name: "Ioniq5",
    daily_price: 110,
    weekly_price: 90,
    monthly_price: 70
},
{
    name: "Tesla3",
    daily_price: 130,
    weekly_price: 110,
    monthly_price: 90
},
];

function onload() {
    let dateInput = document.getElementById('expiry');
    dateInput.value = new Date().toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
}

document.getElementById("reserve_form").addEventListener("submit", function (e) {
    e.preventDefault();
    showDetails(e.target);
  });

function changeCarPrice() {
    let price_elem = document.querySelector("div#price");
    let car_selected = document.querySelector("select#car");
    let rent_duration = document.querySelector("input[name='rent_duration']:checked");
    let car = car_prices.find(o => o.name === car_selected.value);

    let now = new Date();
    let no_of_days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    console.log(rent_duration.value);
    if (rent_duration.value == "daily") {
        price_elem.innerHTML = car.daily_price;
    }
    else if (rent_duration.value == "weekly") {
        price_elem.innerHTML = car.weekly_price * 7;
    }
    else if (rent_duration.value == "monthly") {
        price_elem.innerHTML = car.monthly_price * no_of_days;
    }
}

function showDetails(form) {
    let form_data = new FormData(form);
    let form_obj = Object.fromEntries(form_data);
    let reserve_info = 
}