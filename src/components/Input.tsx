import { useState, useEffect, type SetStateAction } from "react";
import { motion } from "framer-motion";

interface PropsText {
  text: string; // le texte à taper
  timer:number;
  setTimer:React.Dispatch<SetStateAction<number>>
}

function Input({ text ,timer,setTimer}: PropsText) {
const countWords = (text: string): number => {
  if (!text.trim()) return 0; // texte vide
  return text.trim().split(/\s+/).length;
};
  const wordsCount = countWords(text);
  const [currentIndex, setCurrentIndex] = useState(0); // lettre active
  const [pressed, setPressed] = useState<boolean[]>(Array(text.length).fill(false));
//   const [timer, setTimer] = useState(0); // temps écoulé en secondes
  const [isRunning, setIsRunning] = useState(false); // si le timer est actif

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRunning) {
      interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Gestion du clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isRunning) setIsRunning(true); // démarrer le timer à la première frappe

      if (text[currentIndex].toLowerCase() === e.key.toLowerCase()) {
        const newPressed = [...pressed];
        newPressed[currentIndex] = true;
        setPressed(newPressed);

        if (currentIndex + 1 === text.length) {
          setIsRunning(false); // arrêter le timer à la dernière lettre
          alert(`Bravo, tu as tapé ${wordsCount} mots en ${timer} secondes !`);
            setPressed(Array(text.length).fill(false));
  setCurrentIndex(0); 
  setTimer(0)
  
        }

        setCurrentIndex(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, pressed, text, isRunning]);

  return (
    <div className="w-[90%] h-[180px] px-10 py-1 shadow-2xl border-2 border-gray-100 m-auto mb-15 rounded-2xl flex flex-col items-center relative" style={{ fontFamily: '"Varela Round", sans-serif' }}>
      <div className="text-xl font-semibold leading-16 tracking-wider mb-2">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            animate={{
              backgroundColor:
                index === currentIndex && !pressed[index] ? ["#ffffff", "#86efac", "#ffffff"] : "#ffffff",
            }}
            transition={{ duration: 1, repeat: index === currentIndex && !pressed[index] ? Infinity : 0 }}
            className="text-2xl tracking-widest p-0.5"
            style={pressed[index] ? { opacity: 0.5 } : {}}
          >
            {char}
          </motion.span>
        ))}
      </div>
      
    </div>
  );
}

export default Input;
