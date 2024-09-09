import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="https://img.iirose.cn/xcsoft.jpg" />
                    <meta name="author" content="xcsoft" />
                    <meta name="description" content="xcsoft的个人主页, 我们都输给了那伟大的黑色" />
                    <meta name="keywords" content="xcsoft,星辰日记,soxft,xusoft" />
                    <link rel="stylesheet" href="https://font.onmicrosoft.cn/lxgw-wenkai-screen-webfont@1.6.0/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        );
    }
}