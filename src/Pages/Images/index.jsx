import ImageComponent from "../../components/Images/Image";

const ImagesPage = () => {
	const title = "Examples Images";
	return (
		<div className="w-full flex flex-col gap-y-10 flex-wrap items-center justify-center">
			<h1 className="text-3xl font-semibold text-balance text-center">
				{title}
			</h1>
			<ImageComponent />
		</div>
	);
};

export default {
	page: ImagesPage,
};
