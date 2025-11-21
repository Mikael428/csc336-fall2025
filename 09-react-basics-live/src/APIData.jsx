import { useState, useEffect } from 'react';


const APIData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response not good');
            }
            return response.json();
        })
        .then(json => {
            setData(json);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);
if (loading) return <h1>Loading API Data...</h1>;
if (error) return <h1>Error: {error.message}</h1>;

return(
    <div>
        <h1> API Data</h1>
        <div>
            <p><strong>User ID: </strong> {data.userId}</p>
            <p><strong>Title:</strong> {data.title}</p>
            <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
        </div>
    </div>
);
};

export default APIData;