export const generateGridArr = (factor: number, randomCells: { row: number; column: number }[]) => {
  const gridArr = [];
  for (let i = factor; i > 0; i--) {
    for (let j = factor; j > 0; j--) {
      if (planeCompare({ r: i, c: j }, randomCells)) {
        gridArr.unshift({ r: j, c: i, isPlane: true });
      } else {
        gridArr.unshift({ r: j, c: i });
      }
    }
  }
  return gridArr;
};

const planeCompare = (gridItem: { r: number; c: number }, randomCells: { row: number; column: number }[]) => {
  const result = randomCells.find((item) => item.row === gridItem.r && item.column === gridItem.c);
  return !!result;
};

export const toMinutesAndSeconds = (totalSeconds: number) => {
  const totalMs = totalSeconds * 1000;
  const result = new Date(totalMs).toISOString().slice(11, 19);

  return result;
};

export const getRandomCell = (factor: number, nrPlanes: number) => {
  let randomCellArr = [];
  for (let i = nrPlanes; i > 0; i--) {
    randomCellArr.push({
      column: Math.floor(Math.random() * (factor - 1)) + 1,
      row: Math.floor(Math.random() * (factor - 1)) + 1,
    });
  }
  console.log('UTILS: ' + nrPlanes);
  // const randomCell = {
  //   column: Math.floor(Math.random() * (factor - 1)) + 1,
  //   row: Math.floor(Math.random() * (factor - 1)) + 1,
  // };
  // console.log(randomCell);
  return randomCellArr;
};
