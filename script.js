const simBtn = document.getElementById('simBtn');
const naoBtn = document.getElementById('naoBtn');
const resposta = document.getElementById('resposta');

naoBtn.addEventListener('click', function() {
  // Calcula posições aleatórias para o botão
  const randomX = Math.random() * (window.innerWidth - naoBtn.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - naoBtn.offsetHeight);

  // Define as novas posições para o botão Não
  naoBtn.style.position = 'absolute';
  naoBtn.style.left = randomX + 'px';
  naoBtn.style.top = randomY + 'px';
});

simBtn.addEventListener('click', function() {
  resposta.textContent = 'Te amo linda!';
});
