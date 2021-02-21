import Document, {Html, Head, Main, NextScript} from "next/document";

export default class DocumentTemplate extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css"/>
                    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
                    <link rel="stylesheet" href="/dist/css/adminlte.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"/>
                </Head>
                <body className="hold-transition sidebar-mini">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}