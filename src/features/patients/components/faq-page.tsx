import { Container, CtaBand, PageHeader, Section } from "@/components/layout";
import { Accordion, AccordionItem, DetailsHashOpener, Heading, JsonLd } from "@/components/ui";

import { type AnswerBlock, faqCategories, faqPage } from "../data/faq";

const answerText = (answer: AnswerBlock[]) =>
  answer.map((block) => (Array.isArray(block) ? block.join(" ") : block)).join(" ");

// FAQPage structured data, without the questions repeated across categories.
const seen = new Set<string>();
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories
    .flatMap((category) => category.questions)
    .filter((question) => !seen.has(question.question) && seen.add(question.question))
    .map((question) => ({
      "@type": "Question",
      name: question.question,
      acceptedAnswer: { "@type": "Answer", text: answerText(question.answer) },
    })),
};

function Answer({ blocks }: { blocks: AnswerBlock[] }) {
  return blocks.map((block, index) =>
    Array.isArray(block) ? (
      <ul key={index} className="flex list-disc flex-col gap-2 ps-5">
        {block.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      <p key={index}>{block}</p>
    ),
  );
}

export function FaqPage() {
  return (
    <>
      <JsonLd data={faqStructuredData} />
      <DetailsHashOpener />
      <PageHeader
        title={faqPage.title}
        description={faqPage.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Usuarios", href: "/usuarios/" },
          { label: faqPage.title },
        ]}
      />
      <Section aria-label={faqPage.title}>
        <Container className="grid gap-10 lg:grid-cols-[16rem_1fr]">
          <nav aria-labelledby="faq-index" className="lg:sticky lg:top-28 lg:self-start">
            <h2
              id="faq-index"
              className="mb-3 font-heading text-sm font-bold tracking-widest text-emphasis uppercase"
            >
              {faqPage.indexTitle}
            </h2>
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {faqCategories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-sm font-semibold text-ink-muted hover:text-primary lg:rounded-lg"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-10">
            {faqCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-title`}
                className="flex scroll-mt-28 flex-col gap-4"
              >
                <Heading as="h2" id={`${category.id}-title`} size="md">
                  {category.title}
                </Heading>
                <Accordion>
                  {category.questions.map((question) => (
                    <AccordionItem key={question.id} id={question.id} title={question.question}>
                      <Answer blocks={question.answer} />
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
