export const generateGridArr = (factor: number, randomCell: { row: number; column: number }) => {
  const gridArr = [];
  for (let i = factor; i > 0; i--) {
    for (let j = factor; j > 0; j--) {
      if (i === randomCell.column && j === randomCell.row) {
        gridArr.unshift({ r: j, c: i, isPlane: true });
      } else {
        gridArr.unshift({ r: j, c: i });
      }
    }
  }
  return gridArr;
};

// export const randomCell = (factor: number) =>  return {
//   column: Math.floor(Math.random() * (factor - 1)) + 1,
//   row: Math.floor(Math.random() * (factor - 1)) + 1,
// };

export const getRandomCell = (factor: number) => {
  const randomCell = {
    column: Math.floor(Math.random() * (factor - 1)) + 1,
    row: Math.floor(Math.random() * (factor - 1)) + 1,
  };

  return randomCell;
};