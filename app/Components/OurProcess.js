import { ourProcess } from "@/utils/Constant"
import ChooseCard from "./ChooseCard"
import { FaArrowDown } from "react-icons/fa6";



const OurProcess = () =>{
   
    return (
        <>
         <h1 className="text-4xl font-bold text-center mt-20"> Our Process</h1>
        <div className="flex  flex-col items-center mt-10 ">
            {
                ourProcess.map((item,index)=>{
                    return (
                        <div className="p-4" key={index}>
                       <p className="text-center font-bold text-2xl "> {item.title}</p> 
                       <p className="max-w-[600px] text-center text-gray-400 text-lg">{item.content}</p>   
                     <i className="flex justify-center">
                          <FaArrowDown className="text-4xl text-purple-600 mt-4"/>    
                        </i>
                    </div>
                    )
                })
            }
          
        </div>
        </>
    )
}

export default OurProcess