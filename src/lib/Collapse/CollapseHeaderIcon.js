'use strict';

import React from 'react';

export default class BasicCollapseHeaderIcon extends React.Component {
    render() {
      let style = {cursor: 'pointer'};
      let icon = (this.props.collapsed)
                      ? <span style={style} onClick={this.props.toggleCollapse}>&gt;</span>
                      : <span style={style} onClick={this.props.toggleCollapse}>&lt;</span>;
      return icon;
    }
}

BasicCollapseHeaderIcon.propTypes = {
  collapsed: React.PropTypes.bool,
  toggleCollapse: React.PropTypes.func.isRequired
}

BasicCollapseHeaderIcon.defaultProps = {
  collapsed: true
}
