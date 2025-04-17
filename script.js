function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('open');
  
    // Fecha o menu ao clicar em qualquer link (modo mobile/tablet)
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.onclick = () => nav.classList.remove('open');
    });
  }
  