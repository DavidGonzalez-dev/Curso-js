/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function daysNumber(date1, date2) {

    const regex = /([0-3][0-9]\/[0-1][0-2]\/[0-2][0-9][0-9][0-9])/

    try {

        if (!(regex.test(date1)) || !(regex.test(date2))) {

            if (!regex.test(date1)) {
                throw new DateError(`La fecha no tiene el formato especificado ${date1}`, date1)
            }
            else {
                throw new DateError(`La fecha no tiene el formato especificado ${date2}`, date2)
            }
        }

        date1 = date1.split('/')
        date2 = date2.split('/')

        let differenceDays = (date1[0] - date2[0]) < 0 ? -(date1[0] - date2[0]) : (date1[0] - date2[0]) 
        let differenceMonths = (date1[1] - date2[1]) < 0 ? -(date1[1] - date2[1]) : (date1[1] - date2[1])
        let differenceYears = (date1[2] - date2[2]) < 0 ? -(date1[2] - date2[2]) : (date1[2] - date2[2])

        return (differenceDays) + (differenceMonths * 30) + (differenceYears * 365)

    } catch (error) {

        console.log(`Ocurrion un error: ${error.message}`)
        return null
    }
}

class DateError extends Error {

    #wrongDate

    constructor(message, wrongDate) {
        super(message)
        this.#wrongDate = wrongDate
    }

    get wrongDate() {
        return this.#wrongDate
    }
}

console.log(daysNumber('30/11/2023', '30/12/2024'))