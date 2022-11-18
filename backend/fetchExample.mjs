import fetch from 'node-fetch';

function fetchPostExample() {
    let bodycontent = JSON.stringify({
        collName: 'FoodItems',
        name: "beef",
        category: "protein group",
        notes: "high amount of protein",
        quantity: "200g",
        expirationDate: "2022-09-16",
        addDate: "2022-09-07"
    });

    fetch('http://localhost:3000/api/v1/foodItems/', {
        "method": 'POST',
        "body": bodycontent,
        "headers": {
            "Content-Type": "application/json"
        } 
    })
    .then((response) => console.log(response));
}

//fetchPostExample();

//request with GET HEAD cannot have a body
function fetchGetExample() {
    let bodycontentGet = JSON.stringify({
        collName: 'FoodItems',
        name: "chocolate",
    });

    fetch('http://localhost:3000/api/v1/foodItems/get', {
        "method": 'GET',
        "body": bodycontentGet,
        "headers": {
            "Content-Type": "application/json"
        } 
    })
    .then((response) => console.log(response));
}

//fetchGetExample();