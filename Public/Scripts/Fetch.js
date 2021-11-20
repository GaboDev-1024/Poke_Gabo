
//CONST---------------------------
const pokeApi = "https://pokeapi.co/api/v2/pokemon/"
const pokeType = "https://pokeapi.co/api/v2/type/"

//CALCULO DE PESO/ALTURA
function Altura(height){
  var valor = height/10;
  var resultado=0;
  if (valor>1){
    resultado = valor+" M";
  }else{
    resultado = valor+" Cm";
  }
  return resultado;
};

function Peso(weight){
  var valor = weight/10;
  var resultado=0;
  if (valor>1){
    resultado = valor+" Kg";
  }else{
    resultado = valor+" g";
  }
  return resultado;
};

//EXTRUCTURACION DE DATA
function lengthPoint (dataTwo){
  var texto=""
  for (i=0; i<dataTwo.damage_relations.double_damage_from.length; i++){
    texto= texto+ "-"+dataTwo.damage_relations.double_damage_from[i].name;
  }
  return texto
}

function lengthPointTwo (dataTwo){
  var texto=""
  for (i=0; i<dataTwo.damage_relations.double_damage_to.length; i++){
    texto= texto+ "-"+dataTwo.damage_relations.double_damage_to[i].name;
  }
  return texto
}


function draw (long){
  for (i = 0; i<long.length-2; i++) {
    fetch(pokeType+(i+1))
      .then(response => response.json())
      .then((dataTwo) => {
        $("#bodyTable").append(`
        <tr> 
          <td>${dataTwo.name}</td>
          <td>${lengthPoint(dataTwo)}</td>
          <td>${lengthPointTwo (dataTwo)}</td>
        </tr>
        `)
      })

  }
}

//IMPRESION DE DATA EN PANTALLA
$("#button").click(()=>{
  $("#last_p").css("margin-bottom","86.5px")
  fetch(pokeApi+$("#poke").val())
  .then(response => response.json())
  .then((data) => {
    $("#dInfo").css("display","flex")
    $("#nombre").text(data.name);
    $("#altura").text(`${Altura(data.height)}`);
    $("#peso").text(`${Peso(data.weight)}`);
    $("#tipo").text(data.types[0].type.name);
    $("#imageOne").attr("src", data.sprites.back_default);
    $("#imageTwo").attr("src", data.sprites.front_default);
    $("#imageThree").attr("src", data.sprites.back_shiny);
    $("#imageFour").attr("src", data.sprites.front_shiny);
    $("#boxError").css("display","none")
    $("#pikaIndex").attr("src","pika-index.png")
    $("#pikaIndex").css("margin-top","-10px");
    $("#pikaIndex").css("margin-bottom","0px");
    $("#_footer").css("margin-top","5%")

  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
    $("#boxError").css("display","block")
    $("#pikaIndex").attr("src","pika-error.png")
    $("#last_p").css("margin-bottom","21px")
    $("#pikaIndex").css("margin-top","50px");
    $("#pikaIndex").css("margin-bottom","25px");
  });
})

//REQUEST TYPE OF POKEMON
fetch(pokeType)
  .then(response => response.json())
  .then((data) => {
    draw(data.results)
  })

//FUNCTION TO SEND WITH "ENTER"
$("#poke").keydown(() => {
  if (event.which === 13) {
    $("#button").click();
  }
})