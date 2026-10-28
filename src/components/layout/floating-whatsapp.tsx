import { ExternalLink, SocialIcon } from "@/components/ui";
import { contact } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <ExternalLink
      href={contact.whatsappAppointments.href}
      newTabLabel=""
      aria-label="Agendar cita por WhatsApp (abre en una pestaña nueva)"
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-health-strong text-white shadow-card-hover transition-transform hover:scale-105 motion-reduce:transition-none sm:right-6 sm:bottom-6"
    >
      <SocialIcon network="whatsapp" className="size-7" />
    </ExternalLink>
  );
}
