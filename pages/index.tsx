import HomeLayOut from "@/layout/home";
import { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index: NextPage = () => {

    return (
        <HomeLayOut>
            <>
            </>
        </HomeLayOut>
    )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['drawer'])),
    },
});

export default Index;