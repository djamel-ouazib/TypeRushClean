
import { useState } from "react"
import Input from "./Input"
import KeyBoard from "./KeyBoard"
import Timer from "./Timer"

let text='Sous la lune tranquille, mon coeur écrit des secrets que seul le vent comprend'

function TypingInput(){
  
   const [timer, setTimer] = useState(0); 

  return(
    <div className="mt-10">
      <Input text={text } timer={timer} setTimer={setTimer}/>
      
      <div className="grid grid-cols-3 px-2"> 
        <div className="grid-cols-1">
          <Timer timer={timer} setTimer={setTimer}/>
        </div>
       
        <div className="grid-cols-2">
          <KeyBoard />
        </div>
      </div>
    </div>
  )
}

export default TypingInput
