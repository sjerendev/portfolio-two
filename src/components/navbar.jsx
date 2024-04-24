"use client";

import Link from 'next/link';
import { useState } from 'react';

	const links = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' },
		{ title: 'Portfolio', path: '/portfolio' },
		{ title: 'Contact', path: '/contact' },
	];

const Navbar = () => {

	const [open, setOpen] = useState(false);

	return (
		<div className='flex items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
			{/*LOGO */}
			<div className="">
				<Link href='/'>LOGO</Link>
			</div>
			<div className="">
				{/* Menu button */}
				<button className="relative z-50 flex flex-col justify-between w-10 h-8" onClick={(()=>setOpen(!open))}>
					<div className="w-14 h-0.5 bg-white rounded"></div>
					<div className="w-10 h-0.5 bg-white rounded"></div>
					<div className="w-6 h-0.5 bg-white rounded"></div>
				</button>
				{/* Menu list */}
				{open && (
				<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black">
					{links.map(link=>(
						<Link key={link.title} href={link.path}>{link.title}</Link>
					))}
				</div>
				)}
			</div>
		</div>
	)
}

export default Navbar;
