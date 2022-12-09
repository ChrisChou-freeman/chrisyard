import {IconNameLink} from '../module/title'

export default function SubTitle(prop: IconNameLink): JSX.Element {
	return prop.isLink	
		? (<a className="mt-1 block underline" href={prop.link}>{prop.name}</a>)
		: (<p className="mt-1">{prop.name}</p>)
}
