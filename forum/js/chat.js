const socket = io(); // Initialize WebSocket connection (you'll need to include the Socket.io library)

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        // Send the message to the server
        socket.emit('chat-message', message);
        messageInput.value = '';
    }
});

// Listen for incoming messages from the server
socket.on('chat-message', (message) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
});
