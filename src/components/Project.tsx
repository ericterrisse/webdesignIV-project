const Project = () => {
	return (
		<div
			id="project"
			className="m-auto flex flex-col justify-between gap-[2rem] xl:gap-[10rem] lg:flex-row pt-[5rem] lg:pt-[15vh]"
		>
			<div>
				<div className="flex flex-col w-fit leading-[1]">
					<h1 className="text-[5rem]">Project</h1>
				</div>
				<p className="mt-10 text-xl lg:text-2xl leading-normal xl:leading-loose">
					text describing the functionality of the product and its capabilities.
					Also describes what the goals of the bigger project are.
				</p>
			</div>
			<div className="h-[70vh] w-[550px] bg-gray-400">
				Video showing functionality
			</div>
		</div>
	);
};

export default Project;
