import { useState } from 'react'
import ChatHistory from './ChatHistory'
import { OpenAIService } from '../service/OpenAIService'

const ChatUI = () => {
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // On Submit Ask AI
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!prompt.trim()) {
            setError("Please enter a prompt");
            return;
        }

        setIsLoading(true);
        setError("");
        
        // Add user message to history
        const userMessage = {
            id: Date.now(),
            type: "user",
            content: prompt,
            timestamp: new Date().toLocaleTimeString(),
        }

        setMessages((prev) => [...prev, userMessage]);
        const currentPrompt = prompt;
        setPrompt("");

        try {
            const openAiResponse = await OpenAIService.generateAIResponse(currentPrompt);

            // Add AI response to history
            const newGeneratedMessage = {
                id: Date.now() + 1,
                type: "OpenAI",
                content: openAiResponse,
                timestamp: new Date().toLocaleTimeString(),
            }

            setMessages((prev) => [...prev, newGeneratedMessage]);
        } catch (err) {
            setError("Failed to get AI response. Please try again.");
            
        }
        setIsLoading(false);

    }

    // Reset Conversation or clear
    const clearHistory = () => {
        setMessages([]);
        setError("");
    }

    return (
        <div className="row justify-content-center">
            <div className="col-sm-8">

                {/* Input Form */}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="prompt" className="form-label">
                                    Enter your prompt:
                                </label>
                                <textarea
                                    id="prompt"
                                    className="form-control"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Enter the prompt..."
                                    rows={4}
                                    disabled={isLoading}
                                //   style={{ resize: "none" }}
                                />
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            {/* Buttons Section */}
                            <div className="d-flex gap-2">
                                <button type="submit" disabled={isLoading} className="btn btn-primary flex-fill">
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Generating...
                                        </>
                                    ) : (
                                        "Ask AI"
                                    )}
                                </button>

                                {messages.length > 0 && (
                                    <button type="button" onClick={clearHistory} className="btn btn-secondary">
                                        Clear
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Message History */}
                <ChatHistory messages={messages} isLoading={isLoading} />

            </div>
        </div>
    )
}

export default ChatUI;