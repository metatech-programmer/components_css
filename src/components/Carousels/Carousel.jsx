import "./Carousel.css";

const CarouselComponents = () => {
	const boxStyle = {
		padre:
			"grid grid-cols-1 md:grid-cols-2 border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll",
		hijo: "h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border",
		titulo:
			"underline font-semibold underline-offset-4 text-amber-200 p-2 text-start",
		subtitulo: "text-center my-5 md:mt-20 leading-3 font-bold",
	};
	const textos = {
		titulo_texto: {
			uno: "Carousel One :",
			dos: "Carousel Two :",
			tres: "Carousel Three :",
			cuatro: "Carousel Four :",
			cinco: "Carousel Five :",
			seis: "Carousel Six :",
		},
	};

	return (
		<div className="flex flex-col gap-y-10">
			<div className={boxStyle.padre}>
				<h2 className={boxStyle.subtitulo}>Normal Carousels:</h2>
				{/* Carousel 1 */}
				<div className={boxStyle.hijo}>
					<h2 className={boxStyle.titulo}>{textos.titulo_texto.uno}</h2>
					<div className="mx-8 border rounded-xl overflow-scroll">
						<section
							className="flex w-full overflow-x-scroll"
							style={{ scrollSnapType: "x mandatory" }}
						>
							<img
								className="w-full border border-black object-cover object-center snap-center"
								src="https://picsum.photos/1500"
								alt="img1"
							/>
							<img
								className="w-full border border-black object-cover object-center snap-center"
								src="https://picsum.photos/1000"
								alt="img2"
							/>
							<img
								className="w-[100%] border border-black object-cover object-center snap-center"
								src="https://picsum.photos/1200"
								alt="img3"
							/>
						</section>
					</div>
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
export default CarouselComponents;
