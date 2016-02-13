import classNames from 'classnames';

import CollapseHeader from './CollapseHeader';
import CollapseBody from './CollapseBody';

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
        let contentClass = (this.state.collapsed) ? 'collapsed' : 'expanded';
        let caret = (this.state.collapsed)
                        ? <span className="fa fa-caret-right" onClick={this.toggleCollapsed}></span>
                        : <span className="fa fa-caret-down" onClick={this.toggleCollapsed}></span>;

        let header = (this.props.title)
                        ? <h3 className='text-shadow'>{caret}{this.props.title}</h3>
                        : null;

        let body = <div className={contentClass}>{this.props.children}</div>

        return React.createElement(this.props.element,
                                    {className: this.props.className},
                                    [header, body]
                                );
    }
}
