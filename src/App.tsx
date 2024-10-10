import MainPage from "./components/MainPage";
import Mission from "./components/Mission";
import Project from "./components/Project";
import Team from "./components/Team";

const App = () => {
	return (
		<div className="w-[70%] m-auto">
			<MainPage />
			<Project />
			<Team />
			<Mission />
		</div>
	);
};

export default App;
