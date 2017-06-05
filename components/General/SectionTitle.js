import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';
import s from './SectionTitle.css';

const SectionTitle = ({ title, icon }) => (
  <div className={cx(s.container)}>
    <Icon name={icon} className={cx(s.icon)} />
    <h3 className={cx(s.title)}>{ title }</h3>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SectionTitle;
