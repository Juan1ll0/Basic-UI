'use strict';

import React from 'react';
import classNames from 'classnames';

import BasicCollapseHeaderCaret from './CollapseHeaderCaret';

export default class BasicCollapseHeader extends React.Component {
    render() {
      let caret = (this.props.caret)
                      ? <BasicCollapseHeaderCaret key='caret' {...this.props} />
                      : null;

      let title = <span key='title'>{this.props.header}</span>;
      return React.createElement(this.props.headerElement, {}, [caret, title]);
    }
}

BasicCollapseHeader.propTypes = {
  caret: React.PropTypes.bool,
  header: React.PropTypes.string
}

BasicCollapseHeader.defaultProps = {
  headerElement: 'h3',
  caret: true,
  header: 'Demo header'
}
