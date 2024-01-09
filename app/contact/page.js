"use client"
import { useState } from "react"

const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data ={
      name, email, message
    }
    console.log(data);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  

  }

  return (
    <div>
      <h1 className="text-7xl text-center font-bold mt-10">/ Connect with Us</h1>
      <p className="text-2xl text-gray-500 text-center py-2">Speak to our team to help you set up your next React project.  </p>
      <div className="border border-gray-600 w-[400px] h-[400px] m-auto mt-10 p-10 rounded">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-2">
          <label className="font-bold"> Name</label>
          <input 
          className="px-10 py-2 border border-gray-500 w-[300px]  text-black " 
          onChange={(e)=>setName(e.target.value)} 
          value={name}
          />
          </div>
          <div className="flex flex-col p-2">
          <label  className="font-bold">Email</label>
          <input className="px-10 py-2 border border-gray-500 w-[300px] text-black " onChange={(e)=>setEmail(e.target.value)} />
          </div>
      
        <div className="flex flex-col p-2">
          <label  className="font-bold">Message</label>
          <input className="px-10 py-6 border border-gray-500 w-[300px]  text-black" onChange={(e)=>setMessage(e.target.value)} />
          </div>
          <div className="flex justify-center mt-6">

           <button className="px-4  py-2 bg-white text-black  rounded font-bold " type="submit">Submit</button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default Contact