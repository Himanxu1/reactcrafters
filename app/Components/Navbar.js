import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center">
    <div className="flex justify-between lg:mx-20 mx-10 mt-4">
        <h1 className="font-bold text-2xl">ReactCrafters</h1>
        <ul className=" hidden  lg:flex justify-around w-[200px]">
          <Link href="/">
            <li>Home</li>   
          </Link>
            <Link href="/contact">
            <li>Contact</li>
            </Link>
        </ul>
        <button className="px-4 py-1 rounded  text-sm font-bold bg-purple-600 ">Build Now!</button>
    </div>
    <hr className="border border-gray-500 lg:mx-20 mx-10 mt-6  m-auto"/>
    </div>
  )
}

export default Navbar