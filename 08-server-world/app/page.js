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
        <div>
            {/*
        <title>My Website</title>
            */}
            <h1>Information: </h1>


            <div id="worlds">
                <div className='guest-card'>
                    <h2>Guest Name: </h2>
                    <p>Town: Guest Town</p>
                    <p>Item: Guest Item</p>
                </div>
                
                
            </div>
            
            <h2>Put more Here: </h2>

            <form id="add-peoples" onSubmit={handleSub}>
                <label htmlFor="name-input"> Name: </label>
                <input type="text" name="name" required />

                <label htmlFor="town-input"> Town: </label>
                <input type="text" name="town" required />

                <label htmlFor="item-input"> Item: </label>
                <input type="text" name="item" optional />
                <div className='btn'>
                    <button type='submit'>Add: </button>
            </div>
            </form>
        
        </div>
        
        );
    }