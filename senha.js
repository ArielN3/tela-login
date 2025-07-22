// senha.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const rememberMe = document.getElementById('rememberMe');
    const popup = document.getElementById('popup');

    // Verifica se já existe preferência de "Lembre de mim"
    if(localStorage.getItem('rememberLogin') === 'true') {
        rememberMe.checked = true;
    }

    // Configura o evento do checkbox "Lembre de mim"
    rememberMe.addEventListener('change', function() {
        if(this.checked) {
            showPopup();
            localStorage.setItem('rememberLogin', 'true');
        } else {
            localStorage.removeItem('rememberLogin');
        }
    });

    // Função para mostrar o popup
    function showPopup() {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    }

    // Adiciona animação de shake
    function addShakeAnimation() {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            .shake-form {
                animation: shake 0.5s;
            }
        `;
        document.head.appendChild(style);
    }

    // Configura o evento de submit do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        if(!email || !senha) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Verificação das credenciais específicas
        if(email === 'arieltrabalhos8@gmail.com' && senha === '1234') {
            // Aplica efeito visual antes do redirecionamento
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.8s ease';
            
            // Redireciona após a transição
            setTimeout(() => {
                window.location.href = 'config-pagina.html';
            }, 800);
        } else {
            // Adiciona animação de shake se não existir
            if (!document.querySelector('style[data-shake]')) {
                addShakeAnimation();
            }
            
            // Aplica efeito de shake no formulário
            this.classList.add('shake-form');
            
            // Remove a classe após a animação terminar
            setTimeout(() => {
                this.classList.remove('shake-form');
            }, 500);
            
            alert('E-mail ou senha incorretos!');
        }
    });
});