import { methodBody } from "./MethodBody.mjs"

<<<<<<< HEAD
<<<<<<< HEAD
// Funcion para obtener los datos de mi api
=======
=======
>>>>>>> testBranch
/**
 * Esta funcion es la encrgada de obtener los datos de la api
 * @param {String} url 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const getFunction = async(url) =>{

    try {
        
        return (
            fetch(url)
            .then( res => res.json() )
        )

    } catch (err) {
        console.error(err)
    }

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * Esta funcion es la encrgada de obtener los datos de la api de acurdo al id 
 * @param {String} url 
 * @param {Number} id 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const getByIdFunction = async(url,id) =>{

    try {
        
        return (
            fetch(`${url}/${id}`)
            .then( res => res.json() )
        )

    } catch (err) {
        console.error(err)
    }

}

<<<<<<< HEAD
<<<<<<< HEAD
// Funcion para enviar datos a mi api
=======
=======
>>>>>>> testBranch
/**
 * Esta funcion es la encargada de enviar datos a la api
 * @param {String} url 
 * @param {String} name 
 * @param {String} updatedAt 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const postFunction = async(url, name, updatedAt) =>{

    let data = methodBody('POST', name, updatedAt)
    console.log(data)

    try {
        await fetch(url, data)
    } catch (err) {
        console.log(err)
    }

    location.reload()

}

<<<<<<< HEAD
<<<<<<< HEAD
// Funcion para actualizar datos de mi api
=======
=======
>>>>>>> testBranch
/**
 * esta funcion es la encargada de actualizar datos en la api
 * @param {String} url 
 * @param {Number} id 
 * @param {String} name 
 * @param {String} updatedAt 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const putFunction = async(url,id, name, updatedAt) => {

    let data = methodBody('PUT', name, updatedAt)

    try {
        await fetch(`${url}/${id}`, data)
    } catch (err) {
        console.log(err)
    }

    location.reload()

}

<<<<<<< HEAD
<<<<<<< HEAD
// Funcion para eliminar datos de mi api
=======
=======
>>>>>>> testBranch
/**
 * esta funcion se usa para eliminar un dato en la api
 * @param {String} url 
 * @param {Number} id 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const deleteFunction = async(url,id) =>{

    let data = methodBody('DELETE')

    try {
        await fetch(`${url}/${id}`, data)
    } catch (err) {
        console.log(err)
    }

    location.reload()

}