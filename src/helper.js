/**Takes in width and height and 
 * returns board of specified width and height with undefined in each cell */
function makeBoard(width, height) {
    let columns = Array.from({ length: height });
    let board = columns.map(c => Array.from({ length: width }));
    return board;
}

export {makeBoard};