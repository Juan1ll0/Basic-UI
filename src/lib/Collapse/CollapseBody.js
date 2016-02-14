'use strict';

import classNames from 'classnames';

export default class BasicCollapse extends React.Component {
    render() {
        console.log('CollapseBody: ' + this.props.collapsed);
        let style = (this.props.collapsed) ? {display: 'none'} : {display: 'block'};
        return React.createElement(this.props.element,
                                    {style: style},
                                    this.props.children
                                );
    }
}

BasicCollapse.defaultProps = {
  element: 'div',
  collapsed: true
}
