import Link from 'next/link'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header className='py-8 gap-0'>
			<Link href='/' className={'uppercase'}>
				Василий Козловский
				<br /> Художник / Проекты
			</Link>
		</header>
	)
}

export default Header
