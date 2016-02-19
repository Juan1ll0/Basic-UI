'use strict';

import React from 'react';

export default class BasicCollapseHeaderIcon extends React.Component {
    render() {
      let style = {cursor: 'pointer'};
      let classes = (this.props.collapsed) ? 'icon-caret-right' : 'icon-caret-down';
      return <span style={style} className={classes} onClick={this.props.toggleCollapse}>&nbsp;</span>
    }
}

BasicCollapseHeaderIcon.propTypes = {
  collapsed: React.PropTypes.bool,
  toggleCollapse: React.PropTypes.func.isRequired
}

BasicCollapseHeaderIcon.defaultProps = {
  collapsed: true
}
