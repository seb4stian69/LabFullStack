import {getByIdFunction} from "../Model/BoardModel/Board.Service.mjs"

export const validar = (inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3) =>{

    const bool = ((inputRdBtn1.checked || inputRdBtn2.checked || inputRdBtn3.checked) == false)
    return !(inputTitleModal.value.length && txtAreaDescripcion.value.length && inputDeliveryDate.value.length !=0) || bool;

}

export const btnChecked = (inputRdBtn1,inputRdBtn2) =>{

    if(inputRdBtn1.checked ){
        return 1
    }else if(inputRdBtn2.checked){
        return 2
    }else{
        return 3
    }
    
}

export const columnCheck = (task, divTask,divTodo,divInprocess,divFinish) => {
    task.column === 1 ? divTodo.append(divTask) : task.column === 2? divInprocess.append(divTask):
            divFinish.append(divTask)
}

export const actualizarDatosTarea = async (taskId,btnCrearActualizar,urlBoard,inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3) => {
    if(btnCrearActualizar.innerHTML === "Editar"){
            const data = await getByIdFunction(urlBoard, localStorage.getItem("id"))
            const task = data.data.task
            const tareaSeleccionada = task.filter(item => item.id == taskId)
            const tituloTareaSeleccionada = tareaSeleccionada[0].name
            const descripcionTareaSeleccionada = tareaSeleccionada[0].description
            const entregaTareaSeleccionada =  tareaSeleccionada[0].delivery?.slice(0,10)
            const columnaTareaSeleccionada = tareaSeleccionada[0].column
            inputTitleModal.value = tituloTareaSeleccionada
            txtAreaDescripcion.value = descripcionTareaSeleccionada
            inputDeliveryDate.value = entregaTareaSeleccionada
            // if(columnaTareaSeleccionada === 1) inputRdBtn1.checked = true
            // if(columnaTareaSeleccionada === 2) inputRdBtn2.checked = true
            // if(columnaTareaSeleccionada === 3) inputRdBtn3.checked = true

            columnaTareaSeleccionada === 1 ? inputRdBtn1.checked = true : columnaTareaSeleccionada === 2 ? inputRdBtn2.checked = true : inputRdBtn3.checked = true
        }
}