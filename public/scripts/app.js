"use strict";

console.log('app js is running');

//JSX - Javascript XML

// templae one
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " hi i am react "
    ),
    React.createElement(
        "p",
        null,
        "hello"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var userName = "Pobon",
    userAge = 26,
    userLocation = "Khulna";

var user = {
    name: "Chandra",
    age: 22,
    location: "Dhaka"
};

// template two
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name : ",
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age : ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location : ",
        user.location
    )
);

// var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('apptwo');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
