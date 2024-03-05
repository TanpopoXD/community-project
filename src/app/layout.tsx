"use client"

import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import { SupabaseProvider } from "@/providers/supabaseProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <SupabaseProvider>
            {children}
          </SupabaseProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
