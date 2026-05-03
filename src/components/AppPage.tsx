import React, { ReactNode } from "react";
import Header from "./Header";
import FooterV2 from "./FooterV2";
import PreFooterCTA from "./PreFooterCTA";

interface AppPageProps {
    children: ReactNode
    /** Hide the pre-footer CTA (e.g. when the child component has its own) */
    hidePreFooter?: boolean
    /** Hide the footer (e.g. when the child component renders its own) */
    hideFooter?: boolean
}

export default function AppPage({
    children,
    hidePreFooter = false,
    hideFooter = false,
}: AppPageProps) {
    return (
        <>
        <Header/>
        {children}
        {!hidePreFooter && <PreFooterCTA source="page_pre_footer" />}
        {!hideFooter && <FooterV2 />}
        </>
    )

}