class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Validación de filas
        for (let rows = 0; rows < board.length; rows++) {
            const noRepeatRows = new Set();
            for (let columns = 0; columns < board.length; columns++) {
                if (board[rows][columns] === ".") {
                    continue;
                }
                if (!noRepeatRows.has(board[rows][columns])) {
                    noRepeatRows.add(board[rows][columns]);
                } else {
                    return false;
                }
            }
        }

        // Validación de columnas
        for (let rows = 0; rows < board.length; rows++) {
            const noRepeatColumns = new Set();
            for (let columns = 0; columns < board.length; columns++) {
                if (board[columns][rows] === ".") {
                    continue;
                }
                if (!noRepeatColumns.has(board[columns][rows])) {
                    noRepeatColumns.add(board[columns][rows]);
                } else {
                    return false;
                }
            }
        }

        for (let i = 0; i < 9; i++) {
            const noDuplicates = new Set();
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === ".") {
                    continue;
                } else if (!noDuplicates.has(board[i][j])) {
                    noDuplicates.add(board[i][j]);
                } else {
                    return false;
                }
            }
        }

        // Validación de cuadrantes 3x3
        const noDuplicates = new Map();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (!noDuplicates.has(box)) {
                    noDuplicates.set(box, new Set());
                }

                if (board[i][j] === ".") {
                    continue;
                }

                if (!noDuplicates.get(box).has(board[i][j])) {
                    noDuplicates.get(box).add(board[i][j]);
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}