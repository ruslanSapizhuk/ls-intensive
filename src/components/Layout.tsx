import '../app/globals.css'
import { Mulish } from 'next/font/google'
import React from "react";

const mulish = Mulish({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'B&M University',
  description: '',
}

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return <div className={mulish.className} id="layout">{children}</div>
}
