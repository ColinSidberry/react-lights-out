import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { makeBoard, determineOnOff } from "./helper";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(() => createBoard(nrows, ncols, chanceLightStartsOn));

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(nrows, ncols, chanceLightStartsOn) {
    let initialBoard = makeBoard(ncols, nrows);

    return initialBoard.map(
      row => row.map(
        cell => determineOnOff(chanceLightStartsOn)
      )
    );
  }

  function hasWon() {
    const rowsWithLightsOn = board.filter(row => row.includes(true));
    return rowsWithLightsOn.length === 0;
  }

  /** Takes in coord "y-x" */
  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map((strNum) => Number(strNum));

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const boardCopy = [...oldBoard];

      // TODO: in the copy, flip this cell and the cells around it
      //flipCell of clicked bulb
      flipCell(y, x, boardCopy);
      //flipCell of left of click
      flipCell(y, x - 1, boardCopy);
      //flipCell of right of click
      flipCell(y, x + 1, boardCopy);
      //flipCell of up of click
      flipCell(y + 1, x, boardCopy);
      //flipCell of down of click
      flipCell(y - 1, x, boardCopy);

      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO
}

export default Board;
