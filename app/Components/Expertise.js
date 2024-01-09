import { expertise } from "@/utils/Constant"
const Expertise = () => {
  return (
    <>
     <h1 className="text-4xl font-bold text-center mt-20"> Our Experties</h1>
    <div className=" flex flex-col items-center  mt-10  ">
        {
            expertise.map((item)=>{
                return (
                    <div className="flex  ">
                        <div className="flex flex-col justify-center  m-2 p-4 rounded ">
                            <div className="flex flex-col items-center  justify-center lg:mb-10 ">
                             <i className="text-4xl lg:p-4  mr-4 text-purple-400  ">{item.icons}</i>
                            <p className="text-lg font-bold text-center py-2">{item.title}</p>
                            </div>
                                
                            <p className="text-gray-400 text-center max-w-[700px] ">{item.content}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Expertise