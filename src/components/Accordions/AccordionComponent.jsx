import CopyCode from "../CopyCode/CopyCode";

const AccordionComponent = (props) => {
    const { text_title, style_details, style_summary, style_css } = props;
	if (style_css) {
	}
	return (
		<div className="h-auto w-full  flex text-left flex-col m-auto p-2 gap-5 rounded-md border">
			<h2 className="underline font-semibold underline-offset-4 text-amber-200 p-2 text-start">
				{text_title}
			</h2>
			<div className="mx-4 border rounded-xl p-4">
				<details className={style_details} name="first_accordion" open>
					<summary className="font-semibold">Title One</summary>
					<p className="m-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</details>
				<details className={style_details} name="first_accordion">
					<summary className="font-semibold">Title Two</summary>
					<p className="m-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</details>
				<details className={style_details} name="first_accordion">
					<summary className="font-semibold">Title Three</summary>
					<p className="m-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</details>
			</div>
			<CopyCode
				number_code={Math.floor(Math.random() * 10000)}
				code={`	<div className="mx-4 border rounded-xl p-4">
				<details className="${style_details}" name="first_accordion" open>
					<summary className="${style_summary}">Title One</summary>
					<p className="m-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</details>
				<details className="${style_details}" name="first_accordion">
					<summary className="${style_summary}">Title Two</summary>
					<p className="m-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</details>
				<details className="${style_details}" name="first_accordion">
					<summary className="${style_summary}">Title Three</summary>
					<p className="m-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</details>
			</div>`}
			/>
		</div>
	);
};
export default AccordionComponent;
