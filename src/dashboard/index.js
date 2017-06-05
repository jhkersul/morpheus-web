import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import cx from 'classnames';
import Navigation from '../../controllers/Navigation';
import Layout from '../../components/Layout/Layout';
import Timeline from '../../components/Twitter/Timeline';
import SectionTitle from '../../components/General/SectionTitle';
import { getTweets, getNewsTweets } from '../../actions/twitter';
import { setSearchQuery } from '../../actions/general';
import { analyze, analyzeNews } from '../../actions/analyze';
import BarChart from '../../components/Charts/BarChart';

class Dashboard extends Component {

  componentDidMount() {
    if (!this.props.searchQuery || this.props.searchQuery === '') {
      Navigation.navigateTo('/trending');
      return;
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
    this.props.analyze(this.props.searchQuery);
    this.props.getNewsTweets(this.props.searchQuery);
    this.props.analyzeNews(this.props.searchQuery);
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
              <BarChart data={this.props.tones} />
            </Col>
          </Row>
          <Row style={{ marginTop: 20, marginBottom: 40 }}>
            <Col xs={6}>
              <SectionTitle title="Últimas Notícias" icon="newspaper" />
              <Timeline tweets={this.props.newsTweets} />
            </Col>
            <Col xs={6}>
              <SectionTitle title="Reação da Mídia" icon="line chart" />
              <BarChart data={this.props.tonesNews} />
            </Col>
          </Row>
        </Grid>
      </Layout>
    );
  }

}

Dashboard.propTypes = {
  tweets: PropTypes.array.isRequired,
  newsTweets: PropTypes.array.isRequired,
  tones: PropTypes.array.isRequired,
  tonesNews: PropTypes.array.isRequired,
  getTweets: PropTypes.func.isRequired,
  getNewsTweets: PropTypes.func.isRequired,
  analyze: PropTypes.func.isRequired,
  analyzeNews: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tweets: state.twitter.tweets,
  newsTweets: state.twitter.newsTweets,
  tones: state.analyze.tones,
  tonesNews: state.analyze.tonesNews,
  searchQuery: state.general.searchQuery,
});

const bindActions = dispatch => ({
  getTweets: query => dispatch(getTweets(query)),
  getNewsTweets: query => dispatch(getNewsTweets(query)),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
  analyze: query => dispatch(analyze(query)),
  analyzeNews: query => dispatch(analyzeNews(query)),
});

export default connect(mapStateToProps, bindActions)(Dashboard);
