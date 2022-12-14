interface ButtonProps {
	name: string 
}

export default function ProductButton(buttonProps: ButtonProps): JSX.Element {
	return (
		<button className="dark:bg-gray-600 bg-gray-300 rounded p-3 mt-3 w-80 hover:bg-gray-500">
			{buttonProps.name}
		</button>
	)
}
