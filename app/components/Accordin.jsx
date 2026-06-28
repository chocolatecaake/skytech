import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";

const ITEMS = [
  {
    title: "What is Animate UI?",
    content:
      "Animate UI is an open-source distribution of React components built with TypeScript, Tailwind CSS, and Motion.",
  },
  {
    title: "How is it different from other libraries?",
    content:
      "Instead of installing via NPM, you copy and paste the components directly. This gives you full control to modify or customize them as needed.",
  },
  {
    title: "Is Animate UI free to use?",
    content:
      "Absolutely! Animate UI is fully open-source. You can use, modify, and adapt it to fit your needs.",
  },
];

export default function AccordionSection({
  multiple = false,
  collapsible = true,
  keepRendered = false,
  showArrow = true,
}) {
  return (
    <h1>
      <Accordion
        type={multiple ? "multiple" : "single"}
        collapsible={collapsible}
        className="w-full h1 rounded-md border border-border bg-primary "
      >
        {ITEMS.map((item, index) => (
          <AccordionItem
            key={index}
            className={
              "p-2 glass body-large rounded-md border border-border mb-4 "
            }
            value={`item-${index + 1} `}
          >
            <AccordionTrigger className="body-large" showArrow={showArrow}>
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="" keepRendered={keepRendered}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </h1>
  );
}
