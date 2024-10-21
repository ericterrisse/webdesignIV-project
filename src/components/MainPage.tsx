import { useState } from "react";
import logo from "@/assets/images/logoBlue.svg";

const MainPage = () => {
	const [isStudents, setIsStudents] = useState(true);

	return (
		<div
			id="main"
			className="flex gap-8 items-center w-full justify-between h-screen"
		>
			<div className="relative">
				<img
					src={logo}
					alt="Xproof logo"
					className="h-[500px] animate-hidden-left main-imagetext"
				/>
				<h1 className="font-reemkufi absolute top-[7rem] left-[18rem] text-[3.5rem] leading-relaxed text-secondary animate-hidden-left main-imagetext">
					is <br />
					here <br />
					to help
				</h1>
			</div>
			<div className="flex-1 ml-16">
				<div className="flex flex-col justify-center gap-10 animate-hidden-right">
					<div className="flex gap-5">
						<h3
							className={`text-4xl pb-2 font-semibold hover:opacity-75 hover:cursor-pointer ${
								!isStudents && "opacity-50"
							}`}
							onClick={() => setIsStudents(true)}
						>
							Students
						</h3>
						<h3
							className={`text-4xl pb-2 font-semibold hover:opacity-75 hover:cursor-pointer ${
								isStudents && "opacity-50"
							}`}
							onClick={() => setIsStudents(false)}
						>
							Professors
						</h3>
					</div>
					{isStudents ? (
						<p className="text-4xl leading-loose">
							We know finding the{" "}
							<span className="italic text-secondary ">right answer</span>{" "}
							matters, but we believe{" "}
							<span className="italic text-secondary font-medium">
								understanding the process
							</span>{" "}
							is what truly counts
						</p>
					) : (
						<p className="text-4xl leading-loose">
							We believe professors should focus their{" "}
							<span className="italic text-secondary font-medium">
								energy on teaching
							</span>{" "}
							while also staying informed about{" "}
							<span className="italic text-secondary">class progress</span>.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default MainPage;
