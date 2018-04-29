// conditonal rendering task
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

var appRootFour = document.getElementById('appfour');

ReactDOM.render(templaeFour, appRootFour);