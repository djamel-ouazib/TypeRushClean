import { useEffect, useState } from "react"

interface TouchProps {
  char: string
  color: string
  width: number
  height: number
  
}

function Touch({ char, color, width, height}: TouchProps) {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === char.toLowerCase()) {
        setPressed(true)
        
        
        setTimeout(() => setPressed(false), 100)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Nettoyage de l'écouteur quand le composant est démonté
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [char])

  return (
    <div
      className={`flex items-center justify-center rounded-xl p-2 cursor-pointer transition-colors duration-150 
        ${pressed ? "bg-red-500" : color}`}
      style={{ width, height }}
    >
      {char}
    </div>
  )
}

export default Touch
