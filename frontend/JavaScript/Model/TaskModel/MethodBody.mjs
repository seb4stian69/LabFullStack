<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * metodo HTTP para el llamado de la api
 * @param {String} method 
 * @param {String} name 
 * @param {String} description 
 * @param {Number} column 
 * @param {Number} board 
 * @param {String} date 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const methodBody = (method, name, description, column, board, date) =>{

    return {

        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name||'',
            "description":description||'',
            "column": column || 1,
            "board": board || 1,
            "delivery": date
        })

    }

}