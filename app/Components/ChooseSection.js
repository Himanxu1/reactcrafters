import { whyChooseUs } from "@/utils/Constant"
import ChooseCard from "./ChooseCard"

const ChooseSection = () => {
  return (
    <>
    <h1 className=" text-2xl lg:text-4xl font-bold text-center mt-20"><span><strike>Why</strike> </span> Choose ReactCrafters?</h1>
    <div className="lg:grid lg:grid-cols-3 gap-10 p-4 place-items-center lg:mx-28 mx-10 mt-10  ">
        {
            whyChooseUs.map((item,index)=>{
                return (
                    <div key={index}>
                     <ChooseCard item={item}  />    
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default ChooseSection