import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProductButton from '../components/button'

const buttonList: string[] = [
	'🎧 White Noise(macOS app)',
	'✅ Task Manger(Developing)'
]

function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
			<div className="flex flex-col items-center justify-center mt-2">
				{buttonList.map((name, index) => {
					return <ProductButton name={name} key={index}/>
				})}
			</div>
    </Layout>
  );
}

export default Home
