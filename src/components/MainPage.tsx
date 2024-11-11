const MainPage = () => {
	return (
		<div
			id="main"
			className="flex gap-8 items-center w-full lg:justify-between lg:h-screen lg:flex-row flex-col lg:mt-0 mt-32"
		>
			<div className="relative h-[350px] w-[350px] bg-gray-400">logo</div>
			<div className="flex flex-col flex-1 justify-center ml-0 xl:ml-16 lg:gap-10 mt-10 lg:mt-0">
				<div className="flex gap-5">
					<h3
						className={`text-4xl pb-2 font-semibold hover:opacity-75 hover:cursor-pointer`}
					>
						Students / professors
					</h3>
				</div>
				<p>
					text explaining how this tool Logo solves problems for both students
					and professors{" "}
				</p>
			</div>
		</div>
	);
};

export default MainPage;
