// === FAQ Interativo ===
// Alterna a visibilidade das respostas ao clicar nas perguntas
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    if (answer) {
      // Verifica se a resposta já está visível
      const isVisible = answer.style.display === 'block';

      // Alterna entre mostrar e esconder a resposta
      answer.style.display = isVisible ? 'none' : 'block';

      // Adiciona ou remove a classe 'open' para alternar a seta (► para ▼)
      question.classList.toggle('open', !isVisible);
    }
  });
});


// === Menu Responsivo ===
// Abre ou fecha o menu de navegação ao clicar no botão de menu
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("open"); // Alterna a classe para abrir ou fechar o menu

  // Seleciona todos os links dentro do menu
  const links = nav.querySelectorAll('a');

  // Fecha o menu automaticamente ao clicar em qualquer link (modo mobile/tablet)
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}
