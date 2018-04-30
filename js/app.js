var calculadora ={
  init:function()
  {
  
document.getElementById("0").addEventListener("click", function()
{
  escribir(0);
});
document.getElementById("1").addEventListener("click", function()
{
  escribir(1);
  
});
document.getElementById("2").addEventListener("click", function()
{
  escribir(2);
});
document.getElementById("3").addEventListener("click", function()
{
  escribir(3);
});
document.getElementById("4").addEventListener("click", function()
{
  escribir(4);
});
document.getElementById("5").addEventListener("click", function()
{
  escribir(5);
});
document.getElementById("6").addEventListener("click", function()
{
  escribir(6);
});
document.getElementById("7").addEventListener("click", function()
{
  escribir(7);

});
document.getElementById("8").addEventListener("click", function()
{
  escribir(8);

});
document.getElementById("9").addEventListener("click", function()
{
  escribir(9);
});
function escribir(numero)
{
  if(display.innerHTML.substring(0)=="0")
  {
    if(document.getElementById('display').textContent.length<8)
      {
        document.getElementById("display").innerHTML=numero;  
      }
  }
  else
  {
    if(document.getElementById('display').textContent.length<8)
    {
      document.getElementById("display").innerHTML+=numero;
    }
  }
}

document.getElementById("on").addEventListener("click", function(){
  eliminar=document.getElementById("display").innerHTML=0;
});
document.getElementById("punto").addEventListener("click", function()
{
  var elemento = document.getElementById('display')
  if (elemento.innerHTML.indexOf('.') < 0 && elemento.innerHTML != '.' && elemento.innerHTML != '') {
    document.getElementById('display').innerHTML+= '.'}
  else if (elemento.innerHTML != 0 && elemento.innerHTML != '') {
  }
});
  
document.getElementById("sign").addEventListener("click", function()
{
  var elemento = document.getElementById('display')
  if (elemento.innerHTML.indexOf('-') < 0 && elemento.innerHTML != '0' && elemento.innerHTML != '') {
    document.getElementById('display').innerHTML = '-' + elemento.innerHTML;
  }
  else if (elemento.innerHTML != 0 && elemento.innerHTML != '') {
    document.getElementById('display').innerHTML = elemento.innerHTML.substring(1);
  }
});

var valor1;
var valor2;
var operar; 


document.getElementById('mas').addEventListener("click", function(){
  valor1=document.getElementById("display").innerHTML;
  operar="sumar";
  limpiar();
});
document.getElementById('menos').addEventListener("click", function(){
  valor1=document.getElementById("display").innerHTML;
  operar="restar";
  limpiar();
});
document.getElementById('por').addEventListener("click", function(){
  valor1=document.getElementById("display").innerHTML;
  operar="multiplicar";
  limpiar();
});
document.getElementById('dividido').addEventListener("click", function(){
  valor1=document.getElementById("display").innerHTML;
  operar="dividir";
  limpiar();
});

function limpiar()
{
  document.getElementById("display").innerHTML="";
}

document.getElementById("igual").addEventListener("click", function(){
  valor2=document.getElementById("display").innerHTML;
  limpiar();
  resolver();
});
function resolver()
{
  var resultado=0;
    switch(operar)
  {
    case("sumar"):
      resultado=parseFloat(valor1)+parseFloat(valor2);
      imprecion(resultado);
    break;
    case("restar"):
      resultado=parseFloat(valor1)-parseFloat(valor2);
      imprecion();
    break;
    case("multiplicar"):
      resultado=parseFloat(valor1)*parseFloat(valor2);
      imprecion();
    break;
    case("dividir"):
      resultado=parseFloat(valor1)/parseFloat(valor2);
      imprecion();
    break;
    limpiar();
  }
  function imprecion()
{
  var res = resultado.toString();
  document.getElementById("display").innerHTML = res.substring(0,8);
}  
}
  }
}
calculadora.init()


