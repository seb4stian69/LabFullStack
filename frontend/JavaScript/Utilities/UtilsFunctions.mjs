import { deleteFunction } from "../Model/LogModel/Log.service.mjs";
import {getByIdFunction} from "../Model/TaskModel/Task.Service.mjs"
import { Url_Log as urlLog } from "./config.mjs";

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * Funcion para valida los campos de la tarea
 * @param {String} inputTitleModal 
 * @param {String} txtAreaDescripcion 
 * @param {String} inputDeliveryDate 
 * @param {HTML tag} inputRdBtn1 
 * @param {HTML tag} inputRdBtn2 
 * @param {HTML tag} inputRdBtn3 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const validar = (inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3) =>{

    const bool = ((inputRdBtn1.checked || inputRdBtn2.checked || inputRdBtn3.checked) == false)
    return !(inputTitleModal.value.length && txtAreaDescripcion.value.length && inputDeliveryDate.value.length !=0) || bool;

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * funcion para 
 * @param {HTML tag} inputRdBtn1 
 * @param {HTML tag} inputRdBtn2 
 * @returns 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const btnChecked = (inputRdBtn1,inputRdBtn2) =>{

    if(inputRdBtn1.checked ){
        return 1
    }else if(inputRdBtn2.checked){
        return 2
    }else{
        return 3
    }
    
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * funcion para revisar la columna a la que pertenece una tarea
 * @param {String} task 
 * @param {HTML tag} divTask 
 * @param {HTML tag} divTodo 
 * @param {HTML tag} divInprocess 
 * @param {HTML tag} divFinish 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const columnCheck = (task, divTask,divTodo,divInprocess,divFinish) => {
    task.column === 1 ? divTodo.append(divTask) : task.column === 2? divInprocess.append(divTask):
            divFinish.append(divTask)
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * Funcion para actualizar los datos de una tarea
 * @param {Number} taskId 
 * @param {HTML tag} btnCrearActualizar 
 * @param {String} urlTask 
 * @param {HTML tag} inputTitleModal 
 * @param {HTML tag} txtAreaDescripcion 
 * @param {HTML tag} inputDeliveryDate 
 * @param {HTML tag} inputRdBtn1 
 * @param {HTML tag} inputRdBtn2 
 * @param {HTML tag} inputRdBtn3 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const actualizarDatosTarea = async (taskId,btnCrearActualizar,urlTask,inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3) => {
 
    if(btnCrearActualizar.innerHTML === "Editar"){

        const dataFind = await getByIdFunction(urlTask, taskId)
        const data = dataFind.data
        const tituloTareaSeleccionada = data.name
        const descripcionTareaSeleccionada = data.description
        const entregaTareaSeleccionada =  data.delivery?.slice(0,10)
        const columnaTareaSeleccionada = data.column

        localStorage.setItem("columnaTareaSeleccionada", columnaTareaSeleccionada)

        inputTitleModal.value = tituloTareaSeleccionada
        txtAreaDescripcion.value = descripcionTareaSeleccionada
        inputDeliveryDate.value = entregaTareaSeleccionada

        columnaTareaSeleccionada === 1 ? inputRdBtn1.checked = true :
        columnaTareaSeleccionada === 2 ? inputRdBtn2.checked = true : inputRdBtn3.checked = true

    }

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * funcion para eliminar un Log
 * @param {Number} idLog 
 */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
export const eliminarLog = async(idLog)=>{

    await deleteFunction(urlLog, idLog)

}