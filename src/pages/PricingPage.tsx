import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/shared/constants/contact";

const subject = encodeURIComponent("Comandă SmartCart — magazin");
const mailtoOrder = `mailto:${CONTACT_EMAIL}?subject=${subject}`;

export function PricingPage() {
  return (
    <div className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-primary">Preț</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">1700 €</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Preț per coș SmartCart, pentru comenzi destinată retailului și magazinelor fizice.
          Contactează-ne pentru ofertă, volum și livrare.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a className={cn(buttonVariants({ size: "lg" }))} href={mailtoOrder}>
            <Mail className="size-4" />
            Comandă pentru magazin
          </a>
          <Link className={cn(buttonVariants({ size: "lg", variant: "secondary" }))} to="/contact">
            Date de contact
          </Link>
          <a
            className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
            href={`tel:${CONTACT_PHONE_TEL}`}
          >
            <Phone className="size-4" />
            {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Comanda se discută direct pe email sau telefon — fără cont obligatoriu, potrivit pentru
          lanțuri și magazine independente.
        </p>
      </div>
    </div>
  );
}
