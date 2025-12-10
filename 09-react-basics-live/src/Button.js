import React from 'react';

function Button({ label, onClick }) {
    return (
        <Button onClick={onClick} 
        style={{ padding: '10px', cursor: 'pointer' }}>
            {label}
        </Button>
    );
}

export default Button;