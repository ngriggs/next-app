import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";

import { questions } from "../config/site";

const FAQ = () => {
	return (
		<div className="p-10">
			<h1 className="mb-5 text-2xl font-bold">Frequently Asked Questions</h1>
			<Accordion type="multiple">
				{questions.map((question, index) => (
					<AccordionItem value={question.question} key={index}>
						<AccordionTrigger>{question.question}</AccordionTrigger>
						<AccordionContent>{question.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FAQ;
