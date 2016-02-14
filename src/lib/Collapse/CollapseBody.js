'use strict';

import classNames from 'classnames';
import {Motion, spring} from 'react-motion';
import ReactHeight from 'react-height';

import BasicCollapseBodyContent from './CollapseBodyContent';

export default class BasicCollapseBody extends React.Component {
    constructor(props) {
      super(props);

      this.changeHeight = this.changeHeight.bind(this);
      this.state = {
        height: 0
      }
    }

    changeHeight(componentHeight) {
      console.log(componentHeight);
      this.setState({height: componentHeight});
    }

    render() {
        console.log('CollapseBody: ' + this.props.collapsed);
        console.log('CollapseBody: ' + this.state.height);
        // let style = (this.props.collapsed) ? {display: 'none'} : {display: 'block'};

        return (
          <Motion style={{height: this.props.collapsed ? 0 : spring(200)}}>
          {({height}) => {
              var componentStyle = {
                border: '1px solid black',
                height: height,
                overflow: 'hidden'
              }
              return <BasicCollapseBodyContent style={componentStyle} content={this.props.children}/>
          }}
          </Motion>
        )
    }
}

BasicCollapseBody.defaultProps = {
  element: 'div',
  collapsed: true
}

/*

{
  React.createElement(this.props.element,
                            {style: style},
                            this.props.children
                        );
}


<Motion style={{x: spring(400)}}>
  {({x}) =>
    // children is a callback which should accept the current value of
    // `style`
    <div className="demo0">
      <div className="demo0-block" style={{
        border: '1px solid black',
        height: x
      }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  }
</Motion>
*/
