import { eric, gerard } from "@/assets/images";

const Team = () => {
	return (
		<div id="team">
			<h1 className="text-[5rem] text-third pt-[15vh]">Team</h1>
			<div className="flex gap-10 w-full">
				<div className="flex flex-col items-center gap-2 shadow bg-[#5fd3f7]/50 p-8 rounded-xl">
					<img
						src={gerard}
						alt="Gerard Solanes Hernandez"
						className="h-[400px] w-auto"
					/>
					<h4>Gerard Solanes Hernandez</h4>
					<p className="text-center">Co-founder & CEO</p>
					<p className="text-center">Physicist, teacher and developer</p>
				</div>
				<div className="flex flex-col items-center gap-2 shadow bg-[#5fd3f7]/50 p-8 rounded-xl">
					<img src={eric} alt="Èric Terrisse Bordas" className="h-[400px]" />
					<h4>Èric Terrisse Bordas</h4>
					<p>Co-founder & CTO</p>
					<p>Computer Scientist and developer</p>
				</div>
				<p className="flex-1 text-xl leading-loose">
					Gerard and Èric first met six years ago and have collaborated on
					various projects ever since. They have been integral members of larger
					teams, participating in numerous projects and hackathons, including
					HackUPC 2022, where their venture, Xproof (formerly ITeacher), was
					initiated. These experiences have not only solidified their technical
					partnership but have also underscored their mutual passion for
					addressing complex challenges.
				</p>
			</div>
		</div>
	);
};

export default Team;
