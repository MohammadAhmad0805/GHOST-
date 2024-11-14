
function openMenu() {
    document.getElementById("overlay").style.display = "flex";
}

function closeMenu() {
    document.getElementById("overlay").style.display = "none";
}


function toggleshide() {
    let button = document.getElementById('button')
    let monthly = document.getElementById('monthly')
    if (monthly.style.display !='none') {
        monthly.style.display ='none'
    }
    else{
        monthly.style.display ='block'
    }
}