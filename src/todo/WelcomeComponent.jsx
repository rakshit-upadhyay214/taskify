import { useParams, Link } from "react-router-dom"
export default function Welcome(){
    const {username}=useParams();
    return (
        <>
            <div>
                <h1>Welcome {username}!</h1>
                <div>
                    <p>
                        Let's manage your Todos.
                    </p>
                    <br />
                    <Link to="/todos">Click Here</Link>
                </div>
            </div>
        </>
    )
}