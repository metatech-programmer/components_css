import TypographyComponent from "./TypographyComponent";
import font1001 from "../../assets/fonts/1001_fonts.webp";
import fontFabric from "../../assets/fonts/font_fabric.webp";
import fontTesk from "../../assets/fonts/fontesk.webp";
import fontGoogle from "../../assets/fonts/google_fonts.webp";
import fontQuirre from "../../assets/fonts/fonts_quirre.webp";
import fontSource from "../../assets/fonts/fonts_source.webp";

const TypographyComponents = () => {
	const boxStyle = {
		padre:
			"grid grid-cols-1 md:grid-cols-2 border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll",
		hijo: "h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border",
		titulo:
			"underline font-semibold underline-offset-4 text-amber-200 p-2 text-start",
		subtitulo: "text-center my-5 md:mt-28 font-bold",
	};
	const textos = {
		titulo_texto: {
			uno: "Typographies Page One",
			dos: "Typographies Page Two",
			tres: "Typographies Page Three",
			cuatro: "Typographies Page Four",
			cinco: "Typographies Page Five",
			seis: "Typographies Page Six",
		},
	};

	return (
		<div className="flex flex-col gap-y-10">
			<div className={boxStyle.padre}>
				<div className="mt-12 text-balance">
					<h2 className={boxStyle.subtitulo}>All Typography Pages:</h2>
					<p className="text-center my-5 md:mt-20 font-semibold text-gray-500 text-sm opacity-55">
						<span className="text-amber-200 block">Tip:</span> Before using any
						source, you should see the following video.{" "}
						<a
							className="text-amber-200 hover:text-amber-400 underline underline-offset-4"
							href="https://youtu.be/jVLHdoiE_IU?si=xNm4OOP9zZYGsyVt"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click me{" "}
						</a>{" "}
					</p>
				</div>
				{/* Typography 1 */}
				<TypographyComponent
					hijo={boxStyle.hijo}
					styleTitulo={boxStyle.titulo}
					titulo={textos.titulo_texto.uno}
					link_font={"https://fonts.google.com/"}
					link_img={fontGoogle}
				/>
				{/* Typography 2 */}
				<TypographyComponent
					hijo={boxStyle.hijo}
					styleTitulo={boxStyle.titulo}
					titulo={textos.titulo_texto.dos}
					link_font={
						"https://www.fontfabric.com/font-tester/?font_category=free-fonts"
					}
					link_img={fontFabric}
				/>
				{/* Typography 3 */}
				<TypographyComponent
					hijo={boxStyle.hijo}
					styleTitulo={boxStyle.titulo}
					titulo={textos.titulo_texto.tres}
					link_font={"https://www.1001fonts.com/sans-serif-fonts.html"}
					link_img={font1001}
				/>
				{/* Typography 4 */}
				<TypographyComponent
					hijo={boxStyle.hijo}
					styleTitulo={boxStyle.titulo}
					titulo={textos.titulo_texto.cuatro}
					link_font={"https://www.fontsquirrel.com/fonts/list/recent"}
					link_img={fontQuirre}
				/>
				{/* Typography 5 */}
				<TypographyComponent
					hijo={boxStyle.hijo}
					styleTitulo={boxStyle.titulo}
					titulo={textos.titulo_texto.cinco}
					link_font={
						"https://fontesk.com/font/sans-serif/?license=free-for-commercial-use,free-for-personal-use"
					}
					link_img={fontTesk}
				/>
				{/* Typography 6 */}
				<TypographyComponent
					hijo={boxStyle.hijo}
					styleTitulo={boxStyle.titulo}
					titulo={textos.titulo_texto.seis}
					link_font={
						"https://fontsource.org/"
					}
					link_img={fontSource}
				/>
			</div>
			{/* ///////////////////////////////////// */}
		</div>
	);
};
export default TypographyComponents;
