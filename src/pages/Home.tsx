
import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import ImageBanner from "../components/ImageBanner"
import Footer from "../components/Footer"
const Home:React.FC=()=>{
    return(
        <div >
            <Navbar/>
            <ImageBanner/>
            <div className="text-center">
                <h1 className="text-7xl text-green-300 font-bold">Tapez plus vite</h1> <br />
<p className="text-gray-700"> Apprenez à taper plus vite grâce TypeRush. <br></br> Suivez nos leçons gratuites.</p> <br />
            </div>
          <div className="text-center m-auto bg-yellow-500 w-2xs py-2.5 rounded-2xl hover:bg-yellow-600">
            {
                localStorage.getItem('token')?(
                      <Link to={"/Dashboard"}  className="text-white font-bold text-xl">
                Commencer a Taper
           </Link>
                ):(
                     <Link to={"/Login"}  className="text-white font-bold text-xl">
                Commencer a Taper
           </Link>
                )
            }
            
           
          </div>
          <br />
          <Footer/>
        </div>
    )
}
export default Home