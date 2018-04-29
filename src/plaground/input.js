console.log('app js is running');


let app = {
  options: []
};

let submitForm = (e) => {
  e.preventDefault();
  // console.log('add');

  let option = e.target.elements.option.value;
  // console.log(option);
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

let removeAll = () => {
  app.options = [];
  render();
}

var appRoot = document.getElementById('app');

let numbers = [10,20,50,30];

let numberShow = () => {
  // numbers.map(number => <div><p>Number: {number}</p></div>);
}

let randomNumber = () => {
  let random = Math.floor(Math.random() * app.options.length);
  let option = app.options[random];
  console.log(option);
}

let render = () => {
  var template = (
    <div>
      <form onSubmit={submitForm}>
        {/* {
          numbers.map(number => {
            return <p key={number}>Number: {number} </p>
          })
        } */}
        <p>{app.options.length > 0 ? 'Options is here': 'No Option'}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} className="btn btn-success" onClick={randomNumber}>Random Number</button>
        <hr/>
        <ol>
          {
            app.options.map(option => {
              return <li key={option}>{option}</li>
            })
          }
        </ol>
        <input type="text" name="option" className="form-control mb-2" />
        <button className="btn btn-primary mr-3">Submit</button>
        {app.options.length > 0 ? <button className="btn btn-danger" onClick={removeAll}> Reset All</button>: <button className="btn btn-danger" disabled> All</button>}
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();