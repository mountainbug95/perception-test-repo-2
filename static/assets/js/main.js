document.getElementById("menu-button").addEventListener("click", displayMenu);
document.getElementById("cm").addEventListener("click", hideMenu);
document.observe("dom:loaded", assignColor());

var noBGIndex = -1;

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

function assignColor(){
    var colors = new Array("#362C21", "#363421", "#16251F", "#1A1A27", "#352022", "#161E23", "#321F23");
    var colorIndex = 0;
    for (var i = 0; i <= window.noBGIndex; i++)
    {
        if (colorIndex < colors.length)
        {
            document.getElementById("noBG" + i).style.backgroundColor = colors[colorIndex];
            colorIndex = colorIndex + 1;
        }
        else {
            colorIndex = 0;
            document.getElementById("noBG" + i).style.backgroundColor = colors[colorIndex];
            colorIndex = colorIndex + 1;
        }
    }
}