import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/navigation/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
})

export const metadata: Metadata = {
  title: "Supplier Management Platform",
  description: "Built for proactive supplier management.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
