import { Inter } from "next/font/google"
import './globals.css'

//components
import Header from "@/components/Header"
import Footer from "@/components/Footer"
//theme provider
import { ThemeProvider } from "@/components/ThemeProvider"

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: any) {
    return (
        <html lang='pt-br' suppressHydrationWarning>
            <body className='inter.className'>
            <ThemeProvider attribute='class' defaultTheme='light'>
                <Header />      
                {children}
                <Footer />  
            </ThemeProvider>
            </body>
        </html>
    )
}