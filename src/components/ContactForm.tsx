import { useForm } from "react-hook-form";

const ContactForm = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<form
			target="_blank"
			onSubmit={onSubmit}
			action="https://formsubmit.co/3aab0d48daa54a91923451c35db00eab"
			method="POST"
			className="flex flex-col gap-10 w-[50%] mb-[15vh] p-10 bg-white/20 rounded-xl"
		>
			<input
				type="text"
				placeholder="NAME"
				className="p-3 rounded-xl"
				{...register("name", {
					required: true,
					maxLength: 100,
				})}
			/>
			{errors.name && (
				<p>
					{errors.name.type === "required" && "This field is required."}
					{errors.name.type === "maxLength" && "Max length is 100 character."}
				</p>
			)}

			<input
				type="text"
				placeholder="EMAIL"
				className="p-3 rounded-xl"
				{...register("email", {
					required: true,
					pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				})}
			/>
			{errors.email && (
				<p>
					{errors.email.type === "required" && "This field is required."}
					{errors.email.type === "pattern" && "Invalid email address."}
				</p>
			)}

			<textarea
				rows={4}
				cols={50}
				placeholder="MESSAGE"
				className="p-3 rounded-xl"
				{...register("message", {
					required: true,
					maxLength: 2000,
				})}
			/>
			{errors.message && (
				<p>
					{errors.message.type === "required" && "This field is required."}
					{errors.message.type === "maxLength" &&
						"Max length is 2000 character."}
				</p>
			)}

			<button
				type="submit"
				className="bg-primary w-fit px-10 py-3 rounded-xl m-auto font-semibold text-white"
			>
				SUBMIT
			</button>
		</form>
	);
};

export default ContactForm;
