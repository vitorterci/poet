 // Controle para abrir/fechar blocos
 document.querySelectorAll('.block-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.arrow');
      const isOpen = content.classList.contains('open');

      if (isOpen) {
        content.classList.remove('open');
        arrow.classList.remove('open');
      } else {
        content.classList.add('open');
        arrow.classList.add('open');
      }
    });
  });

  // Sidebar links scroll + active highlight
  const sidebarLinks = document.querySelectorAll('.sidebar nav a');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Função para alternar o tema
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Salvar preferência no localStorage
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  
  // Atualizar ícone do botão
  const icon = document.querySelector('.theme-toggle i');
  if (isDark) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Verificar preferência salva ao carregar a página
function checkDarkModePreference() {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
    document.body.classList.add('dark-mode');
  }
  
  // Criar botão de alternância
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  toggleBtn.title = 'Alternar tema';
  toggleBtn.addEventListener('click', toggleDarkMode);
  document.body.appendChild(toggleBtn);
  
  // Atualizar ícone inicial
  if (darkMode) {
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', checkDarkModePreference);