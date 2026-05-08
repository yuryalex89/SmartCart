import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart } from "lucide-react";

import { Button, buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

type HeroSectionProps = {
  onScrollToProduct: () => void;
  onScrollToBenefits: () => void;
};

export function HeroSection({ onScrollToProduct, onScrollToBenefits }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/60 to-background px-4 py-16 md:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShoppingCart className="size-3.5" aria-hidden />
            Soluție pentru magazine
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            SmartCart — cumpărături mai rapide și mai eficiente
          </h1>
          <p className="text-lg text-muted-foreground">
            Un coș inteligent care inovează experiența în magazin: scanare automată, total clar pe
            tabletă și ghidare către produsele dorite — pentru proprietari care vor să elimine cozile
            și să ofere un retail modern.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={onScrollToProduct}>
              Descoperă produsul
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="secondary" onClick={onScrollToBenefits}>
              Avantaje pentru magazin
            </Button>
            <Link
              className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}
              to="/pret"
            >
              Vezi prețul
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total estimat</span>
            <span className="font-semibold tabular-nums">124,50 €</span>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span>Lapte 1L</span>
              <span className="tabular-nums">2 × 6,20 €</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Pâine</span>
              <span className="tabular-nums">1 × 4,10 €</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Iaurt</span>
              <span className="tabular-nums">3 × 2,45 €</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            exemplu vizual — totalul real se actualizează pe tableta montată pe coș.
          </p>
        </div>
      </div>
    </section>
  );
}
