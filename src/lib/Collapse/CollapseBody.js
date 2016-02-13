'use strict';

import classNames from 'classnames';

export default class BasicCollapse extends React.Component {
    render() {
        return React.createElement(this.props.element,
                                    {className: this.props.className},
                                    [ this.props.children ]
                                );
    }
}
