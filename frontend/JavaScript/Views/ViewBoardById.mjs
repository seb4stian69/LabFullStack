import { getByIdFunction } from "../Model/BoardModel/Board.Service.mjs";
import { postFunction, putFunction, deleteFunction } from "../Model/TaskModel/Task.Service.mjs";
import { Url_Boards as urlBoard, Url_Task as urlTask, Url_Log as urlLog} from "../Utilities/config.mjs";
import { validar, btnChecked, columnCheck, actualizarDatosTarea, eliminarLog } from "../Utilities/UtilsFunctions.mjs";
<<<<<<< HEAD
<<<<<<< HEAD
import {getFunction as getLog, postFunction as postLog} from '../Model/LogModel/Log.service.mjs'
=======
=======
>>>>>>> testBranch
import {getFunction as getLog} from '../Model/LogModel/Log.service.mjs'

/**
 * vista de un tablero especifico
 * @class
 */

 const botonSalirpagina = document.createElement("button")
 const todoButtonTitle = document.createElement("button")
 const inProcessButtonTitle = document.createElement("button")
 const finishButtonTitle = document.createElement("button")
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch

export class ViewBoard {

    constructor(){
        // Utility class
    }

<<<<<<< HEAD
<<<<<<< HEAD
    getBoard = async() =>{

        const root = document.getElementById('tableContentColumns')

=======
=======
>>>>>>> testBranch
    /**
     * metodo para la creacion e inyeccion de elementos al dom que muestra el tablero seleccionado
     */
    getBoard = async() =>{

        // Div raiz 
        const root = document.getElementById('tableContentColumns')
        const body = document.getElementById('body')

        // Boton de salir de la pagina
        botonSalirpagina.className = "salirDelBoard"
        botonSalirpagina.innerHTML="Salir"

        body.append(botonSalirpagina)

        // Datos traidos desde la Api
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
        const data = await getByIdFunction(urlBoard, localStorage.getItem("id"))
        const columns = data.data.columnsForBoard
        const task = data.data.task
        let index = 0
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // Se crean las 3 columnas 
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
        // Se crean las 3 columnas 
>>>>>>> testBranch
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

<<<<<<< HEAD
<<<<<<< HEAD
        const todoButtonTitle = document.createElement("button")
        todoButtonTitle.className = "titleBtn"
        
        todoButtonTitle.addEventListener('click', ()=>{
            viewModal("Crear")
        })

=======
        todoButtonTitle.className = "titleBtn"
        
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
        todoButtonTitle.className = "titleBtn"
        
>>>>>>> testBranch
        const atodoButtonTitle = document.createElement("a")
        atodoButtonTitle.innerHTML="ToDo"
        atodoButtonTitle.href = "#IrVentanaFlotante"

        todoButtonTitle.append(atodoButtonTitle)

<<<<<<< HEAD
<<<<<<< HEAD
        const inProcessButtonTitle = document.createElement("button")
        inProcessButtonTitle.className = "titleBtn"

        inProcessButtonTitle.addEventListener('click', ()=>{
            viewModal("Crear")
        })
=======
        inProcessButtonTitle.className = "titleBtn"
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
        inProcessButtonTitle.className = "titleBtn"
>>>>>>> testBranch
        
        const ainProcessButtonTitle = document.createElement("a")
        ainProcessButtonTitle.innerHTML="In process"
        ainProcessButtonTitle.href = "#IrVentanaFlotante"

        inProcessButtonTitle.append(ainProcessButtonTitle)

<<<<<<< HEAD
<<<<<<< HEAD
        const finishButtonTitle = document.createElement("button")
=======
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
        finishButtonTitle.className = "titleBtn"
        
        const afinishButtonTitle = document.createElement("a")
        afinishButtonTitle.innerHTML="Finish"
        afinishButtonTitle.href = "#IrVentanaFlotante"

<<<<<<< HEAD
<<<<<<< HEAD
        finishButtonTitle.addEventListener('click', ()=>{
            viewModal("Crear")
        })

=======
        // Se agregan los elementos a los contenedores principales
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
        // Se agregan los elementos a los contenedores principales
>>>>>>> testBranch
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

                if(confirm("Estas seguro de eliminar esta tarea")){
                    
<<<<<<< HEAD
<<<<<<< HEAD
                    if(task.logs.length){
                        task.logs.forEach( log =>{
                            eliminarLog(log.id)
                        })
                    }

=======
                    deleteLog(task)
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
                    deleteLog(task)
>>>>>>> testBranch
                    deleteFunction(urlTask, task.id)

                }

            })

            divTask.append(h5Title,buttonEditar,buttonEliminar)
            
            columnCheck(task,divTask,divTodo,divInprocess,divFinish)

        })
    }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
/**
    * metodo para creacion e inyeccion de elementos al dom que muesta el modal
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
/**
    * metodo para creacion e inyeccion de elementos al dom que muesta el modal
 */
>>>>>>> testBranch
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
        actualizarDatosTarea (taskId,btnCrearActualizar,urlTask,inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3)
      
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> testBranch
        btnCrearActualizar.addEventListener("click", async ()=> {

            (btnCrearActualizar.innerHTML === "Crear")?
            enviarPostTask(inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3):
            enviarPutTask(inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3,taskId)
    
        })
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch

        // Textarea de el log de actualizaciones
        const txtAreaLogActualizaciones = document.createElement("textarea")
        txtAreaLogActualizaciones.className="modalTxtAreaHistory"
        txtAreaLogActualizaciones.id="historialCambios"
        txtAreaLogActualizaciones.placeholder="Historial de cambios"
<<<<<<< HEAD
<<<<<<< HEAD

        logs(txtAreaLogActualizaciones, taskId)
=======
=======
>>>>>>> testBranch
        txtAreaLogActualizaciones.readOnly = true

        logs(txtAreaLogActualizaciones, taskId)
                
        // ButtonDeleteReset
        const btnDeleteReset = document.createElement("button")
        btnDeleteReset.className="modalBtnDevolver"
        btnDeleteReset.innerHTML="Resetear data"

        btnDeleteReset.addEventListener('click', ()=>{
            
            inputTitleModal.value = null
            txtAreaDescripcion.value = null
            inputDeliveryDate.value = null
            inputRdBtn1.checked = false
            inputRdBtn2.checked = false
            inputRdBtn3.checked = false

        })
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch

        // Append de elementos del modal
        modal.append(buttonModalSalir, inputTitleModal, txtAreaDescripcion,inputDeliveryDate, divRdioBtn1,divRdioBtn2,divRdioBtn3,btnCrearActualizar,btnDeleteReset,txtAreaLogActualizaciones)


}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * metodo para manejar los logs de las tareas
 * @param {HTML tag} txtAreaLogActualizaciones 
 * @param {Number} id 
 */

<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
const logs = async(txtAreaLogActualizaciones, id) =>{

    const data = await getLog(urlLog)

    data.data.forEach( log =>{
        
        if(log.taskId == id){

            let fechaCreacion = log.createdAt
            let arrayFecha = fechaCreacion.split("T")
    
            let fecha = arrayFecha[0]
            let hora = arrayFecha[1]
    
            let templateMessage = `[${fecha}|${hora}] > La columna anterior fue: ${log.columnaPrevious} | La columna actual es: ${log.columnaCurrent}\n`
            txtAreaLogActualizaciones.innerHTML+=templateMessage 

        }

    })

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
/**
 * metodo para eliminar un log asociado a una tarea
 * @param {Object} task 
 */

const deleteLog = async(task) =>{
    if(task.logs.length){
        task.logs.forEach( log =>{
            eliminarLog(log.id)
        })
    }
}

/**
 * metodo para crear una tarea
 * @param {HTML tag} inputTitleModal 
 * @param {HTML tag} txtAreaDescripcion 
 * @param {HTML tag} inputDeliveryDate 
 * @param {HTML tag} inputRdBtn1 
 * @param {HTML tag} inputRdBtn2 
 * @param {HTML tag} inputRdBtn3 
 */
const enviarPostTask =async(inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3)=>{
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
}

/**
 * 
 * @param {HTML tag} inputTitleModal 
 * @param {HTML tag} txtAreaDescripcion 
 * @param {HTML tag} inputDeliveryDate 
 * @param {HTML tag} inputRdBtn1 
 * @param {HTML tag} inputRdBtn2 
 * @param {HTML tag} inputRdBtn3 
 * @param {Number} taskId 
 */
const enviarPutTask=async(inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3,taskId)=>{
    validar(inputTitleModal,txtAreaDescripcion,inputDeliveryDate,inputRdBtn1,inputRdBtn2,inputRdBtn3,taskId) ? 
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
    window.location.href = 'http://127.0.0.1:5501/Html/board.html';
}

botonSalirpagina.addEventListener('click', ()=>{
    window.location.href = "http://127.0.0.1:5501/Html/index.html"
})

// Lanza la funcion que muestra el modal de crear si dan click
todoButtonTitle.addEventListener('click', ()=>{
    viewModal("Crear")
})

// Lanza la funcion que muestra el modal de crear si dan click
inProcessButtonTitle.addEventListener('click', ()=>{
    viewModal("Crear")
})

// Lanza la funcion que muestra el modal de crear si dan click
finishButtonTitle.addEventListener('click', ()=>{
    viewModal("Crear")
<<<<<<< HEAD
})
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
})
>>>>>>> testBranch
