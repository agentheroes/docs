import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Agent Heroes",
  description: "Get started with Agent Heroes docs",
};

const navbar = (
  <Navbar
    logo={<img src="/logo.svg" width="155" />}
    projectLink="https://github.com/agentheroes/agentheroes"
    chatLink="https://discord.gg/Sk9se5Dcef"
  />
);
const footer = <Footer>{new Date().getFullYear()} © Agent Heroes.</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          dark: "#151515",
        }}
        color={{
          hue: 27.01,
          saturation: 98.43,
          lightness: 50,
        }}
        // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          darkMode={true}
          nextThemes={{
            defaultTheme: "dark",
            forcedTheme: "dark",
          }}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
