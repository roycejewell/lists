import {
  OPEN,
  CONTENT,
} from 'actions/app';

export const initialState = {
  open: false,
  content: false,
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
    default:
      return state;
  }
}
