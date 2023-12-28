import { HEADER_LINKS } from '@utils/config'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaFolder, FaGithub, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Header() {
	const { pathname } = useRouter()
	const isInPath = (path: string) => pathname === path

	return (
		<header className='flex justify-between items-center gap-4 py-4 bg-white bg-opacity-60 backdrop-blur-md  '>
			<Link
				href='/'
				className='rounded-md bg-white text-gray-800 py-2 px-3 font-semibold active:scale-95 transition-all whitespace-nowrap'
			>
			<img src='/avatar.png' alt='icon' className='w-10 h-10' />
			</Link>
			<nav className=' flex gap-4'>
				{HEADER_LINKS.map((link, index) => (
					<Link
						key={link.name + index}
						href={link.path}
						className={`px-3 py-2 capitalize font-medium hover:bg-gray-100 rounded-lg hover:text-black transition-all active:scale-95 ${
							isInPath(link.path) ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
						}`}
					>
						{link.name}
						
						{/* <IconContext.Provider value={{ size: "1.5em"}}>
								<div>
									<FaGithub />
								</div>
								</IconContext.Provider> */}
					</Link>
				))}
			</nav>

			<div className='flex gap-1'></div>
		</header>
	)
}
