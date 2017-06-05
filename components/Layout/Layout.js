import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';
import Header from './Header';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  componentWillMount() {
    if (this.props.searchQuery) {
      this.setState({ searchQuery: this.props.searchQuery });
    }
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  handleChangeSearchQuery(searchQuery) {
    this.setState({
      searchQuery,
    });
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">
          <main className="mdl-layout__content">
            <Header
              handlePressEnter={this.props.handlePressEnter}
              searchQuery={this.state.searchQuery}
              handleChangeSearchQuery={val => this.handleChangeSearchQuery(val)}
            />
            <div className={cx(s.content, this.props.className)}>
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  handlePressEnter: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  children: PropTypes.object.isRequired,
};

Layout.defaultProps = {
  searchQuery: undefined,
};

export default Layout;
