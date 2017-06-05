import {
  GET_TWEETS_REQUEST, GET_TWEETS_SUCCESS, GET_TWEETS_FAILED,
  GET_NEWS_TWEETS_REQUEST, GET_NEWS_TWEETS_SUCCESS, GET_NEWS_TWEETS_FAILED,
} from '../actions/twitter';

const initialState = {
  isGettingTweets: false,
  getTweetsSuccess: false,
  getTweetsFailed: false,
  tweets: [],
  isGettingNewsTweets: false,
  getNewsTweetsSuccess: false,
  getNewsTweetsFailed: false,
  newsTweets: [],
};

export default function (state = initialState, action) {
  if (action.type === GET_TWEETS_REQUEST) {
    return {
      ...state,
      isGettingTweets: true,
      getTweetsSuccess: false,
      getTweetsFailed: false,
      tweets: [],
    };
  } else if (action.type === GET_TWEETS_SUCCESS) {
    return {
      ...state,
      isGettingTweets: false,
      getTweetsSuccess: true,
      getTweetsFailed: false,
      tweets: action.tweets,
    };
  } else if (action.type === GET_TWEETS_FAILED) {
    return {
      ...state,
      isGettingTweets: false,
      getTweetsSuccess: false,
      getTweetsFailed: true,
    };
  } else if (action.type === GET_NEWS_TWEETS_REQUEST) {
    return {
      ...state,
      isGettingNewsTweets: true,
      getNewsTweetsSuccess: false,
      getNewsTweetsFailed: false,
      newsTweets: [],
    };
  } else if (action.type === GET_NEWS_TWEETS_SUCCESS) {
    return {
      ...state,
      isGettingNewsTweets: false,
      getNewsTweetsSuccess: true,
      getNewsTweetsFailed: false,
      newsTweets: action.tweets,
    };
  } else if (action.type === GET_NEWS_TWEETS_FAILED) {
    return {
      ...state,
      isGettingNewsTweets: false,
      getNewsTweetsSuccess: false,
      getNewsTweetsFailed: true,
    };
  }

  return state;
}
