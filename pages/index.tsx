import HomeLayOut from "@/layout/home";
import { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import type { ReactElement } from "react";

import axios from "axios";

import {
    Typography,
    Grid,
    Button,
} from "@mui/material";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';

import Proj from "@/components/project";

type MyProject = [string, string, ReactElement][];

const Index: NextPage = () => {

    const [sentense, setSentense] = useState('...'); //一言
    const [t] = useTranslation('home');

    const HandleJump = (url: string) => window.open(url);

    useEffect(() => {
        axios.get('https://v1.hitokoto.cn')
            .then((response) => setSentense(response['data']['hitokoto']))
            .catch((e) => setSentense(t('request_err', { ns: 'common' })));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const my_project: MyProject = [
        ['timeletters', 'https://www.timeletters.cn', <EmailOutlinedIcon key={0} />],
        ['xopenid', 'https://9420.ltd', <CableOutlinedIcon key={1} />],
        ['urlshorter', 'https://github.com/soxft/urlshorter', <LinkOutlinedIcon key={2} />],
        ['serverStatus', 'https://github.com/soxft/serverStatus', <FilterDramaOutlinedIcon key={3} />],
    ]

    return <>
        <HomeLayOut>
            <Grid
                container
                rowSpacing={10}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    paddingTop: '30px',
                }}
            >
                <Grid
                    container
                    item
                    xs={24}
                    justifyContent="center"
                    alignItems="center"
                    rowSpacing={3}
                >
                    <Grid
                        item
                    >
                        <Typography
                            fontSize={80}
                            fontWeight={250}
                            color="text.primary"
                        >
                            XCSOFT
                        </Typography>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {sentense}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent="center"
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        rowSpacing={1}
                    >
                        <Grid
                            item
                        >
                            <Button
                                variant="outlined"
                                onClick={() => HandleJump('https://blog.xsot.cn')}
                            >
                                {t('blog', { ns: 'drawer' })}
                            </Button>
                        </Grid>
                        <Grid
                            item
                        >
                            <Button
                                variant="outlined"
                                onClick={() => HandleJump('https://github.com/soxft')}
                            >
                                {t('github', { ns: 'drawer' })}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* 我的项目 */}
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    rowSpacing={4}
                >
                    <Grid
                        item
                    >
                        <Typography
                            fontSize={30}
                            fontWeight={350}
                            color="text.primary"
                        >
                            {t('my_proj')}
                        </Typography>
                    </Grid>
                    {/* project list */}
                    <Grid
                        item
                        container
                        justifyContent="flex-start"
                        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                        rowSpacing={3}
                    >
                        {
                            my_project.map((item, index) => {
                                let content = t(item[0]).split(':');
                                return (
                                    <Grid
                                        key={index}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                    >
                                        <Proj
                                            icon={item[2]}
                                            title={content[0]}
                                            desc={content[1]}
                                            url={item[1]}
                                        />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </HomeLayOut>
    </>;
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['drawer', 'home', 'desc'])),
    },
});

export default Index;