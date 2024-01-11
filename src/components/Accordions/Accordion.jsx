import AccordionComponent from "./AccordionComponent";
const AccordionComponents = () => {
	const boxStyle = {
		father:
			"grid grid-cols-1 border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll",
		subtitle: "text-center my-5 md:mt-20 leading-3 font-bold",
	};
	const texts = {
		title_text: {
			one: "Accordion One :",
			two: "Accordion Two :",
			three: "Accordion Three :",
			four: "Accordion Four :",
			five: "Accordion Five :",
			six: "Accordion Six :",
		},
	};

	return (
		<div className="flex flex-col gap-y-10">
			<div className={boxStyle.father}>
				<h2 className={boxStyle.subtitle}>Normal Accordions:</h2>
				{/* Accordion 1 */}
				<AccordionComponent
					text_title={texts.title_text.one}
					style_details="border bg-transparent p-3 overflow-x-auto"
					style_summary="font-semibold"
				/>
				
			</div>
			{/* ///////////////////////////////////// */}
		</div>
	);
};
export default AccordionComponents;
