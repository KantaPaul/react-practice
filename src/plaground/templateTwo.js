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

var appRootTwo = document.getElementById('apptwo');

ReactDOM.render(templateTwo, appRootTwo);