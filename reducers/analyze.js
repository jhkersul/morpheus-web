import {
  ANALYZE_REQUEST, ANALYZE_SUCCESS, ANALYZE_FAILED,
  ANALYZE_NEWS_REQUEST, ANALYZE_NEWS_SUCCESS, ANALYZE_NEWS_FAILED,
} from '../actions/analyze';

const initialState = {
  isAnalyzing: false,
  analyzeSuccess: false,
  analyzeFailed: false,
  tones: [],
  isAnalyzingNews: false,
  analyzeNewsSuccess: false,
  analyzeNewsFailed: false,
  tonesNews: [],
};

export default function (state = initialState, action) {
  if (action.type === ANALYZE_REQUEST) {
    return {
      ...state,
      isAnalyzing: true,
      analyzeSuccess: false,
      analyzeFailed: false,
      tones: [],
    };
  } else if (action.type === ANALYZE_SUCCESS) {
    return {
      ...state,
      isAnalyzing: false,
      analyzeSuccess: true,
      analyzeFailed: false,
      tones: action.tones,
    };
  } else if (action.type === ANALYZE_FAILED) {
    return {
      ...state,
      isAnalyzing: false,
      analyzeSuccess: false,
      analyzeFailed: true,
    };
  } else if (action.type === ANALYZE_NEWS_REQUEST) {
    return {
      ...state,
      isAnalyzingNews: true,
      analyzeNewsSuccess: false,
      analyzeNewsFailed: false,
      tonesNews: [],
    };
  } else if (action.type === ANALYZE_NEWS_SUCCESS) {
    return {
      ...state,
      isAnalyzingNews: false,
      analyzeNewsSuccess: true,
      analyzeNewsFailed: false,
      tonesNews: action.tones,
    };
  } else if (action.type === ANALYZE_NEWS_FAILED) {
    return {
      ...state,
      isAnalyzingNews: false,
      analyzeNewsSuccess: false,
      analyzeNewsFailed: true,
    };
  }

  return state;
}
