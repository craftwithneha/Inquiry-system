// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/AppSidebar";
// import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Inquiry System",
//   description: "For Inquiry Management System",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable}  antialiased flex`}
//       >
//            <SidebarProvider defaultOpen>
//             <AppSidebar />
//             <main className="w-full">
//               <Navbar />
//               <div className="px-4">{children}</div>
//             </main>
//           </SidebarProvider>
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Inquiry System",
  description: "For Inquiry Management System",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider defaultOpen>
          <div className="flex min-h-screen w-full">
            {/* Sidebar (fixed on the left) */}
            <AppSidebar />

            {/* Main content area */}
            <div className="flex flex-1 flex-col">
              {/* Top Navbar */}
              <Navbar />

              {/* Page Content */}
              <main className="flex-1 px-4 py-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
