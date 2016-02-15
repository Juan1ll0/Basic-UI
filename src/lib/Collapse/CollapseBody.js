'use strict';

import React from 'react';
import classNames from 'classnames';
import {Motion, spring} from 'react-motion';

// import CollapseBodyContent from './CollapseBodyContent';

export default class CollapseBody extends React.Component {
  componentDidMount(){
    // Get Height of childs.
    // this.refs.content.clientHeight
    console.log('Creando el cuerpo: ' + this.props.collapsed);
    console.log('Creando el cuerpo: ' + this.refs.content.clientHeight);

  }
  render() {
      if (this.props.collapsed) {
        return (
          <div style={{height: 0, overflow: 'hidden'}}>
            <div ref='content'>{this.props.children}</div>
          </div>
        );
      } else {
        // let contentHeight = this.refs.content.offsetHeight + ((this.refs.content.offsetHeight - this.refs.content.offsetTop)/2);
        // let margin = (this.refs.content.offsetHeight - this.refs.content.offsetTop) / 2;
        // let contentHeight = this.refs.content.offsetHeight + margin;
        let contentHeight = this.refs.content.clientHeight
        return (
          <Motion defaultStyle={{height: 0}} style={{height: spring(contentHeight)}}>
          {({height}) => {
              let componentStyle = {
                border: '1px solid black',
                height: height,
                overflow: 'hidden'
              }
              return <div style={componentStyle} ref='content'>{this.props.children}</div>
          }}
          </Motion>
        )
      }
  }
}
