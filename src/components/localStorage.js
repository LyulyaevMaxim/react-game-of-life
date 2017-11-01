export const saveToLocalStorage = (nick, board) => {
  try {
    let temp = JSON.stringify(board);
    localStorage.setItem(`${nick}`, temp);
  } catch (e) {
    if (e == "QUOTA_EXCEEDED_ERR") {
      alert("Имейте совесть! Нельзя столько хранить в localStorage :(");
    }
  }
};

export const loadBoardOfLocalStorage = nick => {
  let temp = localStorage.getItem(nick);
  return temp === null ? [[]] : JSON.parse(temp);
};
