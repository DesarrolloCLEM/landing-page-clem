import { Container, CtaBand, PageHeader, Section } from "@/components/layout";
import { DocumentLink, Heading } from "@/components/ui";
import { type DocumentCategory, siteDocuments } from "@/config/documents";
import { formatFileSize } from "@/lib/format-file-size";

import { transparencyPages } from "../data/pages";

export function DocumentListPage({ category }: { category: DocumentCategory }) {
  const page = transparencyPages[category];
  // Documents are stored from the most recent period to the oldest.
  const documents = siteDocuments.filter((document) => document.category === category);

  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Sobre nosotros", href: "/sobre-nosotros/" },
          { label: page.title },
        ]}
      />
      <Section aria-labelledby="documents-title">
        <Container size="narrow" className="flex flex-col gap-6">
          <Heading as="h2" id="documents-title" size="md">
            {page.listTitle}
          </Heading>
          <ul className="flex flex-col gap-4">
            {documents.map((document) => (
              <li key={document.href}>
                <DocumentLink
                  title={document.title}
                  subtitle={document.period}
                  href={document.href}
                  meta={`PDF, ${formatFileSize(document.bytes)}`}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
