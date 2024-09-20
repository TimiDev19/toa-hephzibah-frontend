import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp'

interface Assignment {
    _id: string;
    subject: string;
    question: string;
    coachingType: string;
}

const EditAssignment = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [item, setItem] = useState<Assignment | null>(null);
    const [formData, setFormData] = useState<Assignment | null>(null);

    useEffect(() => {
        // Fetch existing data
        fetch(`https://toa-hephzibah-backend.onrender.com/api/assignment/${id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data);
                setFormData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            fetch(`https://toa-hephzibah-backend.onrender.com/api/assignment/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(updatedData => {
                    console.log('Data updated:', updatedData);
                    navigate(`/assignments`);
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

                <div className=" w-full flex flex-col items-center justify-between">
                    <div className=" w-full">
                        <label htmlFor="name" className=" block">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                    <div className=" w-full">
                        <label htmlFor="name" className=" block">Question:</label>
                        <input
                            type="text"
                            id="question"
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            required
                            className=" focus:outline-none border border-black mb-4 w-full px-4 py-1"
                        />
                    </div>

                </div>

                <button type="submit" className=" block m-auto w-full text-center bg-purple-700 py-1 text-white mb-4">Save Changes</button>
            </form>
        </div>
    )
}

export default EditAssignment
