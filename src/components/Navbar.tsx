import logo from "@/assets/images/logo.svg";

const Navbar = () => {
	return (
		<div className="h-[10vh] fixed w-full flex justify-between items-center bg-white/50 backdrop-blur-lg z-10">
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
					Contact
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
