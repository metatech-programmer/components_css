import ProgressBarComponent from "../../components/ProgressBar/ProgressBar";

const ProgressBarPage = () => {
	const title = "Examples Progress Bars";
	return (
		<div className="w-full flex flex-col gap-y-10 flex-wrap items-center justify-center">
			<h1 className="text-3xl font-semibold text-balance text-center">
				{title}
			</h1>
			<ProgressBarComponent />
		</div>
	);
};

export default {
	page: ProgressBarPage,
};
