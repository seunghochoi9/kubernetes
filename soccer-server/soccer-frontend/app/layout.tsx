'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/common/module/header";
import { useEffect, useState } from "react";
import { getAuth } from "./component/user/service/user-slice";
import { useSelector } from "react-redux";
import { parseCookies } from "nookies";
import DashHeader from "./component/common/module/dash-header";

const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showHeader, setShowHeader] = useState<Boolean>(false);  
  return (
    <html lang="en">
      <body className={inter.className}>
        {parseCookies().message === 'SUCCESS'&&<Header/>}
        {parseCookies().message === 'ADMIN'&&<DashHeader/>}
        <div className="mt-100">
          <ReduxProvider > {children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}