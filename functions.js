document.addEventListener('DOMContentLoaded', function () {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const audio = document.getElementById("audio");

    button1.addEventListener('click', function () {
        div1.style.display = 'none';
        div2.style.display = 'block';
        document.body.style.backgroundImage = 'url(cottonwithoutemi.jpg)';

        const button3 = document.getElementById("music-button");
        button3.addEventListener('click', function () {
            audio.play();
        });
    });

    button2.addEventListener('click', function () {
        button2.innerHTML = "gahi jud kag ulo. anyway, imy yot and sorry sad :<<";
    });
});