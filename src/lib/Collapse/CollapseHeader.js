'use strict';

import React from 'react';
import classNames from 'classnames';

import BasicCollapseHeaderIcon from './CollapseHeaderIcon';

import './css/CollapseHeader.css';

export default class BasicCollapseHeader extends React.Component {
    render() {
      let classes = classNames({
                      'collapse-header': true,
                      'collapse-header-expanded': !this.props.collapsed,
                      'collapse-header-collapsed': this.props.collapsed
                    });
                    
      let icon = (this.props.icon)
                      ? <BasicCollapseHeaderIcon key='icon' {...this.props} />
                      : null;

      let title = <span key='title' className='collapse-header-title' onClick={this.props.toggleCollapse}>{this.props.title}</span>;

      return (
        React.createElement(this.props.headerElement, {className: classes}, [icon, title])
      );
    }
}

BasicCollapseHeader.propTypes = {
  headerElement: React.PropTypes.node,
  title: React.PropTypes.string,
  icon: React.PropTypes.bool,
  toggleCollapse: React.PropTypes.func.isRequired,
  collapsed: React.PropTypes.bool
}

BasicCollapseHeader.defaultProps = {
  headerElement: 'p',
  title: 'Collapse Header',
  icon: true,
  collapsed: true
}
