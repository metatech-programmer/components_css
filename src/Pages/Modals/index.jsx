import ModalComponent from "../../components/Modals/Modal";

const ModalsPage = () => {
	const title = "Examples Modals";
	return (
		<div className="w-full flex flex-col gap-y-10 flex-wrap items-center justify-center">
			<h1 className="text-3xl font-semibold text-balance text-center">
				{title}
			</h1>
			<ModalComponent />
		</div>
	);
};

export default {
	page: ModalsPage,
};
