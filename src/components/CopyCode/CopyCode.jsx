function ButtonComponents(props) {
	const { number_code, code } = props;

	const copy_code = async (number_code) => {
		// biome-ignore lint/style/useConst: <explanation>
		let code = document.getElementById(`code_${number_code}`).innerText;
		try {
			await navigator.clipboard.writeText(code);
			alert("Contenido copiado al portapapeles");
		} catch (err) {
			alert("Error al copiar: ", err);
			console.error("Error al copiar: ", err);
		}
	};
	return (
		<>
			<p className="text-xs text-center text-balance ">
				copy code
				<span className="hidden" id={`code_${number_code}`}>
					{code}
				</span>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className="underline underline-offset-2 text-sky-400 hover:text-sky-700 ml-1"
					onClick={() => copy_code(number_code)}
				>
					{" "}
					Just Here{" "}
				</button>
			</p>
		</>
	);
}

export default ButtonComponents;
