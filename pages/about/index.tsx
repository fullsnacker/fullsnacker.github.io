import Page from '@layouts/Page'
import Banner from '@components/Banner'
import {FaAmazon, FaDatabase, FaGithub, FaNode, FaReact } from "react-icons/fa";
import { SiGithubactions, SiJavascript, SiJest, SiNextdotjs, SiTypescript, SiVite } from "react-icons/si";
import { IconContext } from "react-icons";

export default function About() {
	return (
		<Page description='' title="fullsnacker | About">
			<Banner
				title='Acerca de mi'
				description={``}
			/>
			<section title='About' className='max-w-4xl'>
				<br />
				<p className='text-gray-600 font-medium md:text-xl text-lg'>
					Soy un desarrollador Full-Stack con más de 4 años de experiencia utilizando el stack MERN.
					<br />
					<br />
					Me considero un autodidacta, me encanta adquirir nuevos conocimientos y probar nuevas tecnologías.
					<br />
					<br />
					Actualmente incursionando en Next.js.
					<br />
					<br />
					Amo aprender nuevas tecnologías y crear nuevos (Y a veces locos) proyectos!
					<br />
					<br />
					Hablo nativamente español, pero también ingles y japones fluidamente.
					<br />
					<br />
				</p>
			</section>

			<section title='Descarga' className='max-w-4xl'>
			<h3 className='font-extrabold md:text-4xl text-3xl text-gray-700'>Experiencia y Estudios</h3>
			<br />
				<div className='flex items-center gap-1.5'>
				<a
					target='_blank'
					href='./Juan-Manuel-Garcia-cv.pdf'
					className='px-3 py-2 rounded-lg uppercase bg-gray-800 hover:bg-white hover:text-black border-2 border-gray-800 text-white font-semibold transition-all active:scale-95'
				>
					<p>Descargar CV</p>
				</a>
				</div>
				<div className='grid gap-16 pt-12'>
					<article className='md:hover:bg-gray-100 rounded-xl md:p-6'>
						<div className='md:flex items-center justify-between'>
							<h1 className='font-bold text-gray-700 md:text-3xl text-2xl'>Analista de Sistemas</h1>
							<h2 className='font-bold text-gray-600 md:text-1xl text-1xl'>O.R.T.</h2>
							<span className='font-bold text-gray-600 text-base'>2020-2022</span>
						</div>
						<p className='mt-6 rounded-md bg-gray-400 w-36 py-0.5 grid place-items-center md:text-sm text-xs font-semibold uppercase text-white'>
							Detalles
						</p>
						<ul className='pt-2 pl-4 font-semibold text-gray-700 md:text-lg text-base'>
							<li className='list-disc'>
								<p>Capacitado para desempeñarse en diferentes roles.</p>
							</li>	
							<li className='list-disc'>
								<p>Se desempeña como profesional en variados ámbitos: empresas, industrias y organizaciones civiles.</p>
							</li>		
						</ul>
					</article>

					<article className='md:hover:bg-gray-100 rounded-xl md:p-6'>
						<div className='md:flex items-center justify-between'>
							<h1 className='font-bold text-gray-700 md:text-3xl text-2xl'>Desarrollador FullStack</h1>
							<h2 className='font-bold text-gray-600 md:text-1xl text-1xl'>ArtdeCode</h2>
							<span className='font-bold text-gray-600 text-base'>2020-2023</span>
						</div>
						<p className='mt-6 rounded-md bg-gray-400 w-36 py-0.5 grid place-items-center md:text-sm text-xs font-semibold uppercase text-white'>
							Detalles
						</p>
						<ul className='pt-2 pl-4 font-semibold text-gray-700 md:text-lg text-base'>
							<li className='list-disc'>
								<p>Implementación de sistema de pagos a traves de plataformas de pago mas utilizadas.</p>
							</li>	
							<li className='list-disc'>
								<p>Desarrollo de nuevas funcionalidades en los productos Innova.</p>
							</li>
							<li className='list-disc'>
								<p>Automatizacion de configuraciones para nuevos clientes.</p>
							</li>	
							<li className='list-disc'>
								<p>Desarrollo full stack de las aplicaciones de Innova.</p>
							</li>		
						</ul>
					</article>

					<article className='md:hover:bg-gray-100 rounded-xl md:p-6'>
						<div className='md:flex items-center justify-between'>
							<h1 className='font-bold text-gray-700 md:text-3xl text-2xl'>Desarrollador Mobile</h1>
							<h2 className='font-bold text-gray-600 md:text-1xl text-1xl'>Roemmers</h2>
							<span className='font-bold text-gray-600 text-base'>2019-2020</span>
						</div>
						<p className='mt-6 rounded-md bg-gray-400 w-36 py-0.5 grid place-items-center md:text-sm text-xs font-semibold uppercase text-white'>
							Detalles
						</p>
						<ul className='pt-2 pl-4 font-semibold text-gray-700 md:text-lg text-base'>
							<li className='list-disc'>
								<p>Desarrollo de aplicacion de realidad aumentada publicada actualmente en los store de Android y iOS en Unity utilizando Vuforia.</p>
							</li>	
							<li className='list-disc'>
								<p>Desarrollo de aplicacion mobile de uso medico pediatrico en Flutter.</p>
							</li>
						</ul>
					</article>

					<article className='md:hover:bg-gray-100 rounded-xl md:p-6'>
						<div className='md:flex items-center justify-between'>
							<h1 className='font-bold text-gray-700 md:text-3xl text-2xl'>Desarrollador Mobile</h1>
							<h2 className='font-bold text-gray-600 md:text-1xl text-1xl'>Freelance</h2>
							<span className='font-bold text-gray-600 text-base'>2013-2019</span>
						</div>
						<p className='mt-6 rounded-md bg-gray-400 w-36 py-0.5 grid place-items-center md:text-sm text-xs font-semibold uppercase text-white'>
							Detalles
						</p>
						<ul className='pt-2 pl-4 font-semibold text-gray-700 md:text-lg text-base'>
							<li className='list-disc'>
								<p>Desarrollo de videojuegos para clientes freelance en plataformas como UpWork y Freelancer.</p>
							</li>	
							<li className='list-disc'>
								<p>Desarrollo assets para desarrollo de videojuegos.</p>
							</li>
						</ul>
					</article>
				</div>
			</section>

			<section title='Tecnologias Principales'>
			<h3 className='font-extrabold md:text-4xl text-3xl text-gray-700'>Tecnologias Principales</h3>
			<br />
				<div className='flex gap-12 pt-4 flex-wrap items-center text-gray-500'>
					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaGithub />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
							Github
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaReact />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								React
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<FaNode />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								NodeJs
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"16px"}}}>
							<div>
								<FaDatabase />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								MongoDB
						</span>
					</div>

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"25px"}}}>
							<div>
								<FaAmazon />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								Amazon WS
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<SiJest /> 
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								Jest
						</span>
					</div>

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"24px"}}}>
							<div>
								<SiGithubactions />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								Github Actions
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"16px"}}}>
							<div>
								<SiJavascript />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								Javascript
						</span>
					</div>

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"16px"}}}>
							<div>
								<SiTypescript />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								Typescript
						</span>
					</div>		

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<SiNextdotjs />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								NextJs
						</span>
					</div>

					<div className='grid gap-3 hover:text-gray-800'>
						<IconContext.Provider value={{ size: "2em",style:{marginLeft:"8px"}}}>
							<div>
								<SiVite />
							</div>
						</IconContext.Provider>
						<span className={`px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold grid place-items-center`}>
								Vite
						</span>
					</div>	
				</div>

		
			</section>
		</Page>
	)

}
