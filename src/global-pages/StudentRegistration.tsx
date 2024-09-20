import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { useState } from 'react'

const StudentRegistration = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: " ",

        lastName: "",

        coachingType: " ",


        phoneNumber: " ",


        dateOfBirth: " ",

        sex: " ",

        stateOfOrign: " ",

    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const endpoint = 'https://toa-hephzibah-backend.onrender.com/api/products';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Form submitted successfully:', jsonResponse);
                navigate('/')
            } else {
                console.error('Failed to submit form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div className=' h-[100vh] w-[100vw] flex items-center justify-center home-bg'>

            <form onSubmit={handleSubmit} action="" className=' w-[90%] bg-white px-4 py-6 sm:w-[50%] md:w-[40%] rounded-lg'>
                <img src={logo} alt="" className=' w-[200px] m-auto' />
                <div className=" max-w-fit mb-4">
                    <h1 className=" text-2xl font-semibold">Register</h1>
                    <div className=" h-[3px] w-[33%] bg-green-700"></div>
                </div>

                <div className=' flex flex-col sm:flex-row items-center justify-between'>
                    <div className=' sm:w-[45%]'>
                        <label htmlFor="name" className=" block">First Name:</label>
                        <input
                            required
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=' sm:w-[45%]'>
                        <label htmlFor="name" className=" block">Last Name:</label>
                        <input
                            required
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>
                </div>


                <div className=' flex flex-col sm:flex-row items-center justify-between'>
                    <div className=' sm:w-[45%]'>
                        <label htmlFor="name" className=" block">Phone Number:</label>
                        <input
                            required
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=' sm:w-[45%]'>
                        <label htmlFor="name" className=" block">Date Of Birth:</label>
                        <input
                            required
                            type="text"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>
                </div>


                <div className=' flex flex-col sm:flex-row items-center justify-between'>
                    <div className=' sm:w-[45%]'>
                        <label htmlFor="name" className=" block">Sex / Gender:</label>
                        <input
                            required
                            type="text"
                            id="sex"
                            name="sex"
                            value={formData.sex}
                            onChange={handleChange}
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=' sm:w-[45%]'>
                        <label htmlFor="name" className=" block">State of origin:</label>
                        <input
                            required
                            type="text"
                            id="stateOfOrign"
                            name="stateOfOrign"
                            value={formData.stateOfOrign}
                            onChange={handleChange}
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


                <button type="submit" className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Submit</button>

            </form>

        </div>
    )
}

export default StudentRegistration
