console.log('app js is running');

//JSX - Javascript XML

// templae one
var template = (
    <div>
        <h1> hi i am react </h1>
        <p>hello</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var userName = "Pobon",
    userAge = 26,
    userLocation= "Khulna";

var user = {
    name: "Chandra",
    age: 22,
    location: "Dhaka"
};

// template two
var templateTwo = (
    <div>
        <h1>Name : {user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);

// var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('apptwo');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
