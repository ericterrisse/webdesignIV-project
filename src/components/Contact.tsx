import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<div id="contact" className="animate-hidden-left">
			<h1 className="text-[5rem] text-primary pt-[5rem] lg:pt-[15vh]">
				Contact
			</h1>
			<div className="flex justify-between gap-10 pt-10">
				<ContactForm />
				<p className="text-2xl leading-loose hidden lg:block">
					We&apos;d love to hear from you! Whether you&apos;re interested in
					gaining early access to XProof or just have a few questions,
					we&apos;re all ears. Fill out our contact form to get the conversation
					started.
				</p>
			</div>
		</div>
	);
};

export default Contact;
