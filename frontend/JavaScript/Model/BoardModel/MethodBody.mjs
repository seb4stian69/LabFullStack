<<<<<<< HEAD
=======
/**
 * metodo HTTP para el llamado de la api
 * @param {String} method 
 * @param {String} name 
 * @param {String} updatedAt 
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
export const methodBody = (method, name, updatedAt) =>{

    return {

        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name||'',
            "updatedAt": updatedAt||null
        })

    }

}