import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { useState } from 'react'
import FadeInWrapper from '@/components/FadeInWrapper';


const LandingPage = () => {
  const [idee, setidee] = useState('');
  const [adminNumber, setAdminNumber] = useState('')
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [wrongpassword, setWrongpassword] = useState(false)
  const navigate = useNavigate()



  const [emptyReg, setemptyReg] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setidee(e.target.value)
    setAdminNumber(e.target.value)
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  };

  const inputId = () => {
    setWrongpassword(false)
    setemptyReg(true)
  }

  const passwordVerify = () => {
    if (adminNumber === "toa" && password === "teeoa") {
      setAuthenticated(true)
      console.log(authenticated)
      navigate('/admin')
    } else {
      setemptyReg(false)
      setWrongpassword(true)
    }
  }
  return (
    <div className=' h-[100vh] w-[100vw] flex items-center justify-center home-bg'>
      <FadeInWrapper>
        <form action="" className=' w-[90%] bg-white px-4 py-6 sm:w-[50%] md:w-[40%] rounded-lg'>
          <img src={logo} alt="" className=' w-[200px] m-auto' />
          <div className=" max-w-fit mb-4">
            <h1 className=" text-2xl font-semibold">Login</h1>
            <div className=" h-[3px] w-[33%] bg-green-700"></div>
          </div>

          <label htmlFor="" className=" block" >Registration Number:</label>
          {
            emptyReg && <label htmlFor="" className=" block text-red-500" >Registration number is required</label>
          }
          {
            wrongpassword && <label htmlFor="" className=" block text-red-500" >Invalid credentials</label>
          }
          <input onChange={handleChange} type="text" className=" focus:outline-none border border-black mb-4 w-full px-4 py-1" />
          <label htmlFor="" className=" block">Password <span className=' text-xs'>(ONLY REQUIRED FOR ADMIN)</span>:</label>
          <input onChange={handlePasswordChange} type="password" className=" focus:outline-none border border-black mb-4 w-full px-4 py-1" />

          {
            !idee ? (<div><h1 onClick={inputId} className=" cursor-pointer block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Login as student</h1></div>) : (<div><Link to={`/student/${idee}`} className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Login as student</Link></div>)
          }

          
            <h1 onClick={passwordVerify} className=" cursor-pointer block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Login as admin</h1>
          

          <p>Do not have an account? <Link to="/studentreg" className=' text-blue-600'>Create one</Link></p>
        </form>
      </FadeInWrapper>

    </div>
  )
}

export default LandingPage
