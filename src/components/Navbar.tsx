import logo from "@/assets/images/logo.svg";

const Navbar = () => {
	return (
		<div className="h-[10vh] fixed w-full flex justify-between items-center bg-background z-10">
			<a className="flex gap-3 items-center ml-5" href="#main">
				<img src={logo} className="h-12 w-12" />
				<h1 className="font-bold">XProof</h1>
			</a>
			<nav className="flex gap-16 mr-10 items-center navbar">
				<a className="font-afacad text-[28px]" href="#project">
					Project
				</a>
				<a className="font-afacad text-[28px]" href="#team">
					Team
				</a>
				<a className="font-afacad text-[28px]" href="#mission">
					Mission
				</a>
				<button className="font-reemkufi font-bold text-white text-2xl bg-secondary p-2 px-4 rounded-full hover:animate-bounce">
					Try the app
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
