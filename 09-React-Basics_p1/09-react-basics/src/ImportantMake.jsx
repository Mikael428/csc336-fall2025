function ImportantMake({label, type}) {

    let markerClass = "marker-base";

    switch (type) {
        case "priority-high":
            markerClass += "marker-high";
            break;
    
        case "priority-low":
            markerClass += "marker-low";
            break;
        case "category":
            markerClass += "marker-category";
            break;
        default:
            markerClass += "marker-default";
    }
        return (
            <span className={markerClass}>
                {label}
            </span>
        );
}

export default ImportantMake;