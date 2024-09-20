import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.webp'

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

const StudentDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<Item | null>(null);
    const [date, setDate] = useState('');

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`https://toa-hephzibah-backend.onrender.com/api/product/${id}`);
                const data = await response.json();
                const dateString = new Date(data.updatedAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
                setDate(dateString);
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [id]);

    useEffect(() => {
        // Fetch the item details using the id
        fetch(`https://toa-hephzibah-backend.onrender.com/api/product/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching item:', error));
    }, [id]);

    if (!item) return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className="flex flex-col items-center text-center rounded-md justify-center h-[300px] w-[300px] bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    )
    
    return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className=" bg-white px-4 py-4 w-[85%] md:w-[40%]">
                <img src={logo} alt="" className=' w-[200px] m-auto' />
                <div>
                    <h1 className=" text-2xl font-semibold">Student Details</h1>
                    <div className=" h-[3px] w-[33%] bg-green-700"></div>

                    <div className=" w-full flex flex-col md:flex-row sm:items-center justify-between mb-6">
                        <div className=" md:w-[45%]">
                            <h2 className=" text-lg font-bold">First Name:</h2>
                            <h1>{item.firstName}</h1>
                        </div>

                        <div className=" md:w-[45%]">
                            <h2 className=" text-lg font-bold">Last Name:</h2>
                            <h1>{item.lastName}</h1>
                        </div>
                    </div>

                    <div className=" w-full flex flex-col md:flex-row sm:items-center justify-between mb-6">
                        <div className=" md:w-[45%]">
                            <h2 className=" text-lg font-bold">Coaching Type:</h2>
                            <h1>{item.coachingType}</h1>
                        </div>

                        <div className=" md:w-[45%]">
                            <h2 className=" text-lg font-bold">Phone Number:</h2>
                            <h1>{item.phoneNumber}</h1>
                        </div>
                    </div>

                    <div className=" w-full flex flex-col md:flex-row sm:items-center justify-between mb-6">
                        <div className=" md:w-[45%]">
                            <h2 className=" text-lg font-bold">Date Of Birth:</h2>
                            <h1>{date}</h1>
                        </div>

                        <div className=" md:w-[45%]">
                            <h2 className=" text-lg font-bold">Sex / Gender:</h2>
                            <h1>{item.sex}</h1>
                        </div>
                    </div>

                    <div className=" w-[90%] md:w-[45%] mb-6">
                        <h2 className=" text-lg font-bold">State of origin:</h2>
                        <h1>{item.stateOfOrign}</h1>
                    </div>
                    <Link to={`/students`} type="submit" className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Done</Link>
                    <Link to={`/editstudent/${item._id}`} type="submit" className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Edit Details</Link>
                </div>

            </div>
        </div>
    )
}

export default StudentDetails
