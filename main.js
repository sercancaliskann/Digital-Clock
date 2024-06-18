function updateClock(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();

    if(hour<10){
        document.getElementById("hour").innerText = "0" + hour;
    }else{
        document.getElementById("hour").innerText = hour;
    }

    if(minute<10){
        document.getElementById("minute").innerText = "0" + minute;
    }else{
        document.getElementById("minute").innerText = minute;
    }

    if(second<10){
        document.getElementById("second").innerText = "0" + second;
    }else{
        document.getElementById("second").innerText = second;
    }

    document.getElementById("date").innerText = day+"-"+month+"-"+year;

}

setInterval(updateClock,1000);
updateClock();