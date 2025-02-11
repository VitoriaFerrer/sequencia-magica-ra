document.querySelector('#marker').addEventListener('markerFound', function() {
    let audio = document.querySelector('#audio');
    audio.play().catch(error => console.log('Erro ao reproduzir áudio:', error));
});
