import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = "Chris's yard"
const name = "Chris"
const hellowMessage = "👋 Welcome to my yard!"
const circleWidth = 122

interface AppProps {
	children: React.ReactNode
}

function Layout(appProps: AppProps): JSX.Element {
	return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="try to build web page with next.js"/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center justify-center">
						<Image
							className="mt-10 rounded-full"
							priority
							src="/images/profile.jpg"
							height={circleWidth}
							width={circleWidth}
							alt=""
						/>
					<h2 className="text-3xl font-bold mt-4">
						<Link href="/">
							{name}
						</Link>
					</h2>
					<h3 className="text-1xl mt-3">{hellowMessage}</h3>
      </header>
      <main>{appProps.children}</main>
    </div>
	);
}

export default Layout
