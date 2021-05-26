function abrir(){
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '300px'){
        menuArea.style.width = '0px' ;
    }else {
        menuArea.style.width = '300px';
    }
}