import { professorMain, studentMain } from "@/assets/images/index";

const MainPage = () => {
	return (
		<div
			id="main"
			className="flex flex-col gap-10 items-center justify-center pt-[15vh]"
		>
			<h2 className="text-5xl">
				<span className="font-bold text-secondary">Xproof</span> is here to help
			</h2>
			<div className="flex justify-center gap-10">
				<div className="flex flex-col items-end">
					<h3 className="text-4xl pb-2 font-semibold">Students</h3>
					<p className="text-end text-2xl">
						We know finding the{" "}
						<span className="italic text-secondary">right answer</span> matters,
						but we believe{" "}
						<span className="italic text-secondary font-medium">
							understanding the process
						</span>{" "}
						is what truly counts
					</p>
					<img
						src={studentMain}
						alt="professor illustration"
						className="-scale-x-100 h-[400px] mt-10"
					/>
				</div>
				<div>
					<h3 className="text-4xl pb-2 font-semibold">Professors</h3>
					<p className="text-2xl">
						We believe professors should focus their{" "}
						<span className="italic text-secondary font-medium">
							energy on teaching
						</span>{" "}
						while also staying informed about{" "}
						<span className="italic text-secondary">class progress</span>.
					</p>
					<img
						src={professorMain}
						alt="student illustration"
						className="h-[400px] mt-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
