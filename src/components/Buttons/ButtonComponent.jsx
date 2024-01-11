import CopyCode from "../CopyCode/CopyCode.jsx";

function ButtonComponents(props) {
	const { text_title, style_button, style_css } = props;
	if (style_css) {
		return (
			<div className="h-auto w-40  flex text-left flex-col m-auto p-2 gap-5 rounded-md border">
				<h2 className="underline font-semibold underline-offset-4 text-amber-200 p-2 text-start">
					{text_title}
				</h2>

				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className={style_button}
					style={{ textShadow: "0px 1px 8px white" }}
				>
					Click Here
				</button>
				<CopyCode
					number_code={Math.floor(Math.random() * 10000)}
					code={`<button className="${style_button}" style={{ textShadow: "0px 1px 8px white" }}>Click Here</button>`}
				/>
			</div>
		);
	}
	return (
		<div className="h-auto w-40  flex text-left flex-col m-auto p-2 gap-5 rounded-md border">
			<h2 className="underline font-semibold underline-offset-4 text-amber-200 p-2 text-start">
				{text_title}
			</h2>

			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button className={style_button}>Click Here</button>
			<CopyCode
				number_code={Math.floor(Math.random() * 10000)}
				code={`<button className='${style_button}'>Click Here</button>`}
			/>
		</div>
	);
}

export default ButtonComponents;
