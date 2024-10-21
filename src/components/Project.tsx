import videoDemo from "@/assets/videos/demo.mp4";

const Project = () => {
	const date = new Date();
	const dateShow = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}/${
		date.getMonth() < 10 ? "0" : ""
	}${date.getMonth()}/${date.getFullYear()}`;
	return (
		<div
			id="project"
			className="m-auto flex flex-col justify-between gap-[2rem] xl:gap-[10rem] lg:flex-row pt-[5rem] lg:pt-[15vh]"
		>
			<div className="animate-hidden-left">
				<div className="flex flex-col w-fit leading-[1]">
					<h1 className="text-[5rem] text-fourth">Project</h1>
					<h5 className="text-xl self-end text-fourth">by {dateShow}</h5>
				</div>
				<h4 className="italic font-montserrat text-[16px] lg:text-base ">
					XProof is an AI-powered application designed to provide instant
					feedback on handwritten solutions to math problems
				</h4>
				<p className="mt-10 text-xl lg:text-2xl leading-normal xl:leading-loose">
					The platform enables <span className="italic">teachers</span> to{" "}
					<span className="text-fourth font-medium">
						automate the correction process
					</span>
					, saving time while offering{" "}
					<span className="text-fourth font-medium">personalized insights</span>{" "}
					for each student.
					<br />
					<br /> For <span className="italic">students</span>, XProof
					<span className="text-fourth font-medium"> analyzes errors</span> and
					generates{" "}
					<span className="text-fourth font-medium">custom exercises</span> to
					strengthen weak areas.{" "}
					<span className="underline">Our ultimate goal</span> is to create a
					platform that empowers both teachers and students by streamlining the
					correction process, making learning more efficient and targeted by
					offering valuable feedback.
				</p>
			</div>
			<video
				controls
				className="max-h-[80vh] p-3 bg-black rounded-xl animate-hidden-right w-fit m-auto lg:m-none"
				src={videoDemo}
			>
				Your browser does not support this video display
			</video>
		</div>
	);
};

export default Project;
