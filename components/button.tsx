interface ButtonProps {
	name: string 
}

export default function ButtonComponent(buttonProps: ButtonProps): JSX.Element {
	return (
		<button className="bg-gray-600 rounded p-3 mt-3 w-80 hover:bg-gray-500">
			{buttonProps.name}
		</button>
	)
}
