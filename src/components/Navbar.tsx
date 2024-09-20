import { Link } from 'react-router-dom';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-black text-2xl font-bold">Hustler's Academy</Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger className=' cursor-pointer'>
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Oluwatimilehin</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Courses</DropdownMenuItem>
                                <DropdownMenuItem>Quizzes</DropdownMenuItem>
                                <DropdownMenuItem>Grades</DropdownMenuItem>
                                <DropdownMenuItem>Payments</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="hidden md:block px-5">
                        <Menubar>
                        <MenubarMenu>
                                <MenubarTrigger ><Link to={'/'}>Home</Link></MenubarTrigger>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger >Profile</MenubarTrigger>
                                <MenubarContent>
                                    {/* <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem> */}

                                    <li className=' px-3 py-1 font-bold rounded-md list-none'>
                                        <h1>Oluwatimilehin</h1>
                                    </li>

                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={"/profile"} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>Edit Details</h1>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={""} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>Log Out <MenubarShortcut>⌘T</MenubarShortcut></h1>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger >Courses</MenubarTrigger>
                                <MenubarContent>
                                    {/* <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem> */}
                                    <MenubarItem>
                                        <Link to={""} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>CSC205</h1>
                                                <p>Introduction to Python - a subtle introduction to Python</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={""} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>CSC205</h1>
                                                <p>Introduction to Python - a subtle introduction to Python</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={""} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>CSC205</h1>
                                                <p>Introduction to Python - a subtle introduction to Python</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger >Quizzes</MenubarTrigger>
                                <MenubarContent>
                                    {/* <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem> */}
                                    <MenubarItem>
                                        <Link to={"/quiz"} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>CSC205</h1>
                                                <p>Introduction to Python - a subtle introduction to Python</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={"/quiz"} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>CSC205</h1>
                                                <p>Introduction to Python - a subtle introduction to Python</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={"/quiz"} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>CSC205</h1>
                                                <p>Introduction to Python - a subtle introduction to Python</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger >Grades</MenubarTrigger>
                                <MenubarContent>
                                    {/* <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem> */}
                                    <MenubarItem>
                                        <Link to='/results'>
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>General Results</h1>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                    {/* <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={""} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>Quiz Grades</h1>
                                            </li>
                                        </Link>
                                    </MenubarItem> */}
                                </MenubarContent>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger >Payments</MenubarTrigger>
                                <MenubarContent>
                                    {/* <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem> */}
                                    <MenubarItem>
                                        <Link to={""} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>School Fees</h1>
                                                <p>NGN 252,000</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Link to={""} >
                                            <li className=' hover:bg-slate-100 duration-200 px-3 py-1 rounded-md list-none'>
                                                <h1>CAC VTE</h1>
                                                <p>NGN 15,000</p>
                                            </li>
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
