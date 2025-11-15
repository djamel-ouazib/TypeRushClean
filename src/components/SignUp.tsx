import { useState } from "react";
import {  useNavigate } from "react-router-dom";

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignUp({ state, setState }: Props) {
    const navigate = useNavigate()

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function ConnectToAccount() {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erreur de connexion");
        return;
      }

      
      localStorage.setItem("token", data.token);
     navigate("/Dashboard", { state: { username: data.user.username } });
      
      
    } catch (error) {
      console.log("Erreur:", error);
    }
  }

  return (
    <div className="mt-40 flex flex-col justify-center gap-4 m-auto w-[400px] h-[300px]">
      <h1 className="text-center text-2xl text-gray-600">Connexion</h1>

      <input
        className="border-2 border-gray-500 text-gray-600 py-2 text-center rounded-xl"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border-2 border-gray-500 text-center text-gray-600 py-2 rounded-xl"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={ConnectToAccount}
        className="bg-green-400 text-white py-2 rounded-xl mt-5 cursor-pointer"
      >
        Connexion
      </button>

      <p className="text-gray-700 font-semibold">
        Pas encore avec nous ?{" "}
        <button
          className="cursor-pointer text-blue-400"
          onClick={() => setState(!state)}
        >
          Inscrivez-vous maintenant
        </button>
      </p>
    </div>
  );
}

export default SignUp;
