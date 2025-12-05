import Circle from "./Circle"

interface Props{
    timer:number
    setTimer:React.Dispatch<React.SetStateAction<number>>
}
function Timer({timer}:Props){
   return ( <div className="w-[100px] m-auto h-[100px] grid grid-rows-&  ">
        <div className="grid-rows-2">
            <Circle timer={timer}/>
        </div>
        
    </div>)
}

export default Timer