import ButtonComponent from "./ButtonComponent";

const ButtonComponents = () => {
	const boxStyle = {
		father:
			"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-600 p-7 rounded-xl gap-5 w-full h-[80%] bg-[#www0404048e]  overflow-scroll",
		subtitle: "text-center my-5 md:mt-20 leading-3 font-bold",
	};
	const texts = {
		title_text: {
			one: "Button One :",
			two: "Button Two :",
			three: "Button Three :",
			four: "Button Four :",
			five: "Button Five :",
			six: "Button Six :",
		},
	};

	return (
		<div className="flex flex-col gap-y-10">
			<div className={boxStyle.father}>
				<h2 className={boxStyle.subtitle}>Normal buttons:</h2>
				{/* Button 1 */}
				<ButtonComponent
					text_title={texts.title_text.one}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 m-auto"
				/>
				{/* Button 2 */}
				<ButtonComponent
					text_title={texts.title_text.two}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 transition-all m-auto"
				/>
				{/* Button 3 */}
				<ButtonComponent
					text_title={texts.title_text.three}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 transition-all m-auto"
				/>
				{/* Button 4 */}
				<ButtonComponent
					text_title={texts.title_text.four}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all m-auto"
				/>
				{/* Button 5 */}
				<ButtonComponent
					text_title={texts.title_text.five}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto"
				/>
				{/* Button 6 */}
				<ButtonComponent
					text_title={texts.title_text.six}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-slate-900 active:bg-slate-950 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto italic"
				/>
			</div>
			{/* ///////////////////////////////////// */}
			<div className={boxStyle.father}>
				<h2 className={boxStyle.subtitle}>
					<span className="text-blue-200">C</span>
					<span className="text-fuchsia-400">o</span>
					<span className="text-amber-200">l</span>
					<span className="text-sky-400">o</span>
					<span className="text-blue-200">r</span>
					<span className="text-purple-400">s</span> buttons:
				</h2>
				{/* Button 1 */}
				<ButtonComponent
					text_title={texts.title_text.one}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 m-auto bg-cyan-600 ring-white border-white"
				/>
				{/* Button 2 */}
				<ButtonComponent
					text_title={texts.title_text.two}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-blue-950 transition-all m-auto bg-blue-800 ring-blue-400"
				/>
				{/* Button 3 */}
				<ButtonComponent
					text_title={texts.title_text.three}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-purple-900 active:bg-purple-950 transition-all m-auto bg-purple-700 ring-purple-400"
				/>
				{/* Button 4 */}
				<ButtonComponent
					text_title={texts.title_text.four}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-pink-800 active:bg-pink-900 active:text-lg transition-all m-auto bg-pink-500 ring-pink-200"
				/>
				{/* Button 5 */}
				<ButtonComponent
					text_title={texts.title_text.five}
					style_button="w-36 h-16 border rounded-xl hover:font-semibold active:ring-4 hover:bg-fuchsia-600 active:bg-fuchsia-700 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto bg-fuchsia-500 ring-fuchsia-200"
				/>
				{/* Button 6 */}
				<ButtonComponent
					text_title={texts.title_text.six}
					style_button="w-36 h-16 border rounded-xl hover:font-bold active:ring-4 hover:bg-yellow-500 active:bg-yellow-600 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto italic bg-yellow-300 ring-yellow-100 font-semibold text-gray-950 active:text-white"
				/>
			</div>
			{/* ///////////////////////////////////// */}
			<div className={boxStyle.father}>
				<h2 className={boxStyle.subtitle}>
					<span
						className="text-blue-900"
						style={{ textShadow: "0 0 10px skyblue" }}
					>
						Shadow
					</span>{" "}
					buttons:
				</h2>
				{/* Button 1 */}
				<ButtonComponent
					text_title={texts.title_text.one}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-cyan-200 border rounded-xl hover:font-semibold active:ring-4 m-auto bg-cyan-600 ring-white border-white"
				/>
				{/* Button 2 */}
				<ButtonComponent
					text_title={texts.title_text.two}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-blue-200 border rounded-xl hover:font-semibold active:ring-4 hover:bg-blue-950 transition-all m-auto bg-blue-800 ring-blue-400"
				/>
				{/* Button 3 */}
				<ButtonComponent
					text_title={texts.title_text.three}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-purple-200 border rounded-xl hover:font-semibold active:ring-4 hover:bg-purple-900 active:bg-purple-950 transition-all m-auto bg-purple-700 ring-purple-400"
				/>
				{/* Button 4 */}
				<ButtonComponent
					text_title={texts.title_text.four}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-pink-200 border rounded-xl hover:font-semibold active:ring-4 hover:bg-pink-800 active:bg-pink-900 active:text-lg transition-all m-auto bg-pink-500 ring-pink-200"
				/>
				{/* Button 5 */}
				<ButtonComponent
					text_title={texts.title_text.five}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-fuchsia-200 border rounded-xl hover:font-semibold active:ring-4 hover:bg-fuchsia-600 active:bg-fuchsia-700 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto bg-fuchsia-500 ring-fuchsia-200"
				/>
				{/* Button 6 */}
				<ButtonComponent
					text_title={texts.title_text.six}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-yellow-200 border rounded-xl hover:font-bold active:ring-4 hover:bg-yellow-500 active:bg-yellow-600 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto italic bg-yellow-300 ring-yellow-100 font-semibold text-gray-950 active:text-white"
				/>
			</div>
			{/* ///////////////////////////////////// */}
			<div className={boxStyle.father}>
				<h2 className={boxStyle.subtitle}>
					<span
						className="text-blue-900"
						style={{
							background: "linear-gradient(to right, #00CCFF, #ffebcd)",
							WebkitBackgroundClip: "text",
							color: "transparent",
							display: "inline-block",
						}}
					>
						Gradients
					</span>{" "}
					buttons:
				</h2>
				{/* Button 1 */}
				<ButtonComponent
					text_title={texts.title_text.one}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-cyan-600 border rounded-xl hover:font-semibold active:ring-4 m-auto
					bg-gradient-to-b from-cyan-600  to-90% to-cyan-200 ring-white border-white"
				/>
				{/* Button 2 */}
				<ButtonComponent
					text_title={texts.title_text.two}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-blue-600 border rounded-xl hover:font-semibold active:ring-4  transition-all m-auto bg-gradient-to-b from-blue-600 to-90% to-blue-200 ring-blue-400"
				/>
				{/* Button 3 */}
				<ButtonComponent
					text_title={texts.title_text.three}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-purple-600 border rounded-xl hover:font-semibold active:ring-4 transition-all m-auto  bg-gradient-to-b from-purple-600 to-95% to-purple-200 ring-purple-800"
				/>
				{/* Button 4 */}
				<ButtonComponent
					text_title={texts.title_text.four}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-pink-600 border rounded-xl hover:font-semibold active:ring-4  active:text-lg transition-all m-auto ring-pink-200  bg-gradient-to-b from-pink-600 to-95% to-pink-200"
				/>
				{/* Button 5 */}
				<ButtonComponent
					text_title={texts.title_text.five}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-fuchsia-600 border rounded-xl hover:font-semibold active:ring-4 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto ring-fuchsia-200  bg-gradient-to-b from-fuchsia-600 to-95% to-fuchsia-200"
				/>
				{/* Button 6 */}
				<ButtonComponent
					text_title={texts.title_text.six}
					style_css={true}
					style_button="w-36 h-16 shadow-md  shadow-yellow-600 border rounded-xl hover:font-bold active:ring-4 active:text-lg transition-all hover:underline  underline-offset-4 active:underline-offset-8 m-auto italic ring-yellow-100 font-semibold text-white active:text-white  bg-gradient-to-b from-yellow-600 to-95% to-yellow-200"
				/>
			</div>
		</div>
	);
};
export default ButtonComponents;
