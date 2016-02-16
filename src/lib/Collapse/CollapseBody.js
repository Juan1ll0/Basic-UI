'use strict';

import React from 'react';
import classNames from 'classnames';
import {Motion, spring} from 'react-motion';

// css
import './css/CollapseBody.css';

// import CollapseBodyContent from './CollapseBodyContent';

export default class CollapseBody extends React.Component {
  render() {
      if (this.props.collapsed) {
        return (
          <div className='collapseBody collapsed'>
            <div ref='content'>{this.props.children}</div>
          </div>
        );
      } else {
        let contentHeight = this.refs.content.clientHeight
        return (
          <Motion defaultStyle={{height: 0}} style={{height: spring(contentHeight)}}>
            {({height}) => {
                return <div style={{height: height}} className='collapseBody expanded' ref='content'>{this.props.children}</div>
            }}
          </Motion>
        )
      }
  }
}
