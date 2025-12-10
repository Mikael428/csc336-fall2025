import React from 'react';

function Button({ label, onClick }) {
    return (
        <button onClick={onClick} style={{ padding: '10px', cursor: 'pointer' }}>
            {label}
        </button>
    );
}

export default Button;