import { createHashRouter } from "react-router-dom";

import { RootLayout } from "@/app/RootLayout";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { PricingPage } from "@/pages/PricingPage";

/** HashRouter + basename (aliniat la `base` din Vite) pentru GitHub Pages / subfolder. */
export const router = createHashRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "pret", element: <PricingPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ],
  {
    basename:
      import.meta.env.BASE_URL.replace(/\/$/, "") === ""
        ? undefined
        : import.meta.env.BASE_URL.replace(/\/$/, ""),
  },
);
