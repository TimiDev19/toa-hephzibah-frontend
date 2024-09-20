import { Link } from "react-router-dom"
import logo from '../assets/logo.webp'

const AdminLanding = () => {
  return (
    <div className=" h-[100vh] w-[100vw] home-bg flex flex-col md:flex-row items-center justify-center">
      <div className=" w-[80%] py-6 md:w-[35%] md:h-[65%] bg-white mx-7 my-4 flex items-center justify-center flex-col rounded-lg shadow-sm shadow-slate-500">
        <div>
          <img src={logo} height={300} width={300} alt='kwara state university logo' className=" mb-4" />
        </div>
        <Link to={'/assignments'} className=" bg-purple-500 p-4 rounded-xl text-white text-xl font-bold hover:bg-purple-400 duration-500">View Assignments</Link>
        <Link to="/" className=" text-blue-600 mt-5">Logout</Link>
      </div>
      
      <div className=" w-[80%] py-6 md:w-[35%] md:h-[65%] bg-white mx-7 flex items-center justify-center flex-col rounded-lg shadow-sm shadow-slate-500">
        <div>
          <img src={logo} height={300} width={300} alt='kwara state university logo' className=" mb-4" />
        </div>
        <Link to={'/students'} className=" bg-purple-500 p-4 rounded-xl text-white text-xl font-bold hover:bg-purple-400 duration-500">View Students</Link>
        <Link to="/" className=" text-blue-600 mt-5">Logout</Link>
      </div>
    </div>
  )
}

export default AdminLanding
