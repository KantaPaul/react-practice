'use strict';

console.log('app js is running');

var visibility = false;

var visibleText = function visibleText() {
  visibility = !visibility;
  renderContent();
};

var app = document.getElementById('app');

var renderContent = function renderContent() {
  var visibleTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { className: 'mb-3' },
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: visibleText, className: visibility ? 'btn btn-primary' : 'btn btn-secondary' },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility ? React.createElement(
      'p',
      { className: 'lead mt-3' },
      'Hi i am logical if'
    ) : React.createElement(
      'p',
      { className: 'lead mt-3' },
      'No content'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        { className: 'lead' },
        'Hi i am logical and'
      )
    )
  );
  ReactDOM.render(visibleTemplate, app);
};

renderContent();
