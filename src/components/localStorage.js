export const saveToLocalStorage = (nick, board) => {
  try {
    let object = {
      height: board.length,
      width: board[0].length,
      arr: board,
      toJSON: function() {
        /* реально важные ячейки делятся на 2 типа: 
          { "status": 1} и {"status": 0, "newBorn": true}
        */
        let optimizeArr = [this.height, this.width],
          newBorn = [],
          oldCell = [];

        for (let i = 0; i < this.height; i++) {
          for (let j = 0; j < this.width; j++) {
            if (this.arr[i][j].newBorn == true) {
              newBorn.push([i, j]);
            } else if (this.arr[i][j].status === 1) {
              oldCell.push([i, j]);
            }
          }
        }

        optimizeArr.push(newBorn);
        optimizeArr.push(oldCell);
        return optimizeArr;
      }
    };
    localStorage.setItem(`${nick}`, JSON.stringify(object));
  } catch (e) {
    if (e == "QUOTA_EXCEEDED_ERR") {
      alert("Имейте совесть! Нельзя столько хранить в localStorage :(");
    }
  }
};

export const loadBoardOfLocalStorage = nick => {
  let object = localStorage.getItem(nick);
  /* данные сохраняются по принципу: 
        количество строк 
        количество столбцов
        массив с индексами элементов имевших "newBorn" == true
        массив с индексами существоваших элементов
  */
  if (object === null) {
    return [[]];
  } else {
    let parseObject = JSON.parse(object);
    console.log(parseObject);
    let board = [[]],
      row = parseObject[0],
      column = parseObject[1],
      newBorn = parseObject[2],
      oldCell = parseObject[3];

    //создадим пустой двумерный массив
    for (let i = 0; i < row; i++) {
      board[i] = [];
      for (let j = 0; j < column; j++) {
        board[i][j] = [];
      }
    }

    for (let index = 0; index < newBorn.length; index++) {
      let i = newBorn[index][0],
        j = newBorn[index][1];
      board[i][j] = { status: true, newBorn: true };
    }

    for (let index = 0; index < oldCell.length; index++) {
      let i = oldCell[index][0],
        j = oldCell[index][1];
      board[i][j] = { status: 1 };
    }

    return board;
  }
};
