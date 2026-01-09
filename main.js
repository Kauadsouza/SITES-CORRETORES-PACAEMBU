// Contador regressivo
function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 dias a partir de hoje
    
    const timeLeft = targetDate - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Inicializa imediatamente

// Manipulação do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Coleta os dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        income: document.getElementById('income').value,
        message: document.getElementById('message').value
    };
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.email || !formData.income) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Simulação de envio (em um caso real, aqui seria uma requisição AJAX)
    console.log('Dados do formulário enviados:', formData);
    
    // Mensagem de sucesso
    alert('Obrigado pelo seu interesse! Nossa equipe especializada entrará em contato em até 24 horas para apresentar todas as condições do programa Minha Casa Minha Vida.');
    
    // Limpa o formulário
    document.getElementById('contact-form').reset();
});

// Máscara para telefone
document.getElementById('phone').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
        value = value.replace(/^(\d*)/, '($1');
    }
    
    event.target.value = value;
});

// Máscara para renda
document.getElementById('income').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length === 0) {
        event.target.value = '';
        return;
    }
    
    const number = parseInt(value) / 100;
    event.target.value = number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
});

// Animação de entrada dos elementos
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});