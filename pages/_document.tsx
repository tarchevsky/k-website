import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head />
			<body>
				<div
					style={{ background: 'url(pattern.svg) center center/cover repeat' }}
				>
					<Main />
				</div>

				<NextScript />
			</body>
		</Html>
	)
}
