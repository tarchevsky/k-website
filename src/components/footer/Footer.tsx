import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='footer flex flex-col gap-0 cont pt-16 pb-8'>
			<Link href='https://guild.moscow'>
				Василий Козловский / Официальный сайт
			</Link>
			<div>Все права защищены</div>
		</footer>
	)
}

export default Footer
