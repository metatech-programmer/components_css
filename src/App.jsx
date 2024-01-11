import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/FooterPage";
import PopUp from "./components/Popup/PopUp";
import { Router } from "wouter";

function App() {
	return (
		<Router>
			<div className="w-screen h-screen font-sans dark:text-slate-200 overflow-scroll bg-gradient-to-t from-gray-800 to-50% to-gray-95 ">
				<PopUp />
				<Header />
				<Main />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
