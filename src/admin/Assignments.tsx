import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns';

interface Assignment {
    _id: string;
    subject: string;
    question: string;
    updatedAt: string;
}

const Assignments = () => {
    const [assignment, setAssignment] = useState<Assignment[]>([]);
    useEffect(() => {
        fetch("https://toa-hephzibah-backend.onrender.com/api/assignment").then(
            response => response.json()
        ).then(
            data => {
                const formattedData = data.map((assignment: any) => ({
                    ...assignment,
                    updatedAt: format(assignment.updatedAt, 'dd-MM-yyyy')
                }));

                setAssignment(formattedData);
            }
        ).catch((error) => console.error('Error fetching courses:', error));
    }, [])

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`https://toa-hephzibah-backend.onrender.com/api/assignment/${id}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                // Remove the deleted item from the state
                setAssignment(assignment.filter(assignment => assignment._id !== id));
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            alert('An error occurred while deleting the item.');
            console.error(error);
        }

    };

    if (!assignment) return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className="flex flex-col items-center text-center rounded-md justify-center h-[300px] w-[300px] bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    )

    return (
        <div className=" h-[100vh] w-[100vw] home-bg flex items-center justify-center">


            <div className=" w-full h-[90%] overflow-scroll p-4">
                <div className=" mx-auto max-w-[85%] p-3">
                    <Link to={'/createassignment'} className=" text-white p-2 rounded-full mb4 bg-purple-500 hover:bg-purple-300 duration-300 mr-4"> + Create Assignment</Link>
                    <Link to={'/admin'} className=" text-white py-2 px-4 rounded-full mb4 bg-purple-500 hover:bg-purple-300 duration-300">Back</Link>
                </div>
                {
                    assignment.map((work, index) => (
                        <div key={index} className=" mx-auto max-w-[85%] p-3 bg-white rounded-md mb-6">
                            <h1 className=" text-xl font-bold">{work.subject}</h1>
                            <p>{work.question}</p>
                            <p className="mb-4 italic text-slate-500 text-sm">This assignment was posted on: {work.updatedAt}</p>
                            <Link to={`/editassignment/${work._id}`} className=" text-white mb-4 mr-4 bg-blue-400 hover:bg-blue-200 duration-500  p-3 rounded-full">Edit Assignment</Link>
                            <button onClick={() => handleDelete(work._id)} className=" text-white bg-red-500 hover:bg-red-300 duration-500 rounded-lg p-3">Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Assignments
