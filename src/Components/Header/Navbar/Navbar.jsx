import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
             <div className="text-center my-7"><h1 className="text-xl font-bold">Simple FireBase</h1></div>
            <ul className="flex gap-2">
                <li><NavLink to ='/'>Home</NavLink></li>
                <li><NavLink to='/sign-in'>Sign In</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;