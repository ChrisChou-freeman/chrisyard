import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProductButton from '../components/button'

const buttonList: string[] = [
	'🎧 Pomodoro and Sounds(macOS app)',
	'✅ Task Manger(macOS app)'
]

interface IconNmaeLink {
	name: string;
	icon: string;
	link: string;
	isLink: boolean;
}

interface InformationTitle {
	name: string;
	subTitle: IconNmaeLink[];
}

const informationTitle: InformationTitle[] = [
	{
		name: 'About me',
		subTitle: [
			{name: 'human, male', icon: '', link: '', isLink: false},
			{name: 'from Mars', icon: '', link: '', isLink: false},
			{name: 'freelancer(nearly homeless)', icon: '', link: '', isLink: false},
			{name: 'single not merry(i don\'t want to)', icon: '', link: '', isLink: false}
		]
	},
	{
		name: 'My Products',
		subTitle: [
			{name: 'DeepFocus', icon: '', link: '', isLink: true},
			{name: 'PMBoard', icon: '', link: '', isLink: true}
		]
	},
	{
		name: 'Contact Me',
		subTitle: [
			{name: 'Email', icon: '', link: '', isLink: true},
			{name: 'Twitter', icon: '', link: '', isLink: true},
			{name: 'Github', icon: '', link: '', isLink: true}
		]
	}
];

interface SubTitleProp {
	isLink: boolean;
	name: string;
}

function SubTitle(prop: SubTitleProp): JSX.Element {
	return prop.isLink	
		? (<p className="mt-1 underline">{prop.name}</p>)
		: (<p className="mt-1">{prop.name}</p>)
}

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
				return (
					<div className="w-72" key={index}>
							<h2 className="font-bold text-2xl">{title.name}</h2>
								<section className="mt-3">
								{title.subTitle.map((subTitle, index1) => {
									return <SubTitle isLink={subTitle.isLink} key={index1} name={subTitle.name}/>
								})}
								</section>
					</div>
				)
			})}
			</div>
    </Layout>
  );
}

export default Home
