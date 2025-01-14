document.getElementById('lights-on').addEventListener('click', function() {
    const music = document.getElementById('background-music');
    music.play();

    this.style.display = 'none';

    const stage = document.getElementById('stage');
    stage.style.display = 'block';

    setTimeout(() => {
        document.getElementById('decorations').style.display = 'block';
    }, 1000);

    setTimeout(() => {
        document.getElementById('cake').style.display = 'block';
    }, 3000);

    setTimeout(() => {
        document.getElementById('message').style.display = 'block';
    }, 5000);
});
