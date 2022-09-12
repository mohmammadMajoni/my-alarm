const SValue = document.querySelectorAll('select');
const button = document.querySelector('button');
const ringtone= new Audio('src/ringtone.mp3')
// option selected
let hours = document.getElementById('hours') ;
for(var i = 0 ; i <= 24 ; i++){
    if(i < 10 ){i = '0' + i}
    const nudeTextHour =  `<option value="${i}">${i}</option>` ;
    hours.firstElementChild.insertAdjacentHTML("afterend" , nudeTextHour)
} ;
let minute = document.getElementById('minutes') ;
for(var x = 0 ; x <= 59 ; x++){
    if(x < 10 ){x = '0' + x}
    const nudeTextminute =  `<option value="${x}">${x}</option>` ;
    minute.firstElementChild.insertAdjacentHTML("afterend" , nudeTextminute)
}
// time 
setInterval( 'dateFunction()' , 1000) ;
function dateFunction () {
    const time = new Date() ;

    var h = time.getHours() ;
    h = h < 10 ? '0' + h : h ;

    var m = time.getMinutes() ;
    m = m < 10 ? '0' + m : m ;

    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s ;

    document.getElementById('time').innerHTML =
    h + ' : ' + m + ' : ' + s ;

}
// set alarm 
button.addEventListener('click' , clickFunction )
function clickFunction(){
    setInterval(() => {;
        let ifDate = new Date();
        let ifH = ifDate.getHours() ;
        let ifM = ifDate.getMinutes() ;
        let textSet2 = button.innerText ;
        if(SValue[0].value == ifH  && SValue[1].value == ifM && textSet2 == 'RESET'){
            ringtone.play()
            ringtone.loop = true
        }
    }, 1000);
}
// set text blow
button.addEventListener('click' , () => {
    if(SValue[0].value == 'hourSelect' || SValue[1].value == 'minuteSelect'  ) {
        setText.innerHTML = 'please set your alarm'
    }else{
        setText.innerHTML = 'alarm is set !' 
    }
})
//d isable select
button.addEventListener('click' , reset )
function reset (){
    if(SValue[0].value !== 'hourSelected' && SValue[1].value !== 'minuteSelect'){
        SValue[0].disabled = true
        SValue[1].disabled = true
    }
}
// undisable button and disable rigtone
button.addEventListener('click' , () =>{
    let textButton = button.innerHTML ;
        if(SValue[0].value !== 'hourSelected' && SValue[1].value !== 'minuteSelect' && textButton == 'RESET' ){
            SValue[0].disabled = false ;
            SValue[1].disabled = false ;
            setText.innerText = '' ;
            button.innerText = 'SUBMIT'
            ringtone.pause()
            SValue[0].value = 'hourSelect'
            SValue[1].value = 'minuteSelect'
        }  
})
// RESET BUTTON
button.addEventListener('click' , () => {
    let textSet = setText.innerText
    if(textSet == 'alarm is set !'){
        button.innerHTML = 'RESET'
    }
})
