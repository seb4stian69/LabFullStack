import { methodBody } from "./MethodBody.mjs"

<<<<<<< HEAD
// Funcion para obtener los datos de mi api
=======
/**
 * Esta funcion es la encrgada de obtener los datos de la api
 * @param {String} url 
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
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
=======
/**
 * Esta funcion es la encrgada de obtener los datos de la api de acurdo al id 
 * @param {String} url 
 * @param {Number} id 
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
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
// Funcion para enviar datos a mi api
=======
/**
 * Esta funcion es la encargada de enviar datos a la api
 * @param {String} url 
 * @param {String} name 
 * @param {String} updatedAt 
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
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
// Funcion para actualizar datos de mi api
=======
/**
 * esta funcion es la encargada de actualizar datos en la api
 * @param {String} url 
 * @param {Number} id 
 * @param {String} name 
 * @param {String} updatedAt 
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
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
// Funcion para eliminar datos de mi api
=======
/**
 * esta funcion se usa para eliminar un dato en la api
 * @param {String} url 
 * @param {Number} id 
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
export const deleteFunction = async(url,id) =>{

    let data = methodBody('DELETE')

    try {
        await fetch(`${url}/${id}`, data)
    } catch (err) {
        console.log(err)
    }

    location.reload()

}