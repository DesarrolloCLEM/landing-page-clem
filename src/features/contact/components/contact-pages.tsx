import { MessageSquareWarning, PhoneCall, ShieldAlert } from "lucide-react";
import Link from "next/link";

import { Container, PageHeader, Section } from "@/components/layout";
import { buttonVariants, Eyebrow, Heading, IconBox, JsonLd, MapEmbed, Text } from "@/components/ui";
import { contact, phoneExtensions } from "@/config/site";
import { clinicStructuredData } from "@/config/structured-data";

import { submitAccountDeletion, submitContact, submitFeedback } from "../actions/forms";
import { accountDeletionForm, contactForm, feedbackForm } from "../data/forms";
import { accountDeletionPage, contactPage, feedbackPage } from "../data/pages";
import { ContactInfo } from "./contact-info";
import { SubmissionForm } from "./submission-form";

export function ContactPage() {
  return (
    <>
      <JsonLd data={clinicStructuredData} />
      <PageHeader
        title={contactPage.title}
        description={contactPage.description}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: contactPage.title }]}
      />

      <Section aria-labelledby="contact-form-title">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-6">
            <Heading as="h2" id="contact-form-title" size="lg">
              {contactPage.formTitle}
            </Heading>
            <SubmissionForm config={contactForm} action={submitContact} />
          </div>
          <div className="flex flex-col gap-6">
            <ContactInfo />
            <div className="flex flex-col gap-3 rounded-card border border-border bg-surface p-6">
              <p className="flex items-center gap-2 font-heading font-bold text-navy">
                <MessageSquareWarning aria-hidden="true" className="size-5 text-primary" />
                {contactPage.pqrs.title}
              </p>
              <p className="text-ink-muted">{contactPage.pqrs.text}</p>
              <Link
                href={contactPage.pqrs.action.href}
                className={buttonVariants({ variant: "secondary", className: "self-start" })}
              >
                {contactPage.pqrs.action.label}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="extensions-title">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Heading as="h2" id="extensions-title" size="lg">
              {contactPage.extensionsTitle}
            </Heading>
            <Text tone="muted">
              {contactPage.extensionsDescription}{" "}
              <a
                href={contact.phone.href}
                className="font-semibold text-emphasis underline underline-offset-4"
              >
                PBX {contact.phone.label}
              </a>
            </Text>
          </div>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {phoneExtensions.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 rounded-card border border-border bg-white p-4 text-ink shadow-card"
              >
                <dt className="flex items-center gap-2 font-semibold">
                  <PhoneCall aria-hidden="true" className="size-5 shrink-0 text-primary" />
                  {item.label}
                </dt>
                <dd className="ps-7 text-ink-muted">Ext. {item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section aria-labelledby="map-title">
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id="map-title" size="lg">
            {contactPage.mapTitle}
          </Heading>
          <MapEmbed
            src={contact.mapsEmbedUrl}
            title={`${contactPage.mapTitle}: ${contact.address.full}`}
            link={{ href: contact.mapsUrl, label: contactPage.mapLinkLabel }}
          />
        </Container>
      </Section>
    </>
  );
}

export function FeedbackPage() {
  return (
    <>
      <PageHeader
        title={feedbackPage.title}
        description={feedbackPage.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Usuarios", href: "/usuarios/" },
          { label: "PQRS" },
        ]}
      />
      <Section aria-labelledby="feedback-form-title">
        <Container size="narrow" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Eyebrow>{feedbackPage.formEyebrow}</Eyebrow>
            <Heading as="h2" id="feedback-form-title" size="lg">
              {feedbackPage.formTitle}
            </Heading>
            <Text tone="muted">{feedbackPage.formDescription}</Text>
          </div>
          <SubmissionForm config={feedbackForm} action={submitFeedback} />
        </Container>
      </Section>
    </>
  );
}

export function AccountDeletionPage() {
  const { whatHappens, how } = accountDeletionPage;

  return (
    <>
      <PageHeader
        title={accountDeletionPage.title}
        description={accountDeletionPage.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "App Clem", href: "/app-clem/" },
          { label: accountDeletionPage.title },
        ]}
      />
      <Section aria-labelledby="deletion-how-title">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 rounded-card border border-emergency/40 bg-emergency-50 p-6 text-ink">
              <IconBox tone="emergency">
                <ShieldAlert />
              </IconBox>
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-bold text-navy">{whatHappens.title}</h2>
                <p className="leading-relaxed">{whatHappens.text}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Heading as="h2" id="deletion-how-title" size="lg">
                {how.title}
              </Heading>
              <Text tone="muted">{how.text}</Text>
              <SubmissionForm config={accountDeletionForm} action={submitAccountDeletion} />
            </div>
          </div>
          <ContactInfo />
        </Container>
      </Section>
    </>
  );
}
