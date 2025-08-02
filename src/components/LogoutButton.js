import React from 'react';

function LogoutButton({ onClick }) {
    return (
        <div>
            <button onClick={onClick} style={{fontWeight: 'bold'}}>Logout</button>
        </div>
    );
}

export default LogoutButton;