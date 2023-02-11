car_details = [{
    name: "BYDAtto3",
    long_name: "BYD Atto 3",
    plate_no: "SKL1F",
    daily_price: 100,
    return_by: getDateBefore(3)
},
{
    name: "Ioniq5",
    long_name: "Hyundai Ioniq 5",
    plate_no: "SKL2F",
    daily_price: 110,
    return_by: getDateBefore(-1)
},
{
    name: "Tesla3",
    long_name: "Tesla Model 3",
    plate_no: "SKL3F",
    daily_price: 130,
    return_by: getDateBefore(8)
},
];

function getDateBefore(days) {
    let date = new Date();
    return new Date(date.getTime() - days * 60000 * 24);
}

function showDetails(form) {
    let form_obj = Object.fromEntries(new FormData(form));
    let car = car_details.find(o => o.plate_no === form_obj.car_num);

    let date_now = new Date();
    let extra_charge_date = 7 * 60000 * 24;
    let day_diff = Math.ceil((date_now.getTime() - car.return_by.getTime()) / 60000 / 24);

    console.log(day_diff);
    let message = document.querySelector("div#msg");
    message.innerHTML = `Thank you for returning the vehicle to: ${form_obj.location} carpark.<br>`;

    if (date_now.getTime() > car.return_by) {
        message.innerHTML += `You will be charged an additional rental fee of $${car.daily_price * day_diff} for the late return<br>`

        if (date_now.getTime() - car.return_by.getTime() >= extra_charge_date) {
            message.innerHTML += `As you have returned the car later than 7 days<br>A super late charge fee of $200 will be charged to your credit card<br>`;
        }
    }
    else {
        message.innerHTML += "You have returned your car early/on time.\nYour credit card will be charged once our staff have inspected the car.";
    }
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    showDetails(e.target);
});