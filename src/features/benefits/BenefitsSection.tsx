import { Gauge, LineChart, Sparkles, Users } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

const benefits: { title: string; text: string; icon: typeof Gauge }[] = [
  {
    title: "Rapiditate",
    text: "Flux de cumpărături fluvial: puține opriri, timp mai mic petrecut în magazin.",
    icon: Gauge,
  },
  {
    title: "Fără cozi la case",
    text: "Reduce presiunea pe zonele de checkout tradiționale printr-o abordare integrată.",
    icon: Users,
  },
  {
    title: "Experiență modernă",
    text: "Impresie de retail digital, aliniată la așteptările clienților de astăzi.",
    icon: Sparkles,
  },
  {
    title: "Eficiență operațională",
    text: "Mai puține congestii, claritate la nivel de coș și mai bună utilizare a sălii.",
    icon: LineChart,
  },
];

export function BenefitsSection() {
  return (
    <section
      className="scroll-mt-20 border-t border-border bg-muted/30 px-4 py-16 md:py-24"
      id="avantaje"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Avantaje</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            De ce merită pentru magazinul tău
          </h2>
          <p className="mt-3 text-muted-foreground">
            Clienții câștigă timp și claritate; magazinul câștigă fluiditate și o imagine
            progresivă — fără să sacrifice siguranța sau controlul pe flux.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardHeader>
                <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <b.icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <CardDescription className="text-base">{b.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
