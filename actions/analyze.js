import Network, { GET } from '../controllers/Network';
// Constants
export const ANALYZE_REQUEST = 'ANALYZE_REQUEST';
export const ANALYZE_SUCCESS = 'ANALYZE_SUCCESS';
export const ANALYZE_FAILED = 'ANALYZE_FAILED';
export const ANALYZE_NEWS_REQUEST = 'ANALYZE_NEWS_REQUEST';
export const ANALYZE_NEWS_SUCCESS = 'ANALYZE_NEWS_SUCCESS';
export const ANALYZE_NEWS_FAILED = 'ANALYZE_NEWS_FAILED';

export function analyzeRequest(params) {
  return {
    type: ANALYZE_REQUEST,
    params,
  };
}

export function analyzeSuccess(tones) {
  return {
    type: ANALYZE_SUCCESS,
    tones,
  };
}

export function analyzeFailed(error) {
  return {
    type: ANALYZE_FAILED,
    error,
  };
}

export function analyze(query) {
  return (dispatch) => {
    // Defining params
    const params = {
      query,
    };
    // Marking that we are making a create contact request
    dispatch(analyzeRequest(params));
    // Make the network request
    Network.request(GET, 'tweets/analyze', params, null)
      .then((tones) => {
        dispatch(analyzeSuccess(tones));
      })
      .catch((error) => {
        console.info(error);
        dispatch(analyzeFailed('Error creating order'));
      });
  };
}

export function analyzeNewsRequest(params) {
  return {
    type: ANALYZE_NEWS_REQUEST,
    params,
  };
}

export function analyzeNewsSuccess(tones) {
  return {
    type: ANALYZE_NEWS_SUCCESS,
    tones,
  };
}

export function analyzeNewsFailed(error) {
  return {
    type: ANALYZE_NEWS_FAILED,
    error,
  };
}

export function analyzeNews(query) {
  return (dispatch) => {
    // Defining params
    const params = {
      query,
    };
    // Marking that we are making a create contact request
    dispatch(analyzeNewsRequest(params));
    // Make the network request
    Network.request(GET, 'tweets/analyze_news', params, null)
      .then((tones) => {
        dispatch(analyzeNewsSuccess(tones));
      })
      .catch((error) => {
        console.info(error);
        dispatch(analyzeNewsFailed('Error creating order'));
      });
  };
}
