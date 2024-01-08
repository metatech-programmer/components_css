function TypographyComponents(props) {
	const { hijo, styleTitulo, titulo, link_font, link_img } = props;

	return (
		<div className={hijo}>
			<h2 className={styleTitulo}>{titulo}</h2>
			<div
				className="mx-4 border rounded-xl p-4 h-44 md:h-72"
				style={{ backgroundImage: `url(${link_img})`, backgroundSize: "cover" }}
			/>
			<p className="text-xs text-center text-balance ">
				Go to the typographies page,
				<a
					href={link_font}
					className="underline underline-offset-2 text-sky-400 hover:text-sky-700"
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					Just Here{" "}
				</a>
			</p>
		</div>
	);
}

export default TypographyComponents;
