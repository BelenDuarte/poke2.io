document.querySelector('.contact').addEventListener('click', function() {
    alert('Llamar al número de teléfono');
});


document.querySelector('.sonido').addEventListener('click', function() {
    var audio = new Audio('poke.mp3');
    audio.play();
});


document.querySelectorAll('.poke .blue button').forEach(function(button) {
    const content = button.querySelector('.button-content'); 

    button.addEventListener('mouseover', function() {
        if (content) {
            content.style.display = 'block'; 
        }
    });
    
    button.addEventListener('mouseout', function() {
        if (content) {
            content.style.display = 'none'; 
        }
    });
});


