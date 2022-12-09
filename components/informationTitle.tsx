import SubTitle from './subtitle'
import {InformationTitle} from '../module/title'

export default function InformationTitleComponent(informationProps: InformationTitle) {
		return (
			<div className="w-72">
					<h2 className="font-bold text-2xl">{informationProps.name}</h2>
						<section className="mt-3">
						{informationProps.subTitle.map((subTitle, index1) => {
							return <SubTitle key={index1} {...subTitle} />
						})}
						</section>
			</div>
		)
}
