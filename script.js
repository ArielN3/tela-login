document.getElementById('rememberMe').addEventListener('change', function() {
  if (this.checked) {
    const popup = document.getElementById('popup');
    popup.classList.remove('popup-hidden');
    
    // Desaparece após 2 segundos
    setTimeout(() => {
      popup.classList.add('popup-hidden');
    }, 2000);
  }
});
