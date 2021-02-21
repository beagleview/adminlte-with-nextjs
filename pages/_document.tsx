import Document, {Html, Head, Main, NextScript} from "next/document";

export default class DocumentTemplate extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css"/>
                    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
                    <link rel="stylesheet" href="dist/css/adminlte.min.css"/>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"/>
                </Head>
                <body className="hold-transition sidebar-mini">
                <Main/>
                <NextScript/>

                <script src="plugins/jquery/jquery.min.js"></script>
                <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="dist/js/adminlte.js"></script>
                <script src="plugins/chart.js/Chart.min.js"></script>
                <script src="dist/js/demo.js"></script>
                <script src="dist/js/pages/dashboard3.js"></script>
                </body>
            </Html>
        );
    }
}