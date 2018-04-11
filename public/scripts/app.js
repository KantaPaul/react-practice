'use strict';

console.log('app js is running');

//JSX - Javascript XML

// templae one
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' hi i am react '
    ),
    React.createElement(
        'p',
        null,
        'hello'
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

// template two
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name : Kanta'
    ),
    React.createElement(
        'p',
        null,
        'Age : 26'
    ),
    React.createElement(
        'p',
        null,
        'Location : Dhaka'
    )
);

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('apptwo');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
