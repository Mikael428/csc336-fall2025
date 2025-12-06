import ImportantMake from "./ImportantMake";

function ListItem({ text, important, category }) {
    const itemClasses = `list-item ${important ? 'item-important' : 'item-normal'}`;

    return (
        <div className={itemClasses}>
            <div className="item-text-section">
                <p className="item-text">{text}</p>

                <ImportantMake label={category} type="category" />
                </div>

                <ImportantMake
                    label={important ? "High Priority":  "Low Priority"}
                    type={important ? "priority-high" : "priority-low"}
                    />
                    </div>
    );
}

export default ListItem;