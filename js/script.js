//define variable
const clickBtn = document.getElementById('click'),
      popDiv = document.querySelector('.pop'),
      okBtn = document.getElementById('ok'),
      mainDiv = document.querySelector('.main'),
      popupDiv = document.querySelector('.popup')
//event to show popup
clickBtn.onclick = function(){
    popDiv.style.display = 'block';
    mainDiv.style.opacity = 0.5;
    
}
//event to hidden popup when user click ok
okBtn.onclick = function(){
    popDiv.style.display = 'none';
    mainDiv.style.opacity = 1
}
//event to hidden popup whe user click window
window.onclick = function(e){
    if(e.target == popupDiv || e.target == popDiv||e.target ==mainDiv){
        popDiv.style.display = 'none';
        mainDiv.style.opacity = 1
    }
}
