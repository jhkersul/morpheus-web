import React from 'react';
import PropTypes from 'prop-types';
import Tweet from 'react-tweet';

const renderTweets = (tweets) => {
  return tweets.map(tweet => (
    <Tweet key={tweet.id} data={tweet} />
  ));
};

const Timeline = ({ tweets }) => (
  <div style={{ height: 600, overflow: 'scroll' }}>
    { renderTweets(tweets) }
  </div>
);

Timeline.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default Timeline;
