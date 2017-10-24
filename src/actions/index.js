export function createBoard(columns, rows) {
  return {
    type: "SET_SIZES",
    payload: [columns, rows]
  };
}

export function toggleAlive(x, y) {
  return { type: "TOGGLE_ALIVE", x, y };
}

export function tick() {
  return { type: "TICK" };
}

export function startPlaying(timerId) {
  return { type: "PLAY", timerId };
}

export function stopPlaying(timerId) {
  return { type: "STOP", timerId };
}

export function savePlay(nickname) {
  return { type: "SAVE", nickname };
}

export function loadPlay(nickname) {
  return { type: "LOAD", nickname };
}

export function clear() {
  return { type: "CLEAR" };
}

export function showFormForCreate() {
  return { type: "SHOW_FORM_FOR_CREATE" };
}

export function hideFormForCreate() {
  return { type: "HIDE_FORM_FOR_CREATE" };
}