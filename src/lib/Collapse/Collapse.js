'use strict';

import React from 'react';
import BasicCollapseHeader from './CollapseHeader';
import BasicCollapseBody from './CollapseBody';

export default class BasicCollapse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {collapsed: this.props.collapsed};
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }
    toggleCollapsed() {
        console.log('Caret Click: ' + this.state.collapsed);
        this.setState({collapsed: !this.state.collapsed});
    }
    render() {
        let header = (this.props.header)
                        ? <BasicCollapseHeader
                            key='collapse-header'
                            collapsed={this.state.collapsed}
                            toggleCollapsed={this.toggleCollapsed}
                            {...this.props} />
                        : null;

        let body = <BasicCollapseBody
                      key='collapsse-body'
                      collapsed={this.state.collapsed}
                      children={this.props.children} />

        return React.createElement(this.props.element,
                                    {className: this.props.className},
                                    [header, body]
                                );
    }
}

BasicCollapse.propTypes = {
  collapsed: React.PropTypes.bool
  // toggleCollapsed: required, function
}
// optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

BasicCollapse.defaultProps = {
  element: 'div',
  collapsed: true
}

/*
let body = <div className={contentClass}>{this.props.children}</div>
*/
