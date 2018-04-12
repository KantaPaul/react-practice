'use strict';

console.log('app js is running');

//JSX - Javascript XML

// templae one
var app = {
    title: 'Some title',
    subtitle: 'This is my sub title'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
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
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name : ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);

// conditonal rendering
var userInfo = {
    name: "Mike",
    age: 20,
    country: "Bangladesh",
    ps: "Shyamoli"
};
function getLocation(country) {
    // if (country) {
    //     return country;
    // } else {
    //     return 'unknown';
    // }
    if (country) {
        return React.createElement(
            'p',
            null,
            'Country : ',
            country
        );
    }
};
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Name : ',
        userInfo.name ? userInfo.name : 'Unknown Person'
    ),
    userInfo.age && userInfo.age >= 18 && React.createElement(
        'h3',
        null,
        'Age : ',
        userInfo.age
    ),
    getLocation(userInfo.country),
    userInfo.ps && userInfo.ps && React.createElement(
        'h5',
        null,
        'Police Station: ',
        userInfo.ps
    )
);

// task
var appInfo = {
    title: "React App",
    subtitle: "Welcome to my app",
    options: ['one', 'two']
};
function showoption(option) {
    if (option.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here is your options'
        );
    } else {
        return React.createElement(
            'p',
            null,
            'No options here'
        );
    }
}
var templaeFour = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        appInfo.title
    ),
    appInfo.subtitle && React.createElement(
        'h3',
        null,
        appInfo.subtitle
    ),
    showoption(appInfo.options),
    React.createElement(
        'p',
        null,
        appInfo.options.length > 0 ? 'Your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Option One'
        ),
        React.createElement(
            'li',
            null,
            'Option Two'
        )
    )
);

// var appRoot = document.getElementById('app');
// var appRootTwo = document.getElementById('apptwo');
// var appRootThree = document.getElementById('appthree');
var appRootFour = document.getElementById('appfour');

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRootTwo);
// ReactDOM.render(templateThree, appRootThree);
ReactDOM.render(templaeFour, appRootFour);
