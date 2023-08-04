$(document).ready(function(){
  $('.buscador select').selectpicker();
})

function copyToClipboard() {
  var copyText = document.getElementById("plantilla");
  copyText.select();
  document.execCommand("copy");
  var button = document.getElementsByTagName("button")[3];
  button.innerHTML = "Copiado";
}

function agregarPunto(input) {
  let valor = input.value.replace(/\D/g, "");
  valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  input.value = valor;
}

function limitarInput(input, max) {
  input.value = input.value.slice(0, max);
}

setInterval(updateTextarea, 500);

function updateTextarea() {
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var año = document.getElementById("año").value;
  var recorrido = document.getElementById("recorrido").value;
  var combustible = document.getElementById("combustible").value;
  var color = document.getElementById("color").value;
  var transmision = document.getElementById("transmision").value;
  var tapiceria = document.getElementById("tapiceria").value;
  var aire = document.getElementById("aire").value;
  var dueños = document.getElementById("dueños").value;
  var detalles = document.getElementById("detalles").value;
  var cauchos = document.getElementById("cauchos").value;
  var ubicacion = document.getElementById("ubicacion").value;
  var tipo = document.getElementById("tipo").value;
  var asesor = document.getElementById("asesor").value;
  var instagram = document.getElementById("instagram").value; 
  var numero = document.getElementById("numero").value;
  var textocombustible = "⛽ Combustible:";
  var saltogasolina = "";
  var tipodm = document.getElementById("tipodm").value;
  var preciocmk = document.getElementById("preciocmk").value;
  var preciocliente = document.getElementById("preciocliente").value;
  
  
  if (combustible == "") {
    textocombustible = "";
  } else if (combustible == "gasoil") {
    textocombustible = "⛽ Combustible:";
  } else if (combustible == "Gasolina") {
    textocombustible = "⛽ Combustible:";
  } else if (combustible == "Electrico") {
    textocombustible = "⛽ Combustible:";
  } else if (combustible == "Gasolina (Cuenta con sistema de gas)") 
    textocombustible = "⛽ Combustible:";
    

  if (textocombustible == "⛽ Combustible:"){
      var saltogasolina = '\n';
  }
    

  document.getElementById("plantilla").value = "🚘Marca:" + " " + marca + "\n" + 
  "🚐 Modelo:" + " " + modelo + "\n" +
  "📅 Año:" + " " + año + "\n" +
  "📟 Recorrido:" + " " + recorrido + " " + tipodm + "\n" + 
  textocombustible + " " + combustible + saltogasolina +
  "🖍️ Color:" + " " + color + "\n" +
  "🕹 Transmisión:" + " " + transmision + "\n" + 
  "💺 Tapicería:" + " " + tapiceria + "\n" + 
  "❄ Aire:" + " " + aire + "\n" + 
  "👥 Dueño(s):" + " " + dueños + "\n" + 
  "🔧 Detalles:" + " " + detalles + "\n" +
  "⚙️ % de cauchos:" + " " + cauchos + " " + "%" + "\n" + 
  "💰 Precio CMK" + " " + preciocmk + "$" + "\n" +
  "💸 Precio Cliente" + " " + preciocliente + "$" + "\n" +
  "📌 Ubicación:" + " " + ubicacion + "\n" +
  "⚠️ " + " " + tipo + "\n" +
  "👤 Asesor:" + " " + asesor + "\n" + 
  "🖥️:" + " " + instagram + "\n" + 
  "📲 números:" + "\n" + " " + numero + "\n" +
  "04126368619" + "\n" +
  "\n" +
  "¡Contáctanos ya! 🆓📲" + "\n" + "\n" +
  "Ver publicaciones del mismo modelo haz clic aquí " + "\n" +
  "👉#cmkautos" + modelo + "👈" + "\n" + "\n" +
  "Ver publicaciones de la misma marca haz clic Aquí" + "\n" +
  "👉#cmkautos" + marca + "👈" + "\n" + "\n" +
  "#concesionario #concesionariocaracas #concesionarios #ventadecarrosusados  #concesionariovenezuela #ventadecarros #ventadeautos" + "\n" + "\n" +
  "¡Compra, vende o consigna con nosotros! 🏁"}