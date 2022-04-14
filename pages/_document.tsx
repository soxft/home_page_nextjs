import Document, { Html, Head, Main, NextScript } from "next/document";
import { Script } from "vm";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="https://cdn.iirose.cn/xcsoft.jpg" />
                    <meta name="author" content="xcsoft" />
                    <meta name="description" content="xcsoft的个人主页, 原諒我這一生 不羁放纵爱自由" />
                    <meta name="keywords" content="xcsoft,星辰日记,soxft,xusoft" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `!function (p) { "use strict"; !function (t) { var s = window, e = document, i = p, c = "".concat("https:" === e.location.protocol ? "https://" : "http://", "sdk.51.la/js-sdk-pro.min.js"), n = e.createElement("script"), r = e.getElementsByTagName("script")[0]; n.type = "text/javascript", n.setAttribute("charset", "UTF-8"), n.async = !0, n.src = c, n.id = "LA_COLLECT", i.d = n; var o = function () { s.LA.ids.push(i) }; s.LA ? s.LA.ids && o() : (s.LA = p, s.LA.ids = [], o()), r.parentNode.insertBefore(n, r) }() }({ id: "JazPaW0B0HjNHlWZ", ck: "JazPaW0B0HjNHlWZ" });`
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        );
    }
}