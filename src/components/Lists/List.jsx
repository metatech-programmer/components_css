const ListComponents = () => {
	const boxStyle = {
		padre:
			"grid grid-cols-1 border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll",
		hijo: "h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border",
		titulo:
			"underline font-semibold underline-offset-4 text-amber-200 p-2 text-start",
		subtitulo: "text-center my-5 md:mt-20 leading-3 font-bold",
	};
	const textos = {
		titulo_texto: {
			uno: "List One",
			dos: "List Two",
			tres: "List Three",
			cuatro: "List Four",
			cinco: "List Five",
			seis: "List Six",
		},
	};

	return (
		<div className="flex flex-col gap-y-10">
			<div className={boxStyle.padre}>
				<h2 className={boxStyle.subtitulo}>Normal Lists:</h2>
				{/* List 1 */}
				<div className={boxStyle.hijo}>
					<h2 className={boxStyle.titulo}>{textos.titulo_texto.uno}</h2>
					<div className="mx-4 border rounded-xl p-4"/>
					<p className="text-xs text-center text-balance ">
						copy code{" "}
						<a
							href="#www"
							className="underline underline-offset-2 text-sky-400 hover:text-sky-700"
						>
							{" "}
							Just Here{" "}
						</a>
					</p>
				</div>
			</div>
			{/* ///////////////////////////////////// */}
		</div>
	);
};
export default ListComponents;
