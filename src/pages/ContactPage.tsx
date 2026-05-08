import { ExternalLink, Mail, Phone } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  SOCIAL_HANDLE_IG,
  SOCIAL_HANDLE_TT,
  SOCIAL_NAME_FB,
  SOCIAL_URL_FACEBOOK,
  SOCIAL_URL_INSTAGRAM,
  SOCIAL_URL_TIKTOK,
} from "@/shared/constants/contact";

const rows = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "Telefon",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    icon: Phone,
  },
  {
    label: "Instagram",
    value: SOCIAL_HANDLE_IG,
    href: SOCIAL_URL_INSTAGRAM,
  },
  {
    label: "TikTok",
    value: SOCIAL_HANDLE_TT,
    href: SOCIAL_URL_TIKTOK,
  },
  {
    label: "Facebook",
    value: SOCIAL_NAME_FB,
    href: SOCIAL_URL_FACEBOOK,
  },
] as const;

export function ContactPage() {
  return (
    <div className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-primary">Contact</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Scrie-ne</h1>
        <p className="mt-3 text-muted-foreground">
          Pentru comenzi destinate magazinelor, oferte pe volum sau întrebări despre integrare,
          folosește datele de mai jos. Răspundem în ordinea mesajelor.
        </p>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="text-xl">Date de contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {rows.map((row) => {
              const Icon = "icon" in row ? row.icon : undefined;
              const external = row.href.startsWith("http");
              return (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-border pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-muted-foreground">{row.label}</span>
                  <a
                    className="inline-flex items-center gap-2 font-medium hover:underline"
                    href={row.href}
                    rel={external ? "noreferrer" : undefined}
                    target={external ? "_blank" : undefined}
                  >
                    {Icon ? <Icon className="size-4 shrink-0" aria-hidden /> : null}
                    {row.value}
                    {external ? <ExternalLink className="size-3.5 opacity-60" aria-hidden /> : null}
                  </a>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Aplicația este destinată prezentării produsului — poți deschide aceste pagini dintr-un cod
          QR care indică locația fișierelor (sau găzduire statică); nu este nevoie de server
          dedicat pentru a citi conținutul.
        </p>
      </div>
    </div>
  );
}
