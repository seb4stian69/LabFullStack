import { getByIdFunction } from "../Model/BoardModel/Board.Service.mjs";
import { postFunction, putFunction, deleteFunction } from "../Model/TaskModel/Task.Service.mjs";
import { Url_Boards as urlBoard, Url_Task as urlTask} from "../Utilities/config.mjs";
import { validar, btnChecked } from "../Utilities/UtilsFunctions.mjs";

export class ViewBoard {

    constructor(){
        // Utility class
    }

    getBoard = async() =>{

        const root = document.getElementById('tableContentColumns')

        const data = await getByIdFunction(urlBoard, localStorage.getItem("id"))
        const columns = data.data.columnsForBoard
        const task = data.data.task
        let index = 0
    
        columns.forEach( column => {
            
            index+=1
            sessionStorage.setItem(`Col-${index}`, JSON.stringify(column))
    
        });
    
        // Create HTML elements de las columnas y sus titulos

        const divTodo = document.createElement("div")
        divTodo.className="column"
        divTodo.id="todo"

        const divInprocess = document.createElement("div")
        divInprocess.className="column"
        divInprocess.id="inprocess"

        const divFinish = document.createElement("div")
        divFinish.className="column"
        divFinish.id="finish"

        const todoButtonTitle = document.createElement("button")
        todoButtonTitle.className = "titleBtn"
        
        todoButtonTitle.addEventListener('click', ()=>{
            viewModal("Crear")
        })

        const atodoButtonTitle = document.createElement("a")
        atodoButtonTitle.innerHTML="ToDo"
        atodoButtonTitle.href = "#IrVentanaFlotante"

        todoButtonTitle.append(atodoButtonTitle)

        const inProcessButtonTitle = document.createElement("button")
        inProcessButtonTitle.className = "titleBtn"

        inProcessButtonTitle.addEventListener('click', ()=>{
            viewModal("Crear")
        })
        
        const ainProcessButtonTitle = document.createElement("a")
        ainProcessButtonTitle.innerHTML="In process"
        ainProcessButtonTitle.href = "#IrVentanaFlotante"

        inProcessButtonTitle.append(ainProcessButtonTitle)

        const finishButtonTitle = document.createElement("button")
        finishButtonTitle.className = "titleBtn"
        
        const afinishButtonTitle = document.createElement("a")
        afinishButtonTitle.innerHTML="Finish"
        afinishButtonTitle.href = "#IrVentanaFlotante"

        finishButtonTitle.addEventListener('click', ()=>{
            viewModal("Crear")
        })

        divTodo.append(todoButtonTitle)
        divInprocess.append(inProcessButtonTitle)
        divFinish.append(finishButtonTitle)

        finishButtonTitle.append(afinishButtonTitle)

        root.append(divTodo,divInprocess,divFinish)

        // Agregando tareas a su columna diferente

        task.forEach( task =>{

            const divTask = document.createElement("div")
            divTask.className = "task"

            const h5Title = document.createElement("h5")
            h5Title.innerHTML= task.name
            
            const buttonEditar = document.createElement("button")
            buttonEditar.className = "editarTask"


            buttonEditar.addEventListener('click', ()=>{
                viewModal("Editar", task.id)
            })


            const aEditar = document.createElement("a")
            aEditar.innerHTML ="Editar"
            aEditar.href = "#IrVentanaFlotante"

            buttonEditar.append(aEditar)

            const buttonEliminar = document.createElement("button")
            buttonEliminar.innerHTML = "Eliminar"
            buttonEliminar.className="borrarTask"

            buttonEliminar.addEventListener('click', ()=>{

                (confirm("Estas seguro de eliminar esta tarea"))?
                deleteFunction(urlTask, task.id):
                console.log("No se ha borrado")

            })

            divTask.append(h5Title,buttonEditar,buttonEliminar)

            if(task.column === 1){
                divTodo.append(divTask)
            }

            if(task.column === 2){
                divInprocess.append(divTask)
            }

            if(task.column === 3){
                divFinish.append(divTask)
            }

        })
    

    }

}

const viewModal = async ( typeModal, taskId ) => {

        const modal = document.getElementById('tableContentModal')

        // Boton salir del modal
        const buttonModalSalir = document.createElement("button")
        buttonModalSalir.className = "modalBtnSalir"
        const aModalSalir = document.createElement("a")
        aModalSalir.innerHTML = "Salir"
        aModalSalir.href="#"
        buttonModalSalir.append(aModalSalir)

        // Input del titulo de la tarea
        const inputTitleModal = document.createElement("input")
        inputTitleModal.className = "modalTxtTitle"
        inputTitleModal.placeholder = "Titulo de la tarea"

        //textarea de la descripcion de la tarea
        const txtAreaDescripcion = document.createElement("textarea")
        txtAreaDescripcion.className = "modalTxtAreaDescrip"        
        txtAreaDescripcion.id = "descripcionTarea"      
        txtAreaDescripcion.placeholder = "Descripcion de la tarea"      

        // Date de la entrega
        const inputDeliveryDate = document.createElement("input")
        inputDeliveryDate.type = "date"
        inputDeliveryDate.className = "modalDate"

        // radioBtn1
        const divRdioBtn1 = document.createElement("div")
        divRdioBtn1.className="rdBtn1"
        const inputRdBtn1 = document.createElement("input")
        inputRdBtn1.className="modalR1"
        inputRdBtn1.name="colun"
        inputRdBtn1.type="radio"
        const labelRdioBtn1 = document.createElement("label")
        labelRdioBtn1.innerHTML="ToDo"
        divRdioBtn1.append(inputRdBtn1,labelRdioBtn1)
        
        // radioBtn2
        const divRdioBtn2 = document.createElement("div")
        divRdioBtn2.className="rdBtn2"
        const inputRdBtn2 = document.createElement("input")
        inputRdBtn2.className="modalR2"
        inputRdBtn2.name="colun"
        inputRdBtn2.type="radio"
        const labelRdioBtn2 = document.createElement("label")
        labelRdioBtn2.innerHTML="In Process"
        divRdioBtn2.append(inputRdBtn2,labelRdioBtn2)

        // radioBtn2
        const divRdioBtn3 = document.createElement("div")
        divRdioBtn3.className="rdBtn3"
        const inputRdBtn3 = document.createElement("input")
        inputRdBtn3.className="modalR3"
        inputRdBtn3.name="colun"
        inputRdBtn3.type="radio"
        const labelRdioBtn3 = document.createElement("label")
        labelRdioBtn3.innerHTML="Finish"
        divRdioBtn3.append(inputRdBtn3,labelRdioBtn3)

        // ButtonActualizarCrear
        const btnCrearActualizar = document.createElement("button")
        btnCrearActualizar.className="modalBtnActualizar"
        btnCrearActualizar.innerHTML= typeModal
        
        // datos de la tarea en los input en dado caso sea editar
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
            if(columnaTareaSeleccionada === 1) inputRdBtn1.checked = true
            if(columnaTareaSeleccionada === 2) inputRdBtn2.checked = true
            if(columnaTareaSeleccionada === 3) inputRdBtn3.checked = true
        }

        btnCrearActualizar.addEventListener("click", async ()=> {

            if(btnCrearActualizar.innerHTML === "Crear"){

                validar(inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3) ? 
                alert("Faltan datos por ingresar para enviar el formulario"):
                await postFunction(
                    urlTask,
                    inputTitleModal.value,
                    txtAreaDescripcion.value,
                    btnChecked(inputRdBtn1,inputRdBtn2),
                    localStorage.getItem("id"),
                    inputDeliveryDate.value + "T00:00:00.00"
                )

            }else{ 
                validar(inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3) ? 
                alert("Faltan datos por ingresar para enviar el formulario"): 
                await putFunction(
                    urlTask,
                    taskId,
                    inputTitleModal.value,
                    txtAreaDescripcion.value,
                    btnChecked(inputRdBtn1,inputRdBtn2),
                    localStorage.getItem("id"),
                    inputDeliveryDate.value + "T00:00:00.00"
                )
            }
                
        })
        
        // ButtonDeleteReset
        const btnDeleteReset = document.createElement("input")
        btnDeleteReset.type = "reset"
        btnDeleteReset.className="modalBtnDevolver"
        btnDeleteReset.value="Resetear data"

        // Textarea de el log de actualizaciones
        const txtAreaLogActualizaciones = document.createElement("textarea")
        txtAreaLogActualizaciones.className="modalTxtAreaHistory"
        txtAreaLogActualizaciones.id="historialCambios"
        txtAreaLogActualizaciones.placeholder="Historial de cambios"

        // Append de elementos del modal
        modal.append(buttonModalSalir, inputTitleModal, txtAreaDescripcion,inputDeliveryDate, divRdioBtn1,divRdioBtn2,divRdioBtn3,btnCrearActualizar,btnDeleteReset,txtAreaLogActualizaciones)


}