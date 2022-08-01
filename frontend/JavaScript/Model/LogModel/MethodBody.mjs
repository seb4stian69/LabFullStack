
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * metodo HTTP para el llamado de la api
 * @param String*} method 
 * @param {Number} taskId 
 * @param {Number} columnaPrevious 
 * @param {Number} columnaCurrent 
 */

<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const methodBody = (method, taskId, columnaPrevious ,columnaCurrent) =>{

    return {

        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskId: taskId,
            columnaPrevious: columnaPrevious || 1,
            columnaCurrent: columnaCurrent || 1
        })

    }

}




