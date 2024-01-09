import ChooseSection from "./Components/ChooseSection"
import Expertise from "./Components/Expertise"
import OurProcess from "./Components/OurProcess"
import Link from "next/link"

export default function Home() {
  return (
  <>
   
    <div>
      <Link href="/contact">
      <div className="flex justify-center mt-20 bg-white text-black hover:bg-black hover:text-white hover:border-white hover:border py-1 rounded-full w-[320px] m-auto">
        <div>Transform Ideas into Reality with React</div>
      </div>
      </Link>
      <div className=" text-white flex flex-col justify-center mt-10  lg:mx-64 mx-10 text-center">
        <p className="font-bold  lg:text-6xl text-2xl">Elevate Your Brand with  <span  className="bg-gradient-to-r from-violet-200 to-purple-600 text-transparent bg-clip-text">Swift Development</span> , <span className="bg-gradient-to-r from-violet-200 to-purple-600 text-transparent bg-clip-text" >Seamless Experiences</span> , and <span className="bg-gradient-to-r from-violet-200 to-purple-600 text-transparent bg-clip-text"> Scalable Growth!</span></p>
        <div className="">
          <p className="text-center mt-10 lg:text-xl text-lg text-gray-400">As a leading React.js development agency, we specialize in crafting seamless, high-performance web applications that redefine user experiences. Whether you're a startup looking to make a splash or an established business seeking a digital transformation, our team of expert React.js developers is here to bring your vision to life.</p>

          <div className="flex justify-center mt-4">
            <Link href="/contact"  className="px-2 py-2 bg-purple-600 rounded text-md hover:border-2 hover:border-purple-600 hover:bg-transparent " >Contact Us</Link>
            <button className="px-2 py-2 bg-black border border-gray-400 rounded text-md ml-4 hover:bg-white hover:text-black" >Schedule a Call</button>
          </div>
        </div>
      </div>
    </div>
    <ChooseSection/>
    <Expertise/>
    <OurProcess/>
    <div className="flex flex-col justify-center h-[600px] items-center">
      <p className="font-bold lg:text-6xl text-4xl max-w-[600px] text-center">Start building your Idea from today</p>
      <div className="mt-10">
      <button className="px-10 py-4 rounded  text-md font-bold bg-purple-600 ">Book a call</button>
      </div>
    </div>

  </>
  )
}
