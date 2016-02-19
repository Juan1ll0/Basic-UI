'use strict';

// Libs
import React from 'react';
import classNames from 'classnames';

// Components
import BasicCollapseHeader from './CollapseHeader';
import BasicCollapseBody from './CollapseBody';

// CSS
import './css/Collapse.css'

export default class BasicCollapse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {collapsed: this.props.collapsed};
      this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }
    toggleCollapsed() {
      this.setState({collapsed: !this.state.collapsed});
    }
    render() {
      let { collapsed, className, ...other } = this.props;
      let header = (this.props.title)
                      ? <BasicCollapseHeader
                          key='collapse-header'
                          collapsed={this.state.collapsed}
                          toggleCollapse={this.toggleCollapsed}
                          {...other} />
                      : null;

      let body = <BasicCollapseBody
                    key='collapsse-body'
                    collapsed={this.state.collapsed}
                    children={this.props.children} />

      let classes = classNames({
                      'collapse': true,
                      [this.props.className]: true
                    });

      return React.createElement(this.props.element,
                                  { className: classes },
                                  [header, body]
                              );
    }
}

BasicCollapse.propTypes = {
  element: React.PropTypes.node,
  collapsed: React.PropTypes.bool
}
// optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

BasicCollapse.defaultProps = {
  element: 'div',
  collapsed: true
}
