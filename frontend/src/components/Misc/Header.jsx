import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutStrava } from "../../Redux/StravaAuth/StravaAuthSlice";

const Header = () =>{
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {isAuthenticated}=useSelector((state)=>state.stravaAuth);
const handleLogout = () =>{
  dispatch(logoutStrava())
  navigate("/");
}
    return (
        <div className="flex justify-between items-center mb-8 min-w-screen">
        <h1 className="text-4xl font-extrabold text-purple-400 animate-fadeInLeft">KriLink </h1>
        <button
         onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 animate-fadeInRight"
        >
          Logout 🚪
        </button>
      </div>
    )
}

export default Header;