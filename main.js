const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const todayFocus = document.getElementById('todayFocus');

function showTime(params) {
    let today = new Date (),
    hour = today.getHours(),
    min = today.getMinutes(),
    seconds = today.getSeconds()

    const amPm = hour >= 12 ? 'PM' : "AM";    
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)} ${amPm} `; 
    
    setTimeout(showTime,1000);
}

function addZero(number) {
    return(parseInt(number,10) < 10 ? '0' : '') + number
}

function setBackground() {
    let today = new Date();
    let hour = today.getHours();

    if (hour <12) {
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = "Good Morning";
    }
    else if(hour>12){
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = "Good afternoon";
    }else{
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'white';
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if(e.which == 13 || e.KeyCode == 13){
           localStorage.setItem('name',e.target.innerText)
           name.blur();
        }
    }
    else{
        localStorage.setItem('name',e.target.innerText)
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';  
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}

function setTodayFocus(e) {
    if (e.type === 'keypress') {
        if(e.which == 13 || e.KeyCode == 13){
           localStorage.setItem('todayFocus',e.target.innerText)
           todayFocus.blur();
        }
    }
    else{
        localStorage.setItem('todayFocus',e.target.innerText)
    }
}

function getTodayFocus() {
    if (localStorage.getItem('todayFocus') === null) {
        todayFocus.textContent = '[Enter your focus for today]';  
    }
    else{
        todayFocus.textContent = localStorage.getItem('todayFocus');
    }
}


name.addEventListener('keypress',setName)
name.addEventListener('blur',setName)

todayFocus.addEventListener('keypress',setTodayFocus)
todayFocus.addEventListener('blur',setTodayFocus)


showTime();
setBackground();
getName();
getTodayFocus()