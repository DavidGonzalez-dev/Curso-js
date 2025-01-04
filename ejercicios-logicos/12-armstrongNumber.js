/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function isArmstrong(number){
    let digits = number.toString().split('')
    let result = 0


    digits.forEach(number => {
        result += (parseInt(number) ** digits.length)
        console.log(parseInt(number) ** digits.length)
    })

    if (result === number){
        return true
    }

    return false
}

console.log(isArmstrong(8208))