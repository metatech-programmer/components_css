import card from "../../assets/icons_components/card.svg";
import icon from "../../assets/icon.svg";
import accordions from "../../assets/icons_components/accordions.svg";
import badge from "../../assets/icons_components/badge.svg";
import buttons from "../../assets/icons_components/buttons.svg";
import carousel from "../../assets/icons_components/carousel.svg";
import fonts from "../../assets/icons_components/fonts.svg";
import footers from "../../assets/icons_components/footers.svg";
import images from "../../assets/icons_components/images.svg";
import lists from "../../assets/icons_components/lists.svg";
import modals from "../../assets/icons_components/modals.svg";
import pages from "../../assets/icons_components/pages.svg";
import progressBar from "../../assets/icons_components/progressBar.svg";
import spinners from "../../assets/icons_components/spinners.svg";
import { Link, useLocation } from "wouter";

const Navigation = () => {
	const [location] = useLocation();

	const linkStyle = {
		li: "bg-slate-800 p-2 rounded-xl hover:font-semibold active:ring-4 ring-blue-300 hover:bg-slate-900 transition-colors duration-300 pl-5 flex items-center h-11 hover:scale-110",
		li_location: "bg-slate-900 scale-110 text-slate-600 ring-2",
	};

	/* ------------------------------------------- */

	return (
		<div className="bg-slate-950 h-screen lg:w-60 p-3 rounded fixed overflow-y-scroll md:w-24 border-r border-slate-600 shadow-md shadow-gray-600 z-40">
			<div className="flex text-center lg:hidden pt-2 ">
				<Link href="/">
					<span
						className="text-2xl font-semibold text-amber-200 pb-5 m-auto underline-offset-8  "
						style={{ textShadow: "1px 1px 7px /link4CB9E7" }}
					>
						M&apos;C
					</span>
				</Link>
				<hr className="mb-3  border-slate-800" />
			</div>
			<aside className="text-center h-full ">
				<Link href="/">
					<div className="mb-5 underline font-bold text-[/link4CB9E7] border-2 rounded-xl border-gray-400 p-3 lg:block hidden hover:animate-pulse">
						<div
							slot="image"
							className="w-full h-28 hidden lg:block hover:animate-pulse"
							style={{
								backgroundImage: `url("${icon}")`,
								backgroundSize: "cover",
							}}
						/>
						<span>Metatech Components</span>
					</div>
				</Link>
				<hr className="mb-3  border-slate-800" />
				<nav className="text-justify text-pretty h-full m-2">
					<ul className="flex flex-col gap-2 text-white items-center pb-6  lg:items-stretch">
						<Link href="/Accordions">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Accordions" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${accordions}")`,
										backgroundSize: "cover",
									}}
								/>

								<span className="hidden lg:block">Accordions</span>
							</li>
						</Link>
						<Link href="/Badges">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Badges" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${badge}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Badges</span>
							</li>
						</Link>
						<Link href="/Buttons">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Buttons" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${buttons}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Buttons</span>
							</li>
						</Link>
						<Link href="/Cards">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Cards" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${card}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Cards</span>
							</li>
						</Link>
						<Link href="/Carousels" rel="preload">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Carousels" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${carousel}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Carousels</span>
							</li>
						</Link>
						<Link href="/Typography" rel="preload">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Typography" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${fonts}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Typographies</span>
							</li>
						</Link>
						<Link href="/Footers">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Footers" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${footers}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Footers</span>
							</li>
						</Link>
						<Link href="/Images">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Images" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${images}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Images</span>
							</li>
						</Link>
						<Link href="/Lists">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Lists" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${lists}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Lists</span>
							</li>
						</Link>
						<Link href="/Modals">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Modals" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${modals}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Modals</span>
							</li>
						</Link>
{/* 
						<Link href="/Pages-resources">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Pages-resources" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${pages}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Pages Resources</span>
							</li>
						</Link>
						<Link href="/Progress-bar">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Progress-bar" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${progressBar}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Progress Bar</span>
							</li>
						</Link>
						<Link href="/Spinners">
							{" "}
							<li
								className={`${linkStyle.li} ${
									location === "/Spinners" && linkStyle.li_location
								}`}
							>
								<div
									slot="image"
									className="w-8 h-8 mr-3"
									style={{
										backgroundImage: `url("${spinners}")`,
										backgroundSize: "cover",
									}}
								/>
								<span className="hidden lg:block">Spinners</span>
							</li>
							<hr className="mt-4 border-slate-800" />
						</Link> */}
						<a
							href="https://santiagoaguilar-devfront.netlify.app/"
							target="_blank"
							className="mt-2 text-slate-700 text-center hover:text-slate-400"
							rel="noreferrer"
						>
							By <br className="block lg:hidden" /> metatech{" "}
							<br className="block lg:hidden" />
							2024
						</a>
					</ul>
				</nav>
			</aside>
		</div>
	);
};

export default Navigation;
