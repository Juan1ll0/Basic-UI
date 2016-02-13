'use strict';

import classNames from 'classnames';

export default class BasicCollapse extends React.Component {
    render() {
        let caret = (this.props.collapsed)
                        ? <span onClick={this.props.toggleCollapsed}>c</span>
                        : <span onClick={this.props.toggleCollapsed}>e</span>;

        let header = (this.props.title)
                        ? <h3 className='text-shadow'>{caret}{this.props.title}</h3>
                        : null;

        return React.createElement(this.props.element,
                                    {className: this.props.className},
                                    {header}
                                );
    }
}
