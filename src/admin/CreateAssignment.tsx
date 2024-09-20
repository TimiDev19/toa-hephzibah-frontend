import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { useState } from 'react'

const CreateAssignment = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        subject: " ",

        question: "",

    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const endpoint = 'https://toa-hephzibah-backend.onrender.com/api/assignments';

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
                navigate("/assignments")
            } else {
                console.error('Failed to submit form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className=" h-[100vh] w-[100vw] home-bg flex items-center justify-center">
            <form onSubmit={handleSubmit} action="" className=' w-[90%] bg-white px-4 py-6 sm:w-[50%] md:w-[40%] rounded-lg'>
                <img src={logo} alt="" className=' w-[200px] m-auto' />
                <div className=" max-w-fit mb-4">
                    <h1 className=" text-2xl font-semibold">Create Assignment</h1>
                    <div className=" h-[3px] w-[33%] bg-green-700"></div>
                </div>

                <div className=' flex flex-col items-center justify-between'>
                    <div className=' w-full'>
                        <label htmlFor="name" className=" block">Subject:</label>
                        <input
                            required
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=' w-full'>
                        <label htmlFor="name" className=" block">Question:</label>
                        <input
                            required
                            type="text"
                            id="question"
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>
                </div>

                <Link to={'/assignments'} className=' text-blue-500 my-3'>Cancel</Link>

                <button type="submit" className=" block m-auto w-full text-center bg-purple-700 hover:bg-purple-400 duration-500 py-1 text-white mb-4">Create New Assignment</button>

            </form>
        </div>
    )
}

export default CreateAssignment
