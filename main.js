//console.log("Hola Mundo! desde la consola.");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString(' | ESTUDIANTE EN DESARROLLO Y GESTIÓN DE SOFTWARE |')
    .pauseFor(2500)
    .deleteAll()
    .typeString('| DESARROLLADORA FRONTEND JR |')
    .pauseFor(2500)
    .deleteAll()
    .typeString('"Si lo puedes imaginar, lo puedes crear"')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>¡programar!"</strong>')
    .pauseFor(2500)
    .start();
