import { Navbar } from "../components/Navbar"
import TypingInput from "../components/TypingInput"
import { useLocation } from "react-router-dom"
function Test(){
       const location =useLocation();
    const username = location.state?.username || "Cher visiteur";
    return (
        <div>
            <Navbar/>
            <h1 className="text-3xl ml-2.5 text-gray-500 mt-20">Bienvenue dans test<span className="text-yellow-300">{username}</span> ! 👋</h1>
            <TypingInput/>
        </div>
    )
}
export default Test