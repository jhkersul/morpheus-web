import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';
import s from './styles.css';
import Navigation from '../../controllers/Navigation';
import Layout from '../../components/Layout/Layout';
import { setSearchQuery } from '../../actions/general';

class Trending extends Component {

  handlePressEnter(value) {
    this.props.setSearchQuery(value);
    Navigation.navigateTo('/dashboard');
  }

  render() {
    return (
      <Layout handlePressEnter={value => this.handlePressEnter(value)}>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className={cx(s.titleContainer)}>
                <Icon name="star" className={cx(s.icon)} />
                <h3 className={cx(s.title)}>Trending Topics</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className={cx(s.wordcloudContainer)}>
                <img src="/images/wordcloud.png" className={cx(s.wordcloudImage)} alt="" />
              </div>
            </Col>
          </Row>
        </Grid>
      </Layout>
    );
  }

}

Trending.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tweets: state.twitter.tweets,
});

const bindActions = dispatch => ({
  setSearchQuery: query => dispatch(setSearchQuery(query)),
});

export default connect(mapStateToProps, bindActions)(Trending);
