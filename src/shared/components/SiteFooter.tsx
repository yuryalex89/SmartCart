import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  SOCIAL_NAME_FB,
  SOCIAL_URL_FACEBOOK,
  SOCIAL_URL_INSTAGRAM,
  SOCIAL_URL_TIKTOK,
} from "@/shared/constants/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold">SmartCart</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Coș inteligent pentru retail modern — prezentat pentru proprietari de magazine.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <p className="font-medium text-foreground">Contact</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href={`tel:${CONTACT_PHONE_TEL}`}>
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-foreground">Social</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>
                <a
                  className="hover:text-foreground"
                  href={SOCIAL_URL_INSTAGRAM}
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground"
                  href={SOCIAL_URL_TIKTOK}
                  rel="noreferrer"
                  target="_blank"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground"
                  href={SOCIAL_URL_FACEBOOK}
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook — {SOCIAL_NAME_FB}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SmartCart. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
