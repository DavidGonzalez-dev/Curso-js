/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function balancedExpression (string) {
    let openParenthesis = 0
    let closeParenthesis = 0

    let openBraquets = 0
    let closeBraquets = 0

    let openSquare = 0
    let closeSquare = 0

    for (const char of string) {

        switch (char){
            case '(':
                openParenthesis ++
                break

            case ')':
                closeParenthesis ++
                break

            case '{':
                openBraquets ++
                break

            case '}':
                closeBraquets ++
                break

            case '[':
                openSquare ++
                break

            case ']':
                closeSquare ++
                break
            
            default:
                break
        }
    }

    if ((openParenthesis != closeParenthesis) || (openBraquets != closeBraquets) || (openSquare != closeSquare)){
        return false
    }

    return true
}

console.log(balancedExpression('(({ a * ( c + d ) - 5 })))'))