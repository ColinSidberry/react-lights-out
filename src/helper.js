/**Takes in width and height and 
 * returns board of specified width and height with undefined in each cell */
function makeBoard(width, height) {
    let rows = Array.from({ length: height });
    let board = rows.map(c => Array.from({ length: width }));
    return board;
}


function determineOnOff(chanceLightStartsOn){
    const randNum = Math.random();
    return randNum <= chanceLightStartsOn ? true : false;
}

export { makeBoard, determineOnOff };


        // anything less than prob tru
        //anything higher is false