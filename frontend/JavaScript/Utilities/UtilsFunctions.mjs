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
