import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp'

interface Item {
    _id: string;
    firstName: string;
    lastName: string;
    coachingType: string;
    phoneNumber: string;
    sex: string;
    dateOfBirth: string;
    stateOfOrign: string;
}

const EditStudent = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [item, setItem] = useState<Item | null>(null);
    const [formData, setFormData] = useState<Item | null>(null);
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
        // Fetch existing data
        fetch(`https://toa-hephzibah-backend.onrender.com/api/product/${id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data);
                setFormData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        if (formData) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData) {
            // Send a PUT request to update the data
            fetch(`https://toa-hephzibah-backend.onrender.com/api/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(updatedData => {
                    console.log('Data updated:', updatedData);
                    navigate(`/studentdetails/${id}`);
                })
                .catch(error => console.error('Error updating data:', error));
        }
    };

    if (!formData) return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className="flex flex-col items-center text-center rounded-md justify-center h-[300px] w-[300px] bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    )

    if (!item) return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className="flex flex-col items-center text-center rounded-md justify-center h-[300px] w-[300px] bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    )

    return (
        <div className=" h-[100vh] w-[100vw] home-bg flex items-center justify-center">
            <form onSubmit={handleSubmit} className=' w-[90%] bg-white px-4 py-6 sm:w-[50%] md:w-[40%] rounded-lg'>
                <img src={logo} alt="" className=' w-[200px] m-auto' />
                <div className=" max-w-fit mb-4">
                    <h1 className=" text-2xl font-semibold">Edit Student Details</h1>
                    <div className=" h-[3px] w-[33%] bg-green-700"></div>
                </div>


                <div className=" w-full flex flex-col sm:flex-row md:items-center justify-between">
                    <div className=" md:w-[45%]">
                        <label htmlFor="name" className=" block">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=" md:w-[45%]">
                        <label htmlFor="name" className=" block">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                </div>

                <div className=" w-full flex flex-col sm:flex-row md:items-center justify-between">
                    <div className=" md:w-[45%]">
                        <label htmlFor="name" className=" block">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=" md:w-[45%]">
                        <label htmlFor="name" className=" block">Date Of Birth (cannot be changed):</label>
                        <input
                            type="text"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={date}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                </div>

                <div className=" w-full flex flex-col sm:flex-row md:items-center justify-between">
                    <div className=" md:w-[45%]">
                        <label htmlFor="name" className=" block">Sex / Gender:</label>
                        <input
                            type="text"
                            id="sex"
                            name="sex"
                            value={formData.sex}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=" md:w-[45%]">
                        <label htmlFor="name" className=" block">State of origin:</label>
                        <input
                            type="text"
                            id="stateOfOrign"
                            name="stateOfOrign"
                            value={formData.stateOfOrign}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                </div>

                <label htmlFor="name" className=" block">Coaching Type:</label>
                <select value={formData.coachingType} required name="coachingType" id="coachingType" onChange={handleChange} className=" focus:outline-none border border-black mb-4 w-full px-4 py-1">
                    <option value="">Select your programme</option>
                    <option value="IJMB">IJMB</option>
                    <option value="UTME">UTME</option>
                </select>
                <button type="submit" className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Save Changes</button>
            </form>
        </div>
    )
}

export default EditStudent
