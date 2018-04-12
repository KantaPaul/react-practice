console.log('app js is running');

//JSX - Javascript XML

// templae one
var app = {
    title: 'Some title',
    subtitle: 'This is my sub title'
};
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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

// conditonal rendering
var userInfo = {
    name: "Mike",
    age: 20,
    country: "Bangladesh",
    ps: "Shyamoli"
}
function getLocation(country) {
    // if (country) {
    //     return country;
    // } else {
    //     return 'unknown';
    // }
    if (country) {
        return <p>Country : {country}</p>
    }
};
var templateThree = (
    <div>
        {/* conditonal oparetor */}
        <h2>Name : {userInfo.name ? userInfo.name : 'Unknown Person'}</h2>
        {/* logical and oparetor */}
        {(userInfo.age && userInfo.age >= 18) && <h3>Age : {userInfo.age}</h3>}
        {/* logical if else */}
        {getLocation(userInfo.country)}
        {/* logical and oparetor */}
        {(userInfo.ps && userInfo.ps) && <h5>Police Station: {userInfo.ps}</h5>}
    </div>
);

// task
var appInfo = {
    title: "React App",
    subtitle: "Welcome to my app",
    options: ['one', 'two']
}
function showoption(option) {
    if (option.length > 0) {
        return <p>Here is your options</p>;
    } else {
        return <p>No options here</p>;
    }
}
var templaeFour = (
    <div>
        <h2>{appInfo.title}</h2>
        {appInfo.subtitle && <h3>{appInfo.subtitle}</h3>}
        {showoption(appInfo.options)}
        <p>{appInfo.options.length > 0 ? 'Your options' : 'No options'}</p>
        <ol>
            <li>Option One</li>
            <li>Option Two</li>
        </ol>
    </div>
);

// var appRoot = document.getElementById('app');
// var appRootTwo = document.getElementById('apptwo');
// var appRootThree = document.getElementById('appthree');
var appRootFour = document.getElementById('appfour');

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRootTwo);
// ReactDOM.render(templateThree, appRootThree);
ReactDOM.render(templaeFour, appRootFour);
