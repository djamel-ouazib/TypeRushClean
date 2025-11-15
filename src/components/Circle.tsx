interface Props{
    timer:number
}
function Circle({timer}:Props){

    return <div className="bg-green-400  h-full w-full  rounded-full flex items-center justify-center" >
        <SecondCircle timer={timer}/>
    </div>
}
export default Circle

 function SecondCircle({timer}:Props){
    

 
   
    return <div className="  h-[90%] w-[90%] rounded-[90%] bg-gray-100 flex items-center justify-center" >
      {timer} s
    </div>
}