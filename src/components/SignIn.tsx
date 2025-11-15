import { useState } from "react";

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignIn({state,setState}:Props){
    const[username,SetUsername]=useState('')
    const[password,SetPassword]=useState('')
    const[email,SetEmail]=useState('')
   
        
        
  function CreateNewUser(){
    async function CreatUser() {
            try {
                const response=await fetch("http://localhost:3000/api/auth/register",{
                  method:"Post",
                  headers:{
                    "Content-type":"application/json"
                  },
                  body:JSON.stringify({
                    username,
                    email,
                    password
                  })  
                })
                const data=await response.json()
                console.log("utilisateur enregistré",data)
                alert("utilisateur enregistré")
            } catch (error) {
                console.log("Erreur lors de l'envoi:",error)
            }
        }
        CreatUser()
        SetPassword("")
        SetUsername("")
        SetEmail("")
  }

    return(
         <div className=" mt-40 flex flex-col justify-center gap-4 m-auto w-[400px]  h-[300px]">
            <h1 className="text-center text-2xl text-gray-600">Inscription </h1>

            <label htmlFor=""></label>
            <input type="text" name="text" value={username} onChange={(e)=>SetUsername(e.target.value)} id="text" className="border-2 border-gray-500 text-gray-600 py-2 text-center rounded-xl" placeholder="Votre nom"  />

            <label htmlFor="email"></label>
            <input className="border-2 border-gray-500 text-gray-600 py-2 text-center rounded-xl"type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>SetEmail(e.target.value)}/>

             <label htmlFor="password"></label>
             <input className="border-2 border-gray-500 text-center text-gray-600 py-2 rounded-xl" type="password" name="password" id="password" placeholder="Mot de passe" value={password} onChange={(e)=>SetPassword(e.target.value)} />
             <button type="submit" onClick={()=>CreateNewUser()} className="bg-blue-500 text-white py-2 rounded-xl mt-5 cursor-pointer">Inscription</button>
             
             <button className="text-gray-700 font-semibold text-center cursor-pointer" onClick={()=>{setState(!state)}}><span className="text-red-400">Connectez</span> -vous</button>
        </div>
    )
}
export default SignIn