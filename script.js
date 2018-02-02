function autohide() {
    var opc = document.getElementsByClassName('toHide')

    for (var i = 0; i < opc.length; i++){ 
		if(opc[i].style.display=="block"){
		   opc[i].style.display="none"
		} else {
		   opc[i].style.display="block"
		}	
    }
}