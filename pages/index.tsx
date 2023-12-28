import Page from '@layouts/Page'
import { getPartialContent } from '@utils/content'
import TopArticles from '@components/TopArticles'
import Banner from '@components/Banner'
import Recomendator from '@components/Recomendator'
import { Content } from '@content/types'
import { getFullContent } from '@utils/content'
import { FullContent } from '@content/types'
import NoteContent from '@components/NoteContent'
import Collapsable from '@components/Collapsable'
import { MDXRemote } from 'next-mdx-remote'
import { CH } from '@code-hike/mdx/components'
import { FaFolder, FaGithub, FaLink } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from 'next/link'


interface Props {
	articles: Content[],
	notes: FullContent[],
	snippets: FullContent[]
}

export default function Home({ articles, notes, snippets }: Props) {
	return (
		<Page title='' description='' footer>
			<Banner
				title='fullsnacker'
				description='full-stack developer'
			/>

			<div className='grid gap-8'>
				<TopArticles articles={articles} />
				{/* <Recomendator /> */}
			</div>
			
			{/* GithubRepos */}
			<h2 className='font-extrabold md:text-4xl text-3xl text-gray-800'>Proyectos</h2>
			<div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6'>
				<div className='grid gap-6 items-center border-solid border borde-gray-800 rounded-xl hover:bg-gray-50 p-4 transition-all hover:-translate-y-1'>
					<div className='flex justify-between items-center gap-2'>
						<h2 className='text-gray-800 font-semibold md:text-xl text-lg capitalize'>{'App React de Clima'}</h2>
						<div className='flex items-center text-gray-800'>
						<a
								href={'https://react-weather-app-dlfp.vercel.app/'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1em"}}>
								<div>
									<FaLink />
								</div>
								</IconContext.Provider>
							</a>
							<a
								href={'https://github.com/fullsnacker/react-weather-app'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1.5em"}}>
								<div>
									<FaGithub />
								</div>
								</IconContext.Provider>
							</a>
						</div>
					</div>
					<p className='text-gray-600'>{'App de React utilizando RapidApi para pronosticar el clima en todo el mundo!'}</p>
					<div className='flex gap-1.5 pb-2'>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>React</span>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>RapidApi</span>
					</div>
				</div>




				<div className='grid gap-6 items-center border-solid border borde-gray-800 rounded-xl hover:bg-gray-50 p-4 transition-all hover:-translate-y-1'>
					<div className='flex justify-between items-center gap-2'>
						<h2 className='text-gray-800 font-semibold md:text-xl text-lg capitalize'>{'Challenge de MercadoLibre'}</h2>
						<div className='flex items-center text-gray-800'>
						<a
								href={'https://meli-challenge-omega.vercel.app/'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1em"}}>
								<div>
									<FaLink />
								</div>
								</IconContext.Provider>
							</a>
							<a
								href={'https://github.com/fullsnacker/meli-challenge'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1.5em"}}>
								<div>
									<FaGithub />
								</div>
								</IconContext.Provider>
							</a>
						</div>
					</div>
					<p className='text-gray-600'>{'Resolveremos un challenge de la empresa MercadoLibre que toman para ingresar a trabajar con ellos.'}</p>
					<div className='flex gap-1.5 pb-2'>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>React</span>
					</div>
				</div>



				<div className='grid gap-6 items-center border-solid border borde-gray-800 rounded-xl hover:bg-gray-50 p-4 transition-all hover:-translate-y-1'>
					<div className='flex justify-between items-center gap-2'>
						<h2 className='text-gray-800 font-semibold md:text-xl text-lg capitalize'>{'App Mern desde 0'}</h2>
						<div className='flex items-center text-gray-800'>
							<a
								href={'https://github.com/fullsnacker/mern-base'}
								target='_blank'
								rel='noopener noreferrer'
								className='p-1 text-gray-700 hover:bg-gray-200 rounded-lg active:scale-95 transition-all'
							>								
								<IconContext.Provider value={{ size: "1.5em"}}>
								<div>
									<FaGithub />
								</div>
								</IconContext.Provider>
							</a>
						</div>
					</div>
					<p className='text-gray-600'>{'App Full-Stack para llevar el registro de nuestras rutinas en el gimnasio. Incluye el Front en React.js y el Back en Node.js, Express.js y MongoDB.'}</p>
					<div className='flex gap-1.5 pb-2'>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>React</span>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>Mongo</span>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>Express</span>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>Node</span>
					</div>
				</div>				
				</div>

				
				<Link
				href='https://github.com/fullsnacker'
				className='font-medium flex gap-1 justify-center hover:gap-2.5 items-center transition-all w-44 rounded-xl hover:bg-gray-100 py-2 active:scale-95'
			>
				<p className=''>Ver todos</p>
				<img src='/icons/arrow-narrow.svg' alt='' className='w-6 h-6 rotate-180 ' />
			</Link>
		</Page>
	)
}

export const getStaticProps = async () => {
	const articles = getPartialContent({ type: 'articles' })
	const notes = await getFullContent({ type: 'notes' })
	const snippets = await getFullContent({ type: 'snippets' })

	return {
		props: {
			articles,
			notes,
			snippets
		},
	}
}
