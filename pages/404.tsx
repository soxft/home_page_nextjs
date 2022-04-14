import Head from "next/head";
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {
    Container,
    Typography,
} from '@mui/material';

const NotFound = () => {
    const { t } = useTranslation('desc');

    return <>
        <Head>
            <title>404 NotFound - {t('title')}</title>
            <meta name="description" content={t('description')} />
        </Head>
        <br />
        <Container maxWidth="md">
            <Typography variant="h1" component="div">
                {': ('}
            </Typography>
            <br />
            <Typography variant="h4">
                {t('desc', { ns: 'not_found' })}
            </Typography>
        </Container>
    </>
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['not_found', 'desc'])),
    },
});

export default NotFound;