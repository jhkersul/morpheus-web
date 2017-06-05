import React from 'react';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';
import Navigation from '../../controllers/Navigation';
import s from './styles.css';

class HomePage extends React.Component {

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      Navigation.navigateTo('/trending');
    }
  }

  render() {
    return (
      <div className={cx(s.container)}>
        <div className={cx(s.centerContainer)}>
          <img src="/images/logo.png" className={cx(s.logo)} alt="" />
          <div className={cx(s.searchContainer)}>
            <input
              className={cx(s.searchInput)}
              placeholder="Sua cidade"
              onKeyPress={e => this.handleKeyPress(e)}
            />
            <Icon name="search" className={cx(s.searchIcon)} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
