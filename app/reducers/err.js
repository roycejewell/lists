export const initialState = {
  status: null,
  message: null
};

export default function err(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
