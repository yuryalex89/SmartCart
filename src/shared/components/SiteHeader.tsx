import { NavLink } from "react-router-dom";

import { cn } from "@/shared/lib/utils";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:bg-muted hover:text-foreground",
  );

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <NavLink to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
            SC
          </span>
          <span>SmartCart</span>
        </NavLink>
        <nav className="flex flex-wrap items-center justify-end gap-1">
          <NavLink to="/" end className={linkClass}>
            Acasă
          </NavLink>
          <NavLink to="/pret" className={linkClass}>
            Preț
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
