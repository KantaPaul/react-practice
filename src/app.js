console.log('app js is running');

let visibility = false;

let visibleText = () => {
  visibility = !visibility;
  renderContent();
}

let app = document.getElementById('app');

let renderContent = () => {
  let visibleTemplate = (
    <div>
      <h1 className="mb-3">Visibility Toggle</h1>
      <button onClick={visibleText} className={visibility ? 'btn btn-primary': 'btn btn-secondary'}>
        {visibility ? 'Hide Details': 'Show Details'}
      </button>
      {visibility ? <p className="lead mt-3">Hi i am logical if</p>: <p className="lead mt-3">No content</p>}
      {
        visibility && (
          <div>
            <p className="lead">Hi i am logical and</p>
          </div>
        )
      }
    </div>
  );
  ReactDOM.render(visibleTemplate, app);
}

renderContent();