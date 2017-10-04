import {
  OPEN,
  CONTENT,
  CURRENT
} from 'actions/app';

export const initialState = {
  open: false,
  content: false,
  current: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        open: action.payload
      };
    case CONTENT:
      return {
        ...state,
        content: action.payload
      };
    case CURRENT:
      return {
        ...state,
        current : action.payload
      };
    default:
      return state;
  }
}
