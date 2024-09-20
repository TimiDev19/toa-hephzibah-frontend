import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.webp'
import { format } from 'date-fns';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface Item {
    _id: string;
    firstName: string;
    lastName: string;
    description: string;
    coachingType: string;
    phoneNumber: string;
    dateOfBirth: string;
    sex: string;
    stateOfOrign: string;
}

interface Assignment {
    _id: string;
    subject: string;
    question: string;
}

const StudentProfile: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<Item | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const today = new Date();
    const todaysdate = format(today, 'dd-MM-yyyy');

    useEffect(() => {
        setItem(null);
        setError(null);
        setLoading(true);

        const fetchItem = async () => {
            try {
                const response = await fetch(`https://toa-hephzibah-backend.onrender.com/api/product/${id}`);
                if (!response.ok) {
                    if (response.status === 400) {
                        setError('ID not found');

                    } else {
                        setError('An error occurred');

                    }
                    setItem(null);
                } else {
                    const data = await response.json();
                    setItem(data);
                    setError(null);
                }
            } catch (error) {
                setError('An error occurred');
                setItem(null);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    const [assignment, setAssignment] = useState<Assignment[]>([]);
    useEffect(() => {
        fetch("https://toa-hephzibah-backend.onrender.com/api/assignment").then(
            response => response.json()
        ).then(
            data => {
                const formattedData = data.map((assignment: any) => ({
                    ...assignment,
                    updatedAt: format(assignment.updatedAt, 'dd-MM-yyyy') // Format the updatedAt field
                }));

                setAssignment(formattedData);
            }
        ).catch((error) => console.error('Error fetching courses:', error));
    }, [])

    if (loading) return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className="flex flex-col items-center text-center rounded-md justify-center h-[300px] w-[300px] bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    )
    if (error) return <p>{error}</p>;
    if (!item) return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className="flex flex-col items-center text-center rounded-md justify-center h-[300px] w-[300px] bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    )
    return (
        <div>
            <div className=" block lg:hidden home-bg h-[100vh] scrollbar-hide overflow-scroll w-full p-5">
                <div className=' h-fit w-full flex items-center justify-end'>
                    <div className=' flex items-center justify-center bg-white rounded-lg mb-6'>
                        <div>
                            <img src={logo} height={50} width={50} alt='kwara state university logo' />
                        </div>
                        <div className=' flex flex-col items-start justify-center px-6 py-2 text-left'>
                            <h1 className=' font-bold text-slate-600 text-sm'>{item.firstName} {item.lastName}</h1>
                            <p className=' text-xs text-slate-400'>{item.coachingType}</p>
                        </div>
                    </div>
                </div>

                <div className=" w-full bg-gradient-to-br from-purple-700 to-purple-200 rounded-lg p-3 mb-6">
                    <h1 className='font-thin text-sm text-white'>{todaysdate}</h1>
                    <p className=" text-white m-0 p-0">Welcome back 👋🏽</p>
                    <h1 className=" text-white font-bold text-2xl">{item.firstName}</h1>
                    <p className='font-thin text-sm text-white'>Stay up to date with your tutorial</p>
                </div>

                <div className=" flex items-end justify-end">
                    <Link to={'/'} className=" w-fit h-fit bg-purple-500 rounded-full py-3 px-6 hover:bg-opacity-80 duration-500 text-white">Logout</Link>
                </div>

                <div className=" w-full h-[100vh] scrollbar-hide overflow-scroll">
                    <h1 className=' capitalize font-extrabold text-white font-sans text-lg mb-4'>student information</h1>
                    <div className=' mb-6 p-4 h-fit w-full bg-white rounded-lg shadow-md shadow-slate-600 flex flex-col items-center justify-center'>
                        <h1>Reg Number</h1>
                        <h1 className=' text-4sm font-extrabold text-purple-700'>{id}</h1>
                    </div>

                    <div className=' mb-6 p-4 h-fit w-full bg-white rounded-lg shadow-md shadow-slate-600 flex flex-col items-center justify-center'>
                        <h1>Whatsapp Group Link</h1>
                        <h1 className=' text-4xl font-extrabold text-purple-700'></h1>
                    </div>

                    <div className=' mb-6 p-4 h-fit w-full bg-white rounded-lg shadow-md shadow-slate-600 flex flex-col items-center justify-center'>
                        <h1>Tasks completed</h1>
                        <h1 className=' text-4xl font-extrabold text-purple-700'>33%</h1>
                    </div>
                    <h1 className=' capitalize font-extrabold text-white font-sans text-lg mb-4'>Assignments</h1>
                    <div className=' h-[80vh] scrollbar-hide overflow-scroll'>
                        {
                            assignment.map((work, index) => (
                                <div className=' w-full bg-white rounded-lg px-4 py-2 mb-6' key={index}>
                                    <h1 className=' font-semibold'>{work.subject}</h1>
                                    <p className=' font-extrathin text-xs mb-4'>{work.question}</p>
                                    <p className="mb-4 italic text-red-500 font-extrathin text-xs">This assignment was posted on: {work.updatedAt}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            <div className=' hidden lg:block home-bg h-[100vh] w-full'>
                <div className=' flex items-center justify-between h-[100vh] p-10'>
                    <div className=' hidden w-[18%] py-10 h-full bg-gradient-to-t from-purple-600 to-purple-200 rounded-md lg:flex flex-col items-center justify-between'>
                        <div className=' text-center'>
                            <div>
                                <img src={logo} height={250} className=" m-auto" alt='kwara state university logo' />
                            </div>
                            <h1 className=' uppercase text-3xl text-white '>TOA Hephzibah Tutor</h1>
                        </div>

                        <a href="/" className=' bg-white px-6 py-2 rounded-full border-purple-700 hover:border-[5px] duration-500'>Logout</a>
                    </div>

                    <div className=' w-full lg:w-[80%] h-full'>
                        <div className=' h-fit w-full flex items-center justify-end'>
                            <div className=' flex items-center justify-center bg-white rounded-lg mb-6'>
                                <div>
                                    <img src={logo} height={50} width={50} alt='kwara state university logo' />
                                </div>
                                <div className=' flex flex-col items-start justify-center px-6 py-2 text-left'>
                                    <h1 className=' font-bold text-slate-600 text-sm'>{item.firstName} {item.lastName}</h1>
                                    <p className=' text-xs text-slate-400'>{item.coachingType}</p>
                                </div>
                            </div>
                        </div>


                        <div className=' px-10 py-8 mb-10 w-full h-[160px] bg-gradient-to-br from-purple-700 to-purple-200 rounded-lg flex items-center justify-between'>
                            <div className=' lg:w-[80%] h-full flex flex-col items-start justify-between'>
                                <h1 className='font-thin text-sm text-white'>{todaysdate}</h1>

                                <div>
                                    <h1 className=' text-white font-bold text-3xl'>Welcome back, {item.firstName}!</h1>
                                    <p className='font-thin text-sm text-white'>Stay up to date with your tutorial</p>
                                </div>
                            </div>
                            <div className=" hidden lg:block">
                                <img src={logo} height={250} className=" h-[150px]" alt='kwara state university logo' />
                            </div>
                        </div>

                        <div className=' flex items-start justify-between w-full'>
                            <div className=' w-[65%]'>
                                <h1 className=' capitalize font-extrabold text-white font-sans text-lg'>Group information</h1>
                                <div className=' w-full flex items-center justify-between mb-10'>
                                    <div className=' h-[130px] w-[30%] bg-white rounded-lg shadow-md shadow-slate-600 flex flex-col items-center justify-center'>
                                        <h1>Reg Number</h1>
                                        <p className=' text-xs font-thin text-purple-700'>{item._id}</p>
                                    </div>

                                    <div className=' h-[130px] w-[30%] bg-white rounded-lg shadow-md shadow-slate-600 flex flex-col items-center justify-center hover:shadow-none hover:border-[3px] hover:border-purple-700 duration-500 cursor-pointer'>
                                        <h1>Whatsapp Group Link</h1>
                                        <h1 className=' text-4xl font-extrabold text-purple-700'></h1>
                                    </div>

                                    <div className=' h-[130px] w-[30%] bg-white rounded-lg shadow-md shadow-slate-600 flex flex-col items-center justify-center'>
                                        <h1>Tasks completed</h1>
                                        <h1 className=' text-4xl font-extrabold text-purple-700'>33%</h1>
                                    </div>
                                </div>

                                <h1 className=' capitalize font-extrabold text-white font-sans text-lg'>Practical information</h1>
                                <div className=' w-full flex items-center justify-between'>
                                    <div className=' w-[45%] bg-gradient-to-r from-purple-400 to-purple-200 px-6 py-2 rounded-lg flex items-center justify-between'>
                                        <div>
                                            <h1 className=' text-purple-900 font-extrabold'>List of available assignments</h1>
                                            <button className=' bg-purple-700 text-white px-6 py-1 rounded-full duration-500 hover:bg-purple-400 hover:border-2 hover:border-purple-700'>View</button>
                                        </div>

                                        <div className=" w-[45%]">
                                            <img src={logo} className="" alt='kwara state university logo' />
                                        </div>
                                    </div>
                                    <div className=' w-[45%] bg-gradient-to-r from-purple-400 to-purple-200 px-6 py-2 rounded-lg flex items-center justify-between'>
                                        <div>
                                            <h1 className=' text-purple-900 font-extrabold'>List of completed assignments</h1>
                                            <button className=' bg-purple-700 text-white px-6 py-1 rounded-full duration-500 hover:bg-purple-400 hover:border-2 hover:border-purple-700'>View</button>
                                        </div>

                                        <div className=" w-[45%]">
                                            <img src={logo} className="" alt='kwara state university logo' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' w-[30%] '>
                                <h1 className=' capitalize font-extrabold text-white font-sans text-lg mb-4'>Assignments</h1>
                                <div className='max-h-[400px] overflow-scroll'>
                                    {
                                        assignment.map((work, index) => (
                                            <div className=' w-full bg-white rounded-lg px-4 py-2 mb-6' key={index}>
                                                <h1 className=' font-semibold'>{work.subject}</h1>
                                                <p className=' font-extrathin text-xs mb-4'>{work.question}</p>
                                                <p className="mb-4 italic text-red-500 font-extrathin text-xs">This assignment was posted on: {work.updatedAt}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile
