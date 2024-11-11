import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="h-[10vh] fixed w-full flex justify-between items-center bg-white/50 backdrop-blur-lg z-10">
			<a className="flex gap-3 items-center ml-5" href="#main">
				<h1 className="font-bold">XProof</h1>
			</a>
			<div
				className="block sm:hidden mr-10 relative"
				onClick={() => setShowMenu(!showMenu)}
			>
				<GiHamburgerMenu size={30} />
				{showMenu && (
					<nav className="flex flex-col gap-2 absolute right-0 bg-white p-3">
						<a className="text-[28px]" href="#project">
							Project
						</a>
						<a className="text-[28px]" href="#team">
							Team
						</a>
						<a className="text-[28px]" href="#contact">
							Contact
						</a>
					</nav>
				)}
			</div>
			<nav className="hidden sm:flex gap-16 mr-10 items-center">
				<a className="text-[28px]">Project</a>
				<a className="text-[28px]">Team</a>
				<a className="text-[28px]">Contact</a>
			</nav>
		</div>
	);
};

export default Navbar;
