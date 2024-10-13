import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ImgTextProps } from '@/types'
import FadeIn from '@/components/fadeIn/FadeIn'

const ImgText = ({
	link,
	src,
	alt,
	className,
	description,
	projectName
}: ImgTextProps) => {
	return (
		<FadeIn>
			<Link href={link} className='block relative w-full group'>
				<Image
					src={src}
					alt={alt}
					width={1960}
					height={650}
					className={cn(
						className,
						'w-full transition ease-in brightness-50 xl:brightness-100 xl:group-hover:brightness-50'
					)}
				/>
				{description && (
					<p
						className={cn(
							'cont hidden md:block absolute top-4 xl:top-10 xl:opacity-0 text-sm md:text-xl xl:text-2xl transition delay-100 ease-in xl:group-hover:opacity-100'
						)}
					>
						{description}
					</p>
				)}
				<h3 className='absolute -bottom-11 xl:-bottom-11 left-[16px] sm:left-[40px] md:left-[100px] xl:left-[200px] text-[20px] md:text-[20px] xl:text-[20px]'>
					{projectName}
				</h3>
			</Link>
		</FadeIn>
	)
}

export default ImgText
