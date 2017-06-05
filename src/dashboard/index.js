import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import cx from 'classnames';
import Navigation from '../../controllers/Navigation';
import Layout from '../../components/Layout/Layout';
import Timeline from '../../components/Twitter/Timeline';
import SectionTitle from '../../components/General/SectionTitle';
import { getTweets } from '../../actions/twitter';
import { setSearchQuery } from '../../actions/general';

class Dashboard extends Component {

  componentDidMount() {
    if (!this.props.searchQuery || this.props.searchQuery === '') {
      Navigation.navigateTo('/trending');
    }
    this.getInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchQuery !== this.props.searchQuery) {
      this.getInfo();
    }
  }

  getInfo() {
    this.props.getTweets(this.props.searchQuery);
  }

  handlePressEnter(value) {
    this.props.setSearchQuery(value);
    Navigation.navigateTo('/dashboard');
  }

  render() {
    return (
      <Layout
        handlePressEnter={value => this.handlePressEnter(value)}
        searchQuery={this.props.searchQuery}
      >
        <Grid>
          <Row>
            <Col xs={6}>
              <SectionTitle title="Últimos Tweets" icon="twitter" />
              <Timeline tweets={this.props.tweets} />
            </Col>
            <Col xs={6}>
              <SectionTitle title="Reação do Público" icon="pie chart" />
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={6}>
              <SectionTitle title="Últimas Notícias" icon="newspaper" />
            </Col>
            <Col xs={6}>
              <SectionTitle title="Reação da Mídia" icon="line chart" />
            </Col>
          </Row>
        </Grid>
      </Layout>
    );
  }

}

Dashboard.propTypes = {
  tweets: PropTypes.array.isRequired,
  getTweets: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tweets: state.twitter.tweets,
  searchQuery: state.general.searchQuery,
});

const bindActions = dispatch => ({
  getTweets: query => dispatch(getTweets(query)),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
});

export default connect(mapStateToProps, bindActions)(Dashboard);
