import React from 'react'
import KnackitLogo from '../assets/LandingMedia/KnackitLogo.png'

export default function NavComponent() {

    const logo = {
        height: '120px',
        width: '120px'
    };

    return (
        <>
            <div>
                <nav
                    className="absolute top-0 left-0 px-0 py-0 bg-transparent text-stone-50 flex  items-center mx-10 my-2 font-semibold">

                    <img src={KnackitLogo} style={logo} alt="abcd" />
                    <ul className="flex space-x-10 px-8 py-4">
                        <li className="mx-3 cursor-pointer  hover:text-blue-400">HOME</li>
                        <li className="mx-3 cursor-pointer  hover:text-blue-400">ABOUT</li>
                        <li className="mx-3 cursor-pointer  hover:text-blue-400">CONTESTS</li>
                        <li className="mx-3 cursor-pointer  hover:text-blue-400">PROBLEMS</li>
                        <li className="mx-3 cursor-pointer  hover:text-blue-400">HELP</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
