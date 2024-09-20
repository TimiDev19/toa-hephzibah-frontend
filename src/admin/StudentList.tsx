import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom";

interface Course {
    _id: string;
    firstName: string;
    lastName: string;
    coachingType: string;
    phoneNumber: string;
    sex: string;
    dateOfBirth: string;

}

const StudentList = () => {
    const [people, setPeople] = useState<Course[]>([]);

    useEffect(() => {
        fetch("https://toa-hephzibah-backend.onrender.com/api/products").then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
                setPeople(data)
            }
        ).catch((error) => console.error('Error fetching courses:', error));
    }, [])

    if (!people) return (
        <div className=" h-[100vh] w-[100vw] flex items-center justify-center home-bg">
            <div className="flex flex-col items-center text-center rounded-md justify-center h-[300px] w-[300px] bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
                <h1>Loading...</h1>
            </div>
        </div>
    )

    return (
        <div className=" home-bg h-[100vh] w-[100vw] flex items-center justify-center">
            <Table className=" w-[70%] bg-white m-auto">
                <TableCaption className=" text-black bg-white py-4">A list of your students. <Link to="/admin" className=" text-blue-600">Back</Link></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <div className=" hidden md:block">
                            <TableHead>Coaching Type</TableHead>
                            <TableHead>Phone Number</TableHead>
                            <TableHead>Sex</TableHead>
                            <TableHead>Date Of Birth</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </div>
                    </TableRow>
                </TableHeader>
                {
                    people.map((student, index) => (
                        <TableBody key={index}>
                            <TableRow>
                                <TableCell className="font-medium">{student.firstName}</TableCell>
                                <TableCell>{student.lastName}</TableCell>
                                <div className=" hidden md:block">
                                    <TableCell>{student.coachingType}</TableCell>
                                    <TableCell>{student.phoneNumber}</TableCell>
                                    <TableCell>{student.sex}</TableCell>
                                    <TableCell>{student.dateOfBirth}</TableCell>
                                    <TableCell>{student._id}</TableCell>
                                </div>
                                <TableCell className="text-right"><Link to={`/studentdetails/${student._id}`} className=" bg-blue-500 px-4 py-2 rounded-2xl text-white">View</Link></TableCell>
                            </TableRow>
                        </TableBody>
                    ))
                }
            </Table>
        </div>
    )
}

export default StudentList
