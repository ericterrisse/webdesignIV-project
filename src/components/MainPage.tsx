import { useState } from "react";
import logo from "@/assets/images/logoBlue.svg";

const MainPage = () => {
	const [isStudents, setIsStudents] = useState(true);

	return (
		<div
			id="main"
			className="flex gap-8 items-center w-full justify-between h-screen lg:flex-row flex-col lg:mt-0 mt-32"
		>
			<div className="relative">
				<img
					src={logo}
					alt="Xproof logo"
					className="lg:h-[500px] h-[350px] aanimate-hidden-left main-imagetext"
				/>
				<h1 className="font-reemkufi absolute text-[2.5rem] top-[5rem] left-[12.5rem] lg:top-[7rem] lg:left-[18rem] lg:text-[3.5rem] leading-relaxed text-secondary aanimate-hidden-left main-imagetext">
					is <br />
					here <br />
					to help
				</h1>
			</div>
			<div className="flex-1 ml-0 xl:ml-16">
				<div className="flex flex-col justify-center lg:gap-10 aanimate-hidden-right mt-10 lg:mt-0">
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
						<p className="text-2xl lg:text-4xl leading-loose lg:leading-loose">
							We know finding the{" "}
							<span className="italic text-secondary ">right answer</span>{" "}
							matters, but we believe{" "}
							<span className="italic text-secondary font-medium">
								understanding the process
							</span>{" "}
							is what truly counts
						</p>
					) : (
						<p className="text-2xl lg:text-4xl leading-loose lg:leading-loose">
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
