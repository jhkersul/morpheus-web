import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';
import s from './Header.css';

const handleKeyPress = (e, handlePressEnter) => {
  const value = e.target.value;
  if (e.key === 'Enter') {
    handlePressEnter(value);
  }
};

const Header = ({ handlePressEnter, handleChangeSearchQuery, searchQuery }) => (
  <Row>
    <Col xsOffset={1} xs={2} className={cx(s.searchContainer)}>
      <a href="/">
        <img src="/images/logo.png" alt="" className={cx(s.logoImage)} />
      </a>
    </Col>
    <Col xs={7} className={cx(s.searchContainer)}>
      <input
        className={cx(s.searchInput)}
        placeholder="Digite um assunto"
        onKeyPress={e => handleKeyPress(e, handlePressEnter)}
        value={searchQuery}
        onChange={e => handleChangeSearchQuery(e.target.value)}
      />
      <div className={cx(s.searchIconContainer)}>
        <Icon name="search" className={cx(s.searchIcon)} />
      </div>
    </Col>
  </Row>
);

Header.propTypes = {
  handlePressEnter: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleChangeSearchQuery: PropTypes.func.isRequired,
};

export default Header;
