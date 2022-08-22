
let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
[ 2,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(puzzle);
// => true

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
[ 8,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(p8zzle);
// => false




function getRow(puzzle, rowIndex) {
    let row = puzzle[rowIndex];
return row;
}


function getColumn(puzzle, columnIndex) {
    let column = [];
    for (let i = 0; i < puzzle.length; i++) {
        column.push(puzzle[i][columnIndex]);
    }
    return column;
}

function getSection(puzzle, xCord, yCord) {
    let section = [];
    for (let row = yCord * 3; row < yCord * 3 + 3; row++)
      section.push(...puzzle[row].slice(xCord * 3, xCord * 3 + 3))
    return section;
  }


function includes1to9(subsection) {
    for (let i = 0; i < subsection.length; i++) {
        let element = subsection[i];
    }
    if (!subsection.includes(9)) {
        return false;
    } else if (subsection.length !== new Set(subsection).size) {
        return false;
    } else {
        return true;
    }
}


function sudokuIsValid(puzzle) {
    for (let i = 0; i < 9; i++)
      if (!includes1to9(getRow(puzzle, i)) || !includes1to9(getColumn(puzzle, i)) || !includes1to9(getSection(puzzle, i % 3, Math.floor(i / 3)))) return false;
    return true;
  }

  function isSame(puzzle1, puzzle2) {
    for (let i = 0; i < 81; i++)
      if (puzzle1[Math.floor(i / 9)][i % 9] !== puzzle2[Math.floor(i /9)][i % 9]) return false;
    return true;
  }
  

// console.log(getRow(problem, 8));


// console.log(getColumn(problem, 1));


// console.log(getSection(problem, 0, 0));

// console.log(includes1to9(getColumn(problem, 2)));











// function getSection(puzzle, xCord, yCord) {
//     let gridArray = [];
//     let rowArray = [];
//     for (let i = 0; i < puzzle.length; i++) {
//         for (let j = 0; j < puzzle[i]; j++){
//             let cell = puzzle[i][j];
//         }
//         let row = puzzle[i];
//         if (row === xCord) {
//             rowArray.push(row)
//         }
//     }
//     return rowArray;
// }
