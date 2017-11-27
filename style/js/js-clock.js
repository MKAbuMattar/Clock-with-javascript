var tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
function GetClock(){
    var d = new Date();
    var nmonth = d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
    if(nyear < 1000) nyear += 1900;
    var nhour = d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
    
    if(nhour == 0){
        ap = "AM ";
        nhour = 12;
    }
    else if(nhour<12){
        ap = "AM ";
    }
    else if(nhour==12){
        ap="PM ";
    }
    else if(nhour>12){
        ap="PM ";
        nhour-=12;
    }
    
    if(nmin <= 9) nmin="0"+nmin;
    if(nsec <= 9) nsec="0"+nsec;
    
    document.getElementById('clock').innerHTML=ap+"&nbsp;"+nhour+":"+nmin+":"+nsec+"&nbsp;&nbsp;&nbsp;"+tmonth[nmonth]+"&nbsp;"+ndate+",&nbsp;"+nyear;
}

window.onload=function(){
    GetClock();
    setInterval(GetClock,1000);
}