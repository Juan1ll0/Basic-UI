'use strict';

export default class BasicCollapseHeaderCaret extends React.Component {
    render() {
      let style = {cursor: 'pointer'};
      let caret = (this.props.collapsed)
                      ? <span style={style} onClick={this.props.toggleCollapsed}>&gt;</span>
                      : <span style={style} onClick={this.props.toggleCollapsed}>&gt;</span>;
      return caret;
    }
}

BasicCollapseHeaderCaret.defaultProps = {
  collapsed: true
}
