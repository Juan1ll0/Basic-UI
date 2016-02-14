'use strict';

import ReactDOM from 'react-dom';
import BasicCollapse from './src/lib/Collapse/Collapse'

class DemoComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Components Demo</h1>
        <div id='collapse'>
          <h2>Collapse Demo</h2>
          <BasicCollapse header="Prueba" element='section'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </BasicCollapse>
          <BasicCollapse header="Prueba2" element='section'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </BasicCollapse>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
    <DemoComponent />,
    document.getElementById('main')
);
