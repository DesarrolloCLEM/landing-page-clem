import { SiteLayout } from "@/components/layout";

export default function PublicSiteLayout({ children }: LayoutProps<"/">) {
  return <SiteLayout>{children}</SiteLayout>;
}
