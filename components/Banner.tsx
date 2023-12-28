interface Props {
	title: string
	description: string
	illustration?: 'default' | 'glasses'
}

export default function Banner({ title, description, illustration = 'default' }: Props) {
	return (
		<section className='bg-gray-800 w-full rounded-2xl h-36 flex items-center gap-10 px-4'>
			<div className='w-40 h-full relative'>
				<img src='/avatar-torso.png' className='absolute bottom-0 left-1' alt='' />
			</div>
			<div className='flex flex-col gap-1 text-white'>
				<h2 className='text-3xl font-bold'>{title}</h2>
				<p className='text-gray-300 font-medium '>{description}</p>
			</div>
		</section>
	)
}
