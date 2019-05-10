function displayMenu(){
    document.getElementById("menu").style.display = 'flex';
    document.getElementById("body-contnet").style.overflowY = 'hidden';
}

function hideMenu(){
    document.getElementById("menu").style.display = 'none';
    document.getElementById("body-contnet").style.overflowY = 'scroll';
}