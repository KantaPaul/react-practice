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

var appRootThree = document.getElementById('appthree');

ReactDOM.render(templateThree, appRootThree);