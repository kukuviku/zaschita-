  document.addEventListener('DOMContentLoaded', function() {
        const chat = document.querySelector('.consultation-chat');
        const openChatBtn = document.querySelector('.consultation-btn');
        const closeChatBtn = document.querySelector('.close-chat');
        const chatMessages = document.querySelector('.chat-messages');
        const sendBtn = document.querySelector('.send-btn');
        const messageInput = document.querySelector('.chat-input input');
        
        // Открытие чата по кнопке консультации
        openChatBtn.addEventListener('click', function() {
            chat.style.display = 'flex';
            setTimeout(() => {
                chat.classList.add('active');
            }, 10);
            
            // Автоматическое сообщение от консультанта через 2 секунды
            setTimeout(() => {
                addConsultantMessage('Здравствуйте, хотите записаться на консультацию?');
            }, 2000);
        });
        
        // Закрытие чата
        closeChatBtn.addEventListener('click', function() {
            chat.classList.remove('active');
            setTimeout(() => {
                chat.style.display = 'none';
            }, 300);
        });
        
        // Отправка сообщения
        sendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
        
        function sendMessage() {
            const message = messageInput.value.trim();
            if (message) {
                addClientMessage(message);
                messageInput.value = '';
                
                // Автоматический ответ (можно модифицировать)
                setTimeout(() => {
                    addConsultantMessage('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
                }, 1000);
            }
        }
        
        function addConsultantMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'consultant');
            messageDiv.textContent = text;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function addClientMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'client');
            messageDiv.textContent = text;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Закрывать меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    });