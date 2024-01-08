import ButtonPage from "../../Pages/Buttons/index";
import AccordionsPage from "../../Pages/Accordions/index";
import ListsPage from "../../Pages/Lists/index";
import ModalsPage from "../../Pages/Modals/index";
import FootersPage from "../../Pages/Footers/index";
import BadgesPage from "../../Pages/Badges/index";
import CarouselsPage from "../../Pages/Carousel/index";
import ImagesPage from "../../Pages/Images/index";
import SpinnersPage from "../../Pages/Spinners/index";
import CardsPage from "../../Pages/Cards/index";
import TypographyPage from "../../Pages/Typography/index";
import PagesResourcesPage from "../../Pages/PagesResources/index";
import ProgressBarsPage from "../../Pages/ProgressBar/index";

import Home from "../../Pages/Home/Home";
import { Route, Switch } from "wouter";

const Main = () => {
	return (
		<main className=" pl-40 pr-4 pb-4 lg:pr-0 lg:pl-80 pt-12 ">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Buttons" component={ButtonPage.page} />
				<Route path="/Accordions" component={AccordionsPage.page} />
				<Route path="/Lists" component={ListsPage.page} />
				<Route path="/Modals" component={ModalsPage.page} />
				<Route path="/Footers" component={FootersPage.page} />
				<Route path="/Badges" component={BadgesPage.page} />
				<Route path="/Carousels" component={CarouselsPage.page} />
				<Route path="/Images" component={ImagesPage.page} />
				<Route path="/Spinners" component={SpinnersPage.page} />
				<Route path="/Cards" component={CardsPage.page} />
				<Route path="/Typography" component={TypographyPage.page} />
				<Route path="/Pages-resources" component={PagesResourcesPage.page} />
				<Route path="/Progress-bar" component={ProgressBarsPage.page} />
			</Switch>
		</main>
	);
};
export default Main;
