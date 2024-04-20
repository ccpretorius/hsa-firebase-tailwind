import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import hsa_logo_green_word from "../assets/logo/hsa_logo_green_word.png";

export default function Header() {
  const [pageState, setPageState] = useState("Log in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Login");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img src={hsa_logo_green_word} alt="logo" className="mt-1 h-12 mb-1 rounded-md cursor-pointer" onClick={() => navigate("/")} />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={() => navigate("/")}>
              Home
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={() => navigate("/offers")}>
              Offers
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/login") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`} onClick={() => navigate("/profile")}>
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
