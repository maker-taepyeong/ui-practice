import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "UI Catalog",
  description: "practice, practice, practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        {children}
        <div id="portal-root" />
      </body>
    </html>
  );
}
