const PopUp = () => {

	const handleClose = () => {
		document.getElementById("popup").classList.add("hidden");
	};
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className=" w-screen h-screen absolute z-50 bg-black bg-opacity-50 hidden"
			id="popup"
			onClick={handleClose}
		>
			<div className="m-auto h-44 md:h-80 max-h-80 w-3/4  md:w-3/6  border bg-slate-800 rounded-xl shadow-lg shadow-slate-950 p-2 mt-3  md:mt-12  lg:mt-44 active:scale-105 transition-transform">
				<div className=" text-slate-100 relative rounded-lg w-full flex justify-end  ">
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className=" border rounded-lg h-8 w-8 hover:scale-105 hover:ring-2 bg-slate-900 bg:bgslate-950"
						onClick={handleClose}
					>
						x
					</button>
				</div>
				<div className="border border-slate-600 rounded-lg mt-3 p-2 text-balance flex flex-col">
					<h3 className="text-sm font-semibold text-yellow-200 underline underline-offset-4">
						Your code is the following:
					</h3>
					<p
						className="bg-slate-900 m-2 rounded-lg p-3 h-10 md:h-40 overflow-scroll text-pretty font-mono italic"
						id="code_popup"
					/>
					<span className="text-slate-100 animate-pulse transition-all m-auto">
						Copy to clipboard, <span className="text-green-500">Success!</span>
					</span>
				</div>
			</div>
		</div>
	);
};
export default PopUp;
