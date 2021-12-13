var button=document.querySelector('#button123');

var conjunto=document.querySelector("#conjunto");
var conjunto2=document.querySelector("#conjunto2");
var first=document.querySelector("#first");
var second=document.querySelector("#second");

//////////////////////////////////////////////////////

button.addEventListener("click",function(){


if(conjunto.style.display!="none"){
///////////////////////////////
const r = fetch("http://www.boredapi.com/api/activity/").then(function(response){
    return response.json();
}).then (function(json){
    document.querySelector("#activity").innerHTML = json.activity + "<br>"+ "<br>"+"<br>";
button.innerHTML="retornar";
conjunto.style.display="none";
second.style.display="none";


});
////////////////////////////////

}
else{conjunto.style.display="block";
second.style.display="block";
button.innerHTML="sugestão de atividade";
document.querySelector("#activity").innerHTML="";
}


});






















var button2=document.querySelector("#button2");


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

button2.addEventListener("click",function(){
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
if(first.style.display!="none"){

var input=document.querySelector("#input1");
var participantes=input.value;
var url="http://www.boredapi.com/api/activity?participants="+participantes;
///////////////////////////
///////////////////////////
///////////////////////////
const link2 = fetch(url).then(function(response){

return response.json();}).then(function(json2){

if(json2.activity==undefined){document.querySelector("#activity2").innerHTML="valor inválido";}

else{document.querySelector("#activity2").innerHTML=json2.activity+".Atividade para "+participantes+" participantes";}

conjunto2.style.display="none";
button2.innerHTML="retornar";
first.style.display="none";


});
///////////////////////////////////////////////////////////////////
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
else{


first.style.display="block";
conjunto2.style.display="block";
button2.innerHTML="enviar";
document.querySelector("#activity2").innerHTML="";

}

});

