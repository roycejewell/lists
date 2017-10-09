export const OPEN = 'OPEN';
export const CURRENT = 'CURRENT';
export const CONTENT = 'CONTENT';

export function open(payload) {
  return {
    type: OPEN,
    payload: payload
  };
}

export function current(i) {
  return {
    type: CURRENT,
    payload: i
  };
}

export function setContent(payload) {
  return {
    type: CONTENT,
    payload: payload
  };
}

export function openModal(content, i) {
  return (dispatch) => {
    dispatch(setContent(false));
    dispatch(open(true));
    dispatch(current(i));
    dispatch(setContent(content));
  };
}

export function closeModal() {
  return (dispatch) => {
    dispatch(open(false));
    dispatch(current(false));
  };
}
