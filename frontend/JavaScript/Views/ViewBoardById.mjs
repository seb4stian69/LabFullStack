import { getByIdFunction } from "../Model/BoardModel/Board.Service.mjs";
import { Url_Boards as urlBoard, Url_Task as urlTask } from "../Utilities/config.mjs";

export class ViewBoard {

    constructor(){
        // Utility class
    }

    getBoard = async() =>{

        const root = document.getElementById('tableContentColumns')
        const modal = document.getElementById('tableContentModal')

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
        
        const atodoButtonTitle = document.createElement("a")
        atodoButtonTitle.innerHTML="ToDo"
        atodoButtonTitle.href = "#IrVentanaFlotante"

        todoButtonTitle.append(atodoButtonTitle)

        const inProcessButtonTitle = document.createElement("button")
        inProcessButtonTitle.className = "titleBtn"
        
        const ainProcessButtonTitle = document.createElement("a")
        ainProcessButtonTitle.innerHTML="In process"
        ainProcessButtonTitle.href = "#IrVentanaFlotante"

        inProcessButtonTitle.append(ainProcessButtonTitle)

        const finishButtonTitle = document.createElement("button")
        finishButtonTitle.className = "titleBtn"
        
        const afinishButtonTitle = document.createElement("a")
        afinishButtonTitle.innerHTML="Finish"

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

            const aEditar = document.createElement("a")
            aEditar.innerHTML ="Editar"
            aEditar.href = "#IrVentanaFlotante"

            buttonEditar.append(aEditar)

            const buttonEliminar = document.createElement("button")
            buttonEliminar.innerHTML = "Eliminar"
            buttonEliminar.className="borrarTask"

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
        inputTitleModal.value = "Titulo de la tarea"

        //textarea de la descripcion de la tarea
        const txtAreaDescripcion = document.createElement("textarea")
        txtAreaDescripcion.className = "modalTxtAreaDescrip"        
        txtAreaDescripcion.id = "descripcionTarea"      
        txtAreaDescripcion.innerHTML = "Descripcion de la tarea"      

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
        btnCrearActualizar.innerHTML="Actualizar"
        
        // ButtonDeleteReset
        const btnDeleteReset = document.createElement("button") 
        btnDeleteReset.className="modalBtnDevolver"
        btnDeleteReset.innerHTML="Elimianar"

        // Textarea de el log de actualizaciones
        const txtAreaLogActualizaciones = document.createElement("textarea")
        txtAreaLogActualizaciones.className="modalTxtAreaHistory"
        txtAreaLogActualizaciones.id="historialCambios"
        txtAreaLogActualizaciones.innerHTML="Historial de cambios"

        // Append de elementos del modal
        modal.append(buttonModalSalir, inputTitleModal, txtAreaDescripcion,inputDeliveryDate, divRdioBtn1,divRdioBtn2,divRdioBtn3,btnCrearActualizar,btnDeleteReset,txtAreaLogActualizaciones)

    }

}

const viewModal = ( typeModal ) => {

    
    //     <button class="modalBtnSalir" ><a href="#">Salir</a></button>
    //     <input class="modalTxtTitle" type="text" value="Titulo de la tarea">
    //     <textarea class="modalTxtAreaDescrip" id="descripcionTarea">Descripcion de la tarea </textarea>
    //     <input class="modalDate" type="date">
    //     <div class="rdBtn1" ><input class="modalR1" name="colun" type="radio"> <label>ToDo</label></div>
    //     <div class="rdBtn2" ><input class="modalR2" name="colun" type="radio"> <label>In process</label></div>
    //     <div class="rdBtn3" ><input class="modalR3" name="colun" type="radio"> <label>Finish</label></div>
    //     <button class="modalBtnActualizar" >Actualizar</button>
    //     <button class="modalBtnDevolver" >Devolver</button>
    //     <textarea class="modalTxtAreaHistory" id="historialCambios" cols="30" rows="10">Historial de cambios</textarea>

}


