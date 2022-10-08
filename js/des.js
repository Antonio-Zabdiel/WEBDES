function cifrado()
{   
    //lectura de archivo
    var archivo=document.getElementById("file");
    var reader = new FileReader();
    reader.readAsDataURL (archivo.files [0]); 

    reader.onload = function()
    {
        
        reader.addEventListener('loadend', function() {
            document.getElementById('file').innerText = this.result;
        });
        document.getElementById('file').files[0].text().then(PromiseResult => {
            var texto=PromiseResult;
            console.log(texto);
            var clave=document.getElementById("clave").value;//alor de la llave
            //console.log(clave);
            var textcifrad=CryptoJS.DES.encrypt(texto,clave);//aplicar algoritmo de cifrado
            //console.log(textcifrad);
            document.getElementById("resultado").innerHTML = textcifrad;//redultado de cifrar

            document.getElementById("file").value = "";
        })
    }
}


function descifrado(){
    //convercion de archivo a texto
    var archivo=document.getElementById("file");
    var reader = new FileReader();
    reader.readAsDataURL (archivo.files [0]); 

    reader.onload = function()
    {
        reader.addEventListener('loadend', function() {
            document.getElementById('file').innerText = this.result;
        });
        document.getElementById('file').files[0].text().then(PromiseResult => {
            var texto=PromiseResult
            console.log(texto)   
            var clave=document.getElementById("clave").value;//valor de la llave
            console.log(clave);
            var textdescif=CryptoJS.DES.decrypt(texto,clave);//aplicar descifrado 
            var decifForm=hex_to_ascii(textdescif)
            console.log(decifForm);
            document.getElementById("resultado").innerHTML = decifForm;//resultado de descifrado
            
            document.getElementById("file").value = "";
        })
    }
}

function hex_to_ascii(str1)
 {
    var hex = str1.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
 }
