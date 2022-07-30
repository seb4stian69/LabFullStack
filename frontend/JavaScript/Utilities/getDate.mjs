export function formatDate(dateObj,format) {

    let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let curr_date = dateObj.getDate();
    let curr_month = dateObj.getMonth();
    curr_month = curr_month + 1;
    let curr_year = dateObj.getFullYear();
    let curr_min = dateObj.getMinutes();
    let curr_hr= dateObj.getHours();
    let curr_sc= dateObj.getSeconds();

    if(curr_month.toString().length == 1) curr_month = '0' + curr_month;      
    if(curr_date.toString().length == 1) curr_date = '0' + curr_date;
    if(curr_hr.toString().length == 1) curr_hr = '0' + curr_hr;
    if(curr_min.toString().length == 1) curr_min = '0' + curr_min;

    if(format ==1)/*dd-mm-yyyy*/{
        return curr_date + "-"+curr_month+ "-"+curr_year;       
    } else if(format ==2)/*yyyy-mm-dd*/{
        return curr_year + "-"+curr_month+ "-"+curr_date;       
    } else if(format ==3)/**dd/mm/yyyy*/{
        return curr_date + "/"+curr_month+ "/"+curr_year;       
    } else if(format ==4)/*MM/dd/yyyy HH:mm:ss*/{
        return curr_month+"/"+curr_date +"/"+curr_year+ " "+curr_hr+":"+curr_min+":"+curr_sc;       
    }

}
