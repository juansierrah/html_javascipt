
function saludar(){
    console.log("hola mundo");
    console.error("hola mundo desde un error");
    console.warn("hola mundo desde un warnig");
}
function sumar(){
    let num_1=document.getElementById('num_1').value;
    let num_2=document.getElementById('num_2').value;
    // sumar
    let resultado=parseFloat(num_1)+parseFloat(num_2);
    console.log("la suma es", resultado);
    alert("el resultados es :", +resultado);
}