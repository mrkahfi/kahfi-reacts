import React from "react";

const Sidebar: React.FC = () => {
    return (
        <aside style={{ width: '25%', backgroundColor: '#f1f1f1', padding: '10px', height: '100vh'}}>
            <h2>Chats</h2>
            <ul style={{ width: '25%', backgroundColor: '#f1f1f1', padding: '10px', height: '100vh' }}>
            <li style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Chat 1</li>
            <li style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Chat 2</li>
            <li style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Chat 3</li>
            </ul>
        </aside>
    )
}


export default Sidebar;