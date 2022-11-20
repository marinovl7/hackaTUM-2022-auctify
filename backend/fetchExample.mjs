import fetch from 'node-fetch';

//DUMMY DATA
function fetchPostExample() {
    let bodycontent = JSON.stringify({
        collName: 'Items',
        name: "beef",
        category: "protein group",
        notes: "high amount of protein",
        quantity: "200g",
        expirationDate: "2022-09-16",
        addDate: "2022-09-07"
    });

    fetch('http://localhost:5000/api//', {
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
        collName: 'Items',
        name: "chocolate",
    });

    fetch('http://localhost:5000/api/getAllItems', {
        "method": 'GET',
        "body": bodycontentGet,
        "headers": {
            "Content-Type": "application/json"
        } 
    })
    .then((response) => console.log(response));
}

//fetchGetExample();