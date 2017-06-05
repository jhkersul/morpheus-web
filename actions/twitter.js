import Network, { GET } from '../controllers/Network';
// Constants
export const GET_TWEETS_REQUEST = 'GET_TWEETS_REQUEST';
export const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS';
export const GET_TWEETS_FAILED = 'GET_TWEETS_FAILED';

export function getTweetsRequest(params) {
  return {
    type: GET_TWEETS_REQUEST,
    params,
  };
}

export function getTweetsSuccess(tweets) {
  return {
    type: GET_TWEETS_SUCCESS,
    tweets,
  };
}

export function getTweetsFailed(error) {
  return {
    type: GET_TWEETS_FAILED,
    error,
  };
}

export function getTweets(query) {
  return (dispatch) => {
    // Defining params
    const params = {
      query,
    };
    // Marking that we are making a create contact request
    dispatch(getTweetsRequest(params));
    // Make the network request
    Network.request(GET, 'tweets/search', params, null)
      .then((tweets) => {
        dispatch(getTweetsSuccess(tweets));
      })
      .catch((error) => {
        console.info(error);
        dispatch(getTweetsFailed('Error creating order'));
      });
  };
}
