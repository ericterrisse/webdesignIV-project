import logo from "@/assets/logo.svg";

const Navbar = () => {
	return (
		<div className="bg-primary p-5 flex justify-between items-center">
			<div className="flex gap-3 items-center ml-5">
				<img src={logo} className="h-12 w-12" />
				<h1 className="font-bold">XProof</h1>
			</div>
			<div className="flex gap-16 mr-10 items-center">
				<h3 className="hover:underline hover:cursor-pointer">Project</h3>
				<h3 className="hover:underline hover:cursor-pointer">Team</h3>
				<h3 className="hover:underline hover:cursor-pointer">Mission</h3>
				<h3 className="hover:underline hover:cursor-pointer">More</h3>
				<button className="font-reemkufi font-bold text-white text-2xl bg-secondary p-2 px-4 rounded-full hover:animate-bounce">
					Try the app
				</button>
			</div>
		</div>
	);
};

export default Navbar;
