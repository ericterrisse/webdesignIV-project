import { Dispatch, SetStateAction } from "react";

const MissionCard = ({
	infoCard,
	selected,
	funcSelect,
}: {
	infoCard: any;
	selected?: boolean;
	funcSelect: Dispatch<SetStateAction<number>>;
}) => {
	return (
		<div
			className={`flex flex-col gap-2 p-5 items-center w-[300px] bg-primary rounded-xl shadow hover:cursor-pointer ${
				infoCard.className
			} ${!selected ? "opacity-50" : ""}`}
			onClick={() => funcSelect(infoCard.key)}
		>
			<h3 className="">{infoCard.title}</h3>
			<p className="text-center">{infoCard.text}</p>
		</div>
	);
};

export default MissionCard;
