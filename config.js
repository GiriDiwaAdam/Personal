var app = document.getElementById('type');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('HTML 5')
    .pauseFor(2500)
    .deleteAll()
    .typeString('CSS 3')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Bootstrap')
    .pauseFor(2500)
    .start()
    .typeString('Laravel')
    .pauseFor(2500)
    .start();
