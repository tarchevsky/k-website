import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import MapContent from '@/components/mapContent/MapContent'
import projectsData from '@/components/mapContent/projectsData'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<FadeIn>
				<MapContent projectsData={projectsData} />
			</FadeIn>
		</>
	)
}

export default HomePage
