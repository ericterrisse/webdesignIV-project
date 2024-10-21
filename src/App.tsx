import { useEffect } from "react";
import MainPage from "./components/MainPage";
import Project from "./components/Project";
import Team from "./components/Team";
import Contact from "./components/Contact";

const App = () => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				} else {
					entry.target.classList.remove("show");
				}
			});
		});

		const hiddenElementsRight = document.querySelectorAll(
			".animate-hidden-right"
		);
		const hiddenElementsLeft = document.querySelectorAll(
			".animate-hidden-left"
		);
		const hiddenElementsTop = document.querySelectorAll(".animate-hidden-top");
		hiddenElementsRight.forEach((el) => observer.observe(el));
		hiddenElementsLeft.forEach((el) => observer.observe(el));
		hiddenElementsTop.forEach((el) => observer.observe(el));

		return () => {
			// Clean up the observer when the component unmounts
			hiddenElementsRight.forEach((el) => observer.unobserve(el));
			hiddenElementsLeft.forEach((el) => observer.unobserve(el));
			hiddenElementsTop.forEach((el) => observer.unobserve(el));
		};
	}, []); // Empty dependency array to run only once when the component mounts

	return (
		<div className="w-full overflow-x-hidden">
			<div className="w-[95%] 2xl:w-[70%]  m-auto">
				<div className="w-screen h-screen fixed flex items-center justify-around -z-10">
					<div className="blob1 mr-[70rem]" />
					<div className="blob2" />
				</div>
				<MainPage />
				<Project />
				<Team />
				<Contact />
			</div>
		</div>
	);
};

export default App;
