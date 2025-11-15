import { useState } from "react"
import { Navbar } from "../components/Navbar"
import SingUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import Footer from "../components/Footer"




function Login(){
    const [state,setState]=useState<boolean>(true)
    console.log(state)
    return (
        <div className=" h-250 flex flex-col">
            <Navbar/>
             {state ? (
        <SingUp state={state} setState={setState} />
      ) : (
        <SignIn  state={state} setState={setState}/>  
        
      )}
           <Footer></Footer>
        </div>
    )
}

export default Login