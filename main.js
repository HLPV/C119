function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();
  background("white");
  canvas.mouseReleased(classifyCanvas);
  synth = window.speechSynthesis;
}

function preload() {
  classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
  // Establece el grosor del trazo (strokeWeight) a 13
  strokeWeight(13);
  // Establece el color del trazo (stroke) a negro (black)
  stroke(0);
  // Si el mouse es presionado, dibuja una línea entre las posición previa y la actual del mouse: if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }






function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;

  document.getElementById('confidence').innerHTML = 'Confianza: ' + Math.round(results[0].confidence * 100) + '%';

  utterThis = new SpeechSynthesisUtterance(results[0].label);
  synth.speak(utterThis);
}


