import React from 'react'

const ChatHistory = ({ messages, isLoading }) => {
    if (messages.length === 0 && !isLoading) {
        return (
            <div className="card shadow">
                <div className="card-body text-center py-5">
                    <h5 className="mb-2">No conversations yet</h5>
                    <p>Start by asking a question above!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card shadow">
            <div className="card-header">
                <h5 className="card-title mb-0">Conversation History</h5>
            </div>

            <div className="card-body" style={{ maxHeight: "500px", overflowY: "auto" }}>
                <div className="d-flex flex-column gap-3">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`d-flex ${message.type === "user" ? "justify-content-end" : "justify-content-start"}`}
                        >
                            <div
                                className={`card ${message.type === "user" ? "bg-primary text-white" : "bg-light"}`}
                                style={{ maxWidth: "75%" }}
                            >
                                <div className="card-body py-2 px-3">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <small className="fw-bold">{message.type === "user" ? "You" : "OpenAI"}</small>
                                        <small>{message.timestamp}</small>
                                    </div>
                                    <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                                        {message.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="d-flex justify-content-start">
                            <div className="card bg-light">
                                <div className="card-body py-2 px-3">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <small className="fw-bold">AI</small>
                                        <small className="text-muted">typing...</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChatHistory;