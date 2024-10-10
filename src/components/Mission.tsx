import { useState } from "react";
import MissionCard from "./MissionCard";

const cards = [
	{
		key: 0,
		title: "ITeacher",
		text: "HackUPC'22: First iteration of the idea.",
		className: "mt-[10rem]",
	},
	{
		key: 1,
		title: "Xproof",
		text: "App working, first users and recognitions.",
		className: "",
	},
	{
		key: 2,
		title: "card3",
		text: "Short text in the card",
		className: "mt-[10rem]",
	},
	{ key: 3, title: "card4", text: "Short text in the card", className: "" },
];

const Mission = () => {
	const [selected, setSelected] = useState(1);
	return (
		<div id="mission" className="py-[15vh]">
			<div className="flex flex-col w-fit leading-[1]">
				<h1 className="text-[5rem] text-primary mb-10">Mission</h1>
			</div>
			<div className="flex justify-between gap-3">
				{cards.map((infoCard) => {
					return (
						<div>
							<MissionCard
								key={infoCard.key}
								infoCard={infoCard}
								selected={infoCard.key === selected}
								funcSelect={setSelected}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Mission;
