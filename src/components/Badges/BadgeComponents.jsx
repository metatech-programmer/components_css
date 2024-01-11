import CopyCode from "../CopyCode/CopyCode";

const BadgeComponent = (props) => {
	const { text_title, style_badge_plus } = props;
	const style_badge =
		"inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-2 ring-inset";
	return (
		<div className="h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border">
			<h2 className="underline font-semibold underline-offset-4 text-amber-200 p-2 text-start">
				{text_title}
			</h2>
			<div className="flex  flex-wrap mx-4 border rounded-xl p-4 gap-3 items-center justify-center">
				<span className={`${style_badge} ring-gray-500 ${style_badge_plus}`}>
					Badge
				</span>
				<span className={`${style_badge} ring-red-600 ${style_badge_plus}`}>
					Badge
				</span>
				<span className={`${style_badge}  ring-yellow-600 ${style_badge_plus}`}>
					Badge
				</span>
				<span className={`${style_badge} ring-green-600 ${style_badge_plus}`}>
					Badge
				</span>
				<span className={`${style_badge}  ring-blue-700 ${style_badge_plus}`}>
					Badge
				</span>
				<span className={`${style_badge} ring-indigo-700 ${style_badge_plus}`}>
					Badge
				</span>
				<span className={`${style_badge} ring-purple-700 ${style_badge_plus}`}>
					Badge
				</span>
				<span className={`${style_badge}  ring-pink-700 ${style_badge_plus}`}>
					Badge
				</span>
			</div>
			<CopyCode
				number_code={Math.floor(Math.random() * 10000)}
				code={`<div className="flex  flex-wrap mx-4 border rounded-xl p-4 gap-3 items-center justify-center">
				<span className="${style_badge} ring-gray-500 ${style_badge_plus}">
					Badge
				</span>
				<span className="${style_badge} ring-red-600 ${style_badge_plus}">
					Badge
				</span>
				<span className="${style_badge}  ring-yellow-600 ${style_badge_plus}">
					Badge
				</span>
				<span className="${style_badge} ring-green-600 ${style_badge_plus}">
					Badge
				</span>
				<span className="${style_badge}  ring-blue-700 ${style_badge_plus}">
					Badge
				</span>
				<span className="${style_badge} ring-indigo-700 ${style_badge_plus}">
					Badge
				</span>
				<span className="${style_badge} ring-purple-700 ${style_badge_plus}">
					Badge
				</span>
				<span className="${style_badge}  ring-pink-700 ${style_badge_plus}">
					Badge
				</span>
			</div>`}
			/>
		</div>
	);
};
export default BadgeComponent;
