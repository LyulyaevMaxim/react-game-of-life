export function setSizesBoard(columns, rows) {
  return {
    type: "SET_SIZES",
    payload: [columns, rows]
  };
}

export function createBoard(columns, rows) {
  return { type: "CREATE", columns, rows };
}

export function reCreateBoard() {
  return { type: "CHANGE" };
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

export function clear() {
  return { type: "CLEAR" };
}
