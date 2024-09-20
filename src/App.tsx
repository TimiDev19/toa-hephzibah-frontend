import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import LandingPage from './global-pages/LandingPage'
import StudentList from './admin/StudentList'
import StudentRegistration from './global-pages/StudentRegistration'
import StudentDetails from './admin/StudentDetails'
import EditStudent from './admin/EditStudent'
import StudentProfile from './student/StudentProfile'
import Assignments from './admin/Assignments'
import AdminLanding from './admin/AdminLanding'
import CreateAssignment from './admin/CreateAssignment'
import EditAssignment from './admin/EditAssignment'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  })

  return (
    <div className='bg-[#F5F5F5] h-[100vh] w-[100vw] overflow-y-scroll'>

      {
        isLoading ? (
          <div className="h-full w-full flex items-center justify-center name-reveal-container">
            <h1 className='text-2xl md:text-7xl font-bold name-reveal-left inline md:mx-3 mx-2 text-purple-700'>TOA HEPHZIBAH</h1>
            <h1 className='text-2xl md:text-7xl font-bold name-reveal-right inline md:mx-3 mx-2 text-purple-700'>TUTOR</h1>
          </div>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/admin" element={<AdminLanding />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/studentreg" element={<StudentRegistration />} />
              <Route path='/student/:id' Component={StudentProfile} />
              <Route path='/studentdetails/:id' Component={StudentDetails}/>
              <Route path='/assignments' Component={Assignments}/>
              <Route path='/createassignment' Component={CreateAssignment}/>
              <Route path='/editassignment/:id' Component={EditAssignment} />
              <Route path='/editstudent/:id' Component={EditStudent} />
            </Routes>
          </BrowserRouter>
        )
      }


    </div>
  )
}

export default App