document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('#btn-add-cart');
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = 0; //estabelece o número 0 como inicial
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que a tela scrolle para o topo ao adicionar item no carrinho.
        cartCount++; //ao clicar no botão ele adiciona o item e aumenta o número no carrinho
        cartCountElement.textContent = cartCount;
      });
    });

    document.getElementById('btn-contact').addEventListener('click', function(event) {
        event.preventDefault();
    
        // pega os valores
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
    
        // Número de WhatsApp onde vai ser enviado
        var whatsappNumber = '5516988127756';
    
        // URL personalizada do WhatsApp
        var whatsappURL = 'https://wa.me/' + whatsappNumber + '?text='
            + 'Nome: ' + encodeURIComponent(name) + '%0A'
            + 'Email: ' + encodeURIComponent(email) + '%0A'
            + 'Telefone: ' + encodeURIComponent(phone) + '%0A'
            + 'Mensagem: ' + encodeURIComponent(message);
    
        // Redireciona para a URL do WhatsApp
        window.location.href = whatsappURL;
      });
  });

