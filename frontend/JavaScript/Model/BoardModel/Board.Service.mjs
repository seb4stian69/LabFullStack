import { methodBody } from "./MethodBody.mjs"

// Funcion para obtener los datos de mi api
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

// Funcion para enviar datos a mi api
export const postFunction = async(url, name, createdAt, updatedAt) =>{

    let data = methodBody('POST', name, createdAt, updatedAt)

    try {
        await fetch(url, data)
    } catch (err) {
        console.log(err)
    }

    location.reload()

}

// Funcion para actualizar datos de mi api
export const putFunction = async(url,id, name, createdAt, updatedAt) => {

    let data = methodBody('PUT', name, createdAt, updatedAt)

    try {
        await fetch(`${url}/${id}`, data)
    } catch (err) {
        console.log(err)
    }

    location.reload()

}

// Funcion para eliminar datos de mi api
export const deleteFunction = async(url,id) =>{

    let data = methodBody('DELETE')

    try {
        await fetch(`${url}/${id}`, data)
    } catch (err) {
        console.log(err)
    }

    location.reload()

}