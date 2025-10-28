
export default function Page() {
    
    const handleSub = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = {
            name: form.name.value,
            town: form.town.value,
            item: form.item.value,
        };

        console.log("Submitted", formData);
        form.reset();
    };

    return (
        <html>
    <head>
        <title>GuestBook</title>
        <link rel="stylesheet" href="style.css" />
    </head>

    <div class="container">
        <h1>Signing Board</h1>
        <form id="guestForm">
            <div class="form=input">
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" required />
            </div>

            <div class="form=input">
                <label for="town">Town: </label>
                <input type="text" id="town" name="town" required />
            </div>

            <div class="form=input">
                <label for="item">Favorite Color: </label>
                <input type="text" id="item" name="item" required />
            </div>

            <div class="btn"><button type="submit">Submit: </button></div>

        </form>
        <div id ="GuestList"></div>
    </div>
    <script src="script.js" defer></script>
</html>
    )};