car_details = [{
    name: "BYDAtto3",
    long_name: "BYD Atto 3",
    plate_no: "SKL1F",
    return_by: getDateAfter(30)
},
{
    name: "Ioniq5",
    long_name: "Hyundai Ioniq 5",
    plate_no: "SKL2F",
    return_by: getDateAfter(7)
},
{
    name: "Tesla3",
    long_name: "Tesla Model 3",
    plate_no: "SKL3F",
    return_by: getDateAfter(1)
},
];

function getDateAfter(days){
    let date = new Date();
    return new Date(date.getTime() + days * 60000 * 24);
}

function showDetails(form){
    let form_obj = Object.fromEntries(new FormData(form));
    let car = car_details.find(o => o.plate_no === form_obj.car_num);

    let textBox = document.querySelector("input#car_num");
    let message = document.querySelector("div#msg");

    if (!car){
        // If car plate entered wrongly
        textBox.style.backgroundColor = "#cc0000";
        message.className = "error";
        message.innerHTML = "Incorrect Car plate number enterecar.return_by. Please Try Again."
    }
    else {
        let datestring = car.return_by.getDate()  + "-" + (car.return_by.getMonth()+1) + "-" + car.return_by.getFullYear() + " " +
car.return_by.getHours() + ":" + car.return_by.getMinutes();
        textBox.value = "";
        textBox.style.backgroundColor = "#ffffff";
        message.className = "success";
        message.innerHTML = `${car.long_name} retrievecar.return_by. Please return the car by: ${datestring}hrs.`

    }

}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    showDetails(e.target);
  });