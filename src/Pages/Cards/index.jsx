import CardComponent from "../../components/Cards/Card";

const CardsPage = () => {
	const title = "Examples Cards";
	return (
		<div className="w-full flex flex-col gap-y-10 flex-wrap items-center justify-center">
			<h1 className="text-3xl font-semibold text-balance text-center">
				{title}
			</h1>
			<CardComponent />
		</div>
	);
};

export default {
	page: CardsPage,
};
