import React from "react";

const ChatArea: React.FC = () => {
    return (
        <section style={{ flex: 1, padding: '10px', backgroundColor: '#fff', height: '100vh', overflowY: 'auto' }}>
            <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>User: Hello!</div>
            <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>You: Hi, how are you?</div>
        </section>
    )
}

export default ChatArea