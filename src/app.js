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

// template two
var templateTwo = (
    <div>
        <h1>Name : Kanta</h1>
        <p>Age : 26</p>
        <p>Location : Dhaka</p>
    </div>
);

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('apptwo');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
