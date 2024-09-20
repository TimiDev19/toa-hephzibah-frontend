import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { useState } from 'react'


const LandingPage = () => {
  const [idee, setidee] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setidee(e.target.value)
};
  return (
    <div className=' h-[100vh] w-[100vw] flex items-center justify-center home-bg'>

      <form action="" className=' w-[90%] bg-white px-4 py-6 sm:w-[50%] md:w-[40%] rounded-lg'>
        <img src={logo} alt="" className=' w-[200px] m-auto'/>
        <div className=" max-w-fit mb-4">
          <h1 className=" text-2xl font-semibold">Login</h1>
          <div className=" h-[3px] w-[33%] bg-green-700"></div>
        </div>

        <label htmlFor="" className=" block" >Name:</label>
        <input onChange={handleChange} type="text" className=" focus:outline-none border border-black mb-4 w-full px-4 py-1" />
        <label htmlFor="" className=" block">Password <span className=' text-xs'>(ONLY REQUIRED FOR ADMIN)</span>:</label>
        <input type="password" className=" focus:outline-none border border-black mb-4 w-full px-4 py-1" />


        <Link to={`/student/${idee}`} className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Login as student</Link>
        <Link to="/admin" className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Login as admin</Link>
        <p>Do not have an account? <Link to="/studentreg" className=' text-blue-600'>Create one</Link></p>
      </form>

    </div>
  )
}

export default LandingPage
