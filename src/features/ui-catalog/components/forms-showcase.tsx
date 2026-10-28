import { Container, Grid, Section } from "@/components/layout";
import { Button, FormField, Input, SectionHeading, Select, Textarea } from "@/components/ui";

import { sampleRequestTypes } from "../data/samples";
import { ShowcaseBlock } from "./showcase-block";

export function FormsShowcase() {
  return (
    <Section tone="surface" aria-labelledby="catalog-forms">
      <Container size="narrow" className="flex flex-col gap-10">
        <SectionHeading titleId="catalog-forms" eyebrow="Formularios" title="Campos accesibles" />

        <ShowcaseBlock
          title="FormField"
          description="Etiqueta asociada, ayuda y error enlazados con aria-describedby."
        >
          <form className="flex flex-col gap-6">
            <Grid cols={2} gap="md">
              <FormField id="catalog-name" label="Nombre completo" required>
                {(control) => <Input autoComplete="name" {...control} />}
              </FormField>
              <FormField
                id="catalog-email"
                label="Correo electrónico"
                error="Ingresa un correo válido"
                required
              >
                {(control) => (
                  <Input type="email" autoComplete="email" defaultValue="correo@" {...control} />
                )}
              </FormField>
            </Grid>
            <FormField id="catalog-type" label="Tipo de solicitud" hint="Selecciona una opción.">
              {(control) => (
                <Select {...control}>
                  {sampleRequestTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </Select>
              )}
            </FormField>
            <FormField id="catalog-message" label="Mensaje" hint="Máximo 500 caracteres.">
              {(control) => <Textarea placeholder="Cuéntanos tu experiencia" {...control} />}
            </FormField>
            <FormField id="catalog-disabled" label="Campo deshabilitado">
              {(control) => <Input disabled defaultValue="No editable" {...control} />}
            </FormField>
            <div>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </ShowcaseBlock>
      </Container>
    </Section>
  );
}
