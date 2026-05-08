import {
  type LucideIcon,
  Battery,
  Navigation,
  ScanLine,
  SunMedium,
  Tablet,
  Watch,
  Wand2,
  Zap,
} from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";

const items: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Scanare automată a produselor",
    description: "Adăugare rapidă în coș, fără așezare manuală la casă pentru fiecare articol.",
    icon: ScanLine,
  },
  {
    title: "Total pe tabletă",
    description: "Sumar clar al coșului, vizibil oricând pentru client pe tableta montată.",
    icon: Tablet,
  },
  {
    title: "Navigare în magazin",
    description: "Ghidare pas cu pas către rafturile unde se află produsele dorite.",
    icon: Navigation,
  },
  {
    title: "Mișcare asistată",
    description: "Sprijin motorizat pentru deplasarea coșului, confort sporit în spații mari.",
    icon: Zap,
  },
  {
    title: "Panouri solare",
    description: "Energie suplimentară pentru subsistemele coșului, gândit pentru uz sustenabil.",
    icon: SunMedium,
  },
  {
    title: "Baterie",
    description: "Autonomie pentru o tură completă de cumpărături fără griji.",
    icon: Battery,
  },
  {
    title: "Brățară inteligentă",
    description: "Identificare sigură a utilizatorului și legătură cu profilul de cumpărături.",
    icon: Watch,
  },
];

export function ProductSection() {
  return (
    <section className="scroll-mt-20 px-4 py-16 md:py-24" id="produs">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Produs</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Funcționalități principale
          </h2>
          <p className="mt-3 text-muted-foreground">
            SmartCart integrează tehnologii care reduc fricțiunea în jurul produsului: de la
            scanare și plată percepută, la orientare în magazin și experiență personalizată.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="border-border/80">
              <CardHeader className="space-y-1">
                <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
          <Card className="border-dashed border-primary/40 bg-primary/5 sm:col-span-2 lg:col-span-3">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary">
                <Wand2 className="size-5" aria-hidden />
                <CardTitle className="text-base">Experiență unitară</CardTitle>
              </div>
              <CardDescription>
                Toate modulele lucrează împreună: clientul știe mereu ce are în coș, unde merge în
                magazin și se miscă confortabil — iar magazinul reduce aglomerația la case.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
