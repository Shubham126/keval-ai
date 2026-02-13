'use client';

import { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Array<{ type: string, text: string, timestamp: Date }>>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const API_KEY = 'wk_2cf6c3bca099f2dd50bcf19e96f607be6ab792f3832b94fb50644a96eda48f3b';
    const BACKEND_URL = 'https://chat-backend-12wo.onrender.com';
    const WEBSITE_URL = 'https://keval-ai.netlify.app/';

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    type: 'bot',
                    text: 'Hi! I\'m your Keval AI assistant. How can I help you today?',
                    timestamp: new Date(),
                },
            ]);
        }
    }, [isOpen, messages.length]);

    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = {
            type: 'user',
            text: inputMessage,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        const messageToSend = inputMessage;
        setInputMessage('');
        setIsLoading(true);

        try {
            console.log('🚀 Sending chat request...');
            console.log('📍 URL:', `${BACKEND_URL}/api/scrape/chat`);
            console.log('🔑 API Key:', API_KEY.substring(0, 10) + '...');
            console.log('💬 Message:', messageToSend);

            const response = await fetch(`${BACKEND_URL}/api/scrape/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                },
                body: JSON.stringify({
                    message: messageToSend,
                    // Note: fileId is NOT needed for website-specific API keys (wk_)
                    // The backend automatically determines the website from the API key
                }),
            });

            console.log('📊 Response status:', response.status);
            console.log('📊 Response ok:', response.ok);

            const data = await response.json();
            console.log('📦 Response data:', data);

            // Check if request was successful
            if (!response.ok || !data.success) {
                const errorText = data.message || data.error || `Server error (${response.status})`;
                console.error('❌ Chat error:', errorText);

                let errorHelpText = '';
                if (response.status === 500) {
                    errorHelpText = '\n\n💡 Possible causes:\n' +
                        '• The website content might not be available\n' +
                        '• There might be an issue with the AI service\n' +
                        '• The API key might not have access to this website\n\n' +
                        'Check the browser console for detailed error logs.';
                } else if (response.status === 401) {
                    errorHelpText = '\n\n💡 This means the API key is invalid or expired. Please check your API key in the ChatFlow AI dashboard.';
                } else if (response.status === 404) {
                    errorHelpText = '\n\n💡 The website associated with this API key was not found. Please verify the website is scraped in the dashboard.';
                }

                const errorMessage = {
                    type: 'bot',
                    text: `❌ ${errorText}${errorHelpText}`,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, errorMessage]);
                return;
            }

            const botMessage = {
                type: 'bot',
                text: data.data?.response || data.response || 'Sorry, I couldn\'t process that request.',
                timestamp: new Date(),
            };

            console.log('✅ Chat successful!');
            setMessages((prev) => [...prev, botMessage]);
        } catch (error: any) {
            console.error('💥 Chat error:', error);
            const errorMessage = {
                type: 'bot',
                text: `Sorry, I'm having trouble connecting to the server.\n\nError: ${error.message}\n\nPlease check:\n• Your internet connection\n• The backend server is running\n• CORS is properly configured`,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                className={`chat-button ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-header-content">
                            <div className="chat-avatar">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3>Keval AI Assistant</h3>
                                <p>Powered by ChatFlow AI</p>
                            </div>
                        </div>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                <div className="message-content">
                                    <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                                    <span className="message-time">
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message bot">
                                <div className="message-content">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                        />
                        <button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
