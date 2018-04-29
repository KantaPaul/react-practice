// 016 Events and Attributes
let count = 0;
let addOne = () => {
    // console.log('addOne');
    count++;
    counterApp();
};
let subOne = () => {
    // console.log('subOne');
    if (count === 0) {
        count = 0;
    } else {
        count--;
    }
    counterApp();
};
let reset = () => {
    // console.log('reset')
    count = 0;
    counterApp();
};

var appFive = document.getElementById('appfive');

let counterApp = () => {
    let templateFive = (
        <div>
            <h1>Count {count}</h1>
            <button className="btn btn-primary mr-2" onClick={addOne} >Plus One</button>
            <button className="btn btn-secondary mr-2" onClick={subOne} >Minus One</button>
            <button className="btn btn-danger" onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateFive, appfive);
}
counterApp();