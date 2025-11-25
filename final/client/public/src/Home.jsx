import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>
                Here is our Schedule!
            </p>
            <nav>
                <ul>
                    <li><Link to="/schedule">View Schedule</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;