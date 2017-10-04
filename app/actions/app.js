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
  console.log('open modal');
  return (dispatch) => {
    dispatch(open(true));
    dispatch(current(i));
    dispatch(setContent(content));
  };
}

export function closeModal() {
  console.log('close modal');
  return (dispatch) => {
    dispatch(open(false));
    dispatch(current(false));
    dispatch(setContent(false));
  };
}
