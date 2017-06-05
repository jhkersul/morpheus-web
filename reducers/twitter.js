import {
  GET_TWEETS_REQUEST, GET_TWEETS_SUCCESS, GET_TWEETS_FAILED,
} from '../actions/twitter';

const initialState = {
  isGettingTweets: false,
  getTweetsSuccess: false,
  getTweetsFailed: false,
  tweets: [],
};

export default function (state = initialState, action) {
  if (action.type === GET_TWEETS_REQUEST) {
    return {
      ...state,
      isGettingTweets: true,
      getTweetsSuccess: false,
      getTweetsFailed: false,
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
  }

  return state;
}
