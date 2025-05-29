document.addEventListener('DOMContentLoaded', function() {
    const chat = document.querySelector('.consultation-chat');
    const openChatBtns = document.querySelectorAll('.open-chat-btn');
    const closeChatBtn = document.querySelector('.close-chat');
    const chatMessages = document.querySelector('.chat-messages');
    const sendBtn = document.querySelector('.send-btn');
    const messageInput = document.querySelector('.chat-input input');
    
    // Открытие чата по любой кнопке с классом open-chat-btn
    openChatBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            chat.style.display = 'flex';
            setTimeout(() => {
                chat.classList.add('active');
            }, 10);
            
            // Автоматическое сообщение от консультанта через 2 секунды
            setTimeout(() => {
                addConsultantMessage('Здравствуйте, хотите записаться на консультацию?');
            }, 2000);
        });
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
            
            // Автоматический ответ
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
            
    document.querySelectorAll('.service-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceItem = this.closest('.service-item');
            const description = serviceItem.querySelector('.service-description');
            
            // Закрываем все открытые описания
            document.querySelectorAll('.service-description').forEach(item => {
                if (item !== description) {
                    item.classList.remove('active');
                }
            });
            
            // Переключаем текущее описание
            description.classList.toggle('active');
            
            // Меняем текст кнопки
            this.textContent = description.classList.contains('active') ? 'Скрыть' : 'Подробнее';
        });
    });
});