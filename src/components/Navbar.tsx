
import { motion } from "motion/react"

import { Link } from "react-router-dom"
export function Navbar(){

    return (
        <div className="fixed top-0 w-full z-50 bg-white ">
        <motion.nav
        className="  w-[80%]  grid grid-cols-3 m-auto p-2 py-4 space-x-20  position-fixed   "
    >
      <Link to="/" className=" font-bold flex-1 text-green-300 text-3xl">
        TypeRush
      </Link>
      <div className=" flex items-center justify-center gap-8">
        
                <Link to="/" className="rounded-xl hover:bg-gray-200 p-1.5 text-gray-700"> Acceuil</Link>
                <Link to="/Apprendre" className="rounded-xl hover:bg-gray-200 p-1.5 text-gray-700"> Apprendre</Link>
      </div>
    
    
      <div className="flex items-center justify-center gap-5">
  {localStorage.getItem("token") ? (
    <button
      onClick={() => {
         const confirmLogout = window.confirm("Voulez-vous vraiment vous déconnecter ?");
          if (!confirmLogout) return;
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href = "/"; // ou navigate("/login") si useNavigate
      }}
      className="rounded-xl hover:bg-gray-200 p-1.5 px-5 text-gray-900 shadow-2xl border-2 border-gray-400 cursor-pointer"
    >
      Déconnexion 👋
    </button>
  ) : (
    <Link
      to="/login"
      className="rounded-xl hover:bg-gray-200 p-1.5 px-5 text-gray-900 shadow-2xl border-2 border-gray-400"
    >
      Connexion 😊
    </Link>
  )}

  <Link
    to="/test"
    className="rounded-xl hover:bg-green-400 p-1.5 bg-green-300 w-[150px] flex items-center justify-center"
  >
    <p className="font-bold text-white">Test TypeRush</p>
  </Link>
</div>

    </motion.nav>
    </div>
    )
}
