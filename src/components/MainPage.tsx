const MainPage = () => {
	return (
		<div
			id="main"
			className="flex flex-col gap-16 items-center justify-center py-[10rem] pt-[15rem]"
		>
			<h2 className="text-5xl animate-hidden-top">
				<span className="font-bold text-secondary">XProof</span> is here to help
			</h2>
			<div className="flex justify-center gap-10">
				<div className="flex flex-col items-end animate-hidden-left">
					<h3 className="text-4xl pb-2 font-semibold">Students</h3>
					<p className="text-end text-4xl leading-loose">
						We know finding the{" "}
						<span className="italic text-secondary">right answer</span> matters,
						but we believe{" "}
						<span className="italic text-secondary font-medium">
							understanding the process
						</span>{" "}
						is what truly counts
					</p>
				</div>
				<div className="animate-hidden-right">
					<h3 className="text-4xl pb-2 font-semibold">Professors</h3>
					<p className="text-4xl leading-loose">
						We believe professors should focus their{" "}
						<span className="italic text-secondary font-medium">
							energy on teaching
						</span>{" "}
						while also staying informed about{" "}
						<span className="italic text-secondary">class progress</span>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
