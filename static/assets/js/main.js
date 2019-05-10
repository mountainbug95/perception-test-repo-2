document.getElementById("menu-button").addEventListener("click", displayMenu);
document.getElementById("cm").addEventListener("click", hideMenu);

function displayMenu(){
    document.getElementById("menu").style.zIndex = '100';
    document.getElementById("menu").style.opacity = '1';
    document.body.style.overflowY = 'hidden';
}

function hideMenu(){
    document.getElementById("menu").style.zIndex = '-100';
    document.getElementById("menu").style.opacity = '0';
    document.body.style.overflowY = 'scroll';
}