import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface AppPageProps {
    children: ReactNode
}

export default function AppPage({
    children
}: AppPageProps) {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
    
}