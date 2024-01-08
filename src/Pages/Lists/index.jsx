import ListComponent from "../../components/Lists/List";

const ListsPage = () => {
	const title = "Examples Lists";
	return (
		<div className="w-full flex flex-col gap-y-10 flex-wrap items-center justify-center">
			<h1 className="text-3xl font-semibold text-balance text-center">
				{title}
			</h1>
			<ListComponent />
		</div>
	);
};

export default {
	page: ListsPage,
};
