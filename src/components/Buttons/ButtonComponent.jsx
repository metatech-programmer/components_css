function ButtonComponents(props) {
	const { estilo } = props;

	// biome-ignore lint/a11y/useButtonType: <explanation>
return  <button className={estilo}>Click Here</button>;
}

export default ButtonComponents;
