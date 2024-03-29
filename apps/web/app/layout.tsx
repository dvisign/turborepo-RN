import { ReduxProvider, ReduxPersistGate } from "@/redux/reduxProvider";
import Client from "./client";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ReduxPersistGate>
            <Client>{children}</Client>
          </ReduxPersistGate>
        </ReduxProvider>
      </body>
    </html>
  );
}
