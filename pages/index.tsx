import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ProductButton from '../components/button'
import InformationTitleComponent from '../components/informationTitle'
import {InformationTitle} from '../module/title'
import {getCurrentYear} from '../lib/tools'

const buttonList: string[] = [
	'🎧 Pomodoro and Sounds(macOS app)',
	'✅ Task Manger(macOS app)'
]

const informationTitle: InformationTitle[] = [
	{
		name: 'About me',
		subTitle: [
			{name: `👨male, ${getCurrentYear() - 1995}`, icon: '', link: '', isLink: false},
			{name: '🇨🇳from China GanZhou', icon: '', link: '', isLink: false},
			{name: '😿freelancer(nearly homeless)', icon: '', link: '', isLink: false},
			{name: '👨‍💻programmer(i guess)', icon: '', link: '', isLink: false},
		]
	},
	{
		name: 'My Products',
		subTitle: [
			{name: '🎧 DeepFocus', icon: '', link: '/', isLink: true},
			{name: '✅ PMBoard', icon: '', link: '/', isLink: true}
		]
	},
	{
		name: 'Contact Me',
		subTitle: [
			{name: '📮Email', icon: '', link: 'mailto:ChrisChouFreeMan@hotmail.com', isLink: true},
			{name: '🐦Twitter', icon: '', link: 'https://twitter.com/ChrisWantBeFree', isLink: true},
			{name: '💾Github', icon: '', link: 'https://github.com/ChrisChou-freeman', isLink: true}
		]
	}
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
			<div className="flex flex-row justify-center text-left pt-32">
			{informationTitle.map((title, index) => {
				return <InformationTitleComponent key={index} {...title}/>
			})}
			</div>
    </Layout>
  )
}

export default Home
