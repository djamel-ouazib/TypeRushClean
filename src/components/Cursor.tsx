import { motion } from "motion/react"
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Si la touche est une lettre, un chiffre ou un espace, on bouge le curseur
      if (e.key.length === 1) {
        setPosition((prev) => prev + 10); // 10px est plus réaliste
      }

      // Si on appuie sur "Backspace", on recule le curseur
      if (e.key === "Backspace") {
        setPosition((prev) => Math.max(0, prev - 10));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <motion.span
        className="text-4xl font-normal text-blue-500 absolute inline-block"
        animate={{ opacity: [1, 0, 1], x: position }}
        transition={{
          opacity: { duration: 0.8, repeat: Infinity },
          x: { type: "spring", stiffness: 200, damping: 40 },
        }}
      >
        |
      </motion.span>
    </div>
  );
}

export default Cursor;
