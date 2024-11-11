const Team = () => {
	return (
		<div id="team">
			<h1 className="text-[5rem] pt-[5rem] lg:pt-[15vh]">Team</h1>
			<div className="flex flex-col items-center gap-10 w-full lg:flex-row">
				<div className="flex gap-10 flex-1 flex-col md:flex-row">
					<div className="flex flex-1 flex-col items-center gap-2 max-w-[400px] w-auto shadow bg-gray-400 h-[50vh] p-8 rounded-xl f-image">
						team member
					</div>
					<div className="flex flex-1 flex-col items-center gap-2 max-w-[400px] w-auto shadow bg-gray-400 h-[50vh] p-8 rounded-xl f-image">
						team member
					</div>
				</div>
				<p className="text-base leading-loose lg:max-w-[400px] lg:leading-loose md:text-xl">
					text explaining the team and the core values of the people in it
				</p>
			</div>
		</div>
	);
};

export default Team;
