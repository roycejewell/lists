import {
  OPEN,
  CONTENT,
  CURRENT,
  INITIAL
} from 'actions/app';

export const initialState = {
  open: false,
  content: false,
  current: false,
  initial: true,
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
    case INITIAL:
      return {
        ...state,
        initial : false
      };
    default:
      return state;
  }
}
