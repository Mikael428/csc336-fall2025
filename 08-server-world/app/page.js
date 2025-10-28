export default function Page() {
    const handleSub = (event) => {
        event.preventDef();

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
        <div>
            {/*
        <title>My Website</title>
            */}
            <h1>Information: </h1>


            <div id="worlds">
                <p>Loading...</p>
            </div>

            <h2>Put more Here: </h2>

            <form id="add-peoples">
                <label htmlFor="name"> Name:</label>
                <input type="text" name="name" required />

                <label htmlFor="name"> Town:</label>
                <input type="text" name="town" required />

                <label htmlFor="name"> Item:</label>
                <input type="text" name="item" optional />

                <button type="submit">Add: </button>
            </form>

            <p id="status"></p>
        </div>
        );
    }
