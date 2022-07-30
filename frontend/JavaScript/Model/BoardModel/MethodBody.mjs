export const methodBody = (method, name, createdAt, updatedAt) =>{

    return {

        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name || "",
            createdAt: createdAt || "",
            updatedAt: updatedAt || null
        })

    }

}