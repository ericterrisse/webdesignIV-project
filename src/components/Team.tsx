import { eric, gerard } from "@/assets/images";

const Team = () => {
	return (
		<div id="team">
			<h1 className="text-[5rem] text-third pt-[15vh] animate-hidden-left">
				Team
			</h1>
			<div className="flex flex-col items-center gap-10 w-full lg:flex-row">
				<div className="flex gap-10 flex-1 flex-col md:flex-row">
					<div className="flex flex-1 flex-col items-center gap-2 max-w-[400px] w-auto shadow bg-[#5fd3f7]/50 p-8 rounded-xl animate-hidden-left f-image">
						<img src={gerard} alt="Gerard Solanes Hernandez" className="" />
						<h4>Gerard Solanes Hernandez</h4>
						<p className="text-center">Co-founder & CEO</p>
						<p className="text-center">Physicist, teacher and developer</p>
					</div>
					<div className="flex flex-1 flex-col items-center gap-2 max-w-[400px] w-auto shadow bg-[#5fd3f7]/50 p-8 rounded-xl animate-hidden-left f-image">
						<img src={eric} alt="Èric Terrisse Bordas" className="w-full" />
						<h4>Èric Terrisse Bordas</h4>
						<p>Co-founder & CTO</p>
						<p>Computer Scientist and developer</p>
					</div>
				</div>
				<p className="text-base leading-loose animate-hidden animate-hidden-right lg:max-w-[400px] lg:leading-loose md:text-xl">
					Gerard and Èric first met six years ago and have collaborated on
					various projects ever since. They have been integral members of larger
					teams, participating in numerous projects and hackathons, including
					HackUPC 2022, where their venture, XProof (formerly ITeacher), was
					initiated. These experiences have not only solidified their technical
					partnership but have also underscored their mutual passion for
					addressing complex challenges.
				</p>
			</div>
		</div>
	);
};

export default Team;
