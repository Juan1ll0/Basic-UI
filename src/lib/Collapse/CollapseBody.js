'use strict';

import React from 'react';
import classNames from 'classnames';
import {Motion, spring} from 'react-motion';

// css
import './css/CollapseBody.css';

// Inline styles
const style = {
  overflow: 'hidden'
}

export default class BasicCollapseBody extends React.Component {
  render() {
      if (this.props.collapsed) {
        return (
          <div style={Object.assign({}, style, {height :0})}>
            <div ref='content'>{this.props.children}</div>
          </div>
        );
      } else {
        let contentHeight = this.refs.content.clientHeight;
        return (
          <Motion defaultStyle={{height: 0}} style={{height: spring(contentHeight)}}>
            {({height}) => {
                return <div style={Object.assign({}, style, {height :height})} className='collapse-body-expanded' ref='content'>{this.props.children}</div>
            }}
          </Motion>
        );
      }
  }
}

BasicCollapseBody.propTypes = {
  bodyElement: React.PropTypes.node,
  collapsed: React.PropTypes.bool,
  children: React.PropTypes.node
}

BasicCollapseBody.defaultProps = {
  bodyElement: 'p',
  collapsed: true
}
