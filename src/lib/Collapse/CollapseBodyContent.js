'use strict';

import React from 'react';
import classNames from 'classnames';
import {Motion, spring} from 'react-motion';

export default class BasicCollapseBodyContent extends React.Component {
    componentDidMount(){
      // Get Height of childs.
      // this.refs.content.clientHeight
      console.log('Creando el cuerpo: ' + this.props.collapsed);
      console.log('Creando el cuerpo: ' + this.refs.content.clientHeight);

    }
    getHeight() {
      return this.refs.content.clientHeight;
    }
    render() {
        if (this.props.collapsed) {
          return (
            <div style={{height: 0, overflow: 'hidden'}}>
              <div ref='content'>{this.props.children}</div>
            </div>
          );
        } else {
          return (
            <div style={this.props.componentStyle} ref='content'>{this.props.children}</div>
          );
        }

    }
}
