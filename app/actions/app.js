export const OPEN = 'OPEN';
export const CONTENT = 'CONTENT';

export function open(payload) {
  return {
    type: OPEN,
    payload: payload
  };
}

export function setContent(payload) {
  return {
    type: CONTENT,
    payload: payload
  };
}

export function openModal(content) {
  return (dispatch) => {
    dispatch(open(true));
    dispatch(setContent(content));
  };
}

export function closeModal() {
  return (dispatch) => {
    dispatch(open(false));
    dispatch(setContent(false));
  };
}
