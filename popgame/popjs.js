window.onload = function(){
    var img = document.getElementById("pop1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("popa.mp3");

    img.addEventListener('mousedown', function(){
        increaseScore();
        img.src = 'na2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        img.src = 'na1.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }

}