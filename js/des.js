function cifrado()
{   
    //lectura de archivo
    var archivo=document.getElementById("file");
    var reader = new FileReader();
    reader.readAsDataURL (archivo.files [0]); 

    reader.onload = function()
    {
        var texto=this.result;//texto leido
        //console.log(texto)   
        var clave=document.getElementById("clave").value;//alor de la llave
        //console.log(clave);
        var textcifrad=CryptoJS.DES.encrypt(texto,clave);//aplicar algoritmo de cifrado
        //console.log(textcifrad);
        document.getElementById("resultado").innerHTML = textcifrad;//redultado de cifrar
    }
    //console.log(texto);//aqui no sirve esto
}


function descifrado(){
    //convercion de archivo a texto
    var archivo=document.getElementById("file");
    var reader = new FileReader();
    reader.readAsDataURL (archivo.files [0]); 

    reader.onload = function()
    {
        var texto=this.result;//texto leido
        //console.log(texto)   
        var clave=document.getElementById("clave").value;//valor de la llave
        //console.log(clave);
        var textdescif=CryptoJS.DES.decrypt(texto,clave);//aplicar descifrado 
        //console.log(textdescif);
        document.getElementById("resultado").innerHTML = textdescif;//resultado de descifrado
    } 
}
