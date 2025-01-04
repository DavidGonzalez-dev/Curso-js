/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

function ticTacToe(matrix) {
    // Check Matrix   

    let xWins = 0
    let oWins = 0

    // We check the rows
    for (let row = 0; row < matrix.length; row++) {

        // We check the columns
        for (let col = 0; col < matrix[row].length; col++) {
            try {
                // We check Vertically
                if (row == 1) {

                    // We check diagonals
                    if (row == col && col == 1) {

                        // We check first diagonal
                        if (matrix[row - 1][col - 1] == matrix[row + 1][col + 1] && matrix[row + 1][col + 1] == matrix[row][col]) {
                            xWins = matrix[row][col] == 'x' ? xWins += 1 : xWins
                            oWins = matrix[row][col] == 'o' ? oWins += 1 : oWins
                        }
                        // We check second diagonal
                        if (matrix[row + 1][col - 1] == matrix[row - 1][col + 1] && matrix[row - 1][col + 1] == matrix[row][col]) {
                            xWins = matrix[row][col] == 'x' ? xWins += 1 : xWins
                            oWins = matrix[row][col] == 'o' ? oWins += 1 : oWins
                        }
                    }

                    // We check Vertically
                    if (matrix[row - 1][col] == matrix[row + 1][col] && matrix[row + 1][col] == matrix[row][col]) {
                        xWins = matrix[row][col] == 'x' ? xWins += 1 : xWins
                        oWins = matrix[row][col] == 'o' ? oWins += 1 : oWins
                    }
                }



                // We check horizontaly
                if (col == 1) {
                    if (matrix[row][col - 1] == matrix[row][col + 1] && matrix[row][col + 1] === matrix[row][col]) {
                        xWins = matrix[row][col] == 'x' ? xWins += 1 : xWins
                        oWins = matrix[row][col] == 'o' ? oWins += 1 : oWins
                    }
                }



            }
            catch (error) {
                continue
            }
        }

    }
    // We return the winner
    if (xWins > 1 || oWins > 1) {
        console.error(xWins)
        console.error(oWins)
        return 'NULO'
    }
    else if (xWins == 1) {
        return 'x'
    }
    else if (oWins == 1) {
        return 'o'
    }
    else {
        return 'tie'
    }
}



const matrix = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'o']
]

console.log(ticTacToe(matrix))
