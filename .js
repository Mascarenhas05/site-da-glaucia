function changeShoe(imageSrc, bgColor) {
    // 1. Troca a imagem principal
    document.getElementById('mainImage').src = imageSrc;
    
    // 2. Troca a cor de fundo do site (efeito temático)
    document.body.style.backgroundColor = bgColor;
    
    // 3. Atualiza a classe ativa nos círculos de cor (opcional para feedback visual)
    let colors = document.querySelectorAll('.color-box');
    colors.forEach(box => box.classList.remove('active'));
    event.target.classList.add('active');
}
