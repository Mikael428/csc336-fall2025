function ListItem({text, important}) {
    return (
        <div style={{
            color: important ? "red": "black",
            fontWeight: important ? "bolder": "normal",
            marginBottom: "10px"
        }}>
            {text}
        </div>
    );
}

export default ListItem;