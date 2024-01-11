import BadgeComponent from "./BadgeComponents";
const BadgeComponents = () => {
	const boxStyle = {
		father:
			"grid grid-cols-1 border border-slate-600 p-7 rounded-xl gap-5 w-[60vw] h-[80%] bg-[#0404048e]  overflow-scroll",
		subtitle: "text-center my-5 md:mt-20 leading-3 font-bold",
	};
	const texts = {
		title_text: {
			one: "Badge One :",
			two: "Badge Two :",
			three: "Badge Three :",
			four: "Badge Four :",
			five: "Badge Five :",
			six: "Badge Six :",
		},
	};

	return (
		<div className="flex flex-col gap-y-10">
			<div className={boxStyle.father}>
				<h2 className={boxStyle.subtitle}>Normal Badges:</h2>
				{/* Badge 1 */}
				<BadgeComponent text_title={texts.title_text.one} style_badge_plus="" />
				
				


			</div>
			{/* ///////////////////////////////////// */}
		</div>
	);
};
export default BadgeComponents;
