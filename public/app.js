"use strict";
let ZILLOW_URL = "http://www.zillow.com/webservice/GetDeepSearchResults.htm";
let zillowID = "X1-ZWz1geefhqocuj_6sext";

//request to zillow API
function zillowRequest (address, cityStateZip, callBack) {
    const query = {
        'zws-id': "X1-ZWz1geefhqocuj_6sext",
        address: `${address}`,
        citystatezip: `${cityStateZip}`
}
    $.getJSON(ZILLOW_URL, query, callBack)
}










let mockHouses = {
    "houses" : [
        {
            "id": "1111",
            "address": "111 club street",
            "price": "$150,000",
            "sqFt": "1000 sq foot",
            "notes": "Great location for me, but would like a bigger kitchen.",
            "image": ""
        },
         {
            "id": "2222",
            "address": "222 club street",
            "price": "$250,000",
            "sqFt": "2000 sq foot",
            "notes": "Don't love the location, but I love the size and layout of house.",
            "image": ""
        },
         {
            "id": "3333",
            "address": "333 club street",
            "price": "$350,000",
            "sqFt": "3000 sq foot",
            "notes": "Great location, and I like the size.  Only negative is, a little to pricey for me.",
            "image": ""
        }
    ]
};

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementation will change. Instead of using a
// timeout function that returns mock data, it will
// use jQuery's AJAX functionality to make a call
// to the server and then run the callbackFn
function getListOfHouses(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.
	setTimeout(function(){ callbackFn(mockHouses)}, 1);
}


function displayHouses(data) {
    console.log(data);
    for (index in data.houses) {
	   $('body').append('<p>' + data.houses[index].id +'</br>' +
                                data.houses[index].address +'</br>' +
                                data.houses[index].price +'</br>' +
                                data.houses[index].sqFt +'</br>' +
                                data.houses[index].notes +'</br>' +
                                data.houses[index].image + '</p>');
     }
}

//when click on House list link
function getAndDisplayHouses() {
	getListOfHouses(displayHouses);
}









function submitHandler(){
    $('form').on('submit', function(event){
        event.preventDefault();
        let address = $("#address").val();
        let cityStateZip = $("#city").val();

        zillowRequest(address, cityStateZip);
    })
}






//  on page load do this
$(getAndDisplayHouses());
$(submitHandler());