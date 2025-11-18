function Button({ children, onClick}) {
    return (
        <button
        onClick={onClick}
        style={{
            marginLeft: "8px",
            padding: "6px 12px",
            cursor: "pointer"
        }}
        >
            {children}
        </button>
    );
}

export default Button;
