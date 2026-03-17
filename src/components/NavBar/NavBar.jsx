import React, { useState } from "react";
import Link from "./Link";
import { CircleX, Menu } from "lucide-react";

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const links = navigationData.map((route) => <Link key={route.id} route={route}></Link>);

    return (
        <nav className="flex justify-between items-center mx-6 mt-4">
            <span onClick={() => setOpen(!open)} className="flex items-center">
                {open ? <CircleX className="md:hidden"></CircleX> : <Menu className="md:hidden"></Menu>}

                {
                    <ul className={`md:hidden absolute duration-1000 bg-amber-300 p-2 rounded-2xl z-10 text-black ${open ? 'top-13' : '-top-40'}`}>
                        {links}
                    </ul>
                }
                <h3 className="ml-4 btn btn-ghost text-xl">My Navbar</h3>
            </span>
            <ul className="hidden md:flex">{links}</ul>

            {/* <ul className="flex"> 
                {
                    navigationData.map(route => <li className='mr-10 '><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className="flex">
                <li className='mr-10 '><a href="/">Home</a></li>
                <li className='mr-10 '><a href="/about">About</a></li>
                <li className='mr-10 '><a href="/blog">Blog</a></li>
            </ul> */}
            <button className="btn">Sign In</button>
        </nav>
    );
};

export default NavBar;
