import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const isOnline = useOnlineStatus();
    return (
        <div className="z-100 fixed top-0 left-0 right-0 flex items-center justify-between h-12 bg-blue-200 pb-2 mb-2"> 
            <div className="ml-5"><img src={LOGO_URL} alt="Logo" className="h-10" /></div>
            <div className="flex items-center ml-auto mr-5 gap-4">
                <div>Online Status: {isOnline ? "🟢" : "🔴"}</div>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <div>Cart</div>
                <button className="px-2.5 py-1 bg-white rounded">Login</button>
            </div>
        </div> 
    );
};

export default Header;