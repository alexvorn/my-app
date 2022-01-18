import { Link } from "react-router-dom";

export default function Header(props) {
    const email = props.user?.email;

    return (
        <div className="header">
            <div>
                <Link to="/login">Login</Link>
                <Link to="/home">Home</Link>
                <Link to="/registration">Registration</Link>
            </div>
            {email && <span>Hello {email}</span>}
        </div>
    )
}
