let userName
getName()
showTime()
setInterval(showTime,1000)

function showTime(){
    if (!userName){
        getName()
    }else if (userName){
    
        let uName = document.querySelector("#myName")
        let liveClock = document.querySelector("#myClock")
        
        let date = new Date()
        let hours = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        let day = date.getDay()
    
        switch(day){
            case 0:
                day = "Pazar"
                break;
            case 1:
                day = "Pazartesi"
                break;
            case 2:
                day = "Salı"
                break;
            case 3:
                day = "Çarşamba"
                break;
            case 4:
                day = "Perşembe"
                break;
            case 5:
                day = "Cuma"
                break;
            case 0:
                day = "Cumartesi"
                break;
        }
        
        if(minute<10){
            minute = `0${minute}`
        }
        if(second<10){
            second = `0${second}`
        }
        if(hours<10){
            hours = `0${hours}`
        }
    
        liveClock.innerHTML = `${hours} : ${minute} : ${second} ${day}`
        uName.innerHTML = userName
    }
}

function getName(){
    userName = prompt("Lütfen Adınızı Giriniz...")
    return userName
}