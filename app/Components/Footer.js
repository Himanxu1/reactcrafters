
const Footer = () => {
  return (
    <div  className="mb-10 ">
        <hr className="border border-gray-500 mx-20 mt-6  m-auto" />
        <div className="flex lg:flex-row flex-col items-center  justify-between lg:mx-20 mx-10 mt-10">

          <div className="flex ">
            <ul className="flex lg:flex-row flex-col  items-center w-[300px] justify-between ">
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Security</li>
            </ul>
            
          </div>
                <p>©2024 ReactCrafters · All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer