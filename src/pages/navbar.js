import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
               <Link to="/">Home</Link>
               <Link to="/superheroes">Heroes</Link>
               <Link to="/fetch">API</Link>
            </nav>
        </div>
    )
}