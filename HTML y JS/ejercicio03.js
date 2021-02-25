let digitos =(numero)=>{

    if(!isNaN(numero)){
        
        let conversion= numero.toString();
        document.getElementById("cifras").innerHTML= "Numero de digitos: "+conversion.length

    }else{
        alert("Usted no digitó un numero")
    }
    
}
let getdata=()=>{
    var numero =document.getElementById("texto").value;
    digitos(numero);
    
}
