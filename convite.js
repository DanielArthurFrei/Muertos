let count = 1;
document.getElementById("radio1").checked = true;

setInterval ( function(){
   nextImage();
}, 3000)

function nextImage(){
    count++
        if(count>4){
            count = 1;
        }
    
        document.getElementById("radio"+count).checked = true;
}

function abrirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Mostra o modal
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Esconde o modal
}