import {
  SET_SEARCH_QUERY,
} from '../actions/general';

const initialState = {
  searchQuery: '',
};

export default function (state = initialState, action) {
  if (action.type === SET_SEARCH_QUERY) {
    return {
      ...state,
      searchQuery: action.query,
    };
  }

  return state;
}
