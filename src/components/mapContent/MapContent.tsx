import ImgText from '@/components/imgText/ImgText'
import { MapContentProps } from '@/types'

const MapContent = ({ projectsData }: MapContentProps) => {
	return (
		<div className='grid gap-16'>
			{projectsData.map((project, index) => (
				<ImgText
					key={index}
					link={project.link}
					src={project.src}
					alt={project.alt}
					description={project.description}
					projectName={project.projectName}
				/>
			))}
		</div>
	)
}

export default MapContent
